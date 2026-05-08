import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';


/* ===== Email App Files/icons.jsx ===== */
// Flat icons for the email app. Stroke-based, SF-symbol-ish.
// All take { size, color } and inherit currentColor.

const Icon = ({ size = 22, color = 'currentColor', stroke = 1.7, children }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
       stroke={color} strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round">
    {children}
  </svg>
);

const IconChevronLeft = (p) => <Icon {...p}><path d="M15 5l-7 7 7 7"/></Icon>;
const IconChevronRight = (p) => <Icon {...p}><path d="M9 5l7 7-7 7"/></Icon>;
const IconChevronDown = (p) => <Icon {...p}><path d="M5 9l7 7 7-7"/></Icon>;
const IconChevronUp = (p) => <Icon {...p}><path d="M5 15l7-7 7 7"/></Icon>;

const IconSearch = (p) => <Icon {...p}>
  <circle cx="11" cy="11" r="7"/><path d="M20 20l-3.5-3.5"/>
</Icon>;

const IconCommand = (p) => <Icon {...p}>
  <path d="M9 6a3 3 0 1 0 -3 3h12a3 3 0 1 0 -3 -3v12a3 3 0 1 0 3 -3H6a3 3 0 1 0 3 3z"/>
</Icon>;

const IconCompose = (p) => <Icon {...p}>
  <path d="M4 20h4l11-11-4-4L4 16v4z"/><path d="M14.5 5.5l4 4"/>
</Icon>;

const IconArchive = (p) => <Icon {...p}>
  <rect x="3" y="4" width="18" height="4" rx="1"/><path d="M5 8v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1 -1V8"/><path d="M10 12h4"/>
</Icon>;

const IconTrash = (p) => <Icon {...p}>
  <path d="M4 7h16"/><path d="M9 7V4h6v3"/><path d="M6 7l1 13a1 1 0 0 0 1 1h8a1 1 0 0 0 1 -1l1 -13"/>
</Icon>;

const IconClock = (p) => <Icon {...p}>
  <circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>
</Icon>;

const IconPin = (p) => <Icon {...p}>
  <path d="M12 17v5"/><path d="M9 3h6l-1 5 3 4H7l3-4-1-5z"/>
</Icon>;

const IconStar = (p) => <Icon {...p}>
  <path d="M12 3l2.7 5.7 6.3.9-4.5 4.5 1 6.4L12 17.7 6.5 20.5l1-6.4L3 9.6l6.3-.9z"/>
</Icon>;

