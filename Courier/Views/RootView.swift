import SwiftUI

struct RootView: View {
    @State private var folder: Folder = .inbox
    @State private var selectedCategory: MailCategory = .important
    @State private var selectedEmail: Email?
    @State private var showingCompose = false
    @State private var showingSearch = false
    @State private var showingFolders = false
    @State private var statuses: [String: EmailStatus] = [:]

    private var unreadCount: Int {
        visibleEmails.filter { email in
            email.unread && !(statuses[email.id]?.done ?? false)
        }.count
    }

    private var visibleEmails: [Email] {
        MailSeed.emails.filter { email in
            let status = statuses[email.id] ?? EmailStatus()
            guard !status.archived && !status.deleted else { return false }

            switch folder {
            case .inbox:
                return email.category == selectedCategory
            case .vip:
                return email.sender.isPerson
            case .flagged:
                return email.flagged || status.flagged
            case .snoozed:
                return status.snoozed
            case .archive:
                return status.archived
            case .trash:
                return status.deleted
            case .sent, .drafts:
                return false
            }
        }
    }

    var body: some View {
        ZStack {
            Color.black.ignoresSafeArea()

            NavigationStack {
                ZStack(alignment: .bottomTrailing) {
                    InboxView(
                        folder: folder,
                        selectedCategory: $selectedCategory,
                        emails: visibleEmails,
                        unreadCount: unreadCount,
                        statuses: statuses,
                        onOpen: { selectedEmail = $0 },
                        onArchive: { update($0.id) { $0.archived = true } },
                        onDone: { update($0.id) { $0.done = true } },
                        onShowFolders: { showingFolders = true },
                        onShowSearch: { showingSearch = true }
                    )

                    Button {
                        showingCompose = true
                    } label: {
                        Image(systemName: "square.and.pencil")
                            .font(.system(size: 22, weight: .semibold))
                            .foregroundStyle(.black)
                            .frame(width: 58, height: 58)
                            .background(.white)
                            .clipShape(Circle())
                            .shadow(color: .black.opacity(0.25), radius: 18, y: 8)
                    }
                    .padding(.trailing, 20)
                    .padding(.bottom, 20)
                }
                .background(Color.black.ignoresSafeArea())
                .toolbar(.hidden, for: .navigationBar)
                .sheet(isPresented: $showingCompose) {
                    ComposeView()
                }
                .sheet(isPresented: $showingSearch) {
                    SearchView(emails: MailSeed.emails, onOpen: { email in
                        showingSearch = false
                        selectedEmail = email
                    })
                }
                .sheet(isPresented: $showingFolders) {
                    MailboxesView(
                        selectedFolder: $folder,
                        selectedCategory: $selectedCategory,
                        onDismiss: { showingFolders = false }
                    )
                    .presentationDetents([.large])
                }
                .navigationDestination(item: $selectedEmail) { email in
                    DetailView(
                        email: email,
                        status: statuses[email.id] ?? EmailStatus(),
                        onUpdate: { newStatus in statuses[email.id] = newStatus },
                        onReply: { showingCompose = true }
                    )
                }
            }
            .frame(maxWidth: 430)
            .frame(maxWidth: .infinity)
        }
        .preferredColorScheme(.dark)
    }

    private func update(_ id: String, mutate: (inout EmailStatus) -> Void) {
        var status = statuses[id] ?? EmailStatus()
        mutate(&status)
        statuses[id] = status
    }
}

struct InboxView: View {
    let folder: Folder
    @Binding var selectedCategory: MailCategory
    let emails: [Email]
    let unreadCount: Int
    let statuses: [String: EmailStatus]
    let onOpen: (Email) -> Void
    let onArchive: (Email) -> Void
    let onDone: (Email) -> Void
    let onShowFolders: () -> Void
    let onShowSearch: () -> Void

    var body: some View {
        VStack(spacing: 0) {
            header

            if folder == .inbox {
                Picker("Category", selection: $selectedCategory) {
                    ForEach(MailCategory.allCases) { category in
                        Text(category.title).tag(category)
                    }
                }
                .pickerStyle(.segmented)
                .padding(.horizontal, 20)
                .padding(.bottom, 10)
            }

            ScrollView {
                LazyVStack(spacing: 0) {
                    ForEach(emails) { email in
                        EmailRow(
                            email: email,
                            status: statuses[email.id] ?? EmailStatus(),
                            onOpen: { onOpen(email) }
                        )
                        .swipeActions(edge: .trailing, allowsFullSwipe: true) {
                            Button(role: .destructive) {
                                onArchive(email)
                            } label: {
                                Label("Archive", systemImage: "archivebox")
                            }
                        }
                        .swipeActions(edge: .leading, allowsFullSwipe: true) {
                            Button {
                                onDone(email)
                            } label: {
                                Label("Done", systemImage: "checkmark")
                            }
                            .tint(.green)
                        }
                    }

                    if emails.isEmpty {
                        ContentUnavailableView("Nothing here", systemImage: "tray", description: Text("This mailbox is clear."))
                            .foregroundStyle(.secondary)
                            .padding(.top, 80)
                    }
                }
            }
            .refreshable {}

            HStack(spacing: 6) {
                Image(systemName: "arrow.triangle.2.circlepath")
                Text("Updated just now")
            }
            .font(.caption2.weight(.medium))
            .foregroundStyle(.secondary)
            .padding(.bottom, 8)
        }
        .background(Color.black)
    }

