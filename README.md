# SaveTink Chrome Extension

![SaveTink Screenshot](https://res.cloudinary.com/dwthsc5jw/image/upload/t_savetink/xl5tf0ftsg1hcjiswskc.jpg)

## Overview

SaveTink is a Chrome extension designed to help users save important links quickly and efficiently. With a simple interface, users can save the current tab's URL or manually input a link to store for later use. The extension also allows users to clear all saved links with a double-click.

## Features

- **Save Current Tab**: Quickly save the URL of the active tab with a single click.
- **Manual Link Entry**: Enter a URL manually to save it.
- **Clear All Links**: Double-click to delete all saved links.
- **Persistent Storage**: Links are stored in the browser's local storage, ensuring they persist across sessions.

## Installation

1. Clone or download the repository.
2. Open Chrome and navigate to `chrome://extensions/`.
3. Enable "Developer mode" in the top right corner.
4. Click "Load unpacked" and select the directory containing the extension files.

## Usage

- **Save a Link**: Enter a URL in the input field and click the "Save" button.
- **Save Current Tab**: Click the "Tab" button to save the URL of the current active tab.
- **Clear All Links**: Double-click the "Clear" button to remove all saved links.

## Code Structure

- **HTML**: The user interface is defined in `index.html`.
- **CSS**: Styling is applied through `index.css`.
- **JavaScript**: The core functionality is implemented in `index.js`.

## Permissions

The extension requires the following permissions as specified in `manifest.json`:

- **tabs**: To access the URL of the current active tab.
- **activeTab**: To interact with the active tab.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request for any enhancements or bug fixes.