const IconStarFilled = ({ size = 22, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
    <path d="M12 3l2.7 5.7 6.3.9-4.5 4.5 1 6.4L12 17.7 6.5 20.5l1-6.4L3 9.6l6.3-.9z"/>
  </svg>
);

const IconReply = (p) => <Icon {...p}>
  <path d="M9 7L4 12l5 5"/><path d="M4 12h9a7 7 0 0 1 7 7v1"/>
</Icon>;

const IconReplyAll = (p) => <Icon {...p}>
  <path d="M7 7l-5 5 5 5"/><path d="M11 7L6 12l5 5"/><path d="M6 12h9a6 6 0 0 1 6 6v1"/>
</Icon>;

const IconForward = (p) => <Icon {...p}>
  <path d="M15 7l5 5-5 5"/><path d="M20 12H11a7 7 0 0 0 -7 7v1"/>
</Icon>;

const IconMore = (p) => <Icon {...p}>
  <circle cx="6" cy="12" r="1.2" fill={p.color || 'currentColor'} stroke="none"/>
  <circle cx="12" cy="12" r="1.2" fill={p.color || 'currentColor'} stroke="none"/>
  <circle cx="18" cy="12" r="1.2" fill={p.color || 'currentColor'} stroke="none"/>
</Icon>;

const IconSend = (p) => <Icon {...p}>
  <path d="M3 12L21 4l-7 17-3-7-8-2z"/>
</Icon>;

const IconAttach = (p) => <Icon {...p}>
  <path d="M21 12l-8.5 8.5a5 5 0 0 1 -7 -7L14 5a3.5 3.5 0 0 1 5 5l-8.5 8.5a2 2 0 0 1 -3 -3L15 8"/>
</Icon>;

const IconImage = (p) => <Icon {...p}>
  <rect x="3" y="4" width="18" height="16" rx="2"/><circle cx="9" cy="10" r="1.5"/><path d="M3 17l5-5 4 4 3-3 6 6"/>
</Icon>;

const IconFormat = (p) => <Icon {...p}>
  <path d="M5 4h6a3 3 0 0 1 0 6h-6z"/><path d="M5 10h7a3 3 0 0 1 0 6h-7z"/><path d="M5 4v12"/>
</Icon>;

const IconSchedule = (p) => <Icon {...p}>
  <circle cx="12" cy="13" r="7"/><path d="M12 9v4l2.5 1.5"/><path d="M9 3h6"/>
</Icon>;

const IconRead = (p) => <Icon {...p}>
  <path d="M2 7l4 4 6-6"/><path d="M9 11l3 3 10-10"/>
</Icon>;

const IconUnread = (p) => <Icon {...p}>
  <rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/>
</Icon>;

const IconInbox = (p) => <Icon {...p}>
  <path d="M3 13l3-9h12l3 9"/><path d="M3 13v6a1 1 0 0 0 1 1h16a1 1 0 0 0 1 -1v-6"/><path d="M3 13h5l1 3h6l1 -3h5"/>
</Icon>;

const IconSnooze = (p) => <Icon {...p}>
  <circle cx="12" cy="13" r="8"/><path d="M9 10h6l-6 6h6"/><path d="M5 4l-2 2"/><path d="M19 4l2 2"/>
</Icon>;

const IconLabel = (p) => <Icon {...p}>
  <path d="M3 5h12l5 7-5 7H3z"/>
</Icon>;

const IconUser = (p) => <Icon {...p}>
  <circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/>
</Icon>;

const IconMenu = (p) => <Icon {...p}>
  <path d="M4 7h16"/><path d="M4 12h16"/><path d="M4 17h10"/>
</Icon>;

const IconClose = (p) => <Icon {...p}>
  <path d="M6 6l12 12"/><path d="M18 6l-12 12"/>
</Icon>;

const IconCheck = (p) => <Icon {...p}>
  <path d="M4 12l5 5L20 6"/>
</Icon>;

Object.assign(window, {
  IconChevronLeft, IconChevronRight, IconChevronDown, IconChevronUp,
  IconSearch, IconCommand, IconCompose, IconArchive, IconTrash, IconClock,
  IconPin, IconStar, IconStarFilled, IconReply, IconReplyAll, IconForward,
  IconMore, IconSend, IconAttach, IconImage, IconFormat, IconSchedule,
  IconRead, IconUnread, IconInbox, IconSnooze, IconLabel, IconUser, IconMenu,
  IconClose, IconCheck,
});

/* ===== Email App Files/data.jsx ===== */
// Personal email seed data. Realistic but invented.
const EMAILS = [
  {
    id: 'e1', folder: 'important', unread: true, pinned: true, flagged: true,
    from: { name: 'Maya Patel', email: 'maya.patel@figma.com', initials: 'MP', color: '#5AC8FA', kind: 'person' },
    subject: 'Re: prototype review thursday',
    preview: "Loved the new motion on the inbox rows. One nit on the swipe — feels a touch fast on iPhone Mini. Otherwise ship it.",
    time: '8:04 AM', date: 'Today',
    label: 'work',
    readBy: '12 min ago',
    thread: [
      { id: 't1', from: 'me', name: 'You', initials: 'YO', email: 'me@gmail.com',
        time: 'Yesterday, 9:14 PM', collapsed: true,
        body: 'Pushed v3 with the new triage swipes — would love your eyes before tomorrow.' },
      { id: 't2', from: 'them', name: 'Maya Patel', initials: 'MP', email: 'maya.patel@figma.com',
        time: 'Today, 8:04 AM',
        body: "Loved the new motion on the inbox rows. One nit on the swipe — feels a touch fast on iPhone Mini. Otherwise ship it.\n\nAlso: can we talk through the empty state for search? I think there's a chance to make it useful instead of empty." },
    ],
  },
  {
    id: 'e2', folder: 'important', unread: true,
    from: { name: 'Linear', email: 'no-reply@linear.app', initials: 'LN', color: '#5E6AD2' },
    subject: 'You have 3 issues due this week',
    preview: 'IOS-241, IOS-243, and IOS-251 are due Friday. Click through to assign or reschedule.',
    time: '7:31 AM', date: 'Today',
    label: 'updates',
    thread: [
      { id: 't1', from: 'them', name: 'Linear', initials: 'LN', email: 'no-reply@linear.app',
        time: 'Today, 7:31 AM',
        body: 'You have 3 issues due this week.\n\nIOS-241  Compose attachment overflow\nIOS-243  Triage swipe haptics\nIOS-251  Search empty state\n\nClick through to assign or reschedule.' },
    ],
  },
  {
    id: 'e3', folder: 'important', unread: false, flagged: true,
    from: { name: 'Dad', email: 'r.singh@me.com', initials: 'DS', color: '#30D158', kind: 'person' },
    subject: 'photos from the cabin',
    preview: 'Mom finally got the camera off auto. The one of the dock at sunset is worth printing.',
    time: 'Yesterday', date: 'Yesterday',
    thread: [
      { id: 't1', from: 'them', name: 'Dad', initials: 'DS', email: 'r.singh@me.com',
        time: 'Yesterday, 6:02 PM',
        body: 'Mom finally got the camera off auto. The one of the dock at sunset is worth printing.\n\nWhich do you want for the wall?' },
    ],
  },
  {
    id: 'e4', folder: 'important', unread: false,
    from: { name: 'Sara Ben-Ami', email: 'sara@hover.studio', initials: 'SB', color: '#BF5AF2', kind: 'person' },
    subject: 'lunch wednesday?',
    preview: 'There\'s that new ramen spot on Valencia. 12:30 work for you? I can\'t do later, have a 2pm.',
    time: 'Yesterday', date: 'Yesterday',
    thread: [
      { id: 't1', from: 'them', name: 'Sara Ben-Ami', initials: 'SB', email: 'sara@hover.studio',
        time: 'Yesterday, 3:47 PM',
        body: 'There\'s that new ramen spot on Valencia. 12:30 work for you? I can\'t do later, have a 2pm.' },
    ],
  },
  {
    id: 'e5', folder: 'important', unread: false,
    from: { name: 'Apple', email: 'no_reply@apple.com', initials: 'AP', color: '#F2F2F7' },
    subject: 'Your receipt from Apple',
    preview: 'Order #W123456789 — AirPods Pro (2nd gen). Delivery estimate Thu, May 9.',
    time: 'Tuesday', date: 'Tuesday',
    label: 'receipts',
    thread: [
      { id: 't1', from: 'them', name: 'Apple', initials: 'AP', email: 'no_reply@apple.com',
        time: 'Tue, May 5, 11:08 AM',
        body: 'Thanks for your order.\n\nOrder #W123456789\nAirPods Pro (2nd gen)  $249.00\n\nDelivery estimate Thu, May 9.' },
    ],
  },
  {
    id: 'e6', folder: 'important', unread: false,
    from: { name: 'Stripe', email: 'invoices@stripe.com', initials: 'ST', color: '#635BFF' },
    subject: 'Your April statement is ready',
    preview: '$4,217.40 in payouts to ••3421. Fees, refunds, and disputes summarized inside.',
    time: 'May 1', date: 'May 1',
    label: 'receipts',
    thread: [
      { id: 't1', from: 'them', name: 'Stripe', initials: 'ST', email: 'invoices@stripe.com',
        time: 'May 1, 9:00 AM',
        body: 'Your April statement is ready.\n\n$4,217.40 in payouts to ••3421.\nFees, refunds, and disputes summarized inside.' },
    ],
  },

  // Other inbox
  {
    id: 'e7', folder: 'other', unread: true,
    from: { name: 'Substack', email: 'no-reply@substack.com', initials: 'SU', color: '#FF6719' },
    subject: 'New from Robin Sloan',
    preview: 'A note on the texture of small software. "There is a category of program that is barely a program at all..."',
    time: '6:12 AM', date: 'Today',
    label: 'newsletters',
    thread: [
      { id: 't1', from: 'them', name: 'Robin Sloan via Substack', initials: 'SU', email: 'robin@substack.com',
        time: 'Today, 6:12 AM',
        body: 'A note on the texture of small software.\n\n"There is a category of program that is barely a program at all — a script, a notebook, a tiny app you wrote for one person on one Tuesday. The world is made of these."' },
    ],
  },
  {
    id: 'e8', folder: 'other', unread: false,
    from: { name: 'GitHub', email: 'noreply@github.com', initials: 'GH', color: '#F2F2F7' },
    subject: '[mailapp] PR #41 was merged',
    preview: 'maya merged "feat: triage swipe haptics" into main. 4 files changed, 132 additions, 18 deletions.',
    time: 'Yesterday', date: 'Yesterday',
    label: 'updates',
    thread: [],
  },
  {
    id: 'e9', folder: 'other', unread: false,
    from: { name: 'Verge', email: 'newsletter@theverge.com', initials: 'VG', color: '#FA4616' },
    subject: 'The Vergecast: 100 days of vision',
    preview: 'This week — Apple\'s spatial roadmap, the slow death of the search box, and a defense of bookmarks.',
    time: 'Tuesday', date: 'Tuesday',
    label: 'newsletters',
    thread: [],
  },
  {
    id: 'e10', folder: 'other', unread: false,
    from: { name: 'Doordash', email: 'orders@doordash.com', initials: 'DD', color: '#EB1700' },
    subject: 'Your order from Tartine — delivered',
    preview: 'Receipt for $34.20. Tip your dasher? Rate your order in the app.',
    time: 'Monday', date: 'Monday',
    label: 'receipts',
    thread: [],
  },
  {
    id: 'e11', folder: 'other', unread: false,
    from: { name: 'Calendly', email: 'no-reply@calendly.com', initials: 'CV', color: '#0069FF' },
    subject: 'New event: 30 min with Jordan Reyes',
    preview: 'Thursday, May 8 at 11:00 AM PT. Confirmed and added to your calendar.',
    time: 'Sunday', date: 'Sunday',
    label: 'work',
    thread: [],
  },
  {
    id: 'e12', folder: 'other', unread: false,
    from: { name: 'Notion', email: 'team@makenotion.com', initials: 'NO', color: '#F2F2F7' },
    subject: '3 pages were updated in "Side projects"',
    preview: 'Maya edited "mailapp prototypes". You and 2 others have access.',
    time: 'Apr 30', date: 'Apr 30',
    label: 'updates',
    thread: [],
  },
];

const LABELS = {
  work:        { name: 'Work',        color: '#5AC8FA' },
  updates:     { name: 'Updates',     color: '#5E6AD2' },
  receipts:    { name: 'Receipts',    color: '#30D158' },
  newsletters: { name: 'News',        color: '#BF5AF2' },
};

window.EMAILS = EMAILS;
window.LABELS = LABELS;

/* ===== Email App Files/tweaks-panel.jsx ===== */

// tweaks-panel.jsx
// Reusable Tweaks shell + form-control helpers.
//
// Owns the host protocol (listens for __activate_edit_mode / __deactivate_edit_mode,
// posts __edit_mode_available / __edit_mode_set_keys / __edit_mode_dismissed) so
// individual prototypes don't re-roll it. Ships a consistent set of controls so you
// don't hand-draw <input type="range">, segmented radios, steppers, etc.
//
// Usage (in an HTML file that loads React + Babel):
//
//   const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
//     "primaryColor": "#D97757",
//     "palette": ["#D97757", "#29261b", "#f6f4ef"],
//     "fontSize": 16,
//     "density": "regular",
//     "dark": false
//   }/*EDITMODE-END*/;
//
//   function App() {
//     const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
//     return (
//       <div style={{ fontSize: t.fontSize, color: t.primaryColor }}>
//         Hello
//         <TweaksPanel>
//           <TweakSection label="Typography" />
//           <TweakSlider label="Font size" value={t.fontSize} min={10} max={32} unit="px"
//                        onChange={(v) => setTweak('fontSize', v)} />
//           <TweakRadio  label="Density" value={t.density}
//                        options={['compact', 'regular', 'comfy']}
//                        onChange={(v) => setTweak('density', v)} />
//           <TweakSection label="Theme" />
//           <TweakColor  label="Primary" value={t.primaryColor}
//                        options={['#D97757', '#2A6FDB', '#1F8A5B', '#7A5AE0']}
//                        onChange={(v) => setTweak('primaryColor', v)} />
//           <TweakColor  label="Palette" value={t.palette}
//                        options={[['#D97757', '#29261b', '#f6f4ef'],
//                                  ['#475569', '#0f172a', '#f1f5f9']]}
//                        onChange={(v) => setTweak('palette', v)} />
//           <TweakToggle label="Dark mode" value={t.dark}
//                        onChange={(v) => setTweak('dark', v)} />
//         </TweaksPanel>
//       </div>
//     );
//   }
//
// ─────────────────────────────────────────────────────────────────────────────

const __TWEAKS_STYLE = `
  .twk-panel{position:fixed;right:16px;bottom:16px;z-index:2147483646;width:280px;
    max-height:calc(100vh - 32px);display:flex;flex-direction:column;
    transform:scale(var(--dc-inv-zoom,1));transform-origin:bottom right;
    background:rgba(250,249,247,.78);color:#29261b;
    -webkit-backdrop-filter:blur(24px) saturate(160%);backdrop-filter:blur(24px) saturate(160%);
    border:.5px solid rgba(255,255,255,.6);border-radius:14px;
    box-shadow:0 1px 0 rgba(255,255,255,.5) inset,0 12px 40px rgba(0,0,0,.18);
    font:11.5px/1.4 ui-sans-serif,system-ui,-apple-system,sans-serif;overflow:hidden}
  .twk-hd{display:flex;align-items:center;justify-content:space-between;
    padding:10px 8px 10px 14px;cursor:move;user-select:none}
  .twk-hd b{font-size:12px;font-weight:600;letter-spacing:.01em}
  .twk-x{appearance:none;border:0;background:transparent;color:rgba(41,38,27,.55);
    width:22px;height:22px;border-radius:6px;cursor:default;font-size:13px;line-height:1}
  .twk-x:hover{background:rgba(0,0,0,.06);color:#29261b}
  .twk-body{padding:2px 14px 14px;display:flex;flex-direction:column;gap:10px;
    overflow-y:auto;overflow-x:hidden;min-height:0;
    scrollbar-width:thin;scrollbar-color:rgba(0,0,0,.15) transparent}
  .twk-body::-webkit-scrollbar{width:8px}
  .twk-body::-webkit-scrollbar-track{background:transparent;margin:2px}
  .twk-body::-webkit-scrollbar-thumb{background:rgba(0,0,0,.15);border-radius:4px;
    border:2px solid transparent;background-clip:content-box}
  .twk-body::-webkit-scrollbar-thumb:hover{background:rgba(0,0,0,.25);
    border:2px solid transparent;background-clip:content-box}
  .twk-row{display:flex;flex-direction:column;gap:5px}
  .twk-row-h{flex-direction:row;align-items:center;justify-content:space-between;gap:10px}
  .twk-lbl{display:flex;justify-content:space-between;align-items:baseline;
    color:rgba(41,38,27,.72)}
  .twk-lbl>span:first-child{font-weight:500}
  .twk-val{color:rgba(41,38,27,.5);font-variant-numeric:tabular-nums}

  .twk-sect{font-size:10px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;
    color:rgba(41,38,27,.45);padding:10px 0 0}
  .twk-sect:first-child{padding-top:0}

  .twk-field{appearance:none;width:100%;height:26px;padding:0 8px;
    border:.5px solid rgba(0,0,0,.1);border-radius:7px;
    background:rgba(255,255,255,.6);color:inherit;font:inherit;outline:none}
  .twk-field:focus{border-color:rgba(0,0,0,.25);background:rgba(255,255,255,.85)}
  select.twk-field{padding-right:22px;
    background-image:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6'><path fill='rgba(0,0,0,.5)' d='M0 0h10L5 6z'/></svg>");
    background-repeat:no-repeat;background-position:right 8px center}

  .twk-slider{appearance:none;-webkit-appearance:none;width:100%;height:4px;margin:6px 0;
    border-radius:999px;background:rgba(0,0,0,.12);outline:none}
  .twk-slider::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;
    width:14px;height:14px;border-radius:50%;background:#fff;
    border:.5px solid rgba(0,0,0,.12);box-shadow:0 1px 3px rgba(0,0,0,.2);cursor:default}
  .twk-slider::-moz-range-thumb{width:14px;height:14px;border-radius:50%;
    background:#fff;border:.5px solid rgba(0,0,0,.12);box-shadow:0 1px 3px rgba(0,0,0,.2);cursor:default}

  .twk-seg{position:relative;display:flex;padding:2px;border-radius:8px;
    background:rgba(0,0,0,.06);user-select:none}
  .twk-seg-thumb{position:absolute;top:2px;bottom:2px;border-radius:6px;
    background:rgba(255,255,255,.9);box-shadow:0 1px 2px rgba(0,0,0,.12);
    transition:left .15s cubic-bezier(.3,.7,.4,1),width .15s}
  .twk-seg.dragging .twk-seg-thumb{transition:none}
  .twk-seg button{appearance:none;position:relative;z-index:1;flex:1;border:0;
    background:transparent;color:inherit;font:inherit;font-weight:500;min-height:22px;
    border-radius:6px;cursor:default;padding:4px 6px;line-height:1.2;
    overflow-wrap:anywhere}

  .twk-toggle{position:relative;width:32px;height:18px;border:0;border-radius:999px;
    background:rgba(0,0,0,.15);transition:background .15s;cursor:default;padding:0}
  .twk-toggle[data-on="1"]{background:#34c759}
  .twk-toggle i{position:absolute;top:2px;left:2px;width:14px;height:14px;border-radius:50%;
    background:#fff;box-shadow:0 1px 2px rgba(0,0,0,.25);transition:transform .15s}
  .twk-toggle[data-on="1"] i{transform:translateX(14px)}

  .twk-num{display:flex;align-items:center;height:26px;padding:0 0 0 8px;
    border:.5px solid rgba(0,0,0,.1);border-radius:7px;background:rgba(255,255,255,.6)}
  .twk-num-lbl{font-weight:500;color:rgba(41,38,27,.6);cursor:ew-resize;
    user-select:none;padding-right:8px}
  .twk-num input{flex:1;min-width:0;height:100%;border:0;background:transparent;
    font:inherit;font-variant-numeric:tabular-nums;text-align:right;padding:0 8px 0 0;
    outline:none;color:inherit;-moz-appearance:textfield}
  .twk-num input::-webkit-inner-spin-button,.twk-num input::-webkit-outer-spin-button{
    -webkit-appearance:none;margin:0}
  .twk-num-unit{padding-right:8px;color:rgba(41,38,27,.45)}

  .twk-btn{appearance:none;height:26px;padding:0 12px;border:0;border-radius:7px;
    background:rgba(0,0,0,.78);color:#fff;font:inherit;font-weight:500;cursor:default}
  .twk-btn:hover{background:rgba(0,0,0,.88)}
  .twk-btn.secondary{background:rgba(0,0,0,.06);color:inherit}
  .twk-btn.secondary:hover{background:rgba(0,0,0,.1)}

  .twk-swatch{appearance:none;-webkit-appearance:none;width:56px;height:22px;
    border:.5px solid rgba(0,0,0,.1);border-radius:6px;padding:0;cursor:default;
    background:transparent;flex-shrink:0}
  .twk-swatch::-webkit-color-swatch-wrapper{padding:0}
  .twk-swatch::-webkit-color-swatch{border:0;border-radius:5.5px}
  .twk-swatch::-moz-color-swatch{border:0;border-radius:5.5px}

  .twk-chips{display:flex;gap:6px}
  .twk-chip{position:relative;appearance:none;flex:1;min-width:0;height:46px;
    padding:0;border:0;border-radius:6px;overflow:hidden;cursor:default;
    box-shadow:0 0 0 .5px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.06);
    transition:transform .12s cubic-bezier(.3,.7,.4,1),box-shadow .12s}
  .twk-chip:hover{transform:translateY(-1px);
    box-shadow:0 0 0 .5px rgba(0,0,0,.18),0 4px 10px rgba(0,0,0,.12)}
  .twk-chip[data-on="1"]{box-shadow:0 0 0 1.5px rgba(0,0,0,.85),
    0 2px 6px rgba(0,0,0,.15)}
  .twk-chip>span{position:absolute;top:0;bottom:0;right:0;width:34%;
    display:flex;flex-direction:column;box-shadow:-1px 0 0 rgba(0,0,0,.1)}
  .twk-chip>span>i{flex:1;box-shadow:0 -1px 0 rgba(0,0,0,.1)}
  .twk-chip>span>i:first-child{box-shadow:none}
  .twk-chip svg{position:absolute;top:6px;left:6px;width:13px;height:13px;
    filter:drop-shadow(0 1px 1px rgba(0,0,0,.3))}
`;

// ── useTweaks ───────────────────────────────────────────────────────────────
// Single source of truth for tweak values. setTweak persists via the host
// (__edit_mode_set_keys → host rewrites the EDITMODE block on disk).
function useTweaks(defaults) {
  const [values, setValues] = React.useState(defaults);
  // Accepts either setTweak('key', value) or setTweak({ key: value, ... }) so a
  // useState-style call doesn't write a "[object Object]" key into the persisted
  // JSON block.
  const setTweak = React.useCallback((keyOrEdits, val) => {
    const edits = typeof keyOrEdits === 'object' && keyOrEdits !== null
      ? keyOrEdits : { [keyOrEdits]: val };
    setValues((prev) => ({ ...prev, ...edits }));
    window.parent.postMessage({ type: '__edit_mode_set_keys', edits }, '*');
    // Same-window signal so in-page listeners (deck-stage rail thumbnails)
    // can react — the parent message only reaches the host, not peers.
    window.dispatchEvent(new CustomEvent('tweakchange', { detail: edits }));
  }, []);
  return [values, setTweak];
}

// ── TweaksPanel ─────────────────────────────────────────────────────────────
// Floating shell. Registers the protocol listener BEFORE announcing
// availability — if the announce ran first, the host's activate could land
// before our handler exists and the toolbar toggle would silently no-op.
// The close button posts __edit_mode_dismissed so the host's toolbar toggle
// flips off in lockstep; the host echoes __deactivate_edit_mode back which
// is what actually hides the panel.
function TweaksPanel({ title = 'Tweaks', noDeckControls = false, children }) {
  const [open, setOpen] = React.useState(false);
  const dragRef = React.useRef(null);
  // Auto-inject a rail toggle when a <deck-stage> is on the page. The
  // toggle drives the deck's per-viewer _railVisible via window message;
  // state is mirrored from the same localStorage key the deck reads so
  // the control reflects reality across reloads. The mechanism is the
  // message — authors who want custom placement can post it directly
  // and pass noDeckControls to suppress this one.
  const hasDeckStage = React.useMemo(
    () => typeof document !== 'undefined' && !!document.querySelector('deck-stage'),
    [],
  );
  // Hide the toggle until the host has actually enabled the rail (the
  // __omelette_rail_enabled window message, posted only when the
  // omelette_deck_rail_enabled flag is on for this user). The initial read
  // covers TweaksPanel mounting after the message already arrived; the
  // listener covers the common case of mounting first.
  const [railEnabled, setRailEnabled] = React.useState(
    () => hasDeckStage && !!document.querySelector('deck-stage')?._railEnabled,
  );
  React.useEffect(() => {
    if (!hasDeckStage || railEnabled) return undefined;
    const onMsg = (e) => {
      if (e.data && e.data.type === '__omelette_rail_enabled') setRailEnabled(true);
    };
    window.addEventListener('message', onMsg);
    return () => window.removeEventListener('message', onMsg);
  }, [hasDeckStage, railEnabled]);
  const [railVisible, setRailVisible] = React.useState(() => {
    try { return localStorage.getItem('deck-stage.railVisible') !== '0'; } catch (e) { return true; }
  });
  const toggleRail = (on) => {
    setRailVisible(on);
    window.postMessage({ type: '__deck_rail_visible', on }, '*');
  };
  const offsetRef = React.useRef({ x: 16, y: 16 });
  const PAD = 16;

  const clampToViewport = React.useCallback(() => {
    const panel = dragRef.current;
    if (!panel) return;
    const w = panel.offsetWidth, h = panel.offsetHeight;
    const maxRight = Math.max(PAD, window.innerWidth - w - PAD);
    const maxBottom = Math.max(PAD, window.innerHeight - h - PAD);
    offsetRef.current = {
      x: Math.min(maxRight, Math.max(PAD, offsetRef.current.x)),
      y: Math.min(maxBottom, Math.max(PAD, offsetRef.current.y)),
    };
    panel.style.right = offsetRef.current.x + 'px';
    panel.style.bottom = offsetRef.current.y + 'px';
  }, []);

  React.useEffect(() => {
    if (!open) return;
    clampToViewport();
    if (typeof ResizeObserver === 'undefined') {
      window.addEventListener('resize', clampToViewport);
      return () => window.removeEventListener('resize', clampToViewport);
    }
    const ro = new ResizeObserver(clampToViewport);
    ro.observe(document.documentElement);
    return () => ro.disconnect();
  }, [open, clampToViewport]);

  React.useEffect(() => {
    const onMsg = (e) => {
      const t = e?.data?.type;
      if (t === '__activate_edit_mode') setOpen(true);
      else if (t === '__deactivate_edit_mode') setOpen(false);
    };
    window.addEventListener('message', onMsg);
    window.parent.postMessage({ type: '__edit_mode_available' }, '*');
    return () => window.removeEventListener('message', onMsg);
  }, []);

  const dismiss = () => {
    setOpen(false);
    window.parent.postMessage({ type: '__edit_mode_dismissed' }, '*');
  };

  const onDragStart = (e) => {
    const panel = dragRef.current;
    if (!panel) return;
    const r = panel.getBoundingClientRect();
    const sx = e.clientX, sy = e.clientY;
    const startRight = window.innerWidth - r.right;
    const startBottom = window.innerHeight - r.bottom;
    const move = (ev) => {
      offsetRef.current = {
        x: startRight - (ev.clientX - sx),
        y: startBottom - (ev.clientY - sy),
      };
      clampToViewport();
    };
    const up = () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseup', up);
    };
    window.addEventListener('mousemove', move);
    window.addEventListener('mouseup', up);
  };

  if (!open) return null;
  return (
    <>
      <style>{__TWEAKS_STYLE}</style>
      <div ref={dragRef} className="twk-panel" data-noncommentable=""
           style={{ right: offsetRef.current.x, bottom: offsetRef.current.y }}>
        <div className="twk-hd" onMouseDown={onDragStart}>
          <b>{title}</b>
          <button className="twk-x" aria-label="Close tweaks"
                  onMouseDown={(e) => e.stopPropagation()}
                  onClick={dismiss}>✕</button>
        </div>
        <div className="twk-body">
          {children}
          {hasDeckStage && railEnabled && !noDeckControls && (
            <TweakSection label="Deck">
              <TweakToggle label="Thumbnail rail" value={railVisible} onChange={toggleRail} />
            </TweakSection>
          )}
        </div>
      </div>
    </>
  );
}

