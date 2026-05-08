import Foundation
import SwiftUI

enum MailCategory: String, CaseIterable, Identifiable {
    case important
    case other

    var id: String { rawValue }
    var title: String { rawValue.capitalized }
}

struct Sender: Identifiable, Hashable {
    let id = UUID()
    let name: String
    let email: String
    let initials: String
    let color: Color
    let isPerson: Bool
}

struct ThreadMessage: Identifiable, Hashable {
    let id = UUID()
    let senderName: String
    let senderEmail: String
    let initials: String
    let time: String
    let body: String
    let isMe: Bool
    let collapsed: Bool
}

struct MailLabel: Hashable {
    let name: String
    let color: Color
}

struct Email: Identifiable, Hashable {
    let id: String
    let category: MailCategory
    let sender: Sender
    let subject: String
    let preview: String
    let time: String
    let date: String
    let label: MailLabel?
    let unread: Bool
    let pinned: Bool
    let flagged: Bool
    let readBy: String?
    let thread: [ThreadMessage]
}

struct Account: Identifiable, Hashable {
    let id: String
    let name: String
    let email: String
    let unread: Int
}

enum Folder: String, CaseIterable, Identifiable {
    case inbox
    case vip
    case flagged
    case snoozed
    case sent
    case drafts
    case archive
    case trash

    var id: String { rawValue }

    var title: String {
        switch self {
        case .inbox: "Inbox"
        case .vip: "VIP"
        case .flagged: "Flagged"
        case .snoozed: "Snoozed"
        case .sent: "Sent"
        case .drafts: "Drafts"
        case .archive: "Archive"
        case .trash: "Trash"
        }
    }

    var systemImage: String {
        switch self {
        case .inbox: "tray"
        case .vip: "star.fill"
        case .flagged: "flag"
        case .snoozed: "clock"
        case .sent: "paperplane"
        case .drafts: "square.and.pencil"
        case .archive: "archivebox"
        case .trash: "trash"
        }
    }
}

struct EmailStatus: Equatable {
    var archived = false
    var deleted = false
    var done = false
    var snoozed = false
    var pinned = false
    var flagged = false
}

enum MailSeed {
    static let accounts = [
        Account(id: "a1", name: "You", email: "you@gmail.com", unread: 7),
        Account(id: "a2", name: "Work", email: "you@figma.com", unread: 23),
        Account(id: "a3", name: "Side projects", email: "projects@me.com", unread: 0)
    ]

    static let labels = [
        "work": MailLabel(name: "Work", color: .cyan),
        "updates": MailLabel(name: "Updates", color: .indigo),
        "receipts": MailLabel(name: "Receipts", color: .green),
        "newsletters": MailLabel(name: "News", color: .purple)
    ]

