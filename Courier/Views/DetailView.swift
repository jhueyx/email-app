import SwiftUI

struct DetailView: View {
    let email: Email
    let status: EmailStatus
    let onUpdate: (EmailStatus) -> Void
    let onReply: () -> Void

    @Environment(\.dismiss) private var dismiss
    @State private var localStatus: EmailStatus

    init(email: Email, status: EmailStatus, onUpdate: @escaping (EmailStatus) -> Void, onReply: @escaping () -> Void) {
        self.email = email
        self.status = status
        self.onUpdate = onUpdate
        self.onReply = onReply
        _localStatus = State(initialValue: status)
    }

    var body: some View {
        ScrollView {
            VStack(alignment: .leading, spacing: 20) {
                VStack(alignment: .leading, spacing: 10) {
                    Text(email.subject)
                        .font(.system(size: 28, weight: .bold))
                        .tracking(-0.4)

                    HStack(spacing: 8) {
                        if let label = email.label {
                            Text(label.name.uppercased())
                                .font(.caption2.weight(.bold))
                                .foregroundStyle(label.color)
                                .padding(.horizontal, 8)
                                .padding(.vertical, 4)
                                .background(label.color.opacity(0.16), in: RoundedRectangle(cornerRadius: 5))
                        }
                        Text("\(email.thread.count) message\(email.thread.count == 1 ? "" : "s")")
                            .font(.caption)
                            .foregroundStyle(.secondary)
                        if let readBy = email.readBy {
                            Label("Read \(readBy)", systemImage: "checkmark.circle")
                                .font(.caption2.weight(.medium))
                                .foregroundStyle(.green)
                        }
                    }
                }

                Divider()

                if email.thread.isEmpty {
                    ContentUnavailableView("Empty thread", systemImage: "envelope.open")
                        .padding(.vertical, 48)
                } else {
                    ForEach(email.thread) { message in
                        ThreadMessageView(message: message)
                    }

                    VStack(alignment: .leading, spacing: 10) {
                        Text("Suggested replies")
                            .font(.caption.weight(.bold))
                            .textCase(.uppercase)
                            .foregroundStyle(.secondary)
                        FlowLayout(spacing: 8) {
                            ForEach(["Sounds good", "Can we sync briefly?", "I'll get back tomorrow"], id: \.self) { title in
                                Button(title, action: onReply)
                                    .buttonStyle(.bordered)
                                    .clipShape(Capsule())
                            }
                        }
                    }
                    .padding(.top, 12)
                }
            }
            .padding(20)
            .padding(.bottom, 100)
        }
        .background(Color.black)
        .safeAreaInset(edge: .bottom) {
            replyBar
        }
        .navigationTitle("Inbox")
        .navigationBarTitleDisplayMode(.inline)
        .toolbar {
            ToolbarItemGroup(placement: .topBarTrailing) {
                Button {
                    localStatus.snoozed = true
                    onUpdate(localStatus)
                    dismiss()
                } label: {
                    Image(systemName: "clock")
                }

                Button {
                    localStatus.archived = true
                    onUpdate(localStatus)
                    dismiss()
                } label: {
                    Image(systemName: "archivebox")
                }

                Button {
                    localStatus.pinned.toggle()
                    onUpdate(localStatus)
                } label: {
                    Image(systemName: localStatus.pinned || email.pinned ? "star.fill" : "star")
                }
            }
        }
        .preferredColorScheme(.dark)
    }

    private var replyBar: some View {
        Button(action: onReply) {
            HStack {
                Text("Reply to \(email.sender.name.components(separatedBy: " ").first ?? email.sender.name)")
                    .foregroundStyle(.secondary)
                Spacer()
                Image(systemName: "arrowshape.turn.up.left")
                Image(systemName: "arrowshape.turn.up.right")
            }
            .padding(.horizontal, 18)
            .frame(height: 54)
            .background(Color(.secondarySystemBackground), in: Capsule())
            .padding(.horizontal, 16)
            .padding(.vertical, 10)
            .background(.black.opacity(0.95))
        }
        .buttonStyle(.plain)
    }
}

struct ThreadMessageView: View {
    let message: ThreadMessage
    @State private var expanded: Bool

    init(message: ThreadMessage) {
        self.message = message
        _expanded = State(initialValue: !message.collapsed)
    }

    var body: some View {
        if !expanded {
            Button {
                expanded = true
            } label: {
                HStack(spacing: 10) {
                    AvatarView(initials: message.initials, color: .secondary, size: 24)
                    Text(message.senderName)
                        .fontWeight(.medium)
                    Text(message.body.components(separatedBy: .newlines).first ?? "")
                        .lineLimit(1)
                        .foregroundStyle(.secondary)
                    Spacer()
                    Text(message.time.components(separatedBy: ",").first ?? message.time)
                        .font(.caption)
                        .foregroundStyle(.secondary)
                }
                .padding(12)
                .background(Color(.secondarySystemBackground), in: RoundedRectangle(cornerRadius: 12))
            }
            .buttonStyle(.plain)
        } else {
            VStack(alignment: .leading, spacing: 14) {
                HStack(alignment: .top, spacing: 12) {
                    AvatarView(initials: message.initials, color: message.isMe ? .blue : .cyan, size: 38)
                    VStack(alignment: .leading, spacing: 2) {
                        HStack {
                            Text(message.senderName)
                                .fontWeight(.semibold)
                            Spacer()
                            Text(message.time)
                                .font(.caption)
                                .foregroundStyle(.secondary)
                        }
                        Text("to me · \(message.senderEmail)")
                            .font(.caption)
                            .foregroundStyle(.secondary)
                    }
                }

                Text(message.body)
                    .font(.body)
                    .lineSpacing(5)
            }
            .padding(.bottom, 20)
        }
    }
}

struct AvatarView: View {
    let initials: String
    let color: Color
    let size: CGFloat

    var body: some View {
        Text(initials)
            .font(.system(size: size * 0.38, weight: .semibold))
            .foregroundStyle(.white)
            .frame(width: size, height: size)
            .background(color.gradient)
            .clipShape(Circle())
    }
}

struct FlowLayout: Layout {
    var spacing: CGFloat

    func sizeThatFits(proposal: ProposedViewSize, subviews: Subviews, cache: inout ()) -> CGSize {
        let width = proposal.width ?? 0
        var x: CGFloat = 0
        var y: CGFloat = 0
        var rowHeight: CGFloat = 0

        for subview in subviews {
            let size = subview.sizeThatFits(.unspecified)
            if x + size.width > width && x > 0 {
                x = 0
                y += rowHeight + spacing
                rowHeight = 0
            }
            x += size.width + spacing
            rowHeight = max(rowHeight, size.height)
        }

        return CGSize(width: width, height: y + rowHeight)
    }

    func placeSubviews(in bounds: CGRect, proposal: ProposedViewSize, subviews: Subviews, cache: inout ()) {
        var x = bounds.minX
        var y = bounds.minY
        var rowHeight: CGFloat = 0

        for subview in subviews {
            let size = subview.sizeThatFits(.unspecified)
            if x + size.width > bounds.maxX && x > bounds.minX {
                x = bounds.minX
                y += rowHeight + spacing
                rowHeight = 0
            }
            subview.place(at: CGPoint(x: x, y: y), proposal: ProposedViewSize(size))
            x += size.width + spacing
            rowHeight = max(rowHeight, size.height)
        }
    }
}