// ── Layout helpers ──────────────────────────────────────────────────────────

function TweakSection({ label, children }) {
  return (
    <>
      <div className="twk-sect">{label}</div>
      {children}
    </>
  );
}

function TweakRow({ label, value, children, inline = false }) {
  return (
    <div className={inline ? 'twk-row twk-row-h' : 'twk-row'}>
      <div className="twk-lbl">
        <span>{label}</span>
        {value != null && <span className="twk-val">{value}</span>}
      </div>
      {children}
    </div>
  );
}

// ── Controls ────────────────────────────────────────────────────────────────

function TweakSlider({ label, value, min = 0, max = 100, step = 1, unit = '', onChange }) {
  return (
    <TweakRow label={label} value={`${value}${unit}`}>
      <input type="range" className="twk-slider" min={min} max={max} step={step}
             value={value} onChange={(e) => onChange(Number(e.target.value))} />
    </TweakRow>
  );
}

function TweakToggle({ label, value, onChange }) {
  return (
    <div className="twk-row twk-row-h">
      <div className="twk-lbl"><span>{label}</span></div>
      <button type="button" className="twk-toggle" data-on={value ? '1' : '0'}
              role="switch" aria-checked={!!value}
              onClick={() => onChange(!value)}><i /></button>
    </div>
  );
}

