## Getting Started

{% collapse "How do I start using Accelerate?" %}

Accelerate allows you to control video playback primarily using keyboard shortcuts. The following playback controls are currently supported (with the default shortcuts noted in parentheses):

- Speed Up (**D**)
- Slow Down (**S**)
- Toggle Speed (**A**: 2x, **R**: Default)
- Show Speed (**V**)
- Play/Pause
- Skip Forward
- Skip Backward
- Skip to End
- Toggle Mute
- Picture in Picture (**P**)

{% endcollapse %}

{% collapse "How do I access Accelerate's preferences?" %}

You can access the preferences by opening the Accelerate app installed into your Applications folder (e.g., from Finder).

{% endcollapse %}

{% collapse "How do I customize my shortcuts?" %}

You can customize your shortcuts in the **Shortcuts** tab of Accelerate's preferences.

- To *create a new shortcut*, click the "**+**". You can create up to 30 shortcuts.
- To *remove a shortcut*, select the shortcut in the list and click the "**–**".
- To *modify an existing shortcut*, double-click the shortcut in the list to access the following options:
   - **Shortcut action**: The triggered action (e.g., speed up, skip forward)
   - **Key combination**: A single key, or a combination of regular and modifier keys, like command (⌘), option (⌥), or control (⌃) used to trigger the shortcut.
   - **Enable global shortcut**: Enables shortcuts with modifier key combinations can be triggered while Safari is not in focus.
   - **Show notification**: Shows a notification on the webpage when the shortcut is triggered.
   - **Show in right-click menu**: Allows triggering the shortcut from the right-click menu.
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

{% collapse "How do I use the toolbar button in Safari?" %}

You can set Accelerate's button in the Safari toolbar to trigger a shortcut when you click on it. Go to the **Shortcuts** tab and select a shortcut from the popup menu for **Toolbar button action**.

{% endcollapse %}

{% collapse "Which websites work with Accelerate?" %}

Accelerate works on any website using HTML5 video, which includes most modern sites. Accelerate does not support Flash video.

{% endcollapse %}

## Troubleshooting

{% collapse "Why isn't Accelerate working for me?" %}

1. Check that the extension is enabled by opening Safari's extension preferences: **Safari > Preferences > Extensions**. In the sidebar on the left, make sure the checkbox next to "Accelerate" is checked.
2. If Accelerate is already enabled, try unchecking the checkbox and restarting Safari. Once Safari re-opens, re-enable Accelerate.
3. If you have other extensions installed, check that they aren't interfering with Accelerate by disabling them, restarting Safari, and testing if Accelerate works. 
4. If it is still not working, try deleting and reinstalling.
5. If you continue to have issues, feel free to email me.

{% endcollapse %}

{% collapse "Why aren't my updated shortcuts or preferences working?" %}

After you make changes to any of Accelerate's preferences, refresh any currently open websites to see the updates. If the changes still aren't showing, try restarting Safari.

{% endcollapse %}

{% collapse "Why isn't my updated textfield preference being saved?" %}

After you change a textfield in Accelerate's preferences, such as the "Default Speed" or a shortcut's associated value, you'll need to press Enter/Return on your keyboard to confirm your value. Make sure you also click "Save" after you finish editing a shortcut.

{% endcollapse %}

{% collapse "Why doesn't right-click work on Netflix (or some other site)?" %}

Netflix and certain other sites will block users from accessing the right-click menu. There are some Safari extensions that can prevent sites from doing this, but otherwise you'll have to use the keyboard shortcuts or toolbar item for controls.

{% endcollapse %}

{% collapse "Why aren't playback controls working properly on Netflix (or some other site)?" %}

The site is probably using a custom video player that modifies the standard playback control behavior. For example, the Netflix video player will sometimes freeze when skipping forward or backward using Accelerate. As a result, your own playback keyboard shortcuts might not work perfectly, and you'll have to use theirs to ensure a smooth experience.

{% endcollapse %}

{% collapse "Why does the video briefly lag after changing speed or skipping?" %}

By default, videos in Safari pause for a split second anytime the user adjusts playback, like when changing speed or skipping. You can observe this behavior on videos even without Accelerate when using a website's integrated video controls. Since this is a result of Safari's video processing, this issue currently cannot be fixed by Accelerate.

{% endcollapse %}

{% collapse "Why does the audio quality degrade at higher speeds?" %}

This is a limitation of Safari's pitch correction algorithm for videos. The issue can be observed when changing the video speed using other methods; for example, when using YouTube's built in settings for playback speed.

{% endcollapse %}

{% collapse "How can I disable Accelerate from running on a website?" %}

You can add a website to Accelerate's blocklist to prevent the extension from running on it. This can be useful for certain websites that are incompatible with Accelerate.

{% endcollapse %}

{% collapse "What if I have a different issue or feedback?" %}

Feel free to send me any other questions, comments, feedback, or bug reports via email.

{% endcollapse %}