    private var header: some View {
        VStack(alignment: .leading, spacing: 12) {
            HStack {
                Button(action: onShowFolders) {
                    Label("Mailboxes", systemImage: "chevron.left")
                        .labelStyle(.titleAndIcon)
                }
                .foregroundStyle(.blue)

                Spacer()

                Button(action: onShowSearch) {
                    Image(systemName: "magnifyingglass")
                }

                Button(action: onShowFolders) {
                    Image(systemName: "line.3.horizontal")
                }
            }
            .font(.system(size: 17))

            VStack(alignment: .leading, spacing: 2) {
                Text(folder.title)
                    .font(.system(size: 36, weight: .bold))
                    .tracking(-0.6)
                Text(unreadCount == 0 ? "You're all caught up" : "\(unreadCount) unread")
                    .font(.subheadline.weight(.medium))
                    .foregroundStyle(.secondary)
            }
        }
        .padding(.top, 18)
        .padding(.horizontal, 20)
        .padding(.bottom, 14)
    }
}

struct EmailRow: View {
    let email: Email
    let status: EmailStatus
    let onOpen: () -> Void

    private var isUnread: Bool {
        email.unread && !status.done
    }

    var body: some View {
        Button(action: onOpen) {
            HStack(spacing: 12) {
                Circle()
                    .fill(isUnread ? Color.blue : .clear)
                    .frame(width: 7, height: 7)

                VStack(alignment: .leading, spacing: 2) {
                    HStack(spacing: 6) {
                        Text(email.sender.name)
                            .fontWeight(isUnread ? .semibold : .medium)
                            .foregroundStyle(isUnread ? .primary : .secondary)
                            .lineLimit(1)
                        Text("·")
                            .foregroundStyle(.secondary)
                        Text(email.subject)
                            .fontWeight(isUnread ? .medium : .regular)
                            .foregroundStyle(isUnread ? .primary : .secondary)
                            .lineLimit(1)
                    }
                    Text(email.preview)
                        .font(.subheadline)
                        .foregroundStyle(.tertiary)
                        .lineLimit(1)
                }

                Spacer(minLength: 10)

                VStack(alignment: .trailing, spacing: 6) {
                    Text(email.time)
                        .font(.caption.weight(.medium))
                        .foregroundStyle(isUnread ? .blue : .secondary)
                    HStack(spacing: 5) {
                        if email.pinned || status.pinned {
                            Image(systemName: "pin.fill")
                        }
                        if status.snoozed {
                            Image(systemName: "clock")
                        }
                        if let label = email.label {
                            Circle()
                                .fill(label.color)
                                .frame(width: 6, height: 6)
                        }
                    }
                    .font(.caption2)
                    .foregroundStyle(.secondary)
                    .frame(height: 10)
                }
            }
            .padding(.horizontal, 16)
            .frame(minHeight: 62)
            .contentShape(Rectangle())
        }
        .buttonStyle(.plain)
        .opacity(status.done || status.snoozed ? 0.45 : 1)
        .overlay(alignment: .bottom) {
            Divider().background(Color.white.opacity(0.16)).padding(.leading, 36)
        }
    }
}

struct MailboxesView: View {
    @Binding var selectedFolder: Folder
    @Binding var selectedCategory: MailCategory
    let onDismiss: () -> Void

    var body: some View {
        NavigationStack {
            List {
                Section {
                    folderRow(.inbox, count: MailSeed.accounts.reduce(0) { $0 + $1.unread })
                    ForEach(MailSeed.accounts) { account in
                        Button {
                            selectedFolder = .inbox
                            selectedCategory = .important
                            onDismiss()
                        } label: {
                            HStack {
                                Image(systemName: "tray")
                                Text(account.name)
                                Spacer()
                                if account.unread > 0 {
                                    Text("\(account.unread)").foregroundStyle(.secondary)
                                }
                            }
                            .padding(.leading, 24)
                        }
                    }
                    folderRow(.vip, count: 2)
                    folderRow(.flagged, count: 2)
                }

                Section("Accounts") {
                    ForEach(MailSeed.accounts) { account in
                        DisclosureGroup {
                            folderRow(.inbox, count: account.unread)
                            folderRow(.drafts, count: account.name == "You" ? 2 : 0)
                            folderRow(.sent, count: 0)
                            folderRow(.snoozed, count: 0)
                            folderRow(.archive, count: 0)
                            folderRow(.trash, count: 0)
                        } label: {
                            HStack {
                                Text(account.name)
                                Spacer()
                                if account.unread > 0 {
                                    Text("\(account.unread)").foregroundStyle(.secondary)
                                }
                            }
                        }
                    }
                }
            }
            .navigationTitle("Mailboxes")
            .toolbar {
                ToolbarItem(placement: .topBarTrailing) {
                    Button("Done", action: onDismiss)
                }
            }
        }
        .preferredColorScheme(.dark)
    }

    private func folderRow(_ folder: Folder, count: Int) -> some View {
        Button {
            selectedFolder = folder
            if folder == .inbox {
                selectedCategory = .important
            }
            onDismiss()
        } label: {
            HStack {
                Image(systemName: folder.systemImage)
                    .foregroundStyle(.blue)
                Text(folder.title)
                Spacer()
                if count > 0 {
                    Text("\(count)").foregroundStyle(.secondary)
                }
            }
        }
    }
}