function TweakRadio({ label, value, options, onChange }) {
  const trackRef = React.useRef(null);
  const [dragging, setDragging] = React.useState(false);
  // The active value is read by pointer-move handlers attached for the lifetime
  // of a drag — ref it so a stale closure doesn't fire onChange for every move.
  const valueRef = React.useRef(value);
  valueRef.current = value;

  // Segments wrap mid-word once per-segment width runs out. The track is
  // ~248px (280 panel − 28 body pad − 4 seg pad), each button loses 12px
  // to its own padding, and 11.5px system-ui averages ~6.3px/char — so 2
  // options fit ~16 chars each, 3 fit ~10. Past that (or >3 options), fall
  // back to a dropdown rather than wrap.
  const labelLen = (o) => String(typeof o === 'object' ? o.label : o).length;
  const maxLen = options.reduce((m, o) => Math.max(m, labelLen(o)), 0);
  const fitsAsSegments = maxLen <= ({ 2: 16, 3: 10 }[options.length] ?? 0);
  if (!fitsAsSegments) {
    // <select> emits strings — map back to the original option value so the
    // fallback stays type-preserving (numbers, booleans) like the segment path.
    const resolve = (s) => {
      const m = options.find((o) => String(typeof o === 'object' ? o.value : o) === s);
      return m === undefined ? s : typeof m === 'object' ? m.value : m;
    };
    return <TweakSelect label={label} value={value} options={options}
                        onChange={(s) => onChange(resolve(s))} />;
  }
  const opts = options.map((o) => (typeof o === 'object' ? o : { value: o, label: o }));
  const idx = Math.max(0, opts.findIndex((o) => o.value === value));
  const n = opts.length;

  const segAt = (clientX) => {
    const r = trackRef.current.getBoundingClientRect();
    const inner = r.width - 4;
    const i = Math.floor(((clientX - r.left - 2) / inner) * n);
    return opts[Math.max(0, Math.min(n - 1, i))].value;
  };

  const onPointerDown = (e) => {
    setDragging(true);
    const v0 = segAt(e.clientX);
    if (v0 !== valueRef.current) onChange(v0);
    const move = (ev) => {
      if (!trackRef.current) return;
      const v = segAt(ev.clientX);
      if (v !== valueRef.current) onChange(v);
    };
    const up = () => {
      setDragging(false);
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
  };

  return (
    <TweakRow label={label}>
      <div ref={trackRef} role="radiogroup" onPointerDown={onPointerDown}
           className={dragging ? 'twk-seg dragging' : 'twk-seg'}>
        <div className="twk-seg-thumb"
             style={{ left: `calc(2px + ${idx} * (100% - 4px) / ${n})`,
                      width: `calc((100% - 4px) / ${n})` }} />
        {opts.map((o) => (
          <button key={o.value} type="button" role="radio" aria-checked={o.value === value}>
            {o.label}
          </button>
        ))}
      </div>
    </TweakRow>
  );
}

function TweakSelect({ label, value, options, onChange }) {
  return (
    <TweakRow label={label}>
      <select className="twk-field" value={value} onChange={(e) => onChange(e.target.value)}>
        {options.map((o) => {
          const v = typeof o === 'object' ? o.value : o;
          const l = typeof o === 'object' ? o.label : o;
          return <option key={v} value={v}>{l}</option>;
        })}
      </select>
    </TweakRow>
  );
}

function TweakText({ label, value, placeholder, onChange }) {
  return (
    <TweakRow label={label}>
      <input className="twk-field" type="text" value={value} placeholder={placeholder}
             onChange={(e) => onChange(e.target.value)} />
    </TweakRow>
  );
}

function TweakNumber({ label, value, min, max, step = 1, unit = '', onChange }) {
  const clamp = (n) => {
    if (min != null && n < min) return min;
    if (max != null && n > max) return max;
    return n;
  };
  const startRef = React.useRef({ x: 0, val: 0 });
  const onScrubStart = (e) => {
    e.preventDefault();
    startRef.current = { x: e.clientX, val: value };
    const decimals = (String(step).split('.')[1] || '').length;
    const move = (ev) => {
      const dx = ev.clientX - startRef.current.x;
      const raw = startRef.current.val + dx * step;
      const snapped = Math.round(raw / step) * step;
      onChange(clamp(Number(snapped.toFixed(decimals))));
    };
    const up = () => {
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
  };
  return (
    <div className="twk-num">
      <span className="twk-num-lbl" onPointerDown={onScrubStart}>{label}</span>
      <input type="number" value={value} min={min} max={max} step={step}
             onChange={(e) => onChange(clamp(Number(e.target.value)))} />
      {unit && <span className="twk-num-unit">{unit}</span>}
    </div>
  );
}

// Relative-luminance contrast pick — checkmarks drawn over a swatch need to
// read on both #111 and #fafafa without per-option configuration. Hex input
// only (#rgb / #rrggbb); named or rgb()/hsl() colors fall through to "light".
function __twkIsLight(hex) {
  const h = String(hex).replace('#', '');
  const x = h.length === 3 ? h.replace(/./g, (c) => c + c) : h.padEnd(6, '0');
  const n = parseInt(x.slice(0, 6), 16);
  if (Number.isNaN(n)) return true;
  const r = (n >> 16) & 255, g = (n >> 8) & 255, b = n & 255;
  return r * 299 + g * 587 + b * 114 > 148000;
}

const __TwkCheck = ({ light }) => (
  <svg viewBox="0 0 14 14" aria-hidden="true">
    <path d="M3 7.2 5.8 10 11 4.2" fill="none" strokeWidth="2.2"
          strokeLinecap="round" strokeLinejoin="round"
          stroke={light ? 'rgba(0,0,0,.78)' : '#fff'} />
  </svg>
);

// TweakColor — curated color/palette picker. Each option is either a single
// hex string or an array of 1-5 hex strings; the card adapts — a lone color
// renders solid, a palette renders colors[0] as the hero (left ~2/3) with the
// rest stacked in a sharp column on the right. onChange emits the
// option in the shape it was passed (string stays string, array stays array).
// Without options it falls back to the native color input for back-compat.
function TweakColor({ label, value, options, onChange }) {
  if (!options || !options.length) {
    return (
      <div className="twk-row twk-row-h">
        <div className="twk-lbl"><span>{label}</span></div>
        <input type="color" className="twk-swatch" value={value}
               onChange={(e) => onChange(e.target.value)} />
      </div>
    );
  }
  // Native <input type=color> emits lowercase hex per the HTML spec, so
  // compare case-insensitively. String() guards JSON.stringify(undefined),
  // which returns the primitive undefined (no .toLowerCase).
  const key = (o) => String(JSON.stringify(o)).toLowerCase();
  const cur = key(value);
  return (
    <TweakRow label={label}>
      <div className="twk-chips" role="radiogroup">
        {options.map((o, i) => {
          const colors = Array.isArray(o) ? o : [o];
          const [hero, ...rest] = colors;
          const sup = rest.slice(0, 4);
          const on = key(o) === cur;
          return (
            <button key={i} type="button" className="twk-chip" role="radio"
                    aria-checked={on} data-on={on ? '1' : '0'}
                    aria-label={colors.join(', ')} title={colors.join(' · ')}
                    style={{ background: hero }}
                    onClick={() => onChange(o)}>
              {sup.length > 0 && (
                <span>
                  {sup.map((c, j) => <i key={j} style={{ background: c }} />)}
                </span>
              )}
              {on && <__TwkCheck light={__twkIsLight(hero)} />}
            </button>
          );
        })}
      </div>
    </TweakRow>
  );
}

function TweakButton({ label, onClick, secondary = false }) {
  return (
    <button type="button" className={secondary ? 'twk-btn secondary' : 'twk-btn'}
            onClick={onClick}>{label}</button>
  );
}

Object.assign(window, {
  useTweaks, TweaksPanel, TweakSection, TweakRow,
  TweakSlider, TweakToggle, TweakRadio, TweakSelect,
  TweakText, TweakNumber, TweakColor, TweakButton,
});

/* ===== Email App Files/ios-frame.jsx ===== */

// iOS.jsx — Simplified iOS 26 (Liquid Glass) device frame
// Based on the iOS 26 UI Kit + Figma status bar spec. No assets, no deps.
// Exports: IOSDevice, IOSStatusBar, IOSNavBar, IOSGlassPill, IOSList, IOSListRow, IOSKeyboard

// ─────────────────────────────────────────────────────────────
// Status bar
// ─────────────────────────────────────────────────────────────
function IOSStatusBar({ dark = false, time = '9:41' }) {
  const c = dark ? '#fff' : '#000';
  return (
    <div style={{
      display: 'flex', gap: 154, alignItems: 'center', justifyContent: 'center',
      padding: '21px 24px 19px', boxSizing: 'border-box',
      position: 'relative', zIndex: 20, width: '100%',
    }}>
      <div style={{ flex: 1, height: 22, display: 'flex', alignItems: 'center', justifyContent: 'center', paddingTop: 1.5 }}>
        <span style={{
          fontFamily: '-apple-system, "SF Pro", system-ui', fontWeight: 590,
          fontSize: 17, lineHeight: '22px', color: c,
        }}>{time}</span>
      </div>
      <div style={{ flex: 1, height: 22, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 7, paddingTop: 1, paddingRight: 1 }}>
        <svg width="19" height="12" viewBox="0 0 19 12">
          <rect x="0" y="7.5" width="3.2" height="4.5" rx="0.7" fill={c}/>
          <rect x="4.8" y="5" width="3.2" height="7" rx="0.7" fill={c}/>
          <rect x="9.6" y="2.5" width="3.2" height="9.5" rx="0.7" fill={c}/>
          <rect x="14.4" y="0" width="3.2" height="12" rx="0.7" fill={c}/>
        </svg>
        <svg width="17" height="12" viewBox="0 0 17 12">
          <path d="M8.5 3.2C10.8 3.2 12.9 4.1 14.4 5.6L15.5 4.5C13.7 2.7 11.2 1.5 8.5 1.5C5.8 1.5 3.3 2.7 1.5 4.5L2.6 5.6C4.1 4.1 6.2 3.2 8.5 3.2Z" fill={c}/>
          <path d="M8.5 6.8C9.9 6.8 11.1 7.3 12 8.2L13.1 7.1C11.8 5.9 10.2 5.1 8.5 5.1C6.8 5.1 5.2 5.9 3.9 7.1L5 8.2C5.9 7.3 7.1 6.8 8.5 6.8Z" fill={c}/>
          <circle cx="8.5" cy="10.5" r="1.5" fill={c}/>
        </svg>
        <svg width="27" height="13" viewBox="0 0 27 13">
          <rect x="0.5" y="0.5" width="23" height="12" rx="3.5" stroke={c} strokeOpacity="0.35" fill="none"/>
          <rect x="2" y="2" width="20" height="9" rx="2" fill={c}/>
          <path d="M25 4.5V8.5C25.8 8.2 26.5 7.2 26.5 6.5C26.5 5.8 25.8 4.8 25 4.5Z" fill={c} fillOpacity="0.4"/>
        </svg>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// Liquid glass pill — blur + tint + shine
// ─────────────────────────────────────────────────────────────
function IOSGlassPill({ children, dark = false, style = {} }) {
  return (
    <div style={{
      height: 44, minWidth: 44, borderRadius: 9999,
      position: 'relative', overflow: 'hidden',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      boxShadow: dark
        ? '0 2px 6px rgba(0,0,0,0.35), 0 6px 16px rgba(0,0,0,0.2)'
        : '0 1px 3px rgba(0,0,0,0.07), 0 3px 10px rgba(0,0,0,0.06)',
      ...style,
    }}>
      {/* blur + tint */}
      <div style={{
        position: 'absolute', inset: 0, borderRadius: 9999,
        backdropFilter: 'blur(12px) saturate(180%)',
        WebkitBackdropFilter: 'blur(12px) saturate(180%)',
        background: dark ? 'rgba(120,120,128,0.28)' : 'rgba(255,255,255,0.5)',
      }} />
      {/* shine */}
      <div style={{
        position: 'absolute', inset: 0, borderRadius: 9999,
        boxShadow: dark
          ? 'inset 1.5px 1.5px 1px rgba(255,255,255,0.15), inset -1px -1px 1px rgba(255,255,255,0.08)'
          : 'inset 1.5px 1.5px 1px rgba(255,255,255,0.7), inset -1px -1px 1px rgba(255,255,255,0.4)',
        border: dark ? '0.5px solid rgba(255,255,255,0.15)' : '0.5px solid rgba(0,0,0,0.06)',
      }} />
      <div style={{ position: 'relative', zIndex: 1, display: 'flex', alignItems: 'center', padding: '0 4px' }}>
        {children}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// Navigation bar — glass pills + large title
// ─────────────────────────────────────────────────────────────
function IOSNavBar({ title = 'Title', dark = false, trailingIcon = true }) {
  const muted = dark ? 'rgba(255,255,255,0.6)' : '#404040';
  const text = dark ? '#fff' : '#000';
  const pillIcon = (content) => (
    <IOSGlassPill dark={dark}>
      <div style={{ width: 36, height: 36, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        {content}
      </div>
    </IOSGlassPill>
  );
  return (
    <div style={{
      display: 'flex', flexDirection: 'column', gap: 10,
      paddingTop: 62, paddingBottom: 10, position: 'relative', zIndex: 5,
    }}>
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '0 16px',
      }}>
        {/* back chevron */}
        {pillIcon(
          <svg width="12" height="20" viewBox="0 0 12 20" fill="none" style={{ marginLeft: -1 }}>
            <path d="M10 2L2 10l8 8" stroke={muted} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        )}
        {/* trailing ellipsis */}
        {trailingIcon && pillIcon(
          <svg width="22" height="6" viewBox="0 0 22 6">
            <circle cx="3" cy="3" r="2.5" fill={muted}/>
            <circle cx="11" cy="3" r="2.5" fill={muted}/>
            <circle cx="19" cy="3" r="2.5" fill={muted}/>
          </svg>
        )}
      </div>
      {/* large title */}
      <div style={{
        padding: '0 16px',
        fontFamily: '-apple-system, system-ui',
        fontSize: 34, fontWeight: 700, lineHeight: '41px',
        color: text, letterSpacing: 0.4,
      }}>{title}</div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// Grouped list (inset card, r:26) + row (52px)
// ─────────────────────────────────────────────────────────────
function IOSListRow({ title, detail, icon, chevron = true, isLast = false, dark = false }) {
  const text = dark ? '#fff' : '#000';
  const sec = dark ? 'rgba(235,235,245,0.6)' : 'rgba(60,60,67,0.6)';
  const ter = dark ? 'rgba(235,235,245,0.3)' : 'rgba(60,60,67,0.3)';
  const sep = dark ? 'rgba(84,84,88,0.65)' : 'rgba(60,60,67,0.12)';
  return (
    <div style={{
      display: 'flex', alignItems: 'center', minHeight: 52,
      padding: '0 16px', position: 'relative',
      fontFamily: '-apple-system, system-ui', fontSize: 17,
      letterSpacing: -0.43,
    }}>
      {icon && (
        <div style={{
          width: 30, height: 30, borderRadius: 7, background: icon,
          marginRight: 12, flexShrink: 0,
        }} />
      )}
      <div style={{ flex: 1, color: text }}>{title}</div>
      {detail && <span style={{ color: sec, marginRight: 6 }}>{detail}</span>}
      {chevron && (
        <svg width="8" height="14" viewBox="0 0 8 14" style={{ flexShrink: 0 }}>
          <path d="M1 1l6 6-6 6" stroke={ter} strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )}
      {!isLast && (
        <div style={{
          position: 'absolute', bottom: 0, right: 0,
          left: icon ? 58 : 16, height: 0.5, background: sep,
        }} />
      )}
    </div>
  );
}

function IOSList({ header, children, dark = false }) {
  const hc = dark ? 'rgba(235,235,245,0.6)' : 'rgba(60,60,67,0.6)';
  const bg = dark ? '#1C1C1E' : '#fff';
  return (
    <div>
      {header && (
        <div style={{
          fontFamily: '-apple-system, system-ui', fontSize: 13,
          color: hc, textTransform: 'uppercase',
          padding: '8px 36px 6px', letterSpacing: -0.08,
        }}>{header}</div>
      )}
      <div style={{
        background: bg, borderRadius: 26,
        margin: '0 16px', overflow: 'hidden',
      }}>{children}</div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// Device frame
// ─────────────────────────────────────────────────────────────
function IOSDevice({
  children, width = 402, height = 874, dark = false,
  title, keyboard = false,
}) {
  return (
    <div style={{
      width, height, borderRadius: 48, overflow: 'hidden',
      position: 'relative', background: dark ? '#000' : '#F2F2F7',
      boxShadow: '0 40px 80px rgba(0,0,0,0.18), 0 0 0 1px rgba(0,0,0,0.12)',
      fontFamily: '-apple-system, system-ui, sans-serif',
      WebkitFontSmoothing: 'antialiased',
    }}>
      {/* dynamic island */}
      <div style={{
        position: 'absolute', top: 11, left: '50%', transform: 'translateX(-50%)',
        width: 126, height: 37, borderRadius: 24, background: '#000', zIndex: 50,
      }} />
      {/* status bar (absolute) */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, zIndex: 10 }}>
        <IOSStatusBar dark={dark} />
      </div>
      {/* nav + content */}
      <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
        {title !== undefined && <IOSNavBar title={title} dark={dark} />}
        <div style={{ flex: 1, overflow: 'auto' }}>{children}</div>
        {keyboard && <IOSKeyboard dark={dark} />}
      </div>
      {/* home indicator — always on top */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0, zIndex: 60,
        height: 34, display: 'flex', justifyContent: 'center', alignItems: 'flex-end',
        paddingBottom: 8, pointerEvents: 'none',
      }}>
        <div style={{
          width: 139, height: 5, borderRadius: 100,
          background: dark ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.25)',
        }} />
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// Keyboard — iOS 26 liquid glass
// ─────────────────────────────────────────────────────────────
function IOSKeyboard({ dark = false }) {
  const glyph = dark ? 'rgba(255,255,255,0.7)' : '#595959';
  const sugg = dark ? 'rgba(255,255,255,0.6)' : '#333';
  const keyBg = dark ? 'rgba(255,255,255,0.22)' : 'rgba(255,255,255,0.85)';

  // special-key icons
  const icons = {
    shift: <svg width="19" height="17" viewBox="0 0 19 17"><path d="M9.5 1L1 9.5h4.5V16h8V9.5H18L9.5 1z" fill={glyph}/></svg>,
    del: <svg width="23" height="17" viewBox="0 0 23 17"><path d="M7 1h13a2 2 0 012 2v11a2 2 0 01-2 2H7l-6-7.5L7 1z" fill="none" stroke={glyph} strokeWidth="1.6" strokeLinejoin="round"/><path d="M10 5l7 7M17 5l-7 7" stroke={glyph} strokeWidth="1.6" strokeLinecap="round"/></svg>,
    ret: <svg width="20" height="14" viewBox="0 0 20 14"><path d="M18 1v6H4m0 0l4-4M4 7l4 4" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  };

  const key = (content, { w, flex, ret, fs = 25, k } = {}) => (
    <div key={k} style={{
      height: 42, borderRadius: 8.5,
      flex: flex ? 1 : undefined, width: w, minWidth: 0,
      background: ret ? '#08f' : keyBg,
      boxShadow: '0 1px 0 rgba(0,0,0,0.075)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      fontFamily: '-apple-system, "SF Compact", system-ui',
      fontSize: fs, fontWeight: 458, color: ret ? '#fff' : glyph,
    }}>{content}</div>
  );

  const row = (keys, pad = 0) => (
    <div style={{ display: 'flex', gap: 6.5, justifyContent: 'center', padding: `0 ${pad}px` }}>
      {keys.map(l => key(l, { flex: true, k: l }))}
    </div>
  );

  return (
    <div style={{
      position: 'relative', zIndex: 15, borderRadius: 27, overflow: 'hidden',
      padding: '11px 0 2px',
      display: 'flex', flexDirection: 'column', alignItems: 'center',
      boxShadow: dark
        ? '0 -2px 20px rgba(0,0,0,0.09)'
        : '0 -1px 6px rgba(0,0,0,0.018), 0 -3px 20px rgba(0,0,0,0.012)',
    }}>
      {/* liquid glass bg — same recipe as nav pills */}
      <div style={{
        position: 'absolute', inset: 0, borderRadius: 27,
        backdropFilter: 'blur(12px) saturate(180%)',
        WebkitBackdropFilter: 'blur(12px) saturate(180%)',
        background: dark ? 'rgba(120,120,128,0.14)' : 'rgba(255,255,255,0.25)',
      }} />
      <div style={{
        position: 'absolute', inset: 0, borderRadius: 27,
        boxShadow: dark
          ? 'inset 1.5px 1.5px 1px rgba(255,255,255,0.15)'
          : 'inset 1.5px 1.5px 1px rgba(255,255,255,0.7), inset -1px -1px 1px rgba(255,255,255,0.4)',
        border: dark ? '0.5px solid rgba(255,255,255,0.15)' : '0.5px solid rgba(0,0,0,0.06)',
        pointerEvents: 'none',
      }} />

      {/* autocorrect bar */}
      <div style={{
        display: 'flex', gap: 20, alignItems: 'center',
        padding: '8px 22px 13px', width: '100%', boxSizing: 'border-box',
        position: 'relative',
      }}>
        {['"The"', 'the', 'to'].map((w, i) => (
          <React.Fragment key={i}>
            {i > 0 && <div style={{ width: 1, height: 25, background: '#ccc', opacity: 0.3 }} />}
            <div style={{
              flex: 1, textAlign: 'center',
              fontFamily: '-apple-system, system-ui', fontSize: 17,
              color: sugg, letterSpacing: -0.43, lineHeight: '22px',
            }}>{w}</div>
          </React.Fragment>
        ))}
      </div>

      {/* key layout */}
      <div style={{
        display: 'flex', flexDirection: 'column', gap: 13,
        padding: '0 6.5px', width: '100%', boxSizing: 'border-box',
        position: 'relative',
      }}>
        {row(['q','w','e','r','t','y','u','i','o','p'])}
        {row(['a','s','d','f','g','h','j','k','l'], 20)}
        <div style={{ display: 'flex', gap: 14.25, alignItems: 'center' }}>
          {key(icons.shift, { w: 45, k: 'shift' })}
          <div style={{ display: 'flex', gap: 6.5, flex: 1 }}>
            {['z','x','c','v','b','n','m'].map(l => key(l, { flex: true, k: l }))}
          </div>
          {key(icons.del, { w: 45, k: 'del' })}
        </div>
        <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
          {key('ABC', { w: 92.25, fs: 18, k: 'abc' })}
          {key('', { flex: true, k: 'space' })}
          {key(icons.ret, { w: 92.25, ret: true, k: 'ret' })}
        </div>
      </div>

      {/* bottom spacer (emoji+mic area, icons omitted) */}
      <div style={{ height: 56, width: '100%', position: 'relative' }} />
    </div>
  );
}

Object.assign(window, {
  IOSDevice, IOSStatusBar, IOSNavBar, IOSGlassPill, IOSList, IOSListRow, IOSKeyboard,
});

/* ===== Email App Files/drawer.jsx ===== */
// Folder / account drawer — slides in from left when avatar is tapped.

const { useState: useState_dr } = React;

const ACCOUNTS = [
  { id: 'a1', name: 'You', email: 'you@gmail.com', initials: 'YO', color: '#F2F2F7', primary: true, unread: 7 },
  { id: 'a2', name: 'Work', email: 'you@figma.com', initials: 'YF', color: '#0A84FF', unread: 23 },
  { id: 'a3', name: 'Side projects', email: 'projects@me.com', initials: 'YP', color: '#30D158', unread: 0 },
];

const FOLDERS = [
  { id: 'inbox',     label: 'Inbox',     icon: IconInbox,    count: 7 },
  { id: 'important', label: 'Important', icon: IconStar,     count: 3 },
  { id: 'snoozed',   label: 'Snoozed',   icon: IconClock,    count: 0 },
  { id: 'sent',      label: 'Sent',      icon: IconSend,     count: 0 },
  { id: 'drafts',    label: 'Drafts',    icon: IconCompose,  count: 2 },
  { id: 'archive',   label: 'Archive',   icon: IconArchive,  count: 0 },
  { id: 'trash',     label: 'Trash',     icon: IconTrash,    count: 0 },
];

function FolderDrawer({ accent, currentFolder, currentAccount, onPickFolder, onPickAccount, onClose, onSettings }) {
  const [showAccounts, setShowAccounts] = useState_dr(false);
  const acct = ACCOUNTS.find(a => a.id === currentAccount) || ACCOUNTS[0];

  return (
    <div onClick={onClose} style={{
      position: 'absolute', inset: 0, zIndex: 95,
      background: 'rgba(0,0,0,0.55)',
      animation: 'fadeIn 200ms ease',
    }}>
      <div onClick={e => e.stopPropagation()} style={{
        position: 'absolute', top: 0, bottom: 0, left: 0, width: 320,
        background: '#0A0A0A',
        borderRight: '0.5px solid rgba(84,84,88,0.28)',
        display: 'flex', flexDirection: 'column',
        animation: 'slideInLeft 280ms cubic-bezier(.2,.8,.2,1)',
      }}>
        {/* Account header */}
        <div style={{ padding: '60px 20px 14px' }}>
          <button onClick={() => setShowAccounts(s => !s)} style={{
            appearance: 'none', border: 'none', background: 'transparent',
            padding: 0, cursor: 'pointer', width: '100%',
            display: 'flex', alignItems: 'center', gap: 12,
          }}>
            <div style={{ flex: 1, textAlign: 'left', minWidth: 0 }}>
              <div style={{ color: '#fff', fontSize: 17, fontWeight: 600, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                {acct.name}
              </div>
              <div style={{ color: '#8E8E93', fontSize: 13, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                {acct.email}
              </div>
            </div>
            <div style={{
              transform: showAccounts ? 'rotate(180deg)' : 'rotate(0)',
              transition: 'transform 200ms', display: 'flex',
            }}>
              <IconChevronDown size={18} color="#8E8E93"/>
            </div>
          </button>
        </div>

        {showAccounts && (
          <div style={{
            padding: '4px 10px 10px',
            borderBottom: '0.5px solid rgba(84,84,88,0.28)',
          }}>
            {ACCOUNTS.filter(a => a.id !== acct.id).map(a => (
              <button key={a.id} onClick={() => { onPickAccount(a.id); setShowAccounts(false); }} style={{
                appearance: 'none', border: 'none', background: 'transparent',
                width: '100%', display: 'flex', alignItems: 'center', gap: 12,
                padding: '10px 10px', borderRadius: 10, cursor: 'pointer',
              }}>
                <div style={{ flex: 1, textAlign: 'left', minWidth: 0 }}>
                  <div style={{ color: '#fff', fontSize: 14, fontWeight: 500, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{a.name}</div>
                  <div style={{ color: '#636366', fontSize: 12, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{a.email}</div>
                </div>
                {a.unread > 0 && (
                  <span style={{ color: '#8E8E93', fontSize: 12, fontWeight: 500 }}>{a.unread}</span>
                )}
              </button>
            ))}
            <button style={{
              appearance: 'none', border: 'none', background: 'transparent',
              width: '100%', display: 'flex', alignItems: 'center', gap: 12,
              padding: '10px 10px', borderRadius: 10, cursor: 'pointer',
              color: accent, fontSize: 14, fontWeight: 500,
            }}>
              <span style={{ width: 16, textAlign: 'center', fontSize: 18, fontWeight: 300 }}>+</span>
              Add another account
            </button>
          </div>
        )}

        {/* Folders */}
        <div style={{ flex: 1, overflowY: 'auto', padding: '8px 10px' }}>
          <SectionHeader>Mailboxes</SectionHeader>
          {FOLDERS.map(f => {
            const Ico = f.icon;
            const active = f.id === currentFolder;
            return (
              <button key={f.id} onClick={() => onPickFolder(f.id)} style={{
                appearance: 'none', border: 'none',
                background: active ? `${accent}1F` : 'transparent',
                width: '100%', display: 'flex', alignItems: 'center', gap: 14,
                padding: '11px 12px', borderRadius: 10, cursor: 'pointer',
                marginBottom: 2,
              }}>
                <Ico size={19} color={active ? accent : '#C7C7CC'} stroke={1.8}/>
                <span style={{
                  flex: 1, textAlign: 'left',
                  color: active ? '#fff' : '#E5E5EA',
                  fontSize: 15, fontWeight: active ? 600 : 500,
                }}>{f.label}</span>
                {f.count > 0 && (
                  <span style={{
                    fontSize: 12, fontWeight: 600,
                    color: active ? accent : '#8E8E93',
                  }}>{f.count}</span>
                )}
              </button>
            );
          })}

          <SectionHeader>Labels</SectionHeader>
          {Object.entries(LABELS).map(([id, l]) => (
            <button key={id} style={{
              appearance: 'none', border: 'none', background: 'transparent',
              width: '100%', display: 'flex', alignItems: 'center', gap: 14,
              padding: '11px 12px', borderRadius: 10, cursor: 'pointer',
              marginBottom: 2,
            }}>
              <span style={{
                width: 19, display: 'flex', justifyContent: 'center',
              }}>
                <span style={{ width: 9, height: 9, borderRadius: 99, background: l.color }}/>
              </span>
              <span style={{ flex: 1, textAlign: 'left', color: '#E5E5EA', fontSize: 15, fontWeight: 500 }}>
                {l.name}
              </span>
            </button>
          ))}
          <button style={{
            appearance: 'none', border: 'none', background: 'transparent',
            width: '100%', display: 'flex', alignItems: 'center', gap: 14,
            padding: '11px 12px', borderRadius: 10, cursor: 'pointer',
            color: '#8E8E93', fontSize: 14,
          }}>
            <span style={{ width: 19, textAlign: 'center', fontSize: 16 }}>+</span>
            <span style={{ flex: 1, textAlign: 'left' }}>New label</span>
          </button>
        </div>

        {/* Footer */}
        <button onClick={onSettings} style={{
          appearance: 'none', border: 'none', background: 'transparent',
          display: 'flex', alignItems: 'center', gap: 14,
          padding: '14px 22px 28px', cursor: 'pointer',
          borderTop: '0.5px solid rgba(84,84,88,0.28)',
          color: '#C7C7CC', fontSize: 15, fontWeight: 500,
        }}>
          <IconUser size={19} color="#C7C7CC" stroke={1.8}/>
          Settings
        </button>
      </div>
    </div>
  );
}

function SectionHeader({ children }) {
  return (
    <div style={{
      fontSize: 11, fontWeight: 600, letterSpacing: 0.6,
      textTransform: 'uppercase', color: '#636366',
      padding: '14px 12px 8px',
    }}>{children}</div>
  );
}

window.FolderDrawer = FolderDrawer;
window.ACCOUNTS = ACCOUNTS;
window.FOLDERS = FOLDERS;

/* ===== Email App Files/mailboxes.jsx ===== */
// Apple Mail-style "Mailboxes" root screen — lists all accounts + unified folders
const { useState: useState_mb } = React;

function MailboxesScreen({ accent, currentAccount, onPickAccount, onOpenInbox, onOpenFolder, onEdit }) {
  const totalUnread = ACCOUNTS.reduce((s, a) => s + (a.unread || 0), 0);
  const [expandedAcct, setExpandedAcct] = useState_mb({});

  const toggle = (id) => setExpandedAcct(p => ({ ...p, [id]: !p[id] }));

  const ACCT_FOLDERS = [
    { id: 'drafts',  label: 'Drafts',  icon: IconCompose, count: 2 },
    { id: 'sent',    label: 'Sent',    icon: IconSend },
    { id: 'snoozed', label: 'Snoozed', icon: IconClock },
    { id: 'archive', label: 'Archive', icon: IconArchive },
    { id: 'trash',   label: 'Trash',   icon: IconTrash },
    { id: 'spam',    label: 'Junk',    icon: IconClose },
  ];

  const Row = ({ icon: Ico, label, count, isLast, onClick, indent = 0, faded, chevron = true }) => (
    <button onClick={onClick} style={{
      appearance: 'none', border: 'none', background: 'transparent',
      width: '100%', display: 'flex', alignItems: 'center', gap: 14,
      padding: `13px 20px 13px ${20 + indent * 28}px`,
      borderBottom: isLast ? 'none' : '0.5px solid rgba(84,84,88,0.28)',
      cursor: 'pointer', textAlign: 'left',
      opacity: faded ? 0.7 : 1,
    }}>
      {Ico && <Ico size={22} color={accent} stroke={1.7}/>}
      <span style={{ flex: 1, color: '#fff', fontSize: 17, fontWeight: 400, letterSpacing: -0.2 }}>{label}</span>
      {count > 0 && (
        <span style={{ color: '#8E8E93', fontSize: 17, fontVariantNumeric: 'tabular-nums' }}>{count}</span>
      )}
      {chevron && <IconChevronRight size={14} color="#48484A" stroke={2.2}/>}
    </button>
  );

  return (
    <div style={{ height: '100%', background: '#000', color: '#fff', display: 'flex', flexDirection: 'column', position: 'relative' }}>
      {/* Top bar */}
      <div style={{
        padding: '60px 16px 6px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        <button onClick={onEdit} style={{
          ...btn(), width: 'auto', padding: '0 8px', color: accent,
          fontSize: 17, fontWeight: 400,
        }}>Edit</button>
        <div style={{ flex: 1 }}/>
      </div>

      <div style={{ padding: '6px 20px 14px' }}>
        <h1 style={{
          margin: 0, fontSize: 34, fontWeight: 700, letterSpacing: -0.6, color: '#fff',
        }}>Mailboxes</h1>
      </div>

      <div style={{ flex: 1, overflowY: 'auto', paddingBottom: 40 }}>
        {/* Unified — All Inboxes with per-account inboxes below */}
        <div style={{ background: '#0A0A0A' }}>
          <Row icon={IconInbox} label="All Inboxes" count={totalUnread}
               onClick={() => onOpenInbox()}/>
          {ACCOUNTS.map(a => (
            <Row key={a.id}
                 icon={IconInbox}
                 label={a.name} count={a.unread}
                 indent={1}
                 onClick={() => { onPickAccount(a.id); onOpenInbox(); }}/>
          ))}
          <Row icon={IconStarFilled} label="VIP" count={2}
               onClick={() => onOpenFolder && onOpenFolder('vip', 'VIP')}/>
          <Row icon={IconStar} label="Flagged" count={2} isLast
               onClick={() => onOpenFolder && onOpenFolder('flagged', 'Flagged')}/>
        </div>

        {/* Accounts — collapsible per-account folder groups */}
        <div style={{
          fontSize: 13, fontWeight: 600, color: '#8E8E93',
          textTransform: 'uppercase', letterSpacing: 0.5,
          padding: '24px 20px 8px',
        }}>Accounts</div>
        <div style={{ background: '#0A0A0A' }}>
          {ACCOUNTS.map((a, i) => {
            const open = !!expandedAcct[a.id];
            return (
              <div key={a.id} style={{
                borderBottom: i === ACCOUNTS.length - 1 ? 'none' : '0.5px solid rgba(84,84,88,0.28)',
              }}>
                <button onClick={() => toggle(a.id)} style={{
                  appearance: 'none', border: 'none', background: 'transparent',
                  width: '100%', display: 'flex', alignItems: 'center', gap: 14,
                  padding: '13px 20px',
                  cursor: 'pointer', textAlign: 'left',
                }}>
                  <IconInbox size={22} color={accent} stroke={1.7}/>
                  <span style={{ flex: 1, color: '#fff', fontSize: 17, fontWeight: 400, letterSpacing: -0.2 }}>
                    {a.name}
                  </span>
                  {a.unread > 0 && (
                    <span style={{ color: '#8E8E93', fontSize: 17, fontVariantNumeric: 'tabular-nums' }}>{a.unread}</span>
                  )}
                  <span style={{
                    display: 'flex',
                    transform: open ? 'rotate(90deg)' : 'rotate(0)',
                    transition: 'transform 200ms',
                  }}>
                    <IconChevronRight size={14} color="#48484A" stroke={2.2}/>
                  </span>
                </button>
                {open && (
                  <div style={{
                    overflow: 'hidden',
                    animation: 'fadeIn 180ms ease',
                  }}>
                    <Row icon={IconInbox} label="Inbox" count={a.unread}
                         indent={1}
                         onClick={() => { onPickAccount(a.id); onOpenInbox(); }}/>
                    {ACCT_FOLDERS.map((f, j) => (
                      <Row key={f.id} icon={f.icon} label={f.label} count={f.count}
                           indent={1} isLast={j === ACCT_FOLDERS.length - 1}/>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
          <button onClick={() => onEdit && onEdit('add')} style={{
            appearance: 'none', border: 'none', background: 'transparent',
            width: '100%', display: 'flex', alignItems: 'center', gap: 14,
            padding: '13px 20px',
            cursor: 'pointer', textAlign: 'left',
            borderTop: '0.5px solid rgba(84,84,88,0.28)',
          }}>
            <span style={{
              width: 22, height: 22, borderRadius: 11,
              border: `1.5px dashed ${accent}99`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: accent, fontSize: 16, fontWeight: 300, lineHeight: 1,
            }}>+</span>
            <span style={{ flex: 1, color: accent, fontSize: 17, fontWeight: 400, letterSpacing: -0.2 }}>
              Add Account
            </span>
          </button>
        </div>

      </div>

      {/* Sync-status bar — bottom centered */}
      <div style={{
        position: 'absolute', left: 0, right: 0, bottom: 4, zIndex: 4,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        gap: 7,
        color: '#636366', fontSize: 11, fontWeight: 500,
        letterSpacing: 0.1, fontVariantNumeric: 'tabular-nums',
        pointerEvents: 'none',
      }}>
        <span>Updated just now</span>
      </div>
    </div>
  );
}

window.MailboxesScreen = MailboxesScreen;

/* ===== Email App Files/inbox.jsx ===== */
// Inbox screen — compact Superhuman-style rows, swipeable, split tabs
const { useState, useRef, useEffect } = React;

function Avatar({ initials, color, size = 26, dim = false, kind = 'brand' }) {
  // Flat circle. Persons get a saturated gradient + white initials (contact-photo placeholder).
  // Brands get a tinted bg with brand-color initials.
  const isLight = color === '#F2F2F7';
  const isPerson = kind === 'person';

  // Deterministic darker shade for gradient — drop lightness via overlay.
  const bg = isPerson
    ? `radial-gradient(circle at 30% 25%, ${color}, ${color}99 70%, ${color}66)`
    : (isLight ? '#2C2C2E' : `${color}26`);
  const fg = isPerson ? '#fff' : (isLight ? '#E5E5EA' : color);

  return (
    <div style={{
      width: size, height: size, borderRadius: '50%', flexShrink: 0,
      background: bg,
      color: fg,
      opacity: dim ? 0.55 : 1,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      fontSize: size * 0.4, fontWeight: 600, letterSpacing: 0.2,
      fontFamily: '-apple-system, system-ui',
      boxShadow: isPerson ? `inset 0 -1px 2px rgba(0,0,0,0.18), 0 0 0 0.5px ${color}40` : 'none',
      textShadow: isPerson ? '0 1px 1px rgba(0,0,0,0.12)' : 'none',
    }}>{initials}</div>
  );
}

function LabelDot({ label }) {
  if (!label || !LABELS[label]) return null;
  return (
    <span style={{
      width: 5, height: 5, borderRadius: 99, flexShrink: 0,
      background: LABELS[label].color,
    }} />
  );
}

function InboxRow({ email, accent, density, onOpen, onSwipeLeft, onSwipeRight, isPinned, isSnoozed, isDone }) {
  const [dx, setDx] = useState(0);
  const [pressed, setPressed] = useState(false);
  const startX = useRef(0);
  const tracking = useRef(false);

  const onPointerDown = (e) => {
    startX.current = e.clientX;
    tracking.current = true;
    setPressed(true);
  };
  const onPointerMove = (e) => {
    if (!tracking.current) return;
    const d = e.clientX - startX.current;
    setDx(d);
  };
  const onPointerUp = () => {
    tracking.current = false;
    setPressed(false);
    if (dx > 80) { onSwipeRight && onSwipeRight(); setDx(0); }
    else if (dx < -80) { onSwipeLeft && onSwipeLeft(); setDx(0); }
    else setDx(0);
  };

  const unread = email.unread && !isDone;
  const heightPx = density === 'compact' ? 56 : 70;
  const fadeOut = isDone || isSnoozed;

  // Color for swipe action bg
  const leftBg = '#FF453A';   // archive (left swipe → archive)
  const rightBg = accent;      // done

  return (
    <div style={{ position: 'relative', height: heightPx, overflow: 'hidden' }}>
      {/* Action layers behind */}
      <div style={{
        position: 'absolute', inset: 0, display: 'flex',
        background: dx > 0 ? rightBg : leftBg,
      }}>
        <div style={{
          flex: 1, display: 'flex', alignItems: 'center',
          justifyContent: dx > 0 ? 'flex-start' : 'flex-end',
          padding: '0 24px', color: '#fff', gap: 8, fontWeight: 600, fontSize: 14,
        }}>
          {dx > 0 ? <><IconCheck size={20}/> Done</> : <><IconArchive size={20}/> Archive</>}
        </div>
      </div>

      {/* The row itself */}
      <div
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
        onClick={() => Math.abs(dx) < 4 && onOpen()}
        style={{
          position: 'absolute', inset: 0,
          transform: `translateX(${dx}px)`,
          transition: tracking.current ? 'none' : 'transform 220ms cubic-bezier(.2,.8,.2,1)',
          background: pressed ? '#0A0A0A' : '#000',
          display: 'flex', alignItems: 'center', gap: 12,
          padding: '0 16px',
          borderBottom: '0.5px solid rgba(84,84,88,0.28)',
          opacity: fadeOut ? 0.4 : 1,
          cursor: 'pointer', touchAction: 'pan-y',
          userSelect: 'none',
        }}>
        {/* Unread dot */}
        <div style={{
          width: 7, height: 7, borderRadius: 99, flexShrink: 0,
          background: unread ? accent : 'transparent',
        }} />

        <div style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', gap: density === 'compact' ? 0 : 2 }}>
          {density === 'compact' ? (
            // Single line: sender · subject — preview
            <div style={{
              display: 'flex', alignItems: 'baseline', gap: 8,
              fontSize: 15, lineHeight: '20px',
              whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
            }}>
              <span style={{
                color: unread ? '#fff' : '#8E8E93',
                fontWeight: unread ? 600 : 500,
                flexShrink: 0,
              }}>{email.from.name}</span>
              <span style={{ color: unread ? '#fff' : '#8E8E93', fontWeight: unread ? 500 : 400, flexShrink: 0 }}>·</span>
              <span style={{
                color: unread ? '#fff' : '#8E8E93',
                fontWeight: unread ? 500 : 400,
                overflow: 'hidden', textOverflow: 'ellipsis',
              }}>{email.subject}</span>
              <span style={{ color: '#636366', flex: 1, overflow: 'hidden', textOverflow: 'ellipsis', fontWeight: 400 }}>
                — {email.preview}
              </span>
            </div>
          ) : (
            <>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 6, fontSize: 15 }}>
                <span style={{ color: unread ? '#fff' : '#C7C7CC', fontWeight: unread ? 600 : 500, flex: 1, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                  {email.from.name}
                </span>
              </div>
              <div style={{ color: unread ? '#fff' : '#8E8E93', fontSize: 14, fontWeight: unread ? 500 : 400, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                {email.subject}
              </div>
              <div style={{ color: '#636366', fontSize: 13, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                {email.preview}
              </div>
            </>
          )}
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 4, flexShrink: 0 }}>
          <span style={{ fontSize: 12, color: unread ? accent : '#636366', fontWeight: 500, fontVariantNumeric: 'tabular-nums' }}>
            {email.time}
          </span>
          <div style={{ display: 'flex', gap: 5, alignItems: 'center', height: 10 }}>
            {isPinned && <IconPin size={11} color="#8E8E93" stroke={2}/>}
            {isSnoozed && <IconClock size={11} color="#8E8E93" stroke={2}/>}
            <LabelDot label={email.label}/>
          </div>
        </div>
      </div>
    </div>
  );
}

function relTime(ms) {
  const s = Math.floor(ms / 1000);
  if (s < 6) return 'just now';
  if (s < 60) return `${s}s ago`;
  const m = Math.floor(s / 60);
  if (m < 60) return `${m} min${m === 1 ? '' : 's'} ago`;
  const h = Math.floor(m / 60);
  if (h < 24) return `${h}h ago`;
  const d = Math.floor(h / 24);
  return `${d}d ago`;
}

function Spinner({ size = 16, color = '#8E8E93', spinning = false, progress = 1 }) {
  const r = size / 2 - 2;
  const c = 2 * Math.PI * r;
  return (
    <div style={{
      width: size, height: size,
      animation: spinning ? 'spin 0.9s linear infinite' : 'none',
      display: 'inline-flex',
    }}>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        <circle cx={size/2} cy={size/2} r={r}
          fill="none" stroke={color} strokeOpacity={spinning ? 0.18 : 0.18} strokeWidth="1.5"/>
        <circle cx={size/2} cy={size/2} r={r}
          fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round"
          strokeDasharray={`${c * (spinning ? 0.28 : Math.max(0.05, progress) * 0.92)} ${c}`}
          transform={`rotate(-90 ${size/2} ${size/2})`}/>
      </svg>
    </div>
  );
}

function InboxScreen({ accent, density, splitInbox, currentFolder, currentFolderLabel, emailState, setEmailState, onOpen, onCompose, onSearch, onCmd, onMenu, onMailboxes }) {
  const [tab, setTab] = useState('important'); // important | other | all
  const listRef = useRef(null);
  const pullStart = useRef(null);
  const [pullY, setPullY] = useState(0);
  const [refreshing, setRefreshing] = useState(false);
  const [lastRefresh, setLastRefresh] = useState(() => Date.now() - 2 * 60 * 1000);
  const [now, setNow] = useState(Date.now());

  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 30 * 1000);
    return () => clearInterval(id);
  }, []);

  const triggerRefresh = () => {
    if (refreshing) return;
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
      setLastRefresh(Date.now());
      setNow(Date.now());
    }, 1400);
  };

  const onListPointerDown = (e) => {
    if (refreshing) return;
    if (listRef.current && listRef.current.scrollTop <= 0) {
      pullStart.current = e.clientY;
    }
  };
  const onListPointerMove = (e) => {
    if (pullStart.current == null) return;
    const dy = e.clientY - pullStart.current;
    if (dy <= 0) { setPullY(0); return; }
    // Damped pull
    setPullY(Math.min(110, dy * 0.55));
  };
  const onListPointerUp = () => {
    if (pullY >= 60) triggerRefresh();
    setPullY(0);
    pullStart.current = null;
  };

  const visible = EMAILS.filter(e => {
    const s = emailState[e.id] || {};
    if (s.archived || s.deleted) return false;
    if (currentFolder === 'vip')     return e.from.kind === 'person';
    if (currentFolder === 'flagged') return !!e.flagged || !!s.flagged;
    if (currentFolder === 'sent' || currentFolder === 'drafts' || currentFolder === 'archive' || currentFolder === 'trash' || currentFolder === 'snoozed') return false;
    if (!splitInbox) return true;
    if (tab === 'all') return true;
    return e.folder === tab;
  });

  const importantCount = EMAILS.filter(e => {
    const s = emailState[e.id] || {};
    return !s.archived && !s.deleted && e.folder === 'important' && e.unread && !s.done;
  }).length;
  const otherCount = EMAILS.filter(e => {
    const s = emailState[e.id] || {};
    return !s.archived && !s.deleted && e.folder === 'other' && e.unread && !s.done;
  }).length;

  return (
    <div style={{ height: '100%', background: '#000', color: '#fff', display: 'flex', flexDirection: 'column' }}>
      {/* Top chrome */}
      <div style={{ paddingTop: 50, paddingBottom: 8 }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 20px 6px' }}>
          <button onClick={onMailboxes} style={{
            ...btn(), width: 'auto', padding: '0 8px', color: accent, gap: 2,
          }}>
            <IconChevronLeft size={22} color={accent} stroke={2.2}/>
            <span style={{ fontSize: 17, fontWeight: 400 }}>Mailboxes</span>
          </button>
          <div style={{ display: 'flex', gap: 6 }}>
            <button onClick={onSearch} style={btn()}><IconSearch size={20} color="#fff"/></button>
            <button onClick={onMenu} style={btn()}><IconMenu size={20} color="#fff"/></button>
          </div>
        </div>

        <div style={{ padding: '6px 20px 0' }}>
          <h1 style={{
            margin: 0, fontSize: 34, fontWeight: 700, letterSpacing: -0.6,
            color: '#fff',
          }}>{currentFolderLabel || 'Inbox'}</h1>
          <div style={{ fontSize: 13, color: '#8E8E93', marginTop: 2, fontWeight: 500 }}>
            {importantCount + otherCount === 0 ? 'You\'re all caught up' :
              `${importantCount + otherCount} unread${splitInbox ? ` · ${importantCount} important · ${otherCount} other` : ''}`}
          </div>
        </div>

        {/* Split inbox tabs */}
        {splitInbox && currentFolder === 'inbox' && (
          <div style={{ display: 'flex', gap: 6, padding: '14px 20px 6px' }}>
            {[['important', 'Important', importantCount], ['other', 'Other', otherCount]].map(([k, label, n]) => (
              <button key={k} onClick={() => setTab(k)} style={{
                appearance: 'none', border: 'none', background: 'transparent',
                padding: '6px 0', marginRight: 18,
                color: tab === k ? '#fff' : '#8E8E93',
                fontSize: 15, fontWeight: 600, letterSpacing: -0.2,
                position: 'relative', cursor: 'pointer',
              }}>
                {label}
                {n > 0 && (
                  <span style={{
                    marginLeft: 6, fontSize: 11, fontWeight: 600,
                    color: tab === k ? '#000' : '#fff',
                    background: tab === k ? accent : '#2C2C2E',
                    borderRadius: 99, padding: '1px 6px', verticalAlign: 'middle',
                  }}>{n}</span>
                )}
                {tab === k && (
                  <span style={{
                    position: 'absolute', bottom: 0, left: 0, right: 18,
                    height: 2, background: accent, borderRadius: 99,
                  }}/>
                )}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* List */}
      <div ref={listRef}
           onPointerDown={onListPointerDown}
           onPointerMove={onListPointerMove}
           onPointerUp={onListPointerUp}
           onPointerCancel={onListPointerUp}
           style={{ flex: 1, overflowY: 'auto', overflowX: 'hidden', position: 'relative' }}>
        {/* Pull-to-refresh indicator */}
        <div style={{
          height: refreshing ? 44 : pullY,
          transition: pullStart.current == null ? 'height 240ms cubic-bezier(.2,.8,.2,1)' : 'none',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          overflow: 'hidden', flexShrink: 0,
        }}>
          <div style={{
            opacity: refreshing ? 1 : Math.min(1, pullY / 56),
            transform: refreshing ? 'none' : `rotate(${Math.min(360, pullY * 4)}deg)`,
            transition: pullStart.current == null && !refreshing ? 'opacity 200ms' : 'none',
          }}>
            <Spinner size={20} color={accent === '#F2F2F7' ? '#8E8E93' : accent}
                     spinning={refreshing}
                     progress={Math.min(1, pullY / 60)}/>
          </div>
        </div>
        {visible.map(e => {
          const s = emailState[e.id] || {};
          return (
            <InboxRow
              key={e.id} email={e} accent={accent} density={density}
              isPinned={s.pinned || e.pinned} isSnoozed={s.snoozed} isDone={s.done}
              onOpen={() => onOpen(e.id)}
              onSwipeLeft={() => setEmailState(p => ({ ...p, [e.id]: { ...p[e.id], archived: true } }))}
              onSwipeRight={() => setEmailState(p => ({ ...p, [e.id]: { ...p[e.id], done: true } }))}
            />
          );
        })}
        {visible.length === 0 && (
          <div style={{ padding: 60, textAlign: 'center', color: '#636366', fontSize: 14 }}>
            <div style={{ fontSize: 60, marginBottom: 12, color: '#2C2C2E' }}>
              <IconInbox size={60}/>
            </div>
            Nothing here.
          </div>
        )}
        <div style={{ height: 100 }}/>
      </div>

      {/* Floating compose */}
      <button onClick={onCompose} style={{
        position: 'absolute', right: 20, bottom: 44, zIndex: 5,
        width: 56, height: 56, borderRadius: 28,
        background: accent, color: '#000', border: 'none',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        boxShadow: `0 8px 24px ${accent}44, 0 2px 8px rgba(0,0,0,0.4)`,
        cursor: 'pointer',
      }}>
        <IconCompose size={24} color="#000" stroke={2}/>
      </button>

      {/* Sync-status bar — bottom centered */}
      <div style={{
        position: 'absolute', left: 0, right: 0, bottom: 4, zIndex: 4,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        gap: 7,
        color: '#636366', fontSize: 11, fontWeight: 500,
        letterSpacing: 0.1, fontVariantNumeric: 'tabular-nums',
        pointerEvents: 'none',
      }}>
        <Spinner size={11} color="#636366" spinning={refreshing} progress={1}/>
        <span>{refreshing ? 'Checking for mail…' : `Updated ${relTime(now - lastRefresh)}`}</span>
      </div>
    </div>
  );
}

function btn(extra = {}) {
  return {
    appearance: 'none', border: 'none', background: 'transparent',
    width: 36, height: 36, borderRadius: 18, padding: 0,
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    cursor: 'pointer', color: '#fff',
    ...extra,
  };
}

window.InboxScreen = InboxScreen;
window.Avatar = Avatar;
window.LabelDot = LabelDot;
window.btn = btn;

/* ===== Email App Files/detail.jsx ===== */
// Email detail view — thread, sender card, quick replies, reply bar
const { useState: useState_d } = React;

function ThreadMessage({ msg, isLast, accent }) {
  const [open, setOpen] = useState_d(!msg.collapsed);

  if (!open && msg.collapsed) {
    return (
      <button onClick={() => setOpen(true)} style={{
        appearance: 'none', border: 'none', background: '#0E0E0E',
        width: '100%', textAlign: 'left',
        padding: '12px 16px',
        borderRadius: 12, margin: '0 0 8px',
        color: '#8E8E93', fontSize: 14,
        display: 'flex', alignItems: 'center', gap: 10,
        cursor: 'pointer',
      }}>
        <Avatar initials={msg.initials} color="#8E8E93" size={22} dim/>
        <span style={{ color: '#C7C7CC', fontWeight: 500 }}>{msg.name}</span>
        <span style={{ flex: 1, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
          {msg.body.split('\n')[0]}
        </span>
        <span style={{ fontSize: 12 }}>{msg.time.split(',')[0]}</span>
      </button>
    );
  }

  return (
    <div style={{ padding: '4px 0 24px' }}>
      <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start', marginBottom: 14 }}>
        <Avatar initials={msg.initials} color={msg.from === 'me' ? accent : '#5AC8FA'} kind="person" size={36}/>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 8 }}>
            <div style={{ color: '#fff', fontWeight: 600, fontSize: 15 }}>{msg.name}</div>
            <div style={{ color: '#636366', fontSize: 12, fontVariantNumeric: 'tabular-nums' }}>{msg.time}</div>
          </div>
          <div style={{ color: '#8E8E93', fontSize: 13, marginTop: 1 }}>
            to me · <span style={{ color: '#636366' }}>{msg.email}</span>
          </div>
        </div>
      </div>
      <div style={{
        color: '#E5E5EA', fontSize: 16, lineHeight: 1.5, letterSpacing: -0.2,
        whiteSpace: 'pre-wrap', paddingLeft: 0,
      }}>{msg.body}</div>
      {!isLast && <div style={{ height: 0.5, background: 'rgba(84,84,88,0.28)', marginTop: 24 }}/>}
    </div>
  );
}

function DetailScreen({ emailId, accent, emailState, setEmailState, onBack, onReply, onCompose }) {
  const email = EMAILS.find(e => e.id === emailId);
  if (!email) return null;
  const s = emailState[emailId] || {};
  const isPinned = s.pinned || email.pinned;

  const toggle = (key) => setEmailState(p => ({ ...p, [emailId]: { ...p[emailId], [key]: !(p[emailId] || {})[key] } }));

  return (
    <div style={{ height: '100%', background: '#000', color: '#fff', display: 'flex', flexDirection: 'column' }}>
      {/* Top bar */}
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '60px 12px 6px',
      }}>
        <button onClick={onBack} style={{ ...btn(), color: accent, gap: 2, width: 'auto', padding: '0 8px' }}>
          <IconChevronLeft size={22} color={accent} stroke={2.2}/>
          <span style={{ fontSize: 17, fontWeight: 400 }}>Inbox</span>
        </button>
        <div style={{ display: 'flex', gap: 2 }}>
          <button onClick={() => { setEmailState(p => ({ ...p, [emailId]: { ...p[emailId], snoozed: true } })); onBack(); }} style={btn()}>
            <IconClock size={20} color="#fff"/>
          </button>
          <button onClick={() => { setEmailState(p => ({ ...p, [emailId]: { ...p[emailId], archived: true } })); onBack(); }} style={btn()}>
            <IconArchive size={20} color="#fff"/>
          </button>
          <button onClick={() => toggle('pinned')} style={btn()}>
            {isPinned ? <IconStarFilled size={20} color={accent}/> : <IconStar size={20} color="#fff"/>}
          </button>
          <button style={btn()}><IconMore size={20} color="#fff"/></button>
        </div>
      </div>

      {/* Body */}
      <div style={{ flex: 1, overflowY: 'auto', padding: '0 20px 120px' }}>
        {/* Subject + labels */}
        <div style={{ padding: '8px 0 18px' }}>
          <h1 style={{
            margin: 0, fontSize: 26, fontWeight: 700, letterSpacing: -0.5, color: '#fff',
            lineHeight: 1.2,
          }}>{email.subject}</h1>
          <div style={{ display: 'flex', gap: 6, alignItems: 'center', marginTop: 10, flexWrap: 'wrap' }}>
            {email.label && (
              <span style={{
                fontSize: 11, fontWeight: 600, letterSpacing: 0.3, textTransform: 'uppercase',
                color: LABELS[email.label].color,
                background: `${LABELS[email.label].color}1F`,
                padding: '3px 8px', borderRadius: 4,
              }}>{LABELS[email.label].name}</span>
            )}
            <span style={{ fontSize: 12, color: '#636366' }}>· {email.thread.length} message{email.thread.length !== 1 ? 's' : ''}</span>
            {email.readBy && (
              <span style={{
                fontSize: 11, fontWeight: 500, color: '#30D158',
                display: 'flex', alignItems: 'center', gap: 4, marginLeft: 6,
              }}>
                <IconRead size={12} color="#30D158" stroke={2.2}/> Read {email.readBy}
              </span>
            )}
          </div>
        </div>

        <div style={{ height: 0.5, background: 'rgba(84,84,88,0.28)', marginBottom: 18 }}/>

        {/* Thread */}
        {email.thread.map((m, i) => (
          <ThreadMessage key={m.id} msg={m} isLast={i === email.thread.length - 1} accent={accent}/>
        ))}

        {email.thread.length === 0 && (
          <div style={{ color: '#8E8E93', fontSize: 14, padding: 40, textAlign: 'center' }}>
            (Empty thread)
          </div>
        )}

        {/* Smart reply chips */}
        {email.thread.length > 0 && (
          <div style={{ marginTop: 24 }}>
            <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: 0.6,
                          textTransform: 'uppercase', color: '#636366', marginBottom: 10 }}>
              Suggested replies
            </div>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              {['Sounds good — let\'s do it', 'Can we sync briefly?', 'I\'ll get back to you tomorrow'].map(t => (
                <button key={t} onClick={() => onReply(t)} style={{
                  appearance: 'none', background: '#1C1C1E', color: '#E5E5EA',
                  border: '0.5px solid rgba(84,84,88,0.4)',
                  padding: '10px 14px', borderRadius: 18,
                  fontSize: 14, fontWeight: 500, cursor: 'pointer',
                  whiteSpace: 'nowrap',
                }}>{t}</button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Reply bar */}
      <div style={{
        position: 'absolute', left: 0, right: 0, bottom: 0,
        padding: '10px 16px 30px',
        background: 'linear-gradient(to top, #000 60%, rgba(0,0,0,0))',
      }}>
        <button onClick={onReply} style={{
          width: '100%', appearance: 'none', border: 'none',
          background: '#1C1C1E', color: '#8E8E93',
          padding: '14px 20px', borderRadius: 28,
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          gap: 12, fontSize: 15, cursor: 'pointer', textAlign: 'left',
        }}>
          <span style={{ flex: 1, minWidth: 0, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
            Reply to {email.from.name.split(' ')[0]}…
          </span>
          <div style={{ display: 'flex', gap: 14, flexShrink: 0 }}>
            <IconReplyAll size={20} color="#8E8E93"/>
            <IconForward size={20} color="#8E8E93"/>
          </div>
        </button>
      </div>
    </div>
  );
}

window.DetailScreen = DetailScreen;

/* ===== Email App Files/search.jsx ===== */
// Search screen + Command palette (bottom sheet)
const { useState: useState_s, useMemo } = React;

function SearchScreen({ accent, onClose, onOpen }) {
  const [q, setQ] = useState_s('');
  const results = useMemo(() => {
    if (!q.trim()) return [];
    const term = q.toLowerCase();
    return EMAILS.filter(e =>
      e.from.name.toLowerCase().includes(term) ||
      e.subject.toLowerCase().includes(term) ||
      e.preview.toLowerCase().includes(term)
    );
  }, [q]);

  const recents = ['maya', 'receipts from stripe', 'has:attachment from:dad'];
  const senders = [
    { name: 'Maya Patel',   initials: 'MP', color: '#5AC8FA', kind: 'person' },
    { name: 'Sara Ben-Ami', initials: 'SB', color: '#BF5AF2', kind: 'person' },
    { name: 'Dad',          initials: 'DS', color: '#30D158', kind: 'person' },
    { name: 'Jordan Lee',   initials: 'JL', color: '#FF9F0A', kind: 'person' },
    { name: 'Priya Shah',   initials: 'PS', color: '#FF453A', kind: 'person' },
    { name: 'Alex Nguyen',  initials: 'AN', color: '#32D74B', kind: 'person' },
  ];

  return (
    <div style={{
      position: 'absolute', inset: 0, zIndex: 90,
      background: '#000', color: '#fff',
      display: 'flex', flexDirection: 'column',
      animation: 'fadeIn 180ms ease',
    }}>
      <div style={{ padding: '60px 12px 8px', display: 'flex', alignItems: 'center', gap: 8 }}>
        <div style={{
          flex: 1, background: '#1C1C1E', borderRadius: 12,
          display: 'flex', alignItems: 'center', gap: 8, padding: '8px 12px',
        }}>
          <IconSearch size={17} color="#8E8E93"/>
          <input autoFocus value={q} onChange={e => setQ(e.target.value)}
            placeholder="Search mail" style={{
              flex: 1, background: 'transparent', border: 'none', outline: 'none',
              color: '#fff', fontSize: 16, padding: '4px 0',
              fontFamily: 'inherit',
            }}/>
          {q && (
            <button onClick={() => setQ('')} style={{ ...btn(), width: 20, height: 20 }}>
              <IconClose size={14} color="#8E8E93" stroke={2}/>
            </button>
          )}
        </div>
        <button onClick={onClose} style={{
          ...btn(), width: 'auto', padding: '0 4px', color: accent, fontSize: 17,
        }}>Cancel</button>
      </div>

      <div style={{ flex: 1, overflowY: 'auto', padding: '12px 0' }}>
        {!q && (
          <>
            <Section label="Recent">
              {recents.map(r => (
                <button key={r} onClick={() => setQ(r)} style={searchRow()}>
                  <IconClock size={18} color="#8E8E93"/>
                  <span style={{ flex: 1, textAlign: 'left', color: '#fff', fontSize: 15 }}>{r}</span>
                </button>
              ))}
            </Section>
            <Section label="People">
              <div style={{ display: 'flex', gap: 12, padding: '8px 20px', overflowX: 'auto' }}>
                {senders.map(s => (
                  <div key={s.name} style={{
                    display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6, minWidth: 64,
                  }}>
                    <Avatar initials={s.initials} color={s.color} size={48} kind={s.kind}/>
                    <span style={{ fontSize: 12, color: '#C7C7CC', textAlign: 'center' }}>{s.name.split(' ')[0]}</span>
                  </div>
                ))}
              </div>
            </Section>
            <Section label="Filters">
              {[
                { icon: <IconAttach size={18} color="#8E8E93"/>, label: 'Has attachment' },
                { icon: <IconStar size={18} color="#8E8E93"/>, label: 'Starred' },
                { icon: <IconUnread size={18} color="#8E8E93"/>, label: 'Unread' },
                { icon: <IconLabel size={18} color="#8E8E93"/>, label: 'By label' },
              ].map(f => (
                <button key={f.label} style={searchRow()}>
                  {f.icon}
                  <span style={{ flex: 1, textAlign: 'left', color: '#fff', fontSize: 15 }}>{f.label}</span>
                  <IconChevronRight size={16} color="#48484A"/>
                </button>
              ))}
            </Section>
          </>
        )}

        {q && (
          <>
            <Section label={`${results.length} result${results.length !== 1 ? 's' : ''}`}>
              {results.map(e => (
                <button key={e.id} onClick={() => onOpen(e.id)} style={{
                  ...searchRow(), gap: 12, padding: '12px 20px',
                }}>
                  <Avatar initials={e.from.initials} color={e.from.color} size={32}/>
                  <div style={{ flex: 1, textAlign: 'left', minWidth: 0 }}>
                    <div style={{ color: '#fff', fontSize: 15, fontWeight: 500, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                      {e.from.name}
                    </div>
                    <div style={{ color: '#8E8E93', fontSize: 13, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                      {e.subject}
                    </div>
                  </div>
                  <span style={{ color: '#636366', fontSize: 12 }}>{e.time}</span>
                </button>
              ))}
              {results.length === 0 && (
                <div style={{ color: '#636366', fontSize: 14, padding: '40px 20px', textAlign: 'center' }}>
                  No matches for "{q}"
                </div>
              )}
            </Section>
          </>
        )}
      </div>
    </div>
  );
}

function Section({ label, children }) {
  return (
    <div style={{ marginBottom: 18 }}>
      <div style={{
        fontSize: 11, fontWeight: 600, letterSpacing: 0.6,
        textTransform: 'uppercase', color: '#636366',
        padding: '6px 20px 8px',
      }}>{label}</div>
      {children}
    </div>
  );
}

function searchRow() {
  return {
    appearance: 'none', border: 'none', background: 'transparent',
    width: '100%', display: 'flex', alignItems: 'center', gap: 14,
    padding: '12px 20px', cursor: 'pointer',
  };
}

// ─────────────────────────────────────────────────────────────
// Command palette — bottom sheet
function CommandPalette({ accent, onClose, onAction }) {
  const [q, setQ] = useState_s('');
  const cmds = [
    { id: 'compose', icon: <IconCompose size={18}/>, label: 'New message', hint: 'C' },
    { id: 'mark-read', icon: <IconRead size={18}/>, label: 'Mark all as read', hint: '⇧E' },
    { id: 'archive-all', icon: <IconArchive size={18}/>, label: 'Archive all read', hint: 'E' },
    { id: 'snooze', icon: <IconClock size={18}/>, label: 'Snooze conversation', hint: 'H' },
    { id: 'label', icon: <IconLabel size={18}/>, label: 'Apply label', hint: 'L' },
    { id: 'goto-important', icon: <IconStar size={18}/>, label: 'Go to Important', hint: 'G I' },
    { id: 'goto-other', icon: <IconInbox size={18}/>, label: 'Go to Other', hint: 'G O' },
    { id: 'settings', icon: <IconUser size={18}/>, label: 'Settings', hint: ',' },
  ];
  const filtered = q ? cmds.filter(c => c.label.toLowerCase().includes(q.toLowerCase())) : cmds;

  return (
    <div onClick={onClose} style={{
      position: 'absolute', inset: 0, zIndex: 110,
      background: 'rgba(0,0,0,0.5)',
      display: 'flex', alignItems: 'flex-end',
      animation: 'fadeIn 180ms ease',
    }}>
      <div onClick={e => e.stopPropagation()} style={{
        width: '100%', background: '#1C1C1E',
        borderTopLeftRadius: 16, borderTopRightRadius: 16,
        padding: '8px 0 30px',
        animation: 'sheetUp 280ms cubic-bezier(.2,.8,.2,1)',
        maxHeight: '80%', display: 'flex', flexDirection: 'column',
      }}>
        <div style={{ width: 36, height: 5, background: '#48484A', borderRadius: 3, margin: '8px auto 12px' }}/>
        <div style={{ padding: '0 16px 12px' }}>
          <div style={{
            background: '#2C2C2E', borderRadius: 10,
            display: 'flex', alignItems: 'center', gap: 8, padding: '8px 12px',
          }}>
            <IconCommand size={16} color={accent}/>
            <input autoFocus value={q} onChange={e => setQ(e.target.value)}
              placeholder="Type a command…" style={{
                flex: 1, background: 'transparent', border: 'none', outline: 'none',
                color: '#fff', fontSize: 15, fontFamily: 'inherit',
              }}/>
            <span style={{ color: '#636366', fontSize: 11, fontWeight: 600 }}>esc</span>
          </div>
        </div>
        <div style={{ overflowY: 'auto', flex: 1 }}>
          {filtered.map((c, i) => (
            <button key={c.id} onClick={() => { onAction(c.id); onClose(); }} style={{
              appearance: 'none', border: 'none',
              background: i === 0 ? '#2C2C2E' : 'transparent',
              width: '100%', display: 'flex', alignItems: 'center', gap: 14,
              padding: '12px 20px', cursor: 'pointer',
              color: '#fff',
            }}>
              <div style={{ color: i === 0 ? accent : '#8E8E93', display: 'flex' }}>{c.icon}</div>
              <span style={{ flex: 1, textAlign: 'left', fontSize: 15, color: '#fff' }}>{c.label}</span>
              <span style={{
                fontSize: 11, color: '#8E8E93', fontWeight: 600,
                background: '#3A3A3C', padding: '2px 6px', borderRadius: 4,
                fontFamily: 'ui-monospace, "SF Mono", monospace',
              }}>{c.hint}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

window.SearchScreen = SearchScreen;
window.CommandPalette = CommandPalette;

/* ===== Email App Files/compose.jsx ===== */
// Compose sheet — iOS-style "New Message" modal sheet
const { useState: useState_c } = React;

function ComposeScreen({ accent, prefill, onClose, onSend }) {
  const [to, setTo] = useState_c(prefill?.to || '');
  const [subject, setSubject] = useState_c(prefill?.subject || '');
  const [body, setBody] = useState_c(prefill?.body || '');
  const [showSchedule, setShowSchedule] = useState_c(false);

  const canSend = to.trim() && (subject.trim() || body.trim());

  const Field = ({ label, value, onChange, autoFocus, placeholder, multiline }) => {
    const Tag = multiline ? 'textarea' : 'input';
    return (
      <div style={{
        display: 'flex', alignItems: multiline ? 'flex-start' : 'center',
        padding: '14px 20px',
        borderBottom: multiline ? 'none' : '0.5px solid rgba(84,84,88,0.28)',
        gap: 8,
      }}>
        <span style={{ color: '#8E8E93', fontSize: 15, width: 60, flexShrink: 0, paddingTop: multiline ? 2 : 0 }}>{label}</span>
        <Tag
          value={value} onChange={e => onChange(e.target.value)}
          autoFocus={autoFocus} placeholder={placeholder}
          rows={multiline ? 12 : undefined}
          style={{
            flex: 1, background: 'transparent', border: 'none', outline: 'none',
            color: '#fff', fontSize: 16, fontFamily: 'inherit',
            resize: 'none', padding: 0,
            letterSpacing: -0.2, lineHeight: 1.5,
          }}
        />
      </div>
    );
  };

  return (
    <div style={{
      position: 'absolute', inset: 0, zIndex: 100,
      background: '#000', color: '#fff',
      display: 'flex', flexDirection: 'column',
      borderTopLeftRadius: 12, borderTopRightRadius: 12,
      animation: 'sheetUp 320ms cubic-bezier(.2,.8,.2,1)',
    }}>
      {/* Top bar */}
      <div style={{
        padding: '60px 16px 12px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        borderBottom: '0.5px solid rgba(84,84,88,0.28)',
      }}>
        <button onClick={onClose} style={{
          ...btn(), width: 'auto', padding: '6px 8px', color: accent, fontSize: 17, fontWeight: 400,
        }}>Cancel</button>
        <div style={{ fontSize: 17, fontWeight: 600, color: '#fff' }}>New Message</div>
        <button onClick={onSend} disabled={!canSend} style={{
          appearance: 'none', border: 'none',
          background: canSend ? accent : '#2C2C2E',
          color: canSend ? '#000' : '#636366',
          padding: '7px 14px', borderRadius: 18,
          fontSize: 15, fontWeight: 600, cursor: canSend ? 'pointer' : 'default',
          display: 'flex', alignItems: 'center', gap: 5,
        }}>
          <IconSend size={15} stroke={2.2} color={canSend ? '#000' : '#636366'}/>
          Send
        </button>
      </div>

      {/* Fields */}
      <div style={{ flex: 1, overflowY: 'auto' }}>
        {Field({ label: 'To:', value: to, onChange: setTo, autoFocus: !prefill, placeholder: 'name@domain.com' })}
        {Field({ label: 'Cc/Bcc:', value: '', onChange: () => {}, placeholder: '' })}
        {Field({ label: 'From:', value: 'you@gmail.com', onChange: () => {}, placeholder: '' })}
        {Field({ label: 'Subject:', value: subject, onChange: setSubject, autoFocus: !!prefill, placeholder: '' })}
        <div style={{ padding: '16px 20px' }}>
          <textarea
            value={body} onChange={e => setBody(e.target.value)}
            placeholder=""
            rows={14}
            style={{
              width: '100%', background: 'transparent', border: 'none', outline: 'none',
              color: '#fff', fontSize: 16, fontFamily: 'inherit',
              resize: 'none', padding: 0,
              letterSpacing: -0.2, lineHeight: 1.5,
            }}
          />
          <div style={{ color: '#636366', fontSize: 14, marginTop: -180, pointerEvents: 'none' }}>
            {body.length === 0 && (
              <>
                <div style={{ marginBottom: 14 }}>Hey {to ? to.split('@')[0] : '[name]'},</div>
                <div style={{ color: '#48484A', fontStyle: 'italic' }}>Start typing…</div>
              </>
            )}
          </div>
          <div style={{ marginTop: 24, color: '#8E8E93', fontSize: 14 }}>
            <div style={{ height: 0.5, background: 'rgba(84,84,88,0.28)', margin: '8px 0 12px' }}/>
            <div>Sent from my iPhone</div>
          </div>
        </div>
      </div>

      {/* Bottom toolbar */}
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-around',
        padding: '12px 20px 30px',
        background: '#0A0A0A',
        borderTop: '0.5px solid rgba(84,84,88,0.28)',
      }}>
        <button style={btn()}><IconAttach size={22} color="#C7C7CC"/></button>
        <button style={btn()}><IconImage size={22} color="#C7C7CC"/></button>
        <button style={btn()}><IconFormat size={22} color="#C7C7CC"/></button>
        <button onClick={() => setShowSchedule(true)} style={btn()}><IconSchedule size={22} color={accent}/></button>
        <button style={btn()}><IconTrash size={22} color="#FF453A"/></button>
      </div>

      {showSchedule && (
        <SchedulePicker accent={accent} onClose={() => setShowSchedule(false)} onSend={onSend}/>
      )}
    </div>
  );
}

function SchedulePicker({ accent, onClose, onSend }) {
  const opts = [
    ['Tonight', '9:00 PM'],
    ['Tomorrow morning', 'Tue 8:00 AM'],
    ['Tomorrow afternoon', 'Tue 1:00 PM'],
    ['Monday morning', 'Mon 8:00 AM'],
    ['Pick date & time', null],
  ];
  return (
    <div onClick={onClose} style={{
      position: 'absolute', inset: 0, zIndex: 200,
      background: 'rgba(0,0,0,0.6)',
      display: 'flex', alignItems: 'flex-end',
      animation: 'fadeIn 200ms ease',
    }}>
      <div onClick={e => e.stopPropagation()} style={{
        width: '100%', background: '#1C1C1E',
        borderTopLeftRadius: 14, borderTopRightRadius: 14,
        padding: '8px 10px 30px',
        animation: 'sheetUp 280ms cubic-bezier(.2,.8,.2,1)',
      }}>
        <div style={{ width: 36, height: 5, background: '#48484A', borderRadius: 3, margin: '8px auto 14px' }}/>
        <div style={{ padding: '4px 16px 14px', color: '#8E8E93', fontSize: 13, fontWeight: 600, textTransform: 'uppercase', letterSpacing: 0.6 }}>
          Send later
        </div>
        {opts.map(([label, sub], i) => (
          <button key={label} onClick={onSend} style={{
            appearance: 'none', border: 'none', background: 'transparent',
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            width: '100%', padding: '14px 16px',
            borderTop: i === 0 ? 'none' : '0.5px solid rgba(84,84,88,0.28)',
            cursor: 'pointer',
          }}>
            <span style={{ color: '#fff', fontSize: 16 }}>{label}</span>
            <span style={{ color: '#8E8E93', fontSize: 15 }}>{sub}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

window.ComposeScreen = ComposeScreen;

/* ===== Email App Files/app.jsx ===== */
// Main app — wires inbox / detail / compose / search / cmd palette together
const { useState: useAppState, useEffect: useAppEffect } = React;

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accent": "#F2F2F7",
  "density": "compact",
  "splitInbox": true,
  "showFrame": true
}/*EDITMODE-END*/;

const ACCENT_OPTIONS = ['#F2F2F7', '#0A84FF', '#30D158', '#FF453A', '#BF5AF2', '#5AC8FA'];

function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);

  // Top-level navigation: 'mailboxes' | 'inbox' | 'detail'
  const [view, setView] = useAppState('mailboxes');
  const [openId, setOpenId] = useAppState(null);
  const [composeOpen, setComposeOpen] = useAppState(false);
  const [composePrefill, setComposePrefill] = useAppState(null);
  const [searchOpen, setSearchOpen] = useAppState(false);
  const [drawerOpen, setDrawerOpen] = useAppState(false);
  const [currentFolder, setCurrentFolder] = useAppState('inbox');
  const [folderLabelOverride, setFolderLabelOverride] = useAppState(null);
  const [currentAccount, setCurrentAccount] = useAppState('a1');
  const [toast, setToast] = useAppState(null);

  // Per-email state: { archived, snoozed, done, pinned }
  const [emailState, setEmailState] = useAppState({});

  const showToast = (msg) => {
    setToast(msg);
    setTimeout(() => setToast(null), 1800);
  };

  // wrap setEmailState to surface toasts on transitions
  const setEmailStateWithToast = (updater) => {
    setEmailState(prev => {
      const next = typeof updater === 'function' ? updater(prev) : updater;
      // detect first new archive / done
      for (const id of Object.keys(next)) {
        const before = prev[id] || {};
        const after = next[id] || {};
        if (!before.archived && after.archived) showToast('Archived');
        else if (!before.done && after.done) showToast('Marked done');
        else if (!before.snoozed && after.snoozed) showToast('Snoozed until tomorrow');
      }
      return next;
    });
  };

  const openEmail = (id) => { setOpenId(id); setView('detail'); };
  const goBack = () => { setView('inbox'); setOpenId(null); };
  const handleCmd = (id) => {
    if (id === 'compose') setComposeOpen(true);
    else showToast('Action triggered');
  };

  const onReply = (body) => {
    const e = EMAILS.find(em => em.id === openId);
    if (!e) return;
    setComposePrefill({
      to: e.from.email,
      subject: 'Re: ' + e.subject,
      body: typeof body === 'string' ? body : '',
    });
    setComposeOpen(true);
  };

  const onSend = () => {
    setComposeOpen(false);
    setComposePrefill(null);
    showToast('Message sent');
  };

  // Frame contents
  const frame = (
    <div style={{
      position: 'relative', width: '100%', height: '100%',
      overflow: 'hidden', background: '#000',
    }}>
      {/* Mailboxes always rendered behind; inbox slides over; detail over inbox */}
      <div style={{
        position: 'absolute', inset: 0,
        transform: view !== 'mailboxes' ? 'translateX(-30%)' : 'translateX(0)',
        opacity: view !== 'mailboxes' ? 0.4 : 1,
        transition: 'transform 320ms cubic-bezier(.2,.8,.2,1), opacity 320ms',
      }}>
        <MailboxesScreen accent={t.accent}
          currentAccount={currentAccount}
          onPickAccount={setCurrentAccount}
          onOpenInbox={() => { setCurrentFolder('inbox'); setFolderLabelOverride(null); setView('inbox'); }}
          onOpenFolder={(id, label) => { setCurrentFolder(id); setFolderLabelOverride(label); setView('inbox'); }}
          onEdit={() => showToast('Edit mailboxes')}/>
      </div>

      {(view === 'inbox' || view === 'detail') && (
        <div style={{
          position: 'absolute', inset: 0,
          transform: view === 'detail' ? 'translateX(-30%)' : 'translateX(0)',
          opacity: view === 'detail' ? 0.4 : 1,
          transition: 'transform 320ms cubic-bezier(.2,.8,.2,1), opacity 320ms',
          animation: 'slideInRight 320ms cubic-bezier(.2,.8,.2,1)',
        }}>
          <InboxScreen
            accent={t.accent} density={t.density} splitInbox={t.splitInbox}
            currentFolder={currentFolder}
            currentFolderLabel={folderLabelOverride || (FOLDERS.find(f => f.id === currentFolder) || {}).label || 'Inbox'}
            emailState={emailState} setEmailState={setEmailStateWithToast}
            onOpen={openEmail}
            onCompose={() => setComposeOpen(true)}
            onSearch={() => setSearchOpen(true)}
            onMenu={() => setDrawerOpen(true)}
            onMailboxes={() => setView('mailboxes')}
          />
        </div>
      )}

      {view === 'detail' && (
        <div style={{
          position: 'absolute', inset: 0,
          animation: 'slideInRight 320ms cubic-bezier(.2,.8,.2,1)',
        }}>
          <DetailScreen
            emailId={openId} accent={t.accent}
            emailState={emailState} setEmailState={setEmailStateWithToast}
            onBack={goBack} onReply={onReply}
            onCompose={() => setComposeOpen(true)}
          />
        </div>
      )}

      {searchOpen && (
        <SearchScreen accent={t.accent}
          onClose={() => setSearchOpen(false)}
          onOpen={(id) => { setSearchOpen(false); openEmail(id); }}/>
      )}

      {composeOpen && (
        <ComposeScreen accent={t.accent} prefill={composePrefill}
          onClose={() => { setComposeOpen(false); setComposePrefill(null); }}
          onSend={onSend}/>
      )}

      {drawerOpen && (
        <FolderDrawer accent={t.accent}
          currentFolder={currentFolder}
          currentAccount={currentAccount}
          onPickFolder={(id) => {
            setCurrentFolder(id);
            setDrawerOpen(false);
            const f = FOLDERS.find(x => x.id === id);
            if (f && id !== 'inbox' && id !== 'important') showToast(`Switched to ${f.label}`);
          }}
          onPickAccount={(id) => { setCurrentAccount(id); showToast('Switched account'); }}
          onClose={() => setDrawerOpen(false)}
          onSettings={() => { setDrawerOpen(false); showToast('Settings'); }}/>
      )}

      {/* Toast */}
      {toast && (
        <div style={{
          position: 'absolute', left: '50%', bottom: 116, zIndex: 300,
          transform: 'translateX(-50%)',
          background: 'rgba(28,28,30,0.95)',
          backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)',
          color: '#fff', fontSize: 13, fontWeight: 500,
          padding: '10px 18px', borderRadius: 18,
          border: '0.5px solid rgba(84,84,88,0.4)',
          animation: 'toastIn 200ms ease',
          boxShadow: '0 8px 24px rgba(0,0,0,0.4)',
        }}>
          {toast}
        </div>
      )}
    </div>
  );

  // Status bar / dynamic island / home indicator overlays (rendered via IOSDevice)
  const inFrame = (
    <IOSDevice dark={true} width={402} height={874}>
      {frame}
    </IOSDevice>
  );

  return (
    <>
      <div style={{
        minHeight: '100vh', background: '#1C1C1E',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: '40px 20px',
      }}>
        {t.showFrame ? inFrame : (
          <div style={{ width: 402, height: 874, borderRadius: 16, overflow: 'hidden', position: 'relative' }}>
            {frame}
          </div>
        )}
      </div>

      <TweaksPanel>
        <TweakSection label="Theme"/>
        <TweakColor label="Accent" value={t.accent} options={ACCENT_OPTIONS}
          onChange={v => setTweak('accent', v)}/>
        <TweakSection label="Inbox"/>
        <TweakRadio label="Density" value={t.density}
          options={['compact', 'comfy']}
          onChange={v => setTweak('density', v)}/>
        <TweakToggle label="Split inbox (Important / Other)" value={t.splitInbox}
          onChange={v => setTweak('splitInbox', v)}/>
        <TweakSection label="Display"/>
        <TweakToggle label="Device frame" value={t.showFrame}
          onChange={v => setTweak('showFrame', v)}/>
      </TweaksPanel>
    </>
  );
}

createRoot(document.getElementById('root')).render(<App />);
