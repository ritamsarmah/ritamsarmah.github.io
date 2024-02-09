## Getting Started

{% collapse "How do I start using Accelerate?" %}

Enable the Safari extension by opening the Settings app and going to **Safari > Extensions > Accelerate**. Toggle the switch next to "Accelerate" on.

Accelerate allows you to control video playback in Safari on iOS 15+. You can trigger playback controls using a popup menu or keyboard shortcuts. The popup is accessible by tapping Accelerate's icon in the Safari toolbar.

The following playback controls are currently supported (with the default shortcuts noted in parentheses):

- Speed Up (**D**)
- Slow Down (**S**)
- Toggle Speed (**R**)
- Show Speed (**V**)
- Play/Pause
- Skip Forward
- Skip Backward
- Skip to End
- Toggle Mute
- Toggle Picture in Picture (**P**)
- Toggle Fullscreen

{% endcollapse %}

{% collapse "How do I customize my shortcuts?" %}

You can customize your shortcuts in the **Shortcuts** tab of Accelerate's preferences.

- To *create a new shortcut*, click the "**+**".
- To *remove a shortcut*, swipe left to delete.
- To *modify an existing shortcut*, select the shortcut in the list to access the following options:
   - **Action**: The triggered action (e.g., speed up, skip forward)
   - **Shortcut Key**: A single key, or a combination of regular and modifier keys, like command (⌘), option (⌥), or control (⌃) used to trigger the shortcut.
   - **Show Notification**: Shows a notification on the webpage when the shortcut is triggered.
   - **Show in Popup Menu**: Shows the shortcut in Accelerate's toolbar popup in Safari.
   - Certain actions also require an associated value, e.g., "Toggle Speed" or "Skip Forward".

After making changes to your shortcuts, refresh any currently open webpages to update.

{% endcollapse %}

{% collapse "How do I customize other preferences, like default speed?" %}

You can configure general preferences in the **General** tab:

- The **notification location** on the webpage after triggering a shortcut with Accelerate. You can also disable all notifications by setting this to "Hidden".
- The **default speed** videos will start playing at. Videos normally play at 1x speed by default.
- The **minimum/maximum speed** to which videos can be adjusted.

After making changes to your preferences, refresh any currently open webpages to update.

{% endcollapse %}

{% collapse "Which websites work with Accelerate?" %}

Accelerate works on any website using HTML5 video, which includes most modern sites. Accelerate does not support Flash video.

{% endcollapse %}

## Troubleshooting

{% collapse "Why isn't Accelerate working for me?" %}

1. Check that the extension is enabled by opening the Settings app and going to **Safari > Extensions > Accelerate**. Make sure the switch next to "Accelerate" is toggled on and you've granted Accelerate permission to run on your desired websites. If you want to enable Accelerate on all websites, make sure **All Websites** is set to **Allow**.
2. If you have other extensions installed, check that they aren't interfering with Accelerate by disabling them, restarting Safari, and testing if Accelerate works. 

{% endcollapse %}

{% collapse "Why aren't my updated shortcuts or preferences working?" %}

After you make changes to any of Accelerate's preferences, refresh any currently open websites to see the updates. If the changes still aren't showing, try restarting Safari.

{% endcollapse %}

{% collapse "Why isn't my updated textfield preference being saved?" %}

After you change a textfield in Accelerate's preferences, such as the "Default Speed" or a shortcut's associated value, you'll need to tap Done/Return on your keyboard to confirm your value. Make sure you also tap "Save" after you finish editing a shortcut.

{% endcollapse %}

{% collapse "Why does the video briefly lag after changing speed or skipping?" %}

By default, videos in Safari pause for a split second anytime the user adjusts playback, like when changing speed or skipping. You can observe this behavior on videos even without Accelerate when using a website's integrated video controls. Since this is a result of Safari's video processing, this issue currently cannot be fixed by Accelerate.

{% endcollapse %}

{% collapse "How can I disable Accelerate from running on a website?" %}

You can add a website to Accelerate's blocklist to prevent the extension from running on it. This can be useful for certain websites that are incompatible with Accelerate.

{% endcollapse %}

{% collapse "What if I have a different issue or feedback?" %}

Please share bug reports or feature requests [on GitHub](https://github.com/ritamsarmah/accelerate/issues). Feel free to send me any other questions or feedback via email.

{% endcollapse %}
