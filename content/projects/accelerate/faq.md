---
title: FAQ
description: Answers to common questions about Accelerate.
---

<div id="hero">

# FAQ

Answers to common questions about Accelerate

</div>

<div id="faq-select">
   <input type="radio" id="radio-mac" name="faq" value="mac">
   <label for="radio-mac">macOS</label>

   <input type="radio" id="radio-ios" name="faq" value="ios">
   <label for="radio-ios">iOS</label>
</div>

<script>
   document.addEventListener("DOMContentLoaded", () => {
      const faqRadios = document.querySelectorAll('input[name="faq"]');
      const faqSections = document.querySelectorAll(".faq");

      const showFaqSection = (id) => {
         faqSections.forEach(el => {
            el.style.display = el.id !== id ? "none" : "";
         });

         if (id) history.replaceState(null, null, `#${id}`);
      };

      faqRadios.forEach(radio => {
         radio.addEventListener("change", (event) => {
            showFaqSection(event.target.value);
         });
      });

      // Show preselected FAQ if needed
      const initialHash = window.location.hash.substring(1);
      if (initialHash) {
         const initialRadio = document.getElementById(`radio-${initialHash}`);
         if (initialRadio) {
            initialRadio.checked = true;
            showFaqSection(initialHash);
            return;
         }
      }

      // Default to empty ID to hide all sections
      showFaqSection();
   });
</script>

<div id="mac" class="faq">

## Getting Started

<details>
<summary>How do I start using Accelerate?</summary>

Accelerate allows you to control video playback primarily using keyboard shortcuts. The following playback controls are supported (default shortcuts in parentheses):

- Speed Up (**D**)
- Slow Down (**S**)
- Toggle Speed (**A**: 2x, **R**: Default)
- Show Speed (**V**)
- Play/Pause
- Skip Forward
- Skip Backward
- Skip to End
- Toggle Mute
- Toggle Picture in Picture (**P**)
- Toggle Fullscreen

</details>

<details>
<summary>How do I access Accelerate's preferences?</summary>

You can access preferences by opening the Accelerate app from your Applications directory (e.g., from Finder).

</details>

<details>
<summary>How do I customize my shortcuts?</summary>

You can customize your shortcuts in the **Shortcuts** tab of Accelerate's preferences.

- To *create a new shortcut*, click "**+**". You can create up to 30 shortcuts.
- To *remove a shortcut*, select it from the list and click "**–**".
- To *modify a shortcut*, double-click it to access the following options:
   - **Shortcut action**: The triggered action (e.g., speed up, skip forward).
   - **Key combination**: A single key or combination of regular and modifier keys, like command (⌘), option (⌥), or control (⌃), that trigger the shortcut.
   - **Enable global shortcut**: Enables shortcuts with modifier key combinations to be triggered while Safari is not in focus.
   - **Show notification**: Display notification on the webpage when shortcut is triggered.
   - **Show in right-click menu**: Allows triggering the shortcut from the right-click menu.
   - Certain actions also require an associated value, e.g., "Toggle Speed" or "Skip Forward".

After making changes, refresh any open webpages to update.

</details>

<details>
<summary>How do I customize other preferences, like default speed?</summary>

You can configure general preferences in the **General** tab:

- **Notification location** on the webpage after triggering a shortcut. Set to "Hidden" to disable all notifications.
- **Default speed** for video playback. Default is 1x speed.
- **Minimum/maximum speed** for video adjustment.

After making changes, refresh any open webpages to update.

</details>

<details>
<summary>How do I use the toolbar button in Safari?</summary>

You can set Accelerate's Safari toolbar button to trigger a shortcut when clicked. Go to the **Shortcuts** tab and select a shortcut for **Toolbar button action**.

</details>

<details>
<summary>Which websites work with Accelerate?</summary>

Accelerate works on any website using HTML5 video, which includes most modern sites. Accelerate does not support Flash video.

</details>

## Troubleshooting

<details>
<summary>Why isn't Accelerate working for me?</summary>

If you are experiencing issues with the Accelerate extension, please follow these troubleshooting steps:

1. Check that the extension is enabled in Safari's extension preferences: **Safari > Preferences > Extensions**. In the sidebar, make sure the checkbox next to "Accelerate" is checked.
2. If Accelerate is already enabled, try unchecking the checkbox and restarting Safari. Once Safari re-opens, re-enable Accelerate.
3. If you have other extensions installed, check that they aren't interfering with Accelerate by disabling them, restarting Safari, and testing if Accelerate works. 
4. If it is still not working, try deleting and reinstalling.
5. If you continue to have issues, feel free to email me.

</details>

<details>
<summary>Why aren't my updated shortcuts or preferences working?</summary>

After making changes to preferences, refresh any open websites. If the changes still aren't applied, try restarting Safari.

</details>

<details>
<summary>Why isn't my updated textfield preference being saved?</summary>

After changing a textfield in preferences, such as "Default Speed" or a shortcut's value, **press Enter/Return to confirm**. Click "Save" after editing a shortcut.

</details>

