import SwiftUI

struct SearchView: View {
    let emails: [Email]
    let onOpen: (Email) -> Void

    @Environment(\.dismiss) private var dismiss
    @State private var query = ""

    private var results: [Email] {
        let term = query.trimmingCharacters(in: .whitespacesAndNewlines).lowercased()
        guard !term.isEmpty else { return [] }
        return emails.filter {
            $0.sender.name.lowercased().contains(term) ||
            $0.subject.lowercased().contains(term) ||
            $0.preview.lowercased().contains(term)
        }
    }

    var body: some View {
        NavigationStack {
            List {
                if query.isEmpty {
                    Section("Recent") {
                        ForEach(["maya", "receipts from stripe", "has:attachment from:dad"], id: \.self) { recent in
                            Button {
                                query = recent
                            } label: {
                                Label(recent, systemImage: "clock")
                            }
                        }
                    }

                    Section("People") {
                        ScrollView(.horizontal, showsIndicators: false) {
                            HStack(spacing: 18) {
                                ForEach(emails.prefix(6), id: \.sender.id) { email in
                                    VStack(spacing: 6) {
                                        AvatarView(initials: email.sender.initials, color: email.sender.color, size: 50)
                                        Text(email.sender.name.components(separatedBy: " ").first ?? email.sender.name)
                                            .font(.caption)
                                    }
                                }
                            }
                            .padding(.vertical, 8)
                        }
                    }

                    Section("Filters") {
                        Label("Has attachment", systemImage: "paperclip")
                        Label("Starred", systemImage: "star")
                        Label("Unread", systemImage: "envelope.badge")
                        Label("By label", systemImage: "tag")
                    }
                } else {
                    Section("\(results.count) result\(results.count == 1 ? "" : "s")") {
                        ForEach(results) { email in
                            Button {
                                onOpen(email)
                            } label: {
                                HStack(spacing: 12) {
                                    AvatarView(initials: email.sender.initials, color: email.sender.color, size: 34)
                                    VStack(alignment: .leading) {
                                        Text(email.sender.name)
                                            .foregroundStyle(.primary)
                                            .lineLimit(1)
                                        Text(email.subject)
                                            .font(.caption)
                                            .foregroundStyle(.secondary)
                                            .lineLimit(1)
                                    }
                                    Spacer()
                                    Text(email.time)
                                        .font(.caption)
                                        .foregroundStyle(.secondary)
                                }
                            }
                        }
                    }
                }
            }
            .searchable(text: $query, placement: .navigationBarDrawer(displayMode: .always), prompt: "Search mail")
            .navigationTitle("Search")
            .toolbar {
                ToolbarItem(placement: .cancellationAction) {
                    Button("Cancel") { dismiss() }
                }
            }
        }
        .preferredColorScheme(.dark)
    }
}