    static let emails: [Email] = [
        Email(
            id: "e1",
            category: .important,
            sender: Sender(name: "Maya Patel", email: "maya.patel@figma.com", initials: "MP", color: .cyan, isPerson: true),
            subject: "Re: prototype review thursday",
            preview: "Loved the new motion on the inbox rows. One nit on the swipe feels a touch fast on iPhone Mini.",
            time: "8:04 AM",
            date: "Today",
            label: labels["work"],
            unread: true,
            pinned: true,
            flagged: true,
            readBy: "12 min ago",
            thread: [
                ThreadMessage(senderName: "You", senderEmail: "me@gmail.com", initials: "YO", time: "Yesterday, 9:14 PM", body: "Pushed v3 with the new triage swipes. Would love your eyes before tomorrow.", isMe: true, collapsed: true),
                ThreadMessage(senderName: "Maya Patel", senderEmail: "maya.patel@figma.com", initials: "MP", time: "Today, 8:04 AM", body: "Loved the new motion on the inbox rows. One nit on the swipe feels a touch fast on iPhone Mini. Otherwise ship it.\n\nAlso: can we talk through the empty state for search? I think there's a chance to make it useful instead of empty.", isMe: false, collapsed: false)
            ]
        ),
        Email(
            id: "e2",
            category: .important,
            sender: Sender(name: "Linear", email: "no-reply@linear.app", initials: "LN", color: .indigo, isPerson: false),
            subject: "You have 3 issues due this week",
            preview: "IOS-241, IOS-243, and IOS-251 are due Friday. Click through to assign or reschedule.",
            time: "7:31 AM",
            date: "Today",
            label: labels["updates"],
            unread: true,
            pinned: false,
            flagged: false,
            readBy: nil,
            thread: [
                ThreadMessage(senderName: "Linear", senderEmail: "no-reply@linear.app", initials: "LN", time: "Today, 7:31 AM", body: "You have 3 issues due this week.\n\nIOS-241  Compose attachment overflow\nIOS-243  Triage swipe haptics\nIOS-251  Search empty state\n\nClick through to assign or reschedule.", isMe: false, collapsed: false)
            ]
        ),
        Email(id: "e3", category: .important, sender: Sender(name: "Dad", email: "r.singh@me.com", initials: "DS", color: .green, isPerson: true), subject: "photos from the cabin", preview: "Mom finally got the camera off auto. The one of the dock at sunset is worth printing.", time: "Yesterday", date: "Yesterday", label: nil, unread: false, pinned: false, flagged: true, readBy: nil, thread: [
            ThreadMessage(senderName: "Dad", senderEmail: "r.singh@me.com", initials: "DS", time: "Yesterday, 6:02 PM", body: "Mom finally got the camera off auto. The one of the dock at sunset is worth printing.\n\nWhich do you want for the wall?", isMe: false, collapsed: false)
        ]),
        Email(id: "e4", category: .important, sender: Sender(name: "Sara Ben-Ami", email: "sara@hover.studio", initials: "SB", color: .purple, isPerson: true), subject: "lunch wednesday?", preview: "There's that new ramen spot on Valencia. 12:30 work for you?", time: "Yesterday", date: "Yesterday", label: nil, unread: false, pinned: false, flagged: false, readBy: nil, thread: [
            ThreadMessage(senderName: "Sara Ben-Ami", senderEmail: "sara@hover.studio", initials: "SB", time: "Yesterday, 3:47 PM", body: "There's that new ramen spot on Valencia. 12:30 work for you? I can't do later, have a 2pm.", isMe: false, collapsed: false)
        ]),
        Email(id: "e5", category: .important, sender: Sender(name: "Apple", email: "no_reply@apple.com", initials: "AP", color: .gray, isPerson: false), subject: "Your receipt from Apple", preview: "Order #W123456789. AirPods Pro delivery estimate Thu, May 9.", time: "Tuesday", date: "Tuesday", label: labels["receipts"], unread: false, pinned: false, flagged: false, readBy: nil, thread: [
            ThreadMessage(senderName: "Apple", senderEmail: "no_reply@apple.com", initials: "AP", time: "Tue, May 5, 11:08 AM", body: "Thanks for your order.\n\nOrder #W123456789\nAirPods Pro (2nd gen)  $249.00\n\nDelivery estimate Thu, May 9.", isMe: false, collapsed: false)
        ]),
        Email(id: "e6", category: .important, sender: Sender(name: "Stripe", email: "invoices@stripe.com", initials: "ST", color: .blue, isPerson: false), subject: "Your April statement is ready", preview: "$4,217.40 in payouts to account ending 3421.", time: "May 1", date: "May 1", label: labels["receipts"], unread: false, pinned: false, flagged: false, readBy: nil, thread: []),
        Email(id: "e7", category: .other, sender: Sender(name: "Substack", email: "no-reply@substack.com", initials: "SU", color: .orange, isPerson: false), subject: "New from Robin Sloan", preview: "A note on the texture of small software.", time: "6:12 AM", date: "Today", label: labels["newsletters"], unread: true, pinned: false, flagged: false, readBy: nil, thread: []),
        Email(id: "e8", category: .other, sender: Sender(name: "GitHub", email: "noreply@github.com", initials: "GH", color: .gray, isPerson: false), subject: "[mailapp] PR #41 was merged", preview: "maya merged feat: triage swipe haptics into main.", time: "Yesterday", date: "Yesterday", label: labels["updates"], unread: false, pinned: false, flagged: false, readBy: nil, thread: []),
        Email(id: "e9", category: .other, sender: Sender(name: "Verge", email: "newsletter@theverge.com", initials: "VG", color: .red, isPerson: false), subject: "The Vergecast: 100 days of vision", preview: "Apple's spatial roadmap, search boxes, and bookmarks.", time: "Tuesday", date: "Tuesday", label: labels["newsletters"], unread: false, pinned: false, flagged: false, readBy: nil, thread: []),
        Email(id: "e10", category: .other, sender: Sender(name: "Doordash", email: "orders@doordash.com", initials: "DD", color: .red, isPerson: false), subject: "Your order from Tartine delivered", preview: "Receipt for $34.20. Tip your dasher?", time: "Monday", date: "Monday", label: labels["receipts"], unread: false, pinned: false, flagged: false, readBy: nil, thread: []),
        Email(id: "e11", category: .other, sender: Sender(name: "Calendly", email: "no-reply@calendly.com", initials: "CV", color: .blue, isPerson: false), subject: "New event: 30 min with Jordan Reyes", preview: "Thursday, May 8 at 11:00 AM PT.", time: "Sunday", date: "Sunday", label: labels["work"], unread: false, pinned: false, flagged: false, readBy: nil, thread: []),
        Email(id: "e12", category: .other, sender: Sender(name: "Notion", email: "team@makenotion.com", initials: "NO", color: .gray, isPerson: false), subject: "3 pages were updated in Side projects", preview: "Maya edited mailapp prototypes.", time: "Apr 30", date: "Apr 30", label: labels["updates"], unread: false, pinned: false, flagged: false, readBy: nil, thread: [])
    ]
}