<details>
<summary>Why doesn't right-click work on Netflix (or some other site)?</summary>

Netflix and some other sites block users from accessing the right-click menu. There are Safari extensions that prevent sites from doing this, but otherwise you'll have to use the keyboard shortcuts or toolbar item for controls.

</details>

<details>
<summary>Why aren't playback controls working properly on Netflix (or some other site)?</summary>

Some sites use custom video players that modify standard playback behavior. For example, Netflix may freeze when skipping forward or backward with Accelerate. Use the website's playback controls for a smoother experience.

</details>

<details>
<summary>Why does the video briefly lag after changing speed or skipping?</summary>

Safari pauses videos for a split second when adjusting playback. This behavior occurs even without Accelerate, e.g., when using a website's integrated video controls. Since this is due to Safari's video processing, the issue currently cannot be fixed by Accelerate.

</details>

<details>
<summary>Why does the audio quality degrade at higher speeds?</summary>

This is a limitation of Safari's pitch correction algorithm. The issue occurs even when using other methods to change video speed, like YouTube's playback settings.

</details>

<details>
<summary>How can I disable Accelerate from running on a website?</summary>

You can add a website to Accelerate's blocklist to prevent the extension from running on it. This can be useful for certain websites that are incompatible with Accelerate.

</details>

<details>
<summary>What if I have a different issue or feedback?</summary>

Please share bug reports or feature requests [on GitHub](https://github.com/ritamsarmah/accelerate/issues). Feel free to send me any other questions or feedback via email.

</details>

</div>

<div id="ios" class="faq">
 
## Getting Started

<details>
<summary>How do I start using Accelerate?</summary>

In the Settings app, enable the Safari extension by going to **Safari > Extensions > Accelerate** and toggling "Accelerate" on.

Accelerate allows you to control video playback in Safari on iOS 15+ via a popup menu or keyboard shortcuts. Access the popup by tapping Accelerate's icon in the Safari toolbar.

The following playback controls are supported (default shortcuts in parentheses):

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

</details>

<details>
<summary>How do I customize my shortcuts?</summary>

You can customize your shortcuts in the **Shortcuts** tab of Accelerate's preferences.

- To *create a new shortcut*, tap "**+**".
- To *remove a shortcut*, swipe left to delete.
- To *modify a shortcut*, select it to access the following options:
   - **Action**: The triggered action (e.g., speed up, skip forward).
   - **Shortcut**: A single key or combination of regular and modifier keys, like command (⌘), option (⌥), or control (⌃), that trigger the shortcut.
   - **Show Notification**: Display notification on the webpage when shortcut is triggered.
   - **Show in Popup Menu**: Include shortcut in Accelerate's toolbar popup.
   - Certain actions also require an associated value, e.g., "Toggle Speed" or "Skip Forward".

After making changes, refresh any open webpages to update.

</details>

<details>
<summary>How do I customize other preferences, like default speed?</summary>

You can configure general preferences in the **General** tab:

- **Notification location** on the webpage after triggering a shortcut. Set to "Hidden" to disable notifications.
- **Default speed** for video playback. Default is 1x speed.
- **Minimum/maximum speed** for video adjustment.

After making changes, refresh any open webpages to update.

</details>

<details>
<summary>Which websites work with Accelerate?</summary>

Accelerate works on any website using HTML5 video, which includes most modern sites. Accelerate does not support Flash video.

</details>

## Troubleshooting

<details>
<summary>Why isn't Accelerate working for me?</summary>

1. Check that the extension is enabled in the Settings app: **Safari > Extensions > Accelerate**. Make sure the switch next to "Accelerate" is toggled on and you've granted Accelerate permission to run on your desired websites. If you want to enable Accelerate on all websites, make sure **All Websites** is set to **Allow**.
2. If you have other extensions installed, check that they aren't interfering with Accelerate by disabling them, restarting Safari, and testing if Accelerate works. 

</details>

<details>
<summary>Why aren't my updated shortcuts or preferences working?</summary>

After making changes to preferences, refresh any open websites. If the changes still aren't applied, try restarting Safari.

</details>

<details>
<summary>Why isn't my updated textfield preference being saved?</summary>

After changing a textfield in preferences, such as "Default Speed" or a shortcut's value, **press Done/Return to confirm**. Tap "Save" after editing a shortcut.

</details>

<details>
<summary>Why does the video briefly lag after changing speed or skipping?</summary>

Safari pauses videos for a split second when adjusting playback. This behavior occurs even without Accelerate, e.g., when using a website's integrated video controls. Since this is due to Safari's video processing, the issue currently cannot be fixed by Accelerate.

</details>

<details>
<summary>How can I disable Accelerate from running on a website?</summary>

You can add a website to Accelerate's blocklist to prevent the extension from running on it. This can be useful for certain websites that are incompatible with Accelerate.

</details>

<details>
<summary>What if I have a different issue or feedback?</summary>

Please share bug reports or feature requests [on GitHub](https://github.com/ritamsarmah/accelerate/issues). Feel free to send me any other questions or feedback via email.

</details>

</div>
