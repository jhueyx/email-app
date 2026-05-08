# Courier

Courier is a native SwiftUI email client prototype for iPhone. The installed iOS app display name is `Mail`.

## Features

- Mailboxes, inbox, search, detail, and compose screens
- Split inbox tabs for Important and Other mail
- Native SwiftUI swipe actions for archive and done
- Suggested replies, snooze, archive, and pin actions on message detail
- Compose flow with send-later options
- Seeded local data based on the original prototype

## Run

Open `Courier.xcodeproj` in Xcode and run the `Courier` scheme on an iPhone simulator.

## Build From Terminal

```bash
xcodebuild \
  -project Courier.xcodeproj \
  -scheme Courier \
  -destination 'generic/platform=iOS Simulator' \
  build
```
