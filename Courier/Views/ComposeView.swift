import SwiftUI

struct ComposeView: View {
    @Environment(\.dismiss) private var dismiss
    @State private var to = ""
    @State private var subject = ""
    @State private var messageBody = ""
    @State private var showingSchedule = false

    private var canSend: Bool {
        !to.trimmingCharacters(in: .whitespacesAndNewlines).isEmpty &&
        (!subject.trimmingCharacters(in: .whitespacesAndNewlines).isEmpty ||
         !messageBody.trimmingCharacters(in: .whitespacesAndNewlines).isEmpty)
    }

    var body: some View {
        NavigationStack {
            Form {
                TextField("name@domain.com", text: $to)
                    .textContentType(.emailAddress)
                    .keyboardType(.emailAddress)
                    .autocorrectionDisabled()
                    .textInputAutocapitalization(.never)
                    .labeled("To:")

                TextField("", text: .constant(""))
                    .labeled("Cc/Bcc:")

                Text("you@gmail.com")
                    .foregroundStyle(.secondary)
                    .labeled("From:")

                TextField("", text: $subject)
                    .labeled("Subject:")

                Section {
                    ZStack(alignment: .topLeading) {
                        TextEditor(text: $messageBody)
                            .frame(minHeight: 260)
                        if messageBody.isEmpty {
                            VStack(alignment: .leading, spacing: 14) {
                                Text("Hey \(to.isEmpty ? "[name]" : to.components(separatedBy: "@").first ?? "[name]"),")
                                Text("Start typing...")
                                    .foregroundStyle(.tertiary)
                                    .italic()
                            }
                            .foregroundStyle(.secondary)
                            .padding(.top, 8)
                            .allowsHitTesting(false)
                        }
                    }
                    Text("Sent from my iPhone")
                        .foregroundStyle(.secondary)
                }
            }
            .navigationTitle("New Message")
            .navigationBarTitleDisplayMode(.inline)
            .toolbar {
                ToolbarItem(placement: .cancellationAction) {
                    Button("Cancel") { dismiss() }
                }
                ToolbarItem(placement: .confirmationAction) {
                    Button {
                        dismiss()
                    } label: {
                        Label("Send", systemImage: "paperplane.fill")
                    }
                    .disabled(!canSend)
                }
                ToolbarItemGroup(placement: .bottomBar) {
                    Image(systemName: "paperclip")
                    Spacer()
                    Image(systemName: "photo")
                    Spacer()
                    Image(systemName: "textformat")
                    Spacer()
                    Button {
                        showingSchedule = true
                    } label: {
                        Image(systemName: "clock.badge.checkmark")
                    }
                    Spacer()
                    Image(systemName: "trash")
                        .foregroundStyle(.red)
                }
            }
            .confirmationDialog("Send later", isPresented: $showingSchedule) {
                Button("Tonight, 9:00 PM") { dismiss() }
                Button("Tomorrow morning, 8:00 AM") { dismiss() }
                Button("Tomorrow afternoon, 1:00 PM") { dismiss() }
                Button("Monday morning, 8:00 AM") { dismiss() }
                Button("Cancel", role: .cancel) {}
            }
        }
        .preferredColorScheme(.dark)
    }
}

private extension View {
    func labeled(_ label: String) -> some View {
        LabeledContent(label) {
            self
        }
    }
}
