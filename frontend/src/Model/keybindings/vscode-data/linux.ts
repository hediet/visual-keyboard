// Override key bindings by placing them into your key bindings file.
export const bindings =
	// Override key bindings by placing them into your key bindings file.
	[
		{ key: "escape escape", command: "workbench.action.exitZenMode", when: "inZenMode" },
		{
			key: "shift+escape",
			command: "closeReferenceSearchEditor",
			when: "inReferenceSearchEditor && !config.editor.stablePeek",
		},
		{
			key: "escape",
			command: "closeReferenceSearchEditor",
			when: "inReferenceSearchEditor && !config.editor.stablePeek",
		},
		{
			key: "shift+escape",
			command: "cancelSelection",
			when: "editorHasSelection && textInputFocus",
		},
		{ key: "escape", command: "cancelSelection", when: "editorHasSelection && textInputFocus" },
		{ key: "ctrl+end", command: "cursorBottom", when: "textInputFocus" },
		{ key: "ctrl+shift+end", command: "cursorBottomSelect", when: "textInputFocus" },
		{ key: "down", command: "cursorDown", when: "textInputFocus" },
		{ key: "shift+down", command: "cursorDownSelect", when: "textInputFocus" },
		{ key: "end", command: "cursorEnd", when: "textInputFocus" },
		{ key: "shift+end", command: "cursorEndSelect", when: "textInputFocus" },
		{ key: "home", command: "cursorHome", when: "textInputFocus" },
		{ key: "shift+home", command: "cursorHomeSelect", when: "textInputFocus" },
		{ key: "left", command: "cursorLeft", when: "textInputFocus" },
		{ key: "shift+left", command: "cursorLeftSelect", when: "textInputFocus" },
		{ key: "pagedown", command: "cursorPageDown", when: "textInputFocus" },
		{ key: "shift+pagedown", command: "cursorPageDownSelect", when: "textInputFocus" },
		{ key: "pageup", command: "cursorPageUp", when: "textInputFocus" },
		{ key: "shift+pageup", command: "cursorPageUpSelect", when: "textInputFocus" },
		{ key: "right", command: "cursorRight", when: "textInputFocus" },
		{ key: "shift+right", command: "cursorRightSelect", when: "textInputFocus" },
		{ key: "ctrl+home", command: "cursorTop", when: "textInputFocus" },
		{ key: "ctrl+shift+home", command: "cursorTopSelect", when: "textInputFocus" },
		{ key: "up", command: "cursorUp", when: "textInputFocus" },
		{ key: "shift+up", command: "cursorUpSelect", when: "textInputFocus" },
		{
			key: "shift+backspace",
			command: "deleteLeft",
			when: "textInputFocus && !editorReadonly",
		},
		{ key: "backspace", command: "deleteLeft", when: "textInputFocus && !editorReadonly" },
		{ key: "delete", command: "deleteRight", when: "textInputFocus && !editorReadonly" },
		{ key: "ctrl+a", command: "editor.action.selectAll", when: "textInputFocus" },
		{ key: "ctrl+l", command: "expandLineSelection", when: "textInputFocus" },
		{
			key: "shift+tab",
			command: "outdent",
			when: "editorTextFocus && !editorReadonly && !editorTabMovesFocus",
		},
		{ key: "ctrl+shift+z", command: "redo", when: "textInputFocus && !editorReadonly" },
		{ key: "ctrl+y", command: "redo", when: "textInputFocus && !editorReadonly" },
		{ key: "ctrl+down", command: "scrollLineDown", when: "textInputFocus" },
		{ key: "ctrl+up", command: "scrollLineUp", when: "textInputFocus" },
		{ key: "alt+pagedown", command: "scrollPageDown", when: "textInputFocus" },
		{ key: "alt+pageup", command: "scrollPageUp", when: "textInputFocus" },
		{
			key: "tab",
			command: "tab",
			when: "editorTextFocus && !editorReadonly && !editorTabMovesFocus",
		},
		{ key: "ctrl+z", command: "undo", when: "textInputFocus && !editorReadonly" },
		{
			key: "shift+escape",
			command: "removeSecondaryCursors",
			when: "editorHasMultipleSelections && textInputFocus",
		},
		{
			key: "escape",
			command: "removeSecondaryCursors",
			when: "editorHasMultipleSelections && textInputFocus",
		},
		{ key: "ctrl+f", command: "actions.find" },
		{
			key: "enter",
			command: "breakpointWidget.action.acceptInput",
			when: "breakpointWidgetVisible && inBreakpointWidget",
		},
		{
			key: "shift+escape",
			command: "closeBreakpointWidget",
			when: "breakpointWidgetVisible && textInputFocus",
		},
		{
			key: "escape",
			command: "closeBreakpointWidget",
			when: "breakpointWidgetVisible && textInputFocus",
		},
		{ key: "ctrl+u", command: "cursorUndo", when: "textInputFocus" },
		{ key: "ctrl+right", command: "cursorWordEndRight", when: "textInputFocus" },
		{ key: "ctrl+shift+right", command: "cursorWordEndRightSelect", when: "textInputFocus" },
		{ key: "ctrl+left", command: "cursorWordStartLeft", when: "textInputFocus" },
		{ key: "ctrl+shift+left", command: "cursorWordStartLeftSelect", when: "textInputFocus" },
		{
			key: "ctrl+backspace",
			command: "deleteWordLeft",
			when: "textInputFocus && !editorReadonly",
		},
		{
			key: "ctrl+delete",
			command: "deleteWordRight",
			when: "textInputFocus && !editorReadonly",
		},
		{
			key: "ctrl+k ctrl+c",
			command: "editor.action.addCommentLine",
			when: "editorTextFocus && !editorReadonly",
		},
		{
			key: "ctrl+d",
			command: "editor.action.addSelectionToNextFindMatch",
			when: "editorFocus",
		},
		{
			key: "shift+alt+.",
			command: "editor.action.autoFix",
			when:
				"editorTextFocus && !editorReadonly && supportedCodeAction =~ /(\\s|^)quickfix\\b/",
		},
		{
			key: "ctrl+shift+a",
			command: "editor.action.blockComment",
			when: "editorTextFocus && !editorReadonly",
		},
		{
			key: "ctrl+f2",
			command: "editor.action.changeAll",
			when: "editorTextFocus && editorTextFocus && !editorReadonly",
		},
		{ key: "ctrl+c", command: "editor.action.clipboardCopyAction", when: "textInputFocus" },
		{
			key: "ctrl+x",
			command: "editor.action.clipboardCutAction",
			when: "textInputFocus && !editorReadonly",
		},
		{
			key: "ctrl+v",
			command: "editor.action.clipboardPasteAction",
			when: "textInputFocus && !editorReadonly",
		},
		{
			key: "ctrl+/",
			command: "editor.action.commentLine",
			when: "editorTextFocus && !editorReadonly",
		},
		{
			key: "ctrl+shift+alt+down",
			command: "editor.action.copyLinesDownAction",
			when: "editorTextFocus && !editorReadonly",
		},
		{
			key: "ctrl+shift+alt+up",
			command: "editor.action.copyLinesUpAction",
			when: "editorTextFocus && !editorReadonly",
		},
		{
			key: "ctrl+shift+z",
			command: "editor.action.customEditor.redo",
			when: "focusedCustomEditorIsEditable && !inputFocus",
		},
		{
			key: "ctrl+y",
			command: "editor.action.customEditor.redo",
			when: "focusedCustomEditorIsEditable && !inputFocus",
		},
		{
			key: "ctrl+z",
			command: "editor.action.customEditor.undo",
			when: "focusedCustomEditorIsEditable && !inputFocus",
		},
		{
			key: "ctrl+k ctrl+k",
			command: "editor.action.defineKeybinding",
			when: "editorTextFocus && !editorReadonly && editorLangId == 'jsonc'",
		},
		{
			key: "ctrl+shift+k",
			command: "editor.action.deleteLines",
			when: "textInputFocus && !editorReadonly",
		},
		{ key: "f7", command: "editor.action.diffReview.next", when: "isInDiffEditor" },
		{ key: "shift+f7", command: "editor.action.diffReview.prev", when: "isInDiffEditor" },
		{ key: "alt+f3", command: "editor.action.dirtydiff.next", when: "editorTextFocus" },
		{
			key: "shift+alt+f3",
			command: "editor.action.dirtydiff.previous",
			when: "editorTextFocus",
		},
		{
			key: "enter",
			command: "editor.action.extensioneditor.findNext",
			when:
				"webviewFindWidgetFocused && !editorFocus && activeEditor == 'workbench.editor.extension'",
		},
		{
			key: "shift+enter",
			command: "editor.action.extensioneditor.findPrevious",
			when:
				"webviewFindWidgetFocused && !editorFocus && activeEditor == 'workbench.editor.extension'",
		},
		{
			key: "ctrl+f",
			command: "editor.action.extensioneditor.showfind",
			when: "!editorFocus && activeEditor == 'workbench.editor.extension'",
		},
		{
			key: "ctrl+shift+i",
			command: "editor.action.formatDocument",
			when:
				"editorHasDocumentFormattingProvider && editorHasDocumentFormattingProvider && editorTextFocus && !editorReadonly",
		},
		{
			key: "ctrl+shift+i",
			command: "editor.action.formatDocument.none",
			when:
				"editorTextFocus && !editorHasDocumentFormattingProvider && !editorHasDocumentFormattingProvider && !editorReadonly",
		},
		{
			key: "ctrl+k ctrl+f",
			command: "editor.action.formatSelection",
			when:
				"editorHasDocumentSelectionFormattingProvider && editorHasDocumentSelectionFormattingProvider && editorTextFocus && !editorReadonly",
		},
		{
			key: "ctrl+f12",
			command: "editor.action.goToImplementation",
			when: "editorHasImplementationProvider && editorTextFocus && !isInEmbeddedEditor",
		},
		{
			key: "shift+f12",
			command: "editor.action.goToReferences",
			when:
				"editorHasReferenceProvider && editorTextFocus && !inReferenceSearchEditor && !isInEmbeddedEditor",
		},
		{
			key: "ctrl+shift+.",
			command: "editor.action.inPlaceReplace.down",
			when: "editorTextFocus && !editorReadonly",
		},
		{
			key: "ctrl+shift+,",
			command: "editor.action.inPlaceReplace.up",
			when: "editorTextFocus && !editorReadonly",
		},
		{
			key: "ctrl+]",
			command: "editor.action.indentLines",
			when: "editorTextFocus && !editorReadonly",
		},
		{
			key: "ctrl+shift+up",
			command: "editor.action.insertCursorAbove",
			when: "editorTextFocus",
		},
		{
			key: "shift+alt+up",
			command: "editor.action.insertCursorAbove",
			when: "editorTextFocus",
		},
		{
			key: "shift+alt+i",
			command: "editor.action.insertCursorAtEndOfEachLineSelected",
			when: "editorTextFocus",
		},
		{
			key: "ctrl+shift+down",
			command: "editor.action.insertCursorBelow",
			when: "editorTextFocus",
		},
		{
			key: "shift+alt+down",
			command: "editor.action.insertCursorBelow",
			when: "editorTextFocus",
		},
		{
			key: "ctrl+enter",
			command: "editor.action.insertLineAfter",
			when: "editorTextFocus && !editorReadonly",
		},
		{
			key: "ctrl+shift+enter",
			command: "editor.action.insertLineBefore",
			when: "editorTextFocus && !editorReadonly",
		},
		{ key: "ctrl+shift+\\", command: "editor.action.jumpToBracket", when: "editorTextFocus" },
		{
			key: "alt+f8",
			command: "editor.action.marker.next",
			when: "editorTextFocus && !editorReadonly",
		},
		{
			key: "f8",
			command: "editor.action.marker.nextInFiles",
			when: "editorFocus && !editorReadonly",
		},
		{
			key: "shift+alt+f8",
			command: "editor.action.marker.prev",
			when: "editorTextFocus && !editorReadonly",
		},
		{
			key: "shift+f8",
			command: "editor.action.marker.prevInFiles",
			when: "editorFocus && !editorReadonly",
		},
		{
			key: "alt+down",
			command: "editor.action.moveLinesDownAction",
			when: "editorTextFocus && !editorReadonly",
		},
		{
			key: "alt+up",
			command: "editor.action.moveLinesUpAction",
			when: "editorTextFocus && !editorReadonly",
		},
		{
			key: "ctrl+k ctrl+d",
			command: "editor.action.moveSelectionToNextFindMatch",
			when: "editorFocus",
		},
		{ key: "f3", command: "editor.action.nextMatchFindAction", when: "editorFocus" },
		{
			key: "enter",
			command: "editor.action.nextMatchFindAction",
			when: "editorFocus && findInputFocussed",
		},
		{
			key: "ctrl+f3",
			command: "editor.action.nextSelectionMatchFindAction",
			when: "editorFocus",
		},
		{
			key: "shift+alt+o",
			command: "editor.action.organizeImports",
			when:
				"editorTextFocus && !editorReadonly && supportedCodeAction =~ /(\\s|^)source\\.organizeImports\\b/",
		},
		{
			key: "ctrl+[",
			command: "editor.action.outdentLines",
			when: "editorTextFocus && !editorReadonly",
		},
		{
			key: "ctrl+shift+f10",
			command: "editor.action.peekDefinition",
			when:
				"editorHasDefinitionProvider && editorTextFocus && !inReferenceSearchEditor && !isInEmbeddedEditor",
		},
		{
			key: "ctrl+shift+f12",
			command: "editor.action.peekImplementation",
			when:
				"editorHasImplementationProvider && editorTextFocus && !inReferenceSearchEditor && !isInEmbeddedEditor",
		},
		{ key: "shift+f3", command: "editor.action.previousMatchFindAction", when: "editorFocus" },
		{
			key: "shift+enter",
			command: "editor.action.previousMatchFindAction",
			when: "editorFocus && findInputFocussed",
		},
		{
			key: "ctrl+shift+f3",
			command: "editor.action.previousSelectionMatchFindAction",
			when: "editorFocus",
		},
		{
			key: "ctrl+.",
			command: "editor.action.quickFix",
			when: "editorHasCodeActionsProvider && editorTextFocus && !editorReadonly",
		},
		{
			key: "ctrl+shift+r",
			command: "editor.action.refactor",
			when: "editorHasCodeActionsProvider && editorTextFocus && !editorReadonly",
		},
		{
			key: "ctrl+k ctrl+u",
			command: "editor.action.removeCommentLine",
			when: "editorTextFocus && !editorReadonly",
		},
		{
			key: "f2",
			command: "editor.action.rename",
			when: "editorHasRenameProvider && editorTextFocus && !editorReadonly",
		},
		{
			key: "f12",
			command: "editor.action.revealDefinition",
			when: "editorHasDefinitionProvider && editorTextFocus && !isInEmbeddedEditor",
		},
		{
			key: "ctrl+k f12",
			command: "editor.action.revealDefinitionAside",
			when: "editorHasDefinitionProvider && editorTextFocus && !isInEmbeddedEditor",
		},
		{ key: "ctrl+shift+l", command: "editor.action.selectHighlights", when: "editorFocus" },
		{ key: "alt+f1", command: "editor.action.showAccessibilityHelp", when: "editorFocus" },
		{ key: "shift+f10", command: "editor.action.showContextMenu", when: "textInputFocus" },
		{ key: "ctrl+k ctrl+i", command: "editor.action.showHover", when: "editorTextFocus" },
		{
			key: "shift+alt+right",
			command: "editor.action.smartSelect.expand",
			when: "editorTextFocus",
		},
		{
			key: "shift+alt+left",
			command: "editor.action.smartSelect.shrink",
			when: "editorTextFocus",
		},
		{ key: "ctrl+h", command: "editor.action.startFindReplaceAction" },
		{ key: "ctrl+m", command: "editor.action.toggleTabFocusMode" },
		{ key: "alt+z", command: "editor.action.toggleWordWrap" },
		{
			key: "ctrl+shift+space",
			command: "editor.action.triggerParameterHints",
			when: "editorHasSignatureHelpProvider && editorTextFocus",
		},
		{
			key: "ctrl+space",
			command: "editor.action.triggerSuggest",
			when: "editorHasCompletionItemProvider && textInputFocus && !editorReadonly",
		},
		{
			key: "ctrl+k ctrl+x",
			command: "editor.action.trimTrailingWhitespace",
			when: "editorTextFocus && !editorReadonly",
		},
		{
			key: "enter",
			command: "editor.action.webvieweditor.findNext",
			when: "webviewFindWidgetFocused && !editorFocus && activeEditor == 'WebviewEditor'",
		},
		{
			key: "shift+enter",
			command: "editor.action.webvieweditor.findPrevious",
			when: "webviewFindWidgetFocused && !editorFocus && activeEditor == 'WebviewEditor'",
		},
		{
			key: "escape",
			command: "editor.action.webvieweditor.hideFind",
			when: "webviewFindWidgetVisible && !editorFocus && activeEditor == 'WebviewEditor'",
		},
		{
			key: "ctrl+a",
			command: "editor.action.webvieweditor.selectAll",
			when: "!editorFocus && !inputFocus && activeEditor == 'WebviewEditor'",
		},
		{
			key: "ctrl+f",
			command: "editor.action.webvieweditor.showFind",
			when: "!editorFocus && activeEditor == 'WebviewEditor'",
		},
		{
			key: "f7",
			command: "editor.action.wordHighlight.next",
			when: "editorTextFocus && hasWordHighlights",
		},
		{
			key: "shift+f7",
			command: "editor.action.wordHighlight.prev",
			when: "editorTextFocus && hasWordHighlights",
		},
		{ key: "escape", command: "editor.cancelOperation", when: "cancellableOperation" },
		{
			key: "ctrl+k ctrl+i",
			command: "editor.debug.action.showDebugHover",
			when: "editorTextFocus && inDebugMode",
		},
		{ key: "f9", command: "editor.debug.action.toggleBreakpoint", when: "editorTextFocus" },
		{
			key: "tab",
			command: "editor.emmet.action.expandAbbreviation",
			when:
				"config.emmet.triggerExpansionOnTab && editorTextFocus && !editorReadonly && !editorTabMovesFocus",
		},
		{ key: "ctrl+shift+[", command: "editor.fold", when: "editorTextFocus && foldingEnabled" },
		{
			key: "ctrl+k ctrl+0",
			command: "editor.foldAll",
			when: "editorTextFocus && foldingEnabled",
		},
		{
			key: "ctrl+k ctrl+/",
			command: "editor.foldAllBlockComments",
			when: "editorTextFocus && foldingEnabled",
		},
		{
			key: "ctrl+k ctrl+8",
			command: "editor.foldAllMarkerRegions",
			when: "editorTextFocus && foldingEnabled",
		},
		{
			key: "ctrl+k ctrl+1",
			command: "editor.foldLevel1",
			when: "editorTextFocus && foldingEnabled",
		},
		{
			key: "ctrl+k ctrl+2",
			command: "editor.foldLevel2",
			when: "editorTextFocus && foldingEnabled",
		},
		{
			key: "ctrl+k ctrl+3",
			command: "editor.foldLevel3",
			when: "editorTextFocus && foldingEnabled",
		},
		{
			key: "ctrl+k ctrl+4",
			command: "editor.foldLevel4",
			when: "editorTextFocus && foldingEnabled",
		},
		{
			key: "ctrl+k ctrl+5",
			command: "editor.foldLevel5",
			when: "editorTextFocus && foldingEnabled",
		},
		{
			key: "ctrl+k ctrl+6",
			command: "editor.foldLevel6",
			when: "editorTextFocus && foldingEnabled",
		},
		{
			key: "ctrl+k ctrl+7",
			command: "editor.foldLevel7",
			when: "editorTextFocus && foldingEnabled",
		},
		{
			key: "ctrl+k ctrl+[",
			command: "editor.foldRecursively",
			when: "editorTextFocus && foldingEnabled",
		},
		{ key: "f12", command: "editor.gotoNextSymbolFromResult", when: "hasSymbols" },
		{ key: "escape", command: "editor.gotoNextSymbolFromResult.cancel", when: "hasSymbols" },
		{
			key: "ctrl+k ctrl+l",
			command: "editor.toggleFold",
			when: "editorTextFocus && foldingEnabled",
		},
		{
			key: "ctrl+shift+]",
			command: "editor.unfold",
			when: "editorTextFocus && foldingEnabled",
		},
		{
			key: "ctrl+k ctrl+j",
			command: "editor.unfoldAll",
			when: "editorTextFocus && foldingEnabled",
		},
		{
			key: "ctrl+k ctrl+9",
			command: "editor.unfoldAllMarkerRegions",
			when: "editorTextFocus && foldingEnabled",
		},
		{
			key: "ctrl+k ctrl+]",
			command: "editor.unfoldRecursively",
			when: "editorTextFocus && foldingEnabled",
		},
		{
			key: "tab",
			command: "insertSnippet",
			when:
				"editorTextFocus && hasSnippetCompletions && !editorTabMovesFocus && !inSnippetMode",
		},
		{
			key: "ctrl+enter",
			command: "openReferenceToSide",
			when: "listFocus && referenceSearchVisible && !inputFocus",
		},
		{ key: "enter", command: "repl.action.acceptInput", when: "inDebugRepl && textInputFocus" },
		{ key: "ctrl+f", command: "repl.action.filter", when: "inDebugRepl && textInputFocus" },
		{ key: "escape", command: "settings.action.clearSearchResults", when: "inSettingsSearch" },
		{ key: "ctrl+.", command: "settings.action.editFocusedSetting", when: "inSettingsSearch" },
		{ key: "enter", command: "settings.action.focusNextSetting", when: "inSettingsSearch" },
		{
			key: "shift+enter",
			command: "settings.action.focusPreviousSetting",
			when: "inSettingsSearch",
		},
		{
			key: "down",
			command: "settings.action.focusSettingsFile",
			when: "inSettingsSearch && !suggestWidgetVisible",
		},
		{ key: "ctrl+f", command: "settings.action.search", when: "inSettingsEditor" },
		{ key: "ctrl+/", command: "toggleExplainMode", when: "suggestWidgetVisible" },
		{ key: "alt+f5", command: "workbench.action.editor.nextChange", when: "editorTextFocus" },
		{
			key: "shift+alt+f5",
			command: "workbench.action.editor.previousChange",
			when: "editorTextFocus",
		},
		{
			key: "shift+escape",
			command: "workbench.action.hideComment",
			when: "commentEditorFocused",
		},
		{ key: "escape", command: "workbench.action.hideComment", when: "commentEditorFocused" },
		{
			key: "ctrl+enter",
			command: "workbench.action.submitComment",
			when: "commentEditorFocused",
		},
		{
			key: "ctrl+left",
			command: "cursorWordAccessibilityLeft",
			when: "accessibilityModeEnabled && textInputFocus",
		},
		{
			key: "ctrl+shift+left",
			command: "cursorWordAccessibilityLeftSelect",
			when: "accessibilityModeEnabled && textInputFocus",
		},
		{
			key: "ctrl+right",
			command: "cursorWordAccessibilityRight",
			when: "accessibilityModeEnabled && textInputFocus",
		},
		{
			key: "ctrl+shift+right",
			command: "cursorWordAccessibilityRightSelect",
			when: "accessibilityModeEnabled && textInputFocus",
		},
		{
			key: "shift+escape",
			command: "closeFindWidget",
			when: "editorFocus && findWidgetVisible",
		},
		{ key: "escape", command: "closeFindWidget", when: "editorFocus && findWidgetVisible" },
		{
			key: "ctrl+alt+enter",
			command: "editor.action.replaceAll",
			when: "editorFocus && findWidgetVisible",
		},
		{
			key: "ctrl+shift+1",
			command: "editor.action.replaceOne",
			when: "editorFocus && findWidgetVisible",
		},
		{
			key: "enter",
			command: "editor.action.replaceOne",
			when: "editorFocus && findWidgetVisible && replaceInputFocussed",
		},
		{
			key: "alt+enter",
			command: "editor.action.selectAllMatches",
			when: "editorFocus && findWidgetVisible",
		},
		{ key: "alt+c", command: "toggleFindCaseSensitive", when: "editorFocus" },
		{ key: "alt+l", command: "toggleFindInSelection", when: "editorFocus" },
		{ key: "alt+r", command: "toggleFindRegex", when: "editorFocus" },
		{ key: "alt+w", command: "toggleFindWholeWord", when: "editorFocus" },
		{
			key: "tab",
			command: "jumpToNextSnippetPlaceholder",
			when: "editorTextFocus && hasNextTabstop && inSnippetMode",
		},
		{
			key: "shift+tab",
			command: "jumpToPrevSnippetPlaceholder",
			when: "editorTextFocus && hasPrevTabstop && inSnippetMode",
		},
		{ key: "escape", command: "leaveEditorMessage", when: "messageVisible" },
		{ key: "shift+escape", command: "leaveSnippet", when: "editorTextFocus && inSnippetMode" },
		{ key: "escape", command: "leaveSnippet", when: "editorTextFocus && inSnippetMode" },
		{ key: "shift+escape", command: "closeDirtyDiff", when: "dirtyDiffVisible" },
		{ key: "escape", command: "closeDirtyDiff", when: "dirtyDiffVisible" },
		{
			key: "shift+escape",
			command: "closeMarkersNavigation",
			when: "editorFocus && markersNavigationVisible",
		},
		{
			key: "escape",
			command: "closeMarkersNavigation",
			when: "editorFocus && markersNavigationVisible",
		},
		{
			key: "f12",
			command: "goToNextReferenceFromEmbeddedEditor",
			when: "inReferenceSearchEditor",
		},
		{
			key: "f4",
			command: "goToNextReferenceFromEmbeddedEditor",
			when: "inReferenceSearchEditor",
		},
		{
			key: "shift+f12",
			command: "goToPreviousReferenceFromEmbeddedEditor",
			when: "inReferenceSearchEditor",
		},
		{
			key: "shift+f4",
			command: "goToPreviousReferenceFromEmbeddedEditor",
			when: "inReferenceSearchEditor",
		},
		{
			key: "shift+escape",
			command: "closeParameterHints",
			when: "editorFocus && parameterHintsVisible",
		},
		{
			key: "escape",
			command: "closeParameterHints",
			when: "editorFocus && parameterHintsVisible",
		},
		{
			key: "alt+down",
			command: "showNextParameterHint",
			when: "editorFocus && parameterHintsMultipleSignatures && parameterHintsVisible",
		},
		{
			key: "down",
			command: "showNextParameterHint",
			when: "editorFocus && parameterHintsMultipleSignatures && parameterHintsVisible",
		},
		{
			key: "alt+up",
			command: "showPrevParameterHint",
			when: "editorFocus && parameterHintsMultipleSignatures && parameterHintsVisible",
		},
		{
			key: "up",
			command: "showPrevParameterHint",
			when: "editorFocus && parameterHintsMultipleSignatures && parameterHintsVisible",
		},
		{
			key: "shift+enter",
			command: "acceptSelectedSuggestion",
			when: "suggestWidgetVisible && textInputFocus",
		},
		{
			key: "tab",
			command: "acceptSelectedSuggestion",
			when: "suggestWidgetVisible && textInputFocus",
		},
		{
			key: "enter",
			command: "acceptSelectedSuggestion",
			when:
				"acceptSuggestionOnEnter && suggestWidgetVisible && suggestionMakesTextEdit && textInputFocus",
		},
		{
			key: "shift+tab",
			command: "acceptSelectedSuggestion",
			when: "suggestWidgetVisible && textInputFocus",
		},
		{
			key: "shift+escape",
			command: "hideSuggestWidget",
			when: "suggestWidgetVisible && textInputFocus",
		},
		{
			key: "escape",
			command: "hideSuggestWidget",
			when: "suggestWidgetVisible && textInputFocus",
		},
		{
			key: "tab",
			command: "insertBestCompletion",
			when:
				"atEndOfWord && !hasOtherSuggestions && !inSnippetMode && !suggestWidgetVisible && config.editor.tabCompletion == 'on'",
		},
		{
			key: "tab",
			command: "insertNextSuggestion",
			when:
				"hasOtherSuggestions && textInputFocus && !inSnippetMode && !suggestWidgetVisible && config.editor.tabCompletion == 'on'",
		},
		{
			key: "shift+tab",
			command: "insertPrevSuggestion",
			when:
				"hasOtherSuggestions && textInputFocus && !inSnippetMode && !suggestWidgetVisible && config.editor.tabCompletion == 'on'",
		},
		{
			key: "ctrl+pagedown",
			command: "selectNextPageSuggestion",
			when: "suggestWidgetMultipleSuggestions && suggestWidgetVisible && textInputFocus",
		},
		{
			key: "pagedown",
			command: "selectNextPageSuggestion",
			when: "suggestWidgetMultipleSuggestions && suggestWidgetVisible && textInputFocus",
		},
		{
			key: "ctrl+down",
			command: "selectNextSuggestion",
			when: "suggestWidgetMultipleSuggestions && suggestWidgetVisible && textInputFocus",
		},
		{
			key: "down",
			command: "selectNextSuggestion",
			when: "suggestWidgetMultipleSuggestions && suggestWidgetVisible && textInputFocus",
		},
		{
			key: "ctrl+pageup",
			command: "selectPrevPageSuggestion",
			when: "suggestWidgetMultipleSuggestions && suggestWidgetVisible && textInputFocus",
		},
		{
			key: "pageup",
			command: "selectPrevPageSuggestion",
			when: "suggestWidgetMultipleSuggestions && suggestWidgetVisible && textInputFocus",
		},
		{
			key: "ctrl+up",
			command: "selectPrevSuggestion",
			when: "suggestWidgetMultipleSuggestions && suggestWidgetVisible && textInputFocus",
		},
		{
			key: "up",
			command: "selectPrevSuggestion",
			when: "suggestWidgetMultipleSuggestions && suggestWidgetVisible && textInputFocus",
		},
		{
			key: "ctrl+space",
			command: "toggleSuggestionDetails",
			when: "suggestWidgetVisible && textInputFocus",
		},
		{
			key: "ctrl+alt+space",
			command: "toggleSuggestionFocus",
			when: "suggestWidgetVisible && textInputFocus",
		},
		{ key: "enter", command: "acceptRenameInput", when: "editorFocus && renameInputVisible" },
		{
			key: "shift+escape",
			command: "cancelRenameInput",
			when: "editorFocus && renameInputVisible",
		},
		{ key: "escape", command: "cancelRenameInput", when: "editorFocus && renameInputVisible" },
		{
			key: "ctrl+shift+l",
			command: "addCursorsAtSearchResults",
			when: "fileMatchOrMatchFocus && searchViewletVisible",
		},
		{ key: "ctrl+shift+;", command: "breadcrumbs.focus", when: "breadcrumbsPossible" },
		{ key: "ctrl+shift+.", command: "breadcrumbs.focusAndSelect", when: "breadcrumbsPossible" },
		{
			key: "ctrl+right",
			command: "breadcrumbs.focusNext",
			when: "breadcrumbsActive && breadcrumbsVisible",
		},
		{
			key: "right",
			command: "breadcrumbs.focusNext",
			when: "breadcrumbsActive && breadcrumbsVisible",
		},
		{
			key: "ctrl+left",
			command: "breadcrumbs.focusPrevious",
			when: "breadcrumbsActive && breadcrumbsVisible",
		},
		{
			key: "left",
			command: "breadcrumbs.focusPrevious",
			when: "breadcrumbsActive && breadcrumbsVisible",
		},
		{
			key: "ctrl+enter",
			command: "breadcrumbs.revealFocused",
			when: "breadcrumbsActive && breadcrumbsVisible",
		},
		{
			key: "space",
			command: "breadcrumbs.revealFocused",
			when: "breadcrumbsActive && breadcrumbsVisible",
		},
		{
			key: "ctrl+enter",
			command: "breadcrumbs.revealFocusedFromTreeAside",
			when: "breadcrumbsActive && breadcrumbsVisible && listFocus && !inputFocus",
		},
		{
			key: "down",
			command: "breadcrumbs.selectFocused",
			when: "breadcrumbsActive && breadcrumbsVisible",
		},
		{
			key: "enter",
			command: "breadcrumbs.selectFocused",
			when: "breadcrumbsActive && breadcrumbsVisible",
		},
		{
			key: "ctrl+shift+.",
			command: "breadcrumbs.toggleToOn",
			when: "!config.breadcrumbs.enabled",
		},
		{
			key: "shift+escape",
			command: "closeAccessibilityHelp",
			when: "accessibilityHelpWidgetVisible && editorFocus",
		},
		{
			key: "escape",
			command: "closeAccessibilityHelp",
			when: "accessibilityHelpWidgetVisible && editorFocus",
		},
		{
			key: "escape",
			command: "closeReplaceInFilesWidget",
			when: "replaceInputBoxFocus && searchViewletVisible",
		},
		{ key: "ctrl+alt+c", command: "copyFilePath", when: "!editorFocus" },
		{ key: "ctrl+shift+alt+c", command: "copyRelativeFilePath", when: "!editorFocus" },
		{ key: "alt+enter", command: "debug.openBreakpointToSide", when: "breakpointsFocused" },
		{ key: "ctrl+enter", command: "debug.openBreakpointToSide", when: "breakpointsFocused" },
		{
			key: "delete",
			command: "debug.removeBreakpoint",
			when: "breakpointsFocused && !breakpointSelected",
		},
		{
			key: "delete",
			command: "debug.removeWatchExpression",
			when: "watchExpressionsFocused && !expressionSelected",
		},
		{
			key: "shift+f9",
			command: "editor.debug.action.toggleInlineBreakpoint",
			when: "editorTextFocus",
		},
		{
			key: "shift+enter",
			command: "editor.refocusCallHierarchy",
			when: "callHierarchyVisible",
		},
		{
			key: "shift+alt+h",
			command: "editor.showCallHierarchy",
			when: "editorHasCallHierarchyProvider && editorTextFocus && !inReferenceSearchEditor",
		},
		{ key: "shift+alt+h", command: "editor.toggleCallHierarchy", when: "callHierarchyVisible" },
		{
			key: "ctrl+enter",
			command: "explorer.openToSide",
			when: "explorerViewletFocus && explorerViewletVisible && !inputFocus",
		},
		{
			key: "shift+alt+f",
			command: "filesExplorer.findInFolder",
			when:
				"explorerResourceIsFolder && explorerViewletVisible && filesExplorerFocus && !inputFocus",
		},
		{
			key: "alt+down",
			command: "history.showNext",
			when: "historyNavigationEnabled && historyNavigationWidget",
		},
		{
			key: "down",
			command: "history.showNext",
			when: "historyNavigationEnabled && historyNavigationWidget",
		},
		{
			key: "alt+up",
			command: "history.showPrevious",
			when: "historyNavigationEnabled && historyNavigationWidget",
		},
		{
			key: "up",
			command: "history.showPrevious",
			when: "historyNavigationEnabled && historyNavigationWidget",
		},
		{
			key: "escape",
			command: "keybindings.editor.clearSearchResults",
			when: "inKeybindings && inKeybindingsSearch",
		},
		{
			key: "ctrl+c",
			command: "keybindings.editor.copyKeybindingEntry",
			when: "inKeybindings && keybindingFocus",
		},
		{
			key: "ctrl+k ctrl+k",
			command: "keybindings.editor.defineKeybinding",
			when: "inKeybindings && keybindingFocus",
		},
		{
			key: "ctrl+k ctrl+e",
			command: "keybindings.editor.defineWhenExpression",
			when: "inKeybindings && keybindingFocus",
		},
		{
			key: "down",
			command: "keybindings.editor.focusKeybindings",
			when: "inKeybindings && inKeybindingsSearch",
		},
		{
			key: "alt+k",
			command: "keybindings.editor.recordSearchKeys",
			when: "inKeybindings && inKeybindingsSearch",
		},
		{
			key: "delete",
			command: "keybindings.editor.removeKeybinding",
			when: "inKeybindings && keybindingFocus",
		},
		{ key: "ctrl+f", command: "keybindings.editor.searchKeybindings", when: "inKeybindings" },
		{
			key: "alt+p",
			command: "keybindings.editor.toggleSortByPrecedence",
			when: "inKeybindings",
		},
		{
			key: "escape",
			command: "list.clear",
			when: "listFocus && listHasSelectionOrFocus && !inputFocus",
		},
		{ key: "left", command: "list.collapse", when: "listFocus && !inputFocus" },
		{ key: "ctrl+left", command: "list.collapseAll", when: "listFocus && !inputFocus" },
		{ key: "right", command: "list.expand", when: "listFocus && !inputFocus" },
		{
			key: "shift+down",
			command: "list.expandSelectionDown",
			when: "listFocus && listSupportsMultiselect && !inputFocus",
		},
		{
			key: "shift+up",
			command: "list.expandSelectionUp",
			when: "listFocus && listSupportsMultiselect && !inputFocus",
		},
		{ key: "down", command: "list.focusDown", when: "listFocus && !inputFocus" },
		{ key: "home", command: "list.focusFirst", when: "listFocus && !inputFocus" },
		{ key: "end", command: "list.focusLast", when: "listFocus && !inputFocus" },
		{ key: "pagedown", command: "list.focusPageDown", when: "listFocus && !inputFocus" },
		{ key: "pageup", command: "list.focusPageUp", when: "listFocus && !inputFocus" },
		{ key: "up", command: "list.focusUp", when: "listFocus && !inputFocus" },
		{ key: "ctrl+down", command: "list.scrollDown", when: "listFocus && !inputFocus" },
		{ key: "ctrl+up", command: "list.scrollUp", when: "listFocus && !inputFocus" },
		{ key: "enter", command: "list.select", when: "listFocus && !inputFocus" },
		{
			key: "ctrl+a",
			command: "list.selectAll",
			when: "listFocus && listSupportsMultiselect && !inputFocus",
		},
		{ key: "space", command: "list.toggleExpand", when: "listFocus && !inputFocus" },
		{ key: "delete", command: "notification.clear", when: "notificationFocus" },
		{ key: "left", command: "notification.collapse", when: "notificationFocus" },
		{ key: "right", command: "notification.expand", when: "notificationFocus" },
		{ key: "enter", command: "notification.toggle", when: "notificationFocus" },
		{ key: "space", command: "notification.toggle", when: "notificationFocus" },
		{
			key: "home",
			command: "notifications.focusFirstToast",
			when: "notificationFocus && notificationToastsVisible",
		},
		{
			key: "pageup",
			command: "notifications.focusFirstToast",
			when: "notificationFocus && notificationToastsVisible",
		},
		{
			key: "end",
			command: "notifications.focusLastToast",
			when: "notificationFocus && notificationToastsVisible",
		},
		{
			key: "pagedown",
			command: "notifications.focusLastToast",
			when: "notificationFocus && notificationToastsVisible",
		},
		{
			key: "down",
			command: "notifications.focusNextToast",
			when: "notificationFocus && notificationToastsVisible",
		},
		{
			key: "up",
			command: "notifications.focusPreviousToast",
			when: "notificationFocus && notificationToastsVisible",
		},
		{ key: "ctrl+c", command: "problems.action.copy", when: "problemFocus" },
		{ key: "ctrl+f", command: "problems.action.focusFilter", when: "problemsViewFocus" },
		{
			key: "ctrl+down",
			command: "problems.action.focusProblemsFromFilter",
			when: "problemsFilterFocus",
		},
		{ key: "ctrl+enter", command: "problems.action.openToSide", when: "problemFocus" },
		{ key: "ctrl+.", command: "problems.action.showQuickFixes", when: "problemFocus" },
		{ key: "ctrl+alt+r", command: "revealFileInOS", when: "!editorFocus" },
		{ key: "ctrl+enter", command: "scm.acceptInput", when: "scmRepository" },
		{
			key: "escape",
			command: "search.action.cancel",
			when: "listFocus && searchViewletVisible && !inputFocus",
		},
		{ key: "ctrl+c", command: "search.action.copyMatch", when: "fileMatchOrMatchFocus" },
		{
			key: "ctrl+alt+c",
			command: "search.action.copyPath",
			when: "fileMatchOrFolderMatchWithResourceFocus",
		},
		{ key: "f4", command: "search.action.focusNextSearchResult", when: "hasSearchResult" },
		{
			key: "shift+f4",
			command: "search.action.focusPreviousSearchResult",
			when: "hasSearchResult",
		},
		{
			key: "ctrl+up",
			command: "search.action.focusSearchFromResults",
			when: "firstMatchFocus && searchViewletVisible",
		},
		{
			key: "ctrl+enter",
			command: "search.action.openResultToSide",
			when: "fileMatchOrMatchFocus && searchViewletVisible",
		},
		{
			key: "delete",
			command: "search.action.remove",
			when: "fileMatchOrMatchFocus && searchViewletVisible",
		},
		{
			key: "ctrl+shift+1",
			command: "search.action.replace",
			when: "matchFocus && replaceActive && searchViewletVisible",
		},
		{
			key: "ctrl+alt+enter",
			command: "search.action.replaceAll",
			when: "replaceActive && searchViewletVisible && !findWidgetVisible",
		},
		{
			key: "ctrl+shift+enter",
			command: "search.action.replaceAllInFile",
			when: "fileMatchFocus && replaceActive && searchViewletVisible",
		},
		{
			key: "ctrl+shift+1",
			command: "search.action.replaceAllInFile",
			when: "fileMatchFocus && replaceActive && searchViewletVisible",
		},
		{
			key: "ctrl+shift+enter",
			command: "search.action.replaceAllInFolder",
			when: "folderMatchFocus && replaceActive && searchViewletVisible",
		},
		{
			key: "ctrl+shift+1",
			command: "search.action.replaceAllInFolder",
			when: "folderMatchFocus && replaceActive && searchViewletVisible",
		},
		{
			key: "ctrl+shift+r",
			command: "search.action.rerunEditorSearch",
			when: "editorLangId == 'search-result' && editorLangId == 'search-result'",
		},
		{
			key: "ctrl+down",
			command: "search.focus.nextInputBox",
			when: "inputBoxFocus && searchViewletVisible",
		},
		{
			key: "ctrl+up",
			command: "search.focus.previousInputBox",
			when: "inputBoxFocus && searchViewletVisible && !searchInputBoxFocus",
		},
		{
			key: "down",
			command: "settings.action.focusSettingsFromSearch",
			when: "inSettingsSearch && !suggestWidgetVisible",
		},
		{
			key: "enter",
			command: "settings.action.focusSettingsList",
			when: "inSettingsEditor && settingsTocRowFocus",
		},
		{ key: "shift+f9", command: "settings.action.showContextMenu", when: "inSettingsEditor" },
		{
			key: "alt+c",
			command: "toggleSearchCaseSensitive",
			when: "searchViewletFocus && searchViewletVisible && !fileMatchOrFolderMatchFocus",
		},
		{
			key: "alt+r",
			command: "toggleSearchRegex",
			when: "searchViewletFocus && searchViewletVisible",
		},
		{
			key: "alt+w",
			command: "toggleSearchWholeWord",
			when: "searchViewletFocus && searchViewletVisible",
		},
		{ key: "ctrl+w", command: "workbench.action.closeActiveEditor" },
		{ key: "ctrl+k ctrl+w", command: "workbench.action.closeAllEditors" },
		{ key: "ctrl+k ctrl+shift+w", command: "workbench.action.closeAllGroups" },
		{ key: "ctrl+k w", command: "workbench.action.closeEditorsInGroup" },
		{ key: "ctrl+k f", command: "workbench.action.closeFolder" },
		{
			key: "ctrl+w",
			command: "workbench.action.closeGroup",
			when: "activeEditorGroupEmpty && multipleEditorGroups",
		},
		{ key: "shift+escape", command: "workbench.action.closeQuickOpen", when: "inQuickOpen" },
		{ key: "escape", command: "workbench.action.closeQuickOpen", when: "inQuickOpen" },
		{ key: "ctrl+k u", command: "workbench.action.closeUnmodifiedEditors" },
		{ key: "ctrl+shift+w", command: "workbench.action.closeWindow" },
		{
			key: "ctrl+w",
			command: "workbench.action.closeWindow",
			when: "!editorIsOpen && !multipleEditorGroups",
		},
		{
			key: "alt+f5",
			command: "workbench.action.compareEditor.nextChange",
			when: "textCompareEditorVisible",
		},
		{
			key: "shift+alt+f5",
			command: "workbench.action.compareEditor.previousChange",
			when: "textCompareEditorVisible",
		},
		{ key: "f5", command: "workbench.action.debug.continue", when: "inDebugMode" },
		{ key: "f6", command: "workbench.action.debug.pause", when: "debugState == 'running'" },
		{ key: "ctrl+shift+f5", command: "workbench.action.debug.restart", when: "inDebugMode" },
		{ key: "ctrl+f5", command: "workbench.action.debug.run" },
		{ key: "f5", command: "workbench.action.debug.start", when: "!inDebugMode" },
		{
			key: "shift+f11",
			command: "workbench.action.debug.stepOut",
			when: "debugState == 'stopped'",
		},
		{ key: "f10", command: "workbench.action.debug.stepOver", when: "debugState == 'stopped'" },
		{ key: "shift+f5", command: "workbench.action.debug.stop", when: "inDebugMode" },
		{ key: "ctrl+k m", command: "workbench.action.editor.changeLanguageMode" },
		{ key: "ctrl+k p", command: "workbench.action.files.copyPathOfActiveFile" },
		{ key: "ctrl+n", command: "workbench.action.files.newUntitledFile" },
		{ key: "ctrl+o", command: "workbench.action.files.openFile" },
		{ key: "ctrl+k ctrl+o", command: "workbench.action.files.openFolder" },
		{
			key: "ctrl+o",
			command: "workbench.action.files.openLocalFile",
			when: "remoteFileDialogVisible",
		},
		{
			key: "ctrl+k ctrl+o",
			command: "workbench.action.files.openLocalFolder",
			when: "remoteFileDialogVisible",
		},
		{ key: "ctrl+k r", command: "workbench.action.files.revealActiveFileInWindows" },
		{ key: "ctrl+s", command: "workbench.action.files.save" },
		{ key: "ctrl+shift+s", command: "workbench.action.files.saveAs" },
		{
			key: "ctrl+shift+s",
			command: "workbench.action.files.saveLocalFile",
			when: "remoteFileDialogVisible",
		},
		{ key: "ctrl+k s", command: "workbench.action.files.saveWithoutFormatting" },
		{ key: "ctrl+k o", command: "workbench.action.files.showOpenedFileInNewWindow" },
		{ key: "ctrl+shift+f", command: "workbench.action.findInFiles" },
		{ key: "ctrl+k ctrl+up", command: "workbench.action.focusAboveGroup" },
		{ key: "ctrl+k ctrl+down", command: "workbench.action.focusBelowGroup" },
		{ key: "ctrl+8", command: "workbench.action.focusEighthEditorGroup" },
		{ key: "ctrl+5", command: "workbench.action.focusFifthEditorGroup" },
		{ key: "ctrl+1", command: "workbench.action.focusFirstEditorGroup" },
		{ key: "ctrl+4", command: "workbench.action.focusFourthEditorGroup" },
		{ key: "ctrl+k ctrl+left", command: "workbench.action.focusLeftGroup" },
		{ key: "ctrl+k ctrl+right", command: "workbench.action.focusRightGroup" },
		{ key: "ctrl+2", command: "workbench.action.focusSecondEditorGroup" },
		{ key: "ctrl+7", command: "workbench.action.focusSeventhEditorGroup" },
		{ key: "ctrl+0", command: "workbench.action.focusSideBar" },
		{ key: "ctrl+6", command: "workbench.action.focusSixthEditorGroup" },
		{ key: "ctrl+3", command: "workbench.action.focusThirdEditorGroup" },
		{ key: "ctrl+g", command: "workbench.action.gotoLine" },
		{ key: "ctrl+shift+o", command: "workbench.action.gotoSymbol" },
		{
			key: "escape",
			command: "workbench.action.hideInterfaceOverview",
			when: "interfaceOverviewVisible",
		},
		{
			key: "down",
			command: "workbench.action.interactivePlayground.arrowDown",
			when: "interactivePlaygroundFocus && !editorTextFocus",
		},
		{
			key: "up",
			command: "workbench.action.interactivePlayground.arrowUp",
			when: "interactivePlaygroundFocus && !editorTextFocus",
		},
		{
			key: "pagedown",
			command: "workbench.action.interactivePlayground.pageDown",
			when: "interactivePlaygroundFocus && !editorTextFocus",
		},
		{
			key: "pageup",
			command: "workbench.action.interactivePlayground.pageUp",
			when: "interactivePlaygroundFocus && !editorTextFocus",
		},
		{ key: "ctrl+k enter", command: "workbench.action.keepEditor" },
		{ key: "ctrl+k ctrl+r", command: "workbench.action.keybindingsReference" },
		{ key: "ctrl+9", command: "workbench.action.lastEditorInGroup" },
		{ key: "alt+0", command: "workbench.action.lastEditorInGroup" },
		{ key: "ctrl+k down", command: "workbench.action.moveActiveEditorGroupDown" },
		{ key: "ctrl+k left", command: "workbench.action.moveActiveEditorGroupLeft" },
		{ key: "ctrl+k right", command: "workbench.action.moveActiveEditorGroupRight" },
		{ key: "ctrl+k up", command: "workbench.action.moveActiveEditorGroupUp" },
		{ key: "ctrl+shift+pageup", command: "workbench.action.moveEditorLeftInGroup" },
		{ key: "ctrl+shift+pagedown", command: "workbench.action.moveEditorRightInGroup" },
		{ key: "shift+alt+1", command: "workbench.action.moveEditorToFirstGroup" },
		{ key: "shift+alt+9", command: "workbench.action.moveEditorToLastGroup" },
		{ key: "ctrl+alt+right", command: "workbench.action.moveEditorToNextGroup" },
		{ key: "ctrl+alt+left", command: "workbench.action.moveEditorToPreviousGroup" },
		{ key: "ctrl+alt+-", command: "workbench.action.navigateBack" },
		{ key: "ctrl+shift+-", command: "workbench.action.navigateForward" },
		{ key: "ctrl+k ctrl+q", command: "workbench.action.navigateToLastEditLocation" },
		{ key: "ctrl+shift+n", command: "workbench.action.newWindow" },
		{ key: "ctrl+pagedown", command: "workbench.action.nextEditor" },
		{ key: "alt+1", command: "workbench.action.openEditorAtIndex1" },
		{ key: "alt+2", command: "workbench.action.openEditorAtIndex2" },
		{ key: "alt+3", command: "workbench.action.openEditorAtIndex3" },
		{ key: "alt+4", command: "workbench.action.openEditorAtIndex4" },
		{ key: "alt+5", command: "workbench.action.openEditorAtIndex5" },
		{ key: "alt+6", command: "workbench.action.openEditorAtIndex6" },
		{ key: "alt+7", command: "workbench.action.openEditorAtIndex7" },
		{ key: "alt+8", command: "workbench.action.openEditorAtIndex8" },
		{ key: "alt+9", command: "workbench.action.openEditorAtIndex9" },
		{ key: "ctrl+k ctrl+s", command: "workbench.action.openGlobalKeybindings" },
		{ key: "ctrl+tab", command: "workbench.action.openNextRecentlyUsedEditorInGroup" },
		{
			key: "ctrl+shift+tab",
			command: "workbench.action.openPreviousRecentlyUsedEditorInGroup",
		},
		{ key: "ctrl+r", command: "workbench.action.openRecent" },
		{ key: "ctrl+,", command: "workbench.action.openSettings" },
		{ key: "ctrl+k ctrl+h", command: "workbench.action.output.toggleOutput" },
		{ key: "ctrl+pageup", command: "workbench.action.previousEditor" },
		{ key: "ctrl+e", command: "workbench.action.quickOpen" },
		{ key: "ctrl+p", command: "workbench.action.quickOpen" },
		{ key: "ctrl+q", command: "workbench.action.quit" },
		{ key: "ctrl+shift+t", command: "workbench.action.reopenClosedEditor" },
		{ key: "ctrl+shift+h", command: "workbench.action.replaceInFiles" },
		{
			key: "ctrl+shift+j",
			command: "workbench.action.search.toggleQueryDetails",
			when: "searchViewletVisible",
		},
		{ key: "ctrl+k ctrl+t", command: "workbench.action.selectTheme" },
		{ key: "ctrl+k ctrl+p", command: "workbench.action.showAllEditors" },
		{ key: "ctrl+t", command: "workbench.action.showAllSymbols" },
		{ key: "f1", command: "workbench.action.showCommands" },
		{ key: "ctrl+shift+p", command: "workbench.action.showCommands" },
		{ key: "ctrl+\\", command: "workbench.action.splitEditor" },
		{ key: "ctrl+k ctrl+\\", command: "workbench.action.splitEditorOrthogonal" },
		{ key: "ctrl+shift+b", command: "workbench.action.tasks.build" },
		{
			key: "escape",
			command: "workbench.action.terminal.clearSelection",
			when: "terminalFocus && terminalTextSelected && !terminalFindWidgetVisible",
		},
		{
			key: "ctrl+shift+c",
			command: "workbench.action.terminal.copySelection",
			when: "terminalFocus && terminalTextSelected",
		},
		{
			key: "ctrl+backspace",
			command: "workbench.action.terminal.deleteWordLeft",
			when: "terminalFocus",
		},
		{
			key: "ctrl+delete",
			command: "workbench.action.terminal.deleteWordRight",
			when: "terminalFocus",
		},
		{
			key: "shift+enter",
			command: "workbench.action.terminal.findNext",
			when: "terminalFindWidgetFocused",
		},
		{ key: "f3", command: "workbench.action.terminal.findNext", when: "terminalFocus" },
		{
			key: "f3",
			command: "workbench.action.terminal.findNext",
			when: "terminalFindWidgetFocused",
		},
		{
			key: "enter",
			command: "workbench.action.terminal.findPrevious",
			when: "terminalFindWidgetFocused",
		},
		{
			key: "shift+f3",
			command: "workbench.action.terminal.findPrevious",
			when: "terminalFocus",
		},
		{
			key: "shift+f3",
			command: "workbench.action.terminal.findPrevious",
			when: "terminalFindWidgetFocused",
		},
		{
			key: "ctrl+f",
			command: "workbench.action.terminal.focusFindWidget",
			when: "terminalFocus",
		},
		{
			key: "ctrl+f",
			command: "workbench.action.terminal.focusFindWidget",
			when: "terminalFindWidgetFocused",
		},
		{
			key: "alt+down",
			command: "workbench.action.terminal.focusNextPane",
			when: "terminalFocus",
		},
		{
			key: "alt+right",
			command: "workbench.action.terminal.focusNextPane",
			when: "terminalFocus",
		},
		{
			key: "alt+up",
			command: "workbench.action.terminal.focusPreviousPane",
			when: "terminalFocus",
		},
		{
			key: "alt+left",
			command: "workbench.action.terminal.focusPreviousPane",
			when: "terminalFocus",
		},
		{
			key: "shift+escape",
			command: "workbench.action.terminal.hideFindWidget",
			when: "terminalFindWidgetVisible && terminalFocus",
		},
		{
			key: "escape",
			command: "workbench.action.terminal.hideFindWidget",
			when: "terminalFindWidgetVisible && terminalFocus",
		},
		{
			key: "escape",
			command: "workbench.action.terminal.navigationModeExit",
			when: "accessibilityModeEnabled && terminalA11yTreeFocus",
		},
		{
			key: "ctrl+down",
			command: "workbench.action.terminal.navigationModeFocusNext",
			when: "accessibilityModeEnabled && terminalFocus",
		},
		{
			key: "ctrl+down",
			command: "workbench.action.terminal.navigationModeFocusNext",
			when: "accessibilityModeEnabled && terminalA11yTreeFocus",
		},
		{
			key: "ctrl+up",
			command: "workbench.action.terminal.navigationModeFocusPrevious",
			when: "accessibilityModeEnabled && terminalFocus",
		},
		{
			key: "ctrl+up",
			command: "workbench.action.terminal.navigationModeFocusPrevious",
			when: "accessibilityModeEnabled && terminalA11yTreeFocus",
		},
		{ key: "ctrl+shift+`", command: "workbench.action.terminal.new" },
		{
			key: "ctrl+shift+c",
			command: "workbench.action.terminal.openNativeConsole",
			when: "!terminalFocus",
		},
		{ key: "ctrl+shift+v", command: "workbench.action.terminal.paste", when: "terminalFocus" },
		{
			key: "ctrl+shift+left",
			command: "workbench.action.terminal.resizePaneLeft",
			when: "terminalFocus",
		},
		{
			key: "ctrl+shift+right",
			command: "workbench.action.terminal.resizePaneRight",
			when: "terminalFocus",
		},
		{
			key: "ctrl+shift+down",
			command: "workbench.action.terminal.scrollDown",
			when: "terminalFocus",
		},
		{
			key: "shift+pagedown",
			command: "workbench.action.terminal.scrollDownPage",
			when: "terminalFocus",
		},
		{
			key: "shift+end",
			command: "workbench.action.terminal.scrollToBottom",
			when: "terminalFocus",
		},
		{
			key: "shift+home",
			command: "workbench.action.terminal.scrollToTop",
			when: "terminalFocus",
		},
		{
			key: "ctrl+shift+up",
			command: "workbench.action.terminal.scrollUp",
			when: "terminalFocus",
		},
		{
			key: "shift+pageup",
			command: "workbench.action.terminal.scrollUpPage",
			when: "terminalFocus",
		},
		{ key: "ctrl+shift+5", command: "workbench.action.terminal.split", when: "terminalFocus" },
		{
			key: "alt+c",
			command: "workbench.action.terminal.toggleFindCaseSensitive",
			when: "terminalFindWidgetFocused",
		},
		{
			key: "alt+c",
			command: "workbench.action.terminal.toggleFindCaseSensitive",
			when: "terminalFocus",
		},
		{
			key: "alt+r",
			command: "workbench.action.terminal.toggleFindRegex",
			when: "terminalFindWidgetFocused",
		},
		{
			key: "alt+r",
			command: "workbench.action.terminal.toggleFindRegex",
			when: "terminalFocus",
		},
		{
			key: "alt+w",
			command: "workbench.action.terminal.toggleFindWholeWord",
			when: "terminalFindWidgetFocused",
		},
		{
			key: "alt+w",
			command: "workbench.action.terminal.toggleFindWholeWord",
			when: "terminalFocus",
		},
		{ key: "ctrl+`", command: "workbench.action.terminal.toggleTerminal" },
		{ key: "shift+alt+0", command: "workbench.action.toggleEditorGroupLayout" },
		{ key: "f11", command: "workbench.action.toggleFullScreen" },
		{ key: "ctrl+j", command: "workbench.action.togglePanel" },
		{ key: "ctrl+b", command: "workbench.action.toggleSidebarVisibility" },
		{ key: "ctrl+meta+w", command: "workbench.action.toggleTabsVisibility" },
		{ key: "ctrl+k z", command: "workbench.action.toggleZenMode" },
		{ key: "ctrl+numpad_add", command: "workbench.action.zoomIn" },
		{ key: "ctrl+shift+=", command: "workbench.action.zoomIn" },
		{ key: "ctrl+=", command: "workbench.action.zoomIn" },
		{ key: "ctrl+numpad_subtract", command: "workbench.action.zoomOut" },
		{ key: "ctrl+-", command: "workbench.action.zoomOut" },
		{ key: "ctrl+numpad0", command: "workbench.action.zoomReset" },
		{ key: "ctrl+shift+m", command: "workbench.actions.view.problems" },
		{ key: "ctrl+shift+y", command: "workbench.debug.action.toggleRepl" },
		{
			key: "ctrl+k ctrl+m",
			command: "workbench.extensions.action.showRecommendedKeymapExtensions",
		},
		{ key: "ctrl+k c", command: "workbench.files.action.compareWithClipboard" },
		{ key: "ctrl+k d", command: "workbench.files.action.compareWithSaved" },
		{
			key: "ctrl+k e",
			command: "workbench.files.action.focusOpenEditorsView",
			when: "workbench.explorer.openEditorsView.active",
		},
		{ key: "ctrl+shift+d", command: "workbench.view.debug" },
		{ key: "ctrl+shift+e", command: "workbench.view.explorer" },
		{ key: "ctrl+shift+x", command: "workbench.view.extensions" },
		{ key: "ctrl+shift+g", command: "workbench.view.scm" },
		{ key: "ctrl+shift+f", command: "workbench.view.search", when: "!searchViewletVisible" },
		{
			key: "ctrl+right",
			command: "breadcrumbs.focusNextWithPicker",
			when: "breadcrumbsActive && breadcrumbsVisible && listFocus && !inputFocus",
		},
		{
			key: "ctrl+left",
			command: "breadcrumbs.focusPreviousWithPicker",
			when: "breadcrumbsActive && breadcrumbsVisible && listFocus && !inputFocus",
		},
		{
			key: "escape",
			command: "breadcrumbs.selectEditor",
			when: "breadcrumbsActive && breadcrumbsVisible",
		},
		{ key: "f2", command: "debug.renameWatchExpression", when: "watchExpressionsFocused" },
		{ key: "f2", command: "debug.setVariable", when: "variablesFocused" },
		{
			key: "space",
			command: "debug.toggleBreakpoint",
			when: "breakpointsFocused && !inputFocus",
		},
		{
			key: "shift+delete",
			command: "deleteFile",
			when:
				"explorerViewletVisible && filesExplorerFocus && !explorerResourceReadonly && !inputFocus",
		},
		{
			key: "delete",
			command: "deleteFile",
			when:
				"explorerViewletVisible && filesExplorerFocus && !explorerResourceMoveableToTrash && !explorerResourceReadonly && !inputFocus",
		},
		{
			key: "escape",
			command: "editor.closeCallHierarchy",
			when: "callHierarchyVisible && !config.editor.stablePeek",
		},
		{
			key: "escape",
			command: "filesExplorer.cancelCut",
			when:
				"explorerResourceCut && explorerViewletVisible && filesExplorerFocus && !inputFocus",
		},
		{
			key: "ctrl+c",
			command: "filesExplorer.copy",
			when:
				"explorerViewletVisible && filesExplorerFocus && !explorerResourceIsRoot && !inputFocus",
		},
		{
			key: "ctrl+x",
			command: "filesExplorer.cut",
			when:
				"explorerViewletVisible && filesExplorerFocus && !explorerResourceIsRoot && !inputFocus",
		},
		{
			key: "space",
			command: "filesExplorer.openFilePreserveFocus",
			when:
				"explorerViewletVisible && filesExplorerFocus && !explorerResourceIsFolder && !inputFocus",
		},
		{
			key: "ctrl+v",
			command: "filesExplorer.paste",
			when:
				"explorerViewletVisible && filesExplorerFocus && !explorerResourceReadonly && !inputFocus",
		},
		{
			key: "home",
			command: "firstCompressedFolder",
			when:
				"explorerViewletCompressedFocus && explorerViewletVisible && filesExplorerFocus && !explorerViewletCompressedFirstFocus && !inputFocus",
		},
		{
			key: "end",
			command: "lastCompressedFolder",
			when:
				"explorerViewletCompressedFocus && explorerViewletVisible && filesExplorerFocus && !explorerViewletCompressedLastFocus && !inputFocus",
		},
		{
			key: "delete",
			command: "moveFileToTrash",
			when:
				"explorerResourceMoveableToTrash && explorerViewletVisible && filesExplorerFocus && !explorerResourceReadonly && !inputFocus",
		},
		{
			key: "right",
			command: "nextCompressedFolder",
			when:
				"explorerViewletCompressedFocus && explorerViewletVisible && filesExplorerFocus && !explorerViewletCompressedLastFocus && !inputFocus",
		},
		{
			key: "left",
			command: "previousCompressedFolder",
			when:
				"explorerViewletCompressedFocus && explorerViewletVisible && filesExplorerFocus && !explorerViewletCompressedFirstFocus && !inputFocus",
		},
		{
			key: "f2",
			command: "renameFile",
			when:
				"explorerViewletVisible && filesExplorerFocus && !explorerResourceIsRoot && !explorerResourceReadonly && !inputFocus",
		},
		{ key: "f11", command: "workbench.action.debug.stepInto", when: "debugState == 'stopped'" },
		{
			key: "shift+escape",
			command: "closeReferenceSearch",
			when: "referenceSearchVisible && !config.editor.stablePeek",
		},
		{
			key: "escape",
			command: "closeReferenceSearch",
			when: "referenceSearchVisible && !config.editor.stablePeek",
		},
		{ key: "f12", command: "goToNextReference", when: "referenceSearchVisible" },
		{ key: "f4", command: "goToNextReference", when: "referenceSearchVisible" },
		{ key: "shift+f12", command: "goToPreviousReference", when: "referenceSearchVisible" },
		{ key: "shift+f4", command: "goToPreviousReference", when: "referenceSearchVisible" },
		{ key: "escape", command: "notifications.hideList", when: "notificationCenterVisible" },
		{ key: "escape", command: "notifications.hideToasts", when: "notificationToastsVisible" },
		{ key: "ctrl+alt+-", command: "workbench.action.quickInputBack", when: "inQuickOpen" },
		{
			key: "ctrl+tab",
			command: "workbench.action.quickOpenNavigateNextInEditorPicker",
			when: "inEditorsPicker && inQuickOpen",
		},
		{
			key: "ctrl+e",
			command: "workbench.action.quickOpenNavigateNextInFilePicker",
			when: "inFilesPicker && inQuickOpen",
		},
		{
			key: "ctrl+p",
			command: "workbench.action.quickOpenNavigateNextInFilePicker",
			when: "inFilesPicker && inQuickOpen",
		},
		{
			key: "ctrl+r",
			command: "workbench.action.quickOpenNavigateNextInRecentFilesPicker",
			when: "inQuickOpen && inRecentFilesPicker",
		},
		{
			key: "ctrl+shift+tab",
			command: "workbench.action.quickOpenNavigatePreviousInEditorPicker",
			when: "inEditorsPicker && inQuickOpen",
		},
		{
			key: "ctrl+shift+e",
			command: "workbench.action.quickOpenNavigatePreviousInFilePicker",
			when: "inFilesPicker && inQuickOpen",
		},
		{
			key: "ctrl+shift+p",
			command: "workbench.action.quickOpenNavigatePreviousInFilePicker",
			when: "inFilesPicker && inQuickOpen",
		},
		{
			key: "ctrl+shift+r",
			command: "workbench.action.quickOpenNavigatePreviousInRecentFilesPicker",
			when: "inQuickOpen && inRecentFilesPicker",
		},
		{ key: "ctrl+r", command: "workbench.action.reloadWindow", when: "isDevelopment" },
		{ key: "ctrl+shift+i", command: "workbench.action.toggleDevTools", when: "isDevelopment" },
		{
			key: "ctrl+f4",
			command: "extension.node-debug.pickLoadedScript",
			when: "debugType == 'node'",
		},
		{
			key: "ctrl+f4",
			command: "extension.node-debug.pickLoadedScript",
			when: "debugType == 'node2'",
		},
		{
			key: "ctrl+shift+v",
			command: "markdown.showPreview",
			when: "editorLangId == 'markdown'",
		},
		{
			key: "shift+alt+f12",
			command: "references-view.find",
			when: "editorHasReferenceProvider",
		},
		{
			key: "f10",
			command: "extension.node-debug.startWithStopOnEntry",
			when: "!inDebugMode && debugConfigurationType == 'node'",
		},
		{
			key: "ctrl+k v",
			command: "markdown.showPreviewToSide",
			when: "editorLangId == 'markdown'",
		},
		{ key: "f4", command: "references-view.next", when: "reference-list.hasResult" },
		{ key: "shift+f4", command: "references-view.prev", when: "reference-list.hasResult" },
		{
			key: "shift+alt+h",
			command: "references-view.showCallHierarchy",
			when: "editorHasCallHierarchyProvider",
		},
		{
			key: "alt+o",
			command: "C_Cpp.SwitchHeaderSource",
			when: "editorTextFocus && editorLangId == 'cpp'",
		},
		{ key: "ctrl+shift+v", command: "excel.preview", when: "editorLangId == 'excel'" },
		{ key: "left", command: "gitlens.key.left", when: "gitlens:key:left" },
		{ key: "shift+alt+u", command: "java.projectConfiguration.update", when: "editorFocus" },
		{
			key: "ctrl+l alt+b",
			command: "latex-workshop.build",
			when: "config.latex-workshop.bind.altKeymap.enabled && editorLangId == 'latex'",
		},
		{
			key: "ctrl+k v",
			command: "markdown-preview-enhanced.openPreviewToTheSide",
			when: "editorLangId == 'markdown'",
		},
		{
			key: "shift+enter",
			command: "python.execSelectionInTerminal",
			when:
				"editorTextFocus && !findInputFocussed && !python.datascience.ownsSelection && !replaceInputFocussed && editorLangId == 'python'",
		},
		{
			key: "ctrl+u",
			command: "rust-analyzer.parentModule",
			when: "editorTextFocus && editorLangId == 'rust'",
		},
		{ key: "ctrl+shift+alt+x", command: "xmlTools.evaluateXPath" },
		{
			key: "alt+o",
			command: "C_Cpp.SwitchHeaderSource",
			when: "editorTextFocus && editorLangId == 'c'",
		},
		{ key: "ctrl+shift+v", command: "csv.preview", when: "editorLangId == 'csv'" },
		{ key: "alt+left", command: "gitlens.key.alt+left", when: "gitlens:key:alt+left" },
		{ key: "shift+alt+b", command: "java.workspace.compile" },
		{
			key: "ctrl+l alt+c",
			command: "latex-workshop.clean",
			when: "config.latex-workshop.bind.altKeymap.enabled && editorLangId == 'latex'",
		},
		{
			key: "ctrl+shift+v",
			command: "markdown-preview-enhanced.openPreview",
			when: "editorLangId == 'markdown'",
		},
		{
			key: "shift+enter",
			command: "python.datascience.execSelectionInteractive",
			when:
				"editorTextFocus && python.datascience.featureenabled && python.datascience.ownsSelection && !findInputFocussed && !replaceInputFocussed && editorLangId == 'python'",
		},
		{
			key: "ctrl+shift+m",
			command: "rust-analyzer.matchingBrace",
			when: "editorTextFocus && editorLangId == 'rust'",
		},
		{ key: "ctrl+shift+alt+b", command: "xmlTools.formatAsXml" },
		{ key: "ctrl+shift+v", command: "csv.preview", when: "editorLangId == 'tsv'" },
		{ key: "ctrl+left", command: "gitlens.key.ctrl+left", when: "gitlens:key:ctrl+left" },
		{
			key: "ctrl+shift+v",
			command: "java.action.clipboardPasteAction",
			when: "javaLSReady && editorLangId == 'java'",
		},
		{
			key: "ctrl+l alt+v",
			command: "latex-workshop.view",
			when: "config.latex-workshop.bind.altKeymap.enabled && editorLangId == 'latex'",
		},
		{
			key: "ctrl+shift+enter",
			command: "markdown-preview-enhanced.runAllCodeChunks",
			when: "editorLangId == 'markdown'",
		},
		{
			key: "shift+enter",
			command: "python.datascience.runcurrentcelladvance",
			when:
				"editorTextFocus && python.datascience.featureenabled && python.datascience.hascodecells && !editorHasSelection",
		},
		{
			key: "ctrl+shift+j",
			command: "rust-analyzer.joinLines",
			when: "editorTextFocus && editorLangId == 'rust'",
		},
		{ key: "ctrl+shift+v", command: "csv.preview", when: "editorLangId == 'csv (semicolon)'" },
		{ key: "right", command: "gitlens.key.right", when: "gitlens:key:right" },
		{
			key: "ctrl+l alt+j",
			command: "latex-workshop.synctex",
			when:
				"config.latex-workshop.bind.altKeymap.enabled && editorTextFocus && editorLangId == 'latex'",
		},
		{
			key: "shift+enter",
			command: "markdown-preview-enhanced.runCodeChunk",
			when: "editorLangId == 'markdown'",
		},
		{
			key: "ctrl+enter",
			command: "python.datascience.runcurrentcell",
			when:
				"editorTextFocus && python.datascience.featureenabled && python.datascience.hascodecells && !editorHasSelection",
		},
		{
			key: "ctrl+r",
			command: "rust-analyzer.run",
			when: "editorTextFocus && editorLangId == 'rust'",
		},
		{ key: "ctrl+shift+v", command: "csv.preview", when: "editorLangId == 'csv (pipe)'" },
		{ key: "alt+right", command: "gitlens.key.alt+right", when: "gitlens:key:alt+right" },
		{
			key: "ctrl+shift+s",
			command: "markdown-preview-enhanced.syncPreview",
			when: "editorLangId == 'markdown'",
		},
		{
			key: "alt+enter",
			command: "python.datascience.runcurrentcellandaddbelow",
			when:
				"editorTextFocus && python.datascience.featureenabled && python.datascience.hascodecells && !editorHasSelection",
		},
		{
			key: "ctrl+l alt+x",
			command: "workbench.view.extension.latex",
			when: "config.latex-workshop.bind.altKeymap.enabled",
		},
		{ key: "ctrl+right", command: "gitlens.key.ctrl+right", when: "gitlens:key:ctrl+right" },
		{
			key: "ctrl+alt+b",
			command: "latex-workshop.build",
			when: "!config.latex-workshop.bind.altKeymap.enabled && editorLangId == 'latex'",
		},
		{ key: "alt+,", command: "gitlens.key.alt+,", when: "gitlens:key:," },
		{
			key: "ctrl+alt+c",
			command: "latex-workshop.clean",
			when: "!config.latex-workshop.bind.altKeymap.enabled && editorLangId == 'latex'",
		},
		{ key: "alt+.", command: "gitlens.key.alt+.", when: "gitlens:key:." },
		{
			key: "ctrl+alt+v",
			command: "latex-workshop.view",
			when: "!config.latex-workshop.bind.altKeymap.enabled && editorLangId == 'latex'",
		},
		{
			key: "escape",
			command: "gitlens.key.escape",
			when:
				"editorTextFocus && gitlens:key:escape && !findWidgetVisible && !isInEmbeddedEditor && !renameInputVisible && !suggestWidgetVisible",
		},
		{
			key: "ctrl+alt+j",
			command: "latex-workshop.synctex",
			when:
				"editorTextFocus && !config.latex-workshop.bind.altKeymap.enabled && editorLangId == 'latex'",
		},
		{
			key: "alt+b",
			command: "gitlens.toggleFileBlame",
			when:
				"editorTextFocus && config.gitlens.keymap == 'alternate' && gitlens:activeFileStatus =~ /blameable/",
		},
		{
			key: "ctrl+alt+x",
			command: "workbench.view.extension.latex",
			when: "!config.latex-workshop.bind.altKeymap.enabled",
		},
		{
			key: "shift+alt+b",
			command: "gitlens.toggleCodeLens",
			when:
				"editorTextFocus && gitlens:canToggleCodeLens && gitlens:enabled && config.gitlens.keymap == 'alternate'",
		},
		{
			key: "ctrl+l [",
			command: "latex-workshop.promote-sectioning",
			when:
				"config.latex-workshop.bind.altKeymap.enabled && editorTextFocus && !editorReadonly && editorLangId =~ /latex|rsweave/",
		},
		{
			key: "alt+-",
			command: "gitlens.showLastQuickPick",
			when: "gitlens:enabled && config.gitlens.keymap == 'alternate'",
		},
		{
			key: "ctrl+l ]",
			command: "latex-workshop.demote-sectioning",
			when:
				"config.latex-workshop.bind.altKeymap.enabled && editorTextFocus && !editorReadonly && editorLangId =~ /latex|rsweave/",
		},
		{
			key: "alt+/",
			command: "gitlens.showCommitSearch",
			when: "gitlens:enabled && config.gitlens.keymap == 'alternate'",
		},
		{
			key: "ctrl+alt+[",
			command: "latex-workshop.promote-sectioning",
			when:
				"editorTextFocus && !config.latex-workshop.bind.altKeymap.enabled && !editorReadonly && editorLangId =~ /latex|rsweave/",
		},
		{
			key: "alt+h",
			command: "gitlens.showQuickFileHistory",
			when: "gitlens:enabled && config.gitlens.keymap == 'alternate'",
		},
		{
			key: "ctrl+alt+]",
			command: "latex-workshop.demote-sectioning",
			when:
				"editorTextFocus && !config.latex-workshop.bind.altKeymap.enabled && !editorReadonly && editorLangId =~ /latex|rsweave/",
		},
		{
			key: "shift+alt+h",
			command: "gitlens.showQuickRepoHistory",
			when: "gitlens:enabled && config.gitlens.keymap == 'alternate'",
		},
		{
			key: "ctrl+l ctrl+enter",
			command: "latex-workshop.shortcut.item",
			when: "editorTextFocus && !editorReadonly && editorLangId =~ /latex|rsweave/",
		},
		{
			key: "alt+s",
			command: "gitlens.showQuickRepoStatus",
			when: "gitlens:enabled && config.gitlens.keymap == 'alternate'",
		},
		{
			key: "ctrl+l ctrl+b",
			command: "latex-workshop.shortcut.textbf",
			when: "editorTextFocus && !editorReadonly && editorLangId =~ /latex|rsweave/",
		},
		{
			key: "alt+c",
			command: "gitlens.showQuickCommitFileDetails",
			when: "editorTextFocus && gitlens:enabled && config.gitlens.keymap == 'alternate'",
		},
		{
			key: "ctrl+l ctrl+i",
			command: "latex-workshop.shortcut.textit",
			when: "editorTextFocus && !editorReadonly && editorLangId =~ /latex|rsweave/",
		},
		{
			key: "alt+.",
			command: "gitlens.diffWithNext",
			when:
				"editorTextFocus && !isInDiffEditor && config.gitlens.keymap == 'alternate' && gitlens:activeFileStatus =~ /revision/ && gitlens:activeFileStatus =~ /revision/",
		},
		{
			key: "ctrl+l ctrl+u",
			command: "latex-workshop.shortcut.underline",
			when: "editorTextFocus && !editorReadonly && editorLangId =~ /latex|rsweave/",
		},
		{
			key: "alt+.",
			command: "gitlens.diffWithNext",
			when:
				"editorTextFocus && isInDiffRightEditor && config.gitlens.keymap == 'alternate' && gitlens:activeFileStatus =~ /revision/ && gitlens:activeFileStatus =~ /revision/",
		},
		{
			key: "ctrl+l ctrl+e",
			command: "latex-workshop.shortcut.emph",
			when: "editorTextFocus && !editorReadonly && editorLangId =~ /latex|rsweave/",
		},
		{
			key: "alt+.",
			command: "gitlens.diffWithNextInDiffLeft",
			when:
				"editorTextFocus && isInDiffLeftEditor && config.gitlens.keymap == 'alternate' && gitlens:activeFileStatus =~ /revision/ && gitlens:activeFileStatus =~ /revision/",
		},
		{
			key: "ctrl+l ctrl+r",
			command: "latex-workshop.shortcut.textrm",
			when: "editorTextFocus && !editorReadonly && editorLangId =~ /latex|rsweave/",
		},
		{
			key: "alt+,",
			command: "gitlens.diffWithPrevious",
			when:
				"editorTextFocus && !isInDiffEditor && config.gitlens.keymap == 'alternate' && gitlens:activeFileStatus =~ /tracked/",
		},
		{
			key: "ctrl+l ctrl+t",
			command: "latex-workshop.shortcut.texttt",
			when: "editorTextFocus && !editorReadonly && editorLangId =~ /latex|rsweave/",
		},
		{
			key: "alt+,",
			command: "gitlens.diffWithPrevious",
			when:
				"editorTextFocus && isInDiffLeftEditor && config.gitlens.keymap == 'alternate' && gitlens:activeFileStatus =~ /tracked/",
		},
		{
			key: "ctrl+l ctrl+s",
			command: "latex-workshop.shortcut.textsl",
			when: "editorTextFocus && !editorReadonly && editorLangId =~ /latex|rsweave/",
		},
		{
			key: "alt+,",
			command: "gitlens.diffWithPreviousInDiffRight",
			when:
				"editorTextFocus && isInDiffRightEditor && config.gitlens.keymap == 'alternate' && gitlens:activeFileStatus =~ /tracked/",
		},
		{
			key: "ctrl+l ctrl+c",
			command: "latex-workshop.shortcut.textsc",
			when: "editorTextFocus && !editorReadonly && editorLangId =~ /latex|rsweave/",
		},
		{
			key: "shift+alt+,",
			command: "gitlens.diffLineWithPrevious",
			when:
				"editorTextFocus && config.gitlens.keymap == 'alternate' && gitlens:activeFileStatus =~ /tracked/",
		},
		{
			key: "ctrl+l ctrl+n",
			command: "latex-workshop.shortcut.textnormal",
			when: "editorTextFocus && !editorReadonly && editorLangId =~ /latex|rsweave/",
		},
		{
			key: "shift+alt+.",
			command: "gitlens.diffWithWorking",
			when:
				"editorTextFocus && config.gitlens.keymap == 'alternate' && gitlens:activeFileStatus =~ /revision/",
		},
		{
			key: "ctrl+l ctrl+6",
			command: "latex-workshop.shortcut.textsuperscript",
			when: "editorTextFocus && !editorReadonly && editorLangId =~ /latex|rsweave/",
		},
		{
			key: "alt+w",
			command: "gitlens.diffLineWithWorking",
			when:
				"editorTextFocus && config.gitlens.keymap == 'alternate' && gitlens:activeFileStatus =~ /tracked/",
		},
		{
			key: "ctrl+l ctrl+-",
			command: "latex-workshop.shortcut.textsubscript",
			when: "editorTextFocus && !editorReadonly && editorLangId =~ /latex|rsweave/",
		},
		{
			key: "ctrl+shift+g b",
			command: "gitlens.toggleFileBlame",
			when:
				"editorTextFocus && config.gitlens.keymap == 'chorded' && gitlens:activeFileStatus =~ /blameable/",
		},
		{
			key: "ctrl+m ctrl+b",
			command: "latex-workshop.shortcut.mathbf",
			when: "editorTextFocus && !editorReadonly && editorLangId =~ /latex|rsweave/",
		},
		{
			key: "ctrl+shift+g shift+b",
			command: "gitlens.toggleCodeLens",
			when:
				"editorTextFocus && gitlens:canToggleCodeLens && gitlens:enabled && config.gitlens.keymap == 'chorded'",
		},
		{
			key: "ctrl+m ctrl+i",
			command: "latex-workshop.shortcut.mathit",
			when: "editorTextFocus && !editorReadonly && editorLangId =~ /latex|rsweave/",
		},
		{
			key: "ctrl+shift+g -",
			command: "gitlens.showLastQuickPick",
			when: "gitlens:enabled && config.gitlens.keymap == 'chorded'",
		},
		{
			key: "ctrl+m ctrl+r",
			command: "latex-workshop.shortcut.mathrm",
			when: "editorTextFocus && !editorReadonly && editorLangId =~ /latex|rsweave/",
		},
		{
			key: "ctrl+shift+g /",
			command: "gitlens.showCommitSearch",
			when: "gitlens:enabled && config.gitlens.keymap == 'chorded'",
		},
		{
			key: "ctrl+m ctrl+t",
			command: "latex-workshop.shortcut.mathtt",
			when: "editorTextFocus && !editorReadonly && editorLangId =~ /latex|rsweave/",
		},
		{
			key: "ctrl+shift+g h",
			command: "gitlens.showQuickFileHistory",
			when: "gitlens:enabled && config.gitlens.keymap == 'chorded'",
		},
		{
			key: "ctrl+m ctrl+s",
			command: "latex-workshop.shortcut.mathsf",
			when: "editorTextFocus && !editorReadonly && editorLangId =~ /latex|rsweave/",
		},
		{
			key: "ctrl+shift+g shift+h",
			command: "gitlens.showQuickRepoHistory",
			when: "gitlens:enabled && config.gitlens.keymap == 'chorded'",
		},
		{
			key: "ctrl+m ctrl+shift+b",
			command: "latex-workshop.shortcut.mathbb",
			when: "editorTextFocus && !editorReadonly && editorLangId =~ /latex|rsweave/",
		},
		{
			key: "ctrl+shift+g s",
			command: "gitlens.showQuickRepoStatus",
			when: "gitlens:enabled && config.gitlens.keymap == 'chorded'",
		},
		{
			key: "ctrl+m ctrl+c",
			command: "latex-workshop.shortcut.mathcal",
			when: "editorTextFocus && !editorReadonly && editorLangId =~ /latex|rsweave/",
		},
		{
			key: "ctrl+l ctrl+l",
			command: "expandLineSelection",
			when: "textInputFocus && editorLangId =~ /latex|rsweave/",
		},
		{
			key: "ctrl+shift+g c",
			command: "gitlens.showQuickCommitFileDetails",
			when: "editorTextFocus && gitlens:enabled && config.gitlens.keymap == 'chorded'",
		},
		{
			key: "ctrl+l ctrl+m",
			command: "editor.action.toggleTabFocusMode",
			when: "textInputFocus && editorLangId =~ /latex|rsweave/",
		},
		{
			key: "ctrl+shift+g .",
			command: "gitlens.diffWithNext",
			when:
				"editorTextFocus && !isInDiffEditor && config.gitlens.keymap == 'chorded' && gitlens:activeFileStatus =~ /revision/ && gitlens:activeFileStatus =~ /revision/",
		},
		{
			key: "ctrl+shift+g .",
			command: "gitlens.diffWithNext",
			when:
				"editorTextFocus && isInDiffRightEditor && config.gitlens.keymap == 'chorded' && gitlens:activeFileStatus =~ /revision/ && gitlens:activeFileStatus =~ /revision/",
		},
		{
			key: "ctrl+l ctrl+w",
			command: "latex-workshop.surround",
			when:
				"editorHasSelection && editorTextFocus && !editorReadonly && editorLangId =~ /latex|rsweave/",
		},
		{
			key: "ctrl+shift+g .",
			command: "gitlens.diffWithNextInDiffLeft",
			when:
				"editorTextFocus && isInDiffLeftEditor && config.gitlens.keymap == 'chorded' && gitlens:activeFileStatus =~ /revision/ && gitlens:activeFileStatus =~ /revision/",
		},
		{
			key: "enter",
			command: "latex-workshop.onEnterKey",
			when:
				"editorTextFocus && vim.active && !editorReadonly && !suggestWidgetVisible && editorLangId == 'latex' && vim.mode == 'Insert'",
		},
		{
			key: "ctrl+shift+g ,",
			command: "gitlens.diffWithPrevious",
			when:
				"editorTextFocus && !isInDiffEditor && config.gitlens.keymap == 'chorded' && gitlens:activeFileStatus =~ /tracked/",
		},
		{
			key: "enter",
			command: "latex-workshop.onEnterKey",
			when:
				"editorTextFocus && !editorReadonly && !suggestWidgetVisible && !vim.active && editorLangId == 'latex'",
		},
		{
			key: "ctrl+shift+g ,",
			command: "gitlens.diffWithPrevious",
			when:
				"editorTextFocus && isInDiffLeftEditor && config.gitlens.keymap == 'chorded' && gitlens:activeFileStatus =~ /tracked/",
		},
		{
			key: "alt+enter",
			command: "latex-workshop.onAltEnterKey",
			when:
				"editorTextFocus && !editorReadonly && !suggestWidgetVisible && editorLangId == 'latex'",
		},
		{
			key: "ctrl+shift+g ,",
			command: "gitlens.diffWithPreviousInDiffRight",
			when:
				"editorTextFocus && isInDiffRightEditor && config.gitlens.keymap == 'chorded' && gitlens:activeFileStatus =~ /tracked/",
		},
		{
			key: "ctrl+shift+g shift+,",
			command: "gitlens.diffLineWithPrevious",
			when:
				"editorTextFocus && config.gitlens.keymap == 'chorded' && gitlens:activeFileStatus =~ /tracked/",
		},
		{
			key: "ctrl+shift+g shift+.",
			command: "gitlens.diffWithWorking",
			when:
				"editorTextFocus && config.gitlens.keymap == 'chorded' && gitlens:activeFileStatus =~ /revision/",
		},
		{
			key: "ctrl+shift+g w",
			command: "gitlens.diffLineWithWorking",
			when:
				"editorTextFocus && config.gitlens.keymap == 'chorded' && gitlens:activeFileStatus =~ /tracked/",
		},
		{
			key: "ctrl+shift+g g",
			command: "workbench.view.scm",
			when: "gitlens:enabled && config.gitlens.keymap == 'chorded'",
		},
		{
			key: "ctrl+c",
			command: "gitlens.views.repositories.copy",
			when: "gitlens:enabled && focusedView =~ /^gitlens\\.views\\.repositories/",
		},
		{
			key: "ctrl+c",
			command: "gitlens.views.fileHistory.copy",
			when: "gitlens:enabled && focusedView =~ /^gitlens\\.views\\.fileHistory/",
		},
		{
			key: "ctrl+c",
			command: "gitlens.views.lineHistory.copy",
			when: "gitlens:enabled && focusedView =~ /^gitlens\\.views\\.lineHistory/",
		},
		{
			key: "ctrl+c",
			command: "gitlens.views.compare.copy",
			when: "gitlens:enabled && focusedView =~ /^gitlens\\.views\\.compare/",
		},
		{
			key: "ctrl+c",
			command: "gitlens.views.search.copy",
			when: "gitlens:enabled && focusedView =~ /^gitlens\\.views\\.search/",
		},
	];

// Here are other available commands:
// - 84256
// - C_Cpp.BuildAndDebugActiveFile
// - C_Cpp.ConfigurationEditJSON
// - C_Cpp.ConfigurationEditUI
// - C_Cpp.ConfigurationProviderSelect
// - C_Cpp.ConfigurationSelect
// - C_Cpp.DisableErrorSquiggles
// - C_Cpp.EnableErrorSquiggles
// - C_Cpp.LogDiagnostics
// - C_Cpp.RescanWorkspace
// - C_Cpp.ResetDatabase
// - C_Cpp.TakeSurvey
// - C_Cpp.ToggleDimInactiveRegions
// - C_Cpp.ToggleIncludeFallback
// - C_Cpp.VcpkgClipboardInstallSuggested
// - C_Cpp.VcpkgOnlineHelpSuggested
// - C_Cpp.referencesViewGroupByType
// - C_Cpp.referencesViewUngroupByType
// - CppReferencesView.focus
// - CppRenameCandidatesView.focus
// - CppRenamePendingView.focus
// - CppRenameView.add
// - CppRenameView.addAll
// - CppRenameView.addFile
// - CppRenameView.addReferenceType
// - CppRenameView.cancel
// - CppRenameView.done
// - CppRenameView.remove
// - CppRenameView.removeAll
// - CppRenameView.removeFile
// - acceptSelectedSuggestionOnEnter
// - acceptSnippet
// - actions.findWithSelection
// - addRootFolder
// - auth.inputTokenCallback
// - auth.signout
// - breadcrumbs.toggle
// - changeEditorIndentation
// - columnSelect
// - compareFiles
// - compareSelected
// - compositionEnd
// - compositionStart
// - cpplint.runAnalysis
// - cpplint.runWholeAnalysis
// - createCursor
// - csv.clearState
// - csv.refresh
// - cursorColumnSelectDown
// - cursorColumnSelectLeft
// - cursorColumnSelectPageDown
// - cursorColumnSelectPageUp
// - cursorColumnSelectRight
// - cursorColumnSelectUp
// - cursorLineEnd
// - cursorLineStart
// - cursorRedo
// - cursorWordEndLeft
// - cursorWordEndLeftSelect
// - cursorWordLeft
// - cursorWordLeftSelect
// - cursorWordPartLeft
// - cursorWordPartLeftSelect
// - cursorWordPartRight
// - cursorWordPartRightSelect
// - cursorWordPartStartLeft
// - cursorWordPartStartLeftSelect
// - cursorWordRight
// - cursorWordRightSelect
// - cursorWordStartRight
// - cursorWordStartRightSelect
// - cut
// - debug.addConfiguration
// - debug.copyStackTrace
// - debug.enableOrDisableBreakpoint
// - debug.installAdditionalDebuggers
// - debug.jumpToCursor
// - debug.startFromConfig
// - default:compositionEnd
// - default:compositionStart
// - default:cut
// - default:paste
// - default:redo
// - default:replacePreviousChar
// - default:type
// - default:undo
// - deleteAllLeft
// - deleteAllRight
// - deleteWordEndLeft
// - deleteWordEndRight
// - deleteWordPartLeft
// - deleteWordPartRight
// - deleteWordStartLeft
// - deleteWordStartRight
// - editor.action.addCursorsToBottom
// - editor.action.addCursorsToTop
// - editor.action.addSelectionToPreviousFindMatch
// - editor.action.clearoutput
// - editor.action.clipboardCopyWithSyntaxHighlightingAction
// - editor.action.detectIndentation
// - editor.action.duplicateSelection
// - editor.action.findReferences
// - editor.action.fixAll
// - editor.action.fontZoomIn
// - editor.action.fontZoomOut
// - editor.action.fontZoomReset
// - editor.action.forceRetokenize
// - editor.action.format
// - editor.action.formatDocument.multiple
// - editor.action.formatSelection.multiple
// - editor.action.goToDeclaration
// - editor.action.goToTypeDefinition
// - editor.action.indentUsingSpaces
// - editor.action.indentUsingTabs
// - editor.action.indentationToSpaces
// - editor.action.indentationToTabs
// - editor.action.inspectTMScopes
// - editor.action.joinLines
// - editor.action.measureExtHostLatency
// - editor.action.moveCarretLeftAction
// - editor.action.moveCarretRightAction
// - editor.action.moveSelectionToPreviousFindMatch
// - editor.action.nextCommentThreadAction
// - editor.action.openDeclarationToTheSide
// - editor.action.openLink
// - editor.action.peekDeclaration
// - editor.action.peekTypeDefinition
// - editor.action.previewDeclaration
// - editor.action.referenceSearch.trigger
// - editor.action.reindentlines
// - editor.action.reindentselectedlines
// - editor.action.revealDeclaration
// - editor.action.showDefinitionPreviewHover
// - editor.action.showReferences
// - editor.action.showSnippets
// - editor.action.smartSelect.grow
// - editor.action.sortLinesAscending
// - editor.action.sortLinesDescending
// - editor.action.toggleMinimap
// - editor.action.toggleRenderControlCharacter
// - editor.action.toggleRenderWhitespace
// - editor.action.transformToLowercase
// - editor.action.transformToTitlecase
// - editor.action.transformToUppercase
// - editor.action.transpose
// - editor.action.transposeLetters
// - editor.action.wordHighlight.trigger
// - editor.debug.action.conditionalBreakpoint
// - editor.debug.action.goToNextBreakpoint
// - editor.debug.action.goToPreviousBreakpoint
// - editor.debug.action.runToCursor
// - editor.debug.action.selectionToRepl
// - editor.debug.action.selectionToWatch
// - editor.debug.action.toggleLogPoint
// - editor.emmet.action.balanceIn
// - editor.emmet.action.balanceOut
// - editor.emmet.action.decrementNumberByOne
// - editor.emmet.action.decrementNumberByOneTenth
// - editor.emmet.action.decrementNumberByTen
// - editor.emmet.action.evaluateMathExpression
// - editor.emmet.action.incrementNumberByOne
// - editor.emmet.action.incrementNumberByOneTenth
// - editor.emmet.action.incrementNumberByTen
// - editor.emmet.action.matchTag
// - editor.emmet.action.mergeLines
// - editor.emmet.action.nextEditPoint
// - editor.emmet.action.prevEditPoint
// - editor.emmet.action.reflectCSSValue
// - editor.emmet.action.removeTag
// - editor.emmet.action.selectNextItem
// - editor.emmet.action.selectPrevItem
// - editor.emmet.action.splitJoinTag
// - editor.emmet.action.toggleComment
// - editor.emmet.action.updateImageSize
// - editor.emmet.action.updateTag
// - editor.emmet.action.wrapIndividualLinesWithAbbreviation
// - editor.emmet.action.wrapWithAbbreviation
// - emmet.expandAbbreviation
// - eslint.applyAllFixes
// - eslint.applyDisableFile
// - eslint.applyDisableLine
// - eslint.applySameFixes
// - eslint.applySingleFix
// - eslint.createConfig
// - eslint.disable
// - eslint.enable
// - eslint.executeAutofix
// - eslint.migrateSettings
// - eslint.openRuleDoc
// - eslint.showOutputChannel
// - explorer.download
// - explorer.newFile
// - explorer.newFolder
// - extension.fixImport
// - extension.importScan
// - extension.node-debug.attachNodeProcess
// - extension.node-debug.toggleAutoAttach
// - extension.node-debug.toggleSkippingFile
// - extension.node-debug2.toggleSkippingFile
// - extension.open
// - extension.resolveImport
// - extension.scanNodeModules
// - extensions.builtInBasicsExtensionsList.focus
// - extensions.builtInExtensionsList.focus
// - extensions.builtInThemesExtensionsList.focus
// - extensions.disabledExtensionList.focus
// - extensions.disabledExtensionList2.focus
// - extensions.enabledExtensionList.focus
// - extensions.enabledExtensionList2.focus
// - extensions.listView.focus
// - extensions.otherrecommendedList.focus
// - extensions.popularExtensionsList.focus
// - extensions.recommendedList.focus
// - extensions.vscode-local.default.focus
// - extensions.vscode-local.installed.focus
// - extensions.vscode-local.outdated.focus
// - extensions.workspaceRecommendedList.focus
// - filesExplorer.findInWorkspace
// - git._syncAll
// - git.addRemote
// - git.branch
// - git.branchFrom
// - git.checkout
// - git.clean
// - git.cleanAll
// - git.cleanAllTracked
// - git.cleanAllUntracked
// - git.clone
// - git.close
// - git.commit
// - git.commitAll
// - git.commitAllAmend
// - git.commitAllSigned
// - git.commitEmpty
// - git.commitStaged
// - git.commitStagedAmend
// - git.commitStagedSigned
// - git.createTag
// - git.deleteBranch
// - git.deleteTag
// - git.fetch
// - git.fetchAll
// - git.fetchPrune
// - git.ignore
// - git.init
// - git.merge
// - git.openChange
// - git.openFile
// - git.openFile2
// - git.openHEADFile
// - git.openRepository
// - git.openResource
// - git.publish
// - git.pull
// - git.pullFrom
// - git.pullRebase
// - git.push
// - git.pushForce
// - git.pushTo
// - git.pushToForce
// - git.pushWithTags
// - git.pushWithTagsForce
// - git.refresh
// - git.removeRemote
// - git.renameBranch
// - git.restoreCommitTemplate
// - git.revealInExplorer
// - git.revertChange
// - git.revertSelectedRanges
// - git.showOutput
// - git.stage
// - git.stageAll
// - git.stageAllTracked
// - git.stageAllUntracked
// - git.stageChange
// - git.stageSelectedRanges
// - git.stash
// - git.stashApply
// - git.stashApplyLatest
// - git.stashDrop
// - git.stashIncludeUntracked
// - git.stashPop
// - git.stashPopLatest
// - git.sync
// - git.syncRebase
// - git.undoCommit
// - git.unstage
// - git.unstageAll
// - git.unstageSelectedRanges
// - gitlens.clearFileAnnotations
// - gitlens.closeUnchangedFiles
// - gitlens.computingFileAnnotations
// - gitlens.copyMessageToClipboard
// - gitlens.copyRemoteFileUrlToClipboard
// - gitlens.copyShaToClipboard
// - gitlens.diffDirectory
// - gitlens.diffDirectoryWithHead
// - gitlens.diffHeadWith
// - gitlens.diffHeadWithBranch
// - gitlens.diffWith
// - gitlens.diffWithBranch
// - gitlens.diffWithRef
// - gitlens.diffWithRevision
// - gitlens.diffWorkingWith
// - gitlens.diffWorkingWithBranch
// - gitlens.exploreRepoAtRevision
// - gitlens.externalDiff
// - gitlens.externalDiffAll
// - gitlens.fetchRepositories
// - gitlens.gitCommands
// - gitlens.inviteToLiveShare
// - gitlens.openBranchInRemote
// - gitlens.openBranchesInRemote
// - gitlens.openChangedFiles
// - gitlens.openCommitInRemote
// - gitlens.openFileInRemote
// - gitlens.openFileRevision
// - gitlens.openFileRevisionFrom
// - gitlens.openFileRevisionFromBranch
// - gitlens.openInRemote
// - gitlens.openRepoInRemote
// - gitlens.openRevisionFile
// - gitlens.openWorkingFile
// - gitlens.pullRepositories
// - gitlens.pushRepositories
// - gitlens.resetSuppressedWarnings
// - gitlens.revealCommitInView
// - gitlens.showCommitInView
// - gitlens.showCommitsInView
// - gitlens.showCompareView
// - gitlens.showFileHistoryInView
// - gitlens.showFileHistoryView
// - gitlens.showLineHistoryView
// - gitlens.showQuickBranchHistory
// - gitlens.showQuickCommitDetails
// - gitlens.showQuickRevisionDetails
// - gitlens.showQuickStashList
// - gitlens.showRepositoriesView
// - gitlens.showSearchView
// - gitlens.showSettingsPage
// - gitlens.showSettingsPage#compare-view
// - gitlens.showSettingsPage#file-history-view
// - gitlens.showSettingsPage#line-history-view
// - gitlens.showSettingsPage#repositories-view
// - gitlens.showSettingsPage#search-commits-view
// - gitlens.showWelcomePage
// - gitlens.stashApply
// - gitlens.stashDelete
// - gitlens.stashSave
// - gitlens.stashSaveFiles
// - gitlens.supportGitLens
// - gitlens.switchMode
// - gitlens.toggleFileHeatmap
// - gitlens.toggleFileRecentChanges
// - gitlens.toggleLineBlame
// - gitlens.toggleReviewMode
// - gitlens.toggleZenMode
// - gitlens.views.addRemote
// - gitlens.views.applyChanges
// - gitlens.views.cherryPick
// - gitlens.views.closeRepository
// - gitlens.views.compare.clear
// - gitlens.views.compare.compareWithSelected
// - gitlens.views.compare.pinComparison
// - gitlens.views.compare.refresh
// - gitlens.views.compare.selectForCompare
// - gitlens.views.compare.setFilesLayoutToAuto
// - gitlens.views.compare.setFilesLayoutToList
// - gitlens.views.compare.setFilesLayoutToTree
// - gitlens.views.compare.setKeepResultsToOff
// - gitlens.views.compare.setKeepResultsToOn
// - gitlens.views.compare.swapComparison
// - gitlens.views.compare.unpinComparison
// - gitlens.views.compare:explorer.focus
// - gitlens.views.compare:gitlens.focus
// - gitlens.views.compare:scm.focus
// - gitlens.views.compareAncestryWithWorking
// - gitlens.views.compareFileWithSelected
// - gitlens.views.compareWithHead
// - gitlens.views.compareWithRemote
// - gitlens.views.compareWithSelected
// - gitlens.views.compareWithWorking
// - gitlens.views.contributor.addAuthor
// - gitlens.views.contributor.copyToClipboard
// - gitlens.views.contributors.addAuthors
// - gitlens.views.copy
// - gitlens.views.createBranch
// - gitlens.views.createTag
// - gitlens.views.deleteBranch
// - gitlens.views.deleteTag
// - gitlens.views.dismissNode
// - gitlens.views.executeNodeCallback
// - gitlens.views.expandNode
// - gitlens.views.exploreRepoAtRevision
// - gitlens.views.fetch
// - gitlens.views.fileHistory.changeBase
// - gitlens.views.fileHistory.refresh
// - gitlens.views.fileHistory.setEditorFollowingOff
// - gitlens.views.fileHistory.setEditorFollowingOn
// - gitlens.views.fileHistory.setRenameFollowingOff
// - gitlens.views.fileHistory.setRenameFollowingOn
// - gitlens.views.fileHistory:explorer.focus
// - gitlens.views.fileHistory:gitlens.focus
// - gitlens.views.fileHistory:scm.focus
// - gitlens.views.highlightChanges
// - gitlens.views.highlightRevisionChanges
// - gitlens.views.lineHistory.changeBase
// - gitlens.views.lineHistory.refresh
// - gitlens.views.lineHistory.setEditorFollowingOff
// - gitlens.views.lineHistory.setEditorFollowingOn
// - gitlens.views.lineHistory.setRenameFollowingOff
// - gitlens.views.lineHistory.setRenameFollowingOn
// - gitlens.views.lineHistory:explorer.focus
// - gitlens.views.lineHistory:gitlens.focus
// - gitlens.views.lineHistory:scm.focus
// - gitlens.views.mergeBranchInto
// - gitlens.views.openChangedFileDiffs
// - gitlens.views.openChangedFileDiffsWithWorking
// - gitlens.views.openChangedFileRevisions
// - gitlens.views.openChangedFiles
// - gitlens.views.openChanges
// - gitlens.views.openChangesWithWorking
// - gitlens.views.openDirectoryDiff
// - gitlens.views.openDirectoryDiffWithWorking
// - gitlens.views.openFile
// - gitlens.views.openFileRevision
// - gitlens.views.openFileRevisionInRemote
// - gitlens.views.openInTerminal
// - gitlens.views.pruneRemote
// - gitlens.views.pull
// - gitlens.views.push
// - gitlens.views.pushWithForce
// - gitlens.views.rebaseOntoBranch
// - gitlens.views.rebaseOntoCommit
// - gitlens.views.rebaseOntoUpstream
// - gitlens.views.refreshNode
// - gitlens.views.renameBranch
// - gitlens.views.repositories.refresh
// - gitlens.views.repositories.setAutoRefreshToOff
// - gitlens.views.repositories.setAutoRefreshToOn
// - gitlens.views.repositories.setBranchComparisonToBranch
// - gitlens.views.repositories.setBranchComparisonToWorking
// - gitlens.views.repositories.setBranchesLayoutToList
// - gitlens.views.repositories.setBranchesLayoutToTree
// - gitlens.views.repositories.setFilesLayoutToAuto
// - gitlens.views.repositories.setFilesLayoutToList
// - gitlens.views.repositories.setFilesLayoutToTree
// - gitlens.views.repositories:explorer.focus
// - gitlens.views.repositories:gitlens.focus
// - gitlens.views.repositories:scm.focus
// - gitlens.views.reset
// - gitlens.views.restore
// - gitlens.views.revert
// - gitlens.views.search.clear
// - gitlens.views.search.refresh
// - gitlens.views.search.searchCommits
// - gitlens.views.search.setFilesLayoutToAuto
// - gitlens.views.search.setFilesLayoutToList
// - gitlens.views.search.setFilesLayoutToTree
// - gitlens.views.search.setKeepResultsToOff
// - gitlens.views.search.setKeepResultsToOn
// - gitlens.views.search:explorer.focus
// - gitlens.views.search:gitlens.focus
// - gitlens.views.search:scm.focus
// - gitlens.views.selectFileForCompare
// - gitlens.views.selectForCompare
// - gitlens.views.setAsDefault
// - gitlens.views.setComparisonToThreeDot
// - gitlens.views.setComparisonToTwoDot
// - gitlens.views.showAllChildren
// - gitlens.views.showMoreChildren
// - gitlens.views.stageDirectory
// - gitlens.views.stageFile
// - gitlens.views.star
// - gitlens.views.switchToBranch
// - gitlens.views.switchToCommit
// - gitlens.views.switchToTag
// - gitlens.views.terminalPushCommit
// - gitlens.views.terminalRemoveRemote
// - gitlens.views.unsetAsDefault
// - gitlens.views.unstageDirectory
// - gitlens.views.unstageFile
// - gitlens.views.unstar
// - imagePreview.zoomIn
// - imagePreview.zoomOut
// - java.clean.workspace
// - java.open.clientLog
// - java.open.formatter.settings
// - java.open.logs
// - java.open.serverLog
// - java.project.addToSourcePath
// - java.project.listSourcePaths
// - java.project.removeFromSourcePath
// - java.project.updateSourceAttachment
// - java.show.server.task.status
// - javascript.goToProjectConfig
// - javascript.reloadProjects
// - js.projectStatus.command
// - keybindings.editor.copyCommandKeybindingEntry
// - keybindings.editor.resetKeybinding
// - keybindings.editor.showConflicts
// - keybindings.editor.showDefaultKeybindings
// - keybindings.editor.showUserKeybindings
// - lastCursorLineSelect
// - lastCursorLineSelectDrag
// - lastCursorWordSelect
// - latex-commands.focus
// - latex-structure.focus
// - latex-structure.toggle-follow-cursor
// - latex-workshop-dev.parsebib
// - latex-workshop-dev.parselog
// - latex-workshop-dev.parsetex
// - latex-workshop.actions
// - latex-workshop.addtexroot
// - latex-workshop.bibalign
// - latex-workshop.bibalignsort
// - latex-workshop.bibsort
// - latex-workshop.citation
// - latex-workshop.close-env
// - latex-workshop.kill
// - latex-workshop.log
// - latex-workshop.multicursor-envname
// - latex-workshop.navigate-envpair
// - latex-workshop.recipes
// - latex-workshop.refresh-viewer
// - latex-workshop.saveWithoutBuilding
// - latex-workshop.select-envname
// - latex-workshop.showCompilationPanel
// - latex-workshop.showSnippetPanel
// - latex-workshop.tab
// - latex-workshop.texdoc
// - latex-workshop.texdocUsepackages
// - latex-workshop.toggle-equation-envname
// - latex-workshop.wrap-env
// - layoutEditorGroups
// - lineBreakInsert
// - list.focusFirstChild
// - list.focusLastChild
// - list.focusParent
// - list.scrollRight
// - list.toggleFilterOnType
// - list.toggleKeyboardNavigation
// - lldb.alternateBackend
// - lldb.attach
// - lldb.changeDisplaySettings
// - lldb.diagnose
// - lldb.displayFormat
// - lldb.getCargoLaunchConfigs
// - lldb.modules.copyValue
// - lldb.pickMyProcess
// - lldb.pickProcess
// - lldb.showDisassembly
// - lldb.toggleDerefPointers
// - lldb.toggleDisassembly
// - loadedModules.focus
// - markdown-preview-enhanced.createTOC
// - markdown-preview-enhanced.customizeCss
// - markdown-preview-enhanced.extendParser
// - markdown-preview-enhanced.insertNewSlide
// - markdown-preview-enhanced.insertPagebreak
// - markdown-preview-enhanced.insertTable
// - markdown-preview-enhanced.openImageHelper
// - markdown-preview-enhanced.openKaTeXConfig
// - markdown-preview-enhanced.openMathJaxConfig
// - markdown-preview-enhanced.openMermaidConfig
// - markdown-preview-enhanced.showUploadedImages
// - markdown-preview-enhanced.toggleBreakOnSingleNewLine
// - markdown-preview-enhanced.toggleLiveUpdate
// - markdown-preview-enhanced.toggleScrollSync
// - markdown.preview.refresh
// - markdown.preview.toggleLock
// - markdown.showLockedPreviewToSide
// - markdown.showPreviewSecuritySelector
// - markdown.showSource
// - merge-conflict.accept.all-both
// - merge-conflict.accept.all-current
// - merge-conflict.accept.all-incoming
// - merge-conflict.accept.both
// - merge-conflict.accept.current
// - merge-conflict.accept.incoming
// - merge-conflict.accept.selection
// - merge-conflict.compare
// - merge-conflict.next
// - merge-conflict.previous
// - notifications.clearAll
// - notifications.focusToasts
// - notifications.showList
// - notifications.toggleList
// - npm.debugScript
// - npm.debugScriptFromHover
// - npm.focus
// - npm.openScript
// - npm.refresh
// - npm.runInstall
// - npm.runScript
// - npm.runScriptFromFolder
// - npm.runScriptFromHover
// - npm.runSelectedScript
// - openInTerminal
// - openWith
// - opencl.info
// - outline.focus
// - paste
// - perfview.show
// - php.untrustValidationExecutable
// - pr.cancelEditComment
// - pr.close
// - pr.configurePRViewlet
// - pr.configureRemotes
// - pr.copyCommitHash
// - pr.create
// - pr.createComment
// - pr.createDraft
// - pr.deleteComment
// - pr.deleteLocalBranch
// - pr.deleteLocalBranchesNRemotes
// - pr.deleteReview
// - pr.editComment
// - pr.finishReview
// - pr.merge
// - pr.openChangedFile
// - pr.openDescription
// - pr.openDescriptionToTheSide
// - pr.openDiffView
// - pr.openFileInGitHub
// - pr.openModifiedFile
// - pr.openOriginalFile
// - pr.openPullRequestInGitHub
// - pr.pick
// - pr.readyForReview
// - pr.refreshChanges
// - pr.refreshDescription
// - pr.refreshList
// - pr.refreshPullRequest
// - pr.saveComment
// - pr.signin
// - pr.signinAndRefreshList
// - pr.startReview
// - pr:github.focus
// - pr:scm.focus
// - prStatus:github.focus
// - prStatus:scm.focus
// - prettier.createConfigFile
// - prettier.openOutput
// - problems.action.copyMessage
// - problems.action.copyRelatedInformationMessage
// - problems.action.showMultilineMessage
// - problems.action.showSinglelineMessage
// - python.analysis.clearCache
// - python.buildWorkspaceSymbols
// - python.configureTests
// - python.createTerminal
// - python.datascience.addcellbelow
// - python.datascience.collapseallcells
// - python.datascience.createnewnotebook
// - python.datascience.debugFileInteractive
// - python.datascience.debugcell
// - python.datascience.debugcontinue
// - python.datascience.debugcurrentcell.palette
// - python.datascience.debugstepover
// - python.datascience.debugstop
// - python.datascience.expandallcells
// - python.datascience.exportfileandoutputasnotebook
// - python.datascience.exportfileasnotebook
// - python.datascience.exportoutputasnotebook
// - python.datascience.importnotebook
// - python.datascience.importnotebookfile
// - python.datascience.interruptkernel
// - python.datascience.notebookeditor.addcellbelow
// - python.datascience.notebookeditor.interruptkernel
// - python.datascience.notebookeditor.redocells
// - python.datascience.notebookeditor.removeallcells
// - python.datascience.notebookeditor.restartkernel
// - python.datascience.notebookeditor.runallcells
// - python.datascience.notebookeditor.runselectedcell
// - python.datascience.notebookeditor.undocells
// - python.datascience.opennotebook
// - python.datascience.redocells
// - python.datascience.removeallcells
// - python.datascience.restartkernel
// - python.datascience.runFileInteractive
// - python.datascience.runallcells
// - python.datascience.runallcellsabove
// - python.datascience.runallcellsabove.palette
// - python.datascience.runcell
// - python.datascience.runcellandallbelow
// - python.datascience.runcurrentcellandallbelow.palette
// - python.datascience.runfromline
// - python.datascience.runtoline
// - python.datascience.scrolltocell
// - python.datascience.selectjupyteruri
// - python.datascience.showhistorypane
// - python.datascience.undocells
// - python.datascience.viewJupyterOutput
// - python.debugTestNode
// - python.debugtests
// - python.discoverTests
// - python.discoveringTests
// - python.enableLinting
// - python.enableSourceMapSupport
// - python.execInTerminal
// - python.execInTerminal-icon
// - python.execSelectionInDjangoShell
// - python.goToPythonObject
// - python.openTestNodeInEditor
// - python.refactorExtractMethod
// - python.refactorExtractVariable
// - python.runCurrentTestFile
// - python.runFailedTests
// - python.runLinting
// - python.runTestNode
// - python.runtests
// - python.selectAndDebugTestMethod
// - python.selectAndRunTestFile
// - python.selectAndRunTestMethod
// - python.setInterpreter
// - python.setLinter
// - python.sortImports
// - python.startREPL
// - python.stopTests
// - python.switchOffInsidersChannel
// - python.switchToDailyChannel
// - python.switchToWeeklyChannel
// - python.viewLanguageServerOutput
// - python.viewOutput
// - python.viewTestOutput
// - python_tests.focus
// - reOpenWith
// - references-view.clear
// - references-view.clearHistory
// - references-view.copy
// - references-view.copyAll
// - references-view.copyPath
// - references-view.findImplementations
// - references-view.pickFromHistory
// - references-view.refind
// - references-view.refresh
// - references-view.remove
// - references-view.showIncomingCalls
// - references-view.showOutgoingCalls
// - references-view.tree.focus
// - remote.tunnel.close
// - remote.tunnel.copyAddress
// - remote.tunnel.forward
// - remote.tunnel.name
// - remote.tunnel.open
// - removeRootFolder
// - repl.action.copyAll
// - replacePreviousChar
// - revealInExplorer
// - review.openFile
// - review.suggestDiff
// - rls.restart
// - rls.update
// - rust-analyzer.analyzerStatus
// - rust-analyzer.collectGarbage
// - rust-analyzer.expandMacro
// - rust-analyzer.reload
// - rust-analyzer.syntaxTree
// - saveAll
// - scm.mainPane.focus
// - scm:repository:773970790.focus
// - search.action.clearHistory
// - search.action.clearSearchResults
// - search.action.collapseSearchResults
// - search.action.copyAll
// - search.action.focusSearchList
// - search.action.openInEditor
// - search.action.refreshSearchResults
// - search.action.rerunEditorSearchWithContext
// - search.action.revealInSideBar
// - search.action.toggleSearchViewPosition
// - searchResult.rerunSearch
// - searchResult.rerunSearchWithContext
// - selectAll
// - selectFirstSuggestion
// - selectForCompare
// - selectLastSuggestion
// - setContext
// - setSelection
// - settings.filterByModified
// - settings.filterByOnline
// - settings.switchToJSON
// - showEditorScreenReaderNotification
// - toggle.diff.ignoreTrimWhitespace
// - toggle.diff.renderSideBySide
// - toggleEscapeSequenceLogging
// - typescript.goToProjectConfig
// - typescript.openTsServerLog
// - typescript.reloadProjects
// - typescript.restartTsServer
// - typescript.selectTypeScriptVersion
// - update.check
// - update.checkForVSCodeUpdate
// - update.checking
// - update.downloadNow
// - update.downloading
// - update.install
// - update.restart
// - update.showCurrentReleaseNotes
// - update.updating
// - workbench.action.acceptSelectedQuickOpenItem
// - workbench.action.addComment
// - workbench.action.addRootFolder
// - workbench.action.clearCommandHistory
// - workbench.action.clearEditorHistory
// - workbench.action.clearRecentFiles
// - workbench.action.closeEditorInAllGroups
// - workbench.action.closeEditorsAndGroup
// - workbench.action.closeEditorsInOtherGroups
// - workbench.action.closeEditorsToTheLeft
// - workbench.action.closeEditorsToTheRight
// - workbench.action.closeOtherEditors
// - workbench.action.closePanel
// - workbench.action.configureLanguageBasedSettings
// - workbench.action.configureLocale
// - workbench.action.configureRuntimeArguments
// - workbench.action.debug.configure
// - workbench.action.debug.disconnect
// - workbench.action.debug.restartFrame
// - workbench.action.debug.reverseContinue
// - workbench.action.debug.selectandstart
// - workbench.action.debug.stepBack
// - workbench.action.debug.terminateThread
// - workbench.action.decreaseViewSize
// - workbench.action.duplicateWorkspaceInNewWindow
// - workbench.action.editor.changeEOL
// - workbench.action.editor.changeEncoding
// - workbench.action.editorLayoutSingle
// - workbench.action.editorLayoutThreeColumns
// - workbench.action.editorLayoutThreeRows
// - workbench.action.editorLayoutTwoByTwoGrid
// - workbench.action.editorLayoutTwoColumns
// - workbench.action.editorLayoutTwoColumnsBottom
// - workbench.action.editorLayoutTwoRows
// - workbench.action.editorLayoutTwoRowsRight
// - workbench.action.evenEditorWidths
// - workbench.action.extensionHostProfilder.stop
// - workbench.action.files.openFileFolderInNewWindow
// - workbench.action.files.openFileInNewWindow
// - workbench.action.files.openFolderInNewWindow
// - workbench.action.files.revert
// - workbench.action.files.saveAll
// - workbench.action.files.saveFiles
// - workbench.action.firstEditorInGroup
// - workbench.action.focusActiveEditorGroup
// - workbench.action.focusCommentsPanel
// - workbench.action.focusLastEditorGroup
// - workbench.action.focusNextGroup
// - workbench.action.focusPanel
// - workbench.action.focusPreviousGroup
// - workbench.action.focusQuickOpen
// - workbench.action.generateColorTheme
// - workbench.action.increaseViewSize
// - workbench.action.inspectContextKeys
// - workbench.action.inspectKeyMappings
// - workbench.action.inspectKeyMappingsJSON
// - workbench.action.joinAllGroups
// - workbench.action.joinTwoGroups
// - workbench.action.logStorage
// - workbench.action.manageTrustedDomain
// - workbench.action.maximizeEditor
// - workbench.action.minimizeOtherEditors
// - workbench.action.moveEditorToAboveGroup
// - workbench.action.moveEditorToBelowGroup
// - workbench.action.moveEditorToLeftGroup
// - workbench.action.moveEditorToRightGroup
// - workbench.action.navigateDown
// - workbench.action.navigateEditorGroups
// - workbench.action.navigateLast
// - workbench.action.navigateLeft
// - workbench.action.navigateRight
// - workbench.action.navigateUp
// - workbench.action.newGroupAbove
// - workbench.action.newGroupBelow
// - workbench.action.newGroupLeft
// - workbench.action.newGroupRight
// - workbench.action.nextEditorInGroup
// - workbench.action.nextPanelView
// - workbench.action.nextSideBarView
// - workbench.action.openActiveLogOutputFile
// - workbench.action.openDefaultKeybindingsFile
// - workbench.action.openDocumentationUrl
// - workbench.action.openEditorAtIndex
// - workbench.action.openFolderSettings
// - workbench.action.openGlobalKeybindingsFile
// - workbench.action.openGlobalSettings
// - workbench.action.openIntroductoryVideosUrl
// - workbench.action.openIssueReporter
// - workbench.action.openLicenseUrl
// - workbench.action.openLogFile
// - workbench.action.openLogsFolder
// - workbench.action.openNextRecentlyUsedEditor
// - workbench.action.openPreviousEditorFromHistory
// - workbench.action.openPreviousRecentlyUsedEditor
// - workbench.action.openProcessExplorer
// - workbench.action.openRawDefaultSettings
// - workbench.action.openRemoteSettings
// - workbench.action.openRequestFeatureUrl
// - workbench.action.openSettings2
// - workbench.action.openSettingsJson
// - workbench.action.openSnippets
// - workbench.action.openTipsAndTricksUrl
// - workbench.action.openView
// - workbench.action.openWorkspace
// - workbench.action.openWorkspaceConfigFile
// - workbench.action.openWorkspaceInNewWindow
// - workbench.action.openWorkspaceSettings
// - workbench.action.previousEditorInGroup
// - workbench.action.previousPanelView
// - workbench.action.previousSideBarView
// - workbench.action.problems.focus
// - workbench.action.quickOpenNavigateNext
// - workbench.action.quickOpenNavigateNextInTerminalPicker
// - workbench.action.quickOpenNavigateNextInViewPicker
// - workbench.action.quickOpenNavigatePrevious
// - workbench.action.quickOpenNavigatePreviousInTerminalPicker
// - workbench.action.quickOpenNavigatePreviousInViewPicker
// - workbench.action.quickOpenPreviousEditor
// - workbench.action.quickOpenRecent
// - workbench.action.quickOpenSelectNext
// - workbench.action.quickOpenSelectPrevious
// - workbench.action.quickOpenTerm
// - workbench.action.quickOpenView
// - workbench.action.quickPickManyToggle
// - workbench.action.quickSwitchWindow
// - workbench.action.reloadWindowWithExtensionsDisabled
// - workbench.action.remote.showMenu
// - workbench.action.removeFromEditorHistory
// - workbench.action.removeRootFolder
// - workbench.action.reportPerformanceIssueUsingReporter
// - workbench.action.revertAndCloseActiveEditor
// - workbench.action.saveWorkspaceAs
// - workbench.action.selectIconTheme
// - workbench.action.setLogLevel
// - workbench.action.showAboutDialog
// - workbench.action.showEditorsInActiveGroup
// - workbench.action.showEditorsInGroup
// - workbench.action.showEmmetCommands
// - workbench.action.showErrorsWarnings
// - workbench.action.showInteractivePlayground
// - workbench.action.showInterfaceOverview
// - workbench.action.showLogs
// - workbench.action.showRuntimeExtensions
// - workbench.action.showWelcomePage
// - workbench.action.splitEditorDown
// - workbench.action.splitEditorLeft
// - workbench.action.splitEditorRight
// - workbench.action.splitEditorUp
// - workbench.action.switchWindow
// - workbench.action.tasks.configureDefaultBuildTask
// - workbench.action.tasks.configureDefaultTestTask
// - workbench.action.tasks.configureTaskRunner
// - workbench.action.tasks.configureUserTask
// - workbench.action.tasks.manageAutomaticRunning
// - workbench.action.tasks.reRunTask
// - workbench.action.tasks.restartTask
// - workbench.action.tasks.runTask
// - workbench.action.tasks.showLog
// - workbench.action.tasks.showTasks
// - workbench.action.tasks.terminate
// - workbench.action.tasks.test
// - workbench.action.tasks.toggleProblems
// - workbench.action.terminal.clear
// - workbench.action.terminal.deleteToLineStart
// - workbench.action.terminal.focus
// - workbench.action.terminal.focusAtIndex1
// - workbench.action.terminal.focusAtIndex2
// - workbench.action.terminal.focusAtIndex3
// - workbench.action.terminal.focusAtIndex4
// - workbench.action.terminal.focusAtIndex5
// - workbench.action.terminal.focusAtIndex6
// - workbench.action.terminal.focusAtIndex7
// - workbench.action.terminal.focusAtIndex8
// - workbench.action.terminal.focusAtIndex9
// - workbench.action.terminal.focusNext
// - workbench.action.terminal.focusPrevious
// - workbench.action.terminal.kill
// - workbench.action.terminal.manageWorkspaceShellPermissions
// - workbench.action.terminal.moveToLineEnd
// - workbench.action.terminal.moveToLineStart
// - workbench.action.terminal.newInActiveWorkspace
// - workbench.action.terminal.rename
// - workbench.action.terminal.resizePaneDown
// - workbench.action.terminal.resizePaneUp
// - workbench.action.terminal.runActiveFile
// - workbench.action.terminal.runSelectedText
// - workbench.action.terminal.scrollToNextCommand
// - workbench.action.terminal.scrollToPreviousCommand
// - workbench.action.terminal.selectAll
// - workbench.action.terminal.selectDefaultShell
// - workbench.action.terminal.selectToNextCommand
// - workbench.action.terminal.selectToNextLine
// - workbench.action.terminal.selectToPreviousCommand
// - workbench.action.terminal.selectToPreviousLine
// - workbench.action.terminal.splitInActiveWorkspace
// - workbench.action.toggleActivityBarVisibility
// - workbench.action.toggleAutoSave
// - workbench.action.toggleCenteredLayout
// - workbench.action.toggleEditorVisibility
// - workbench.action.toggleEditorWidths
// - workbench.action.toggleMaximizedPanel
// - workbench.action.toggleMenuBar
// - workbench.action.toggleMultiCursorModifier
// - workbench.action.togglePanelPosition
// - workbench.action.toggleScreencastMode
// - workbench.action.toggleSearchOnType
// - workbench.action.toggleSharedProcess
// - workbench.action.toggleSidebarPosition
// - workbench.action.toggleStatusbarVisibility
// - workbench.action.url.openUrl
// - workbench.action.webview.openDeveloperTools
// - workbench.action.webview.reloadWebviewAction
// - workbench.actions.view.toggleProblems
// - workbench.debug.action.focusBreakpointsView
// - workbench.debug.action.focusCallStackView
// - workbench.debug.action.focusRepl
// - workbench.debug.action.focusVariablesView
// - workbench.debug.action.focusWatchView
// - workbench.debug.loadedScriptsView.focus
// - workbench.debug.panel.action.clearReplAction
// - workbench.debug.startView.focus
// - workbench.debug.viewlet.action.addFunctionBreakpointAction
// - workbench.debug.viewlet.action.disableAllBreakpoints
// - workbench.debug.viewlet.action.enableAllBreakpoints
// - workbench.debug.viewlet.action.reapplyBreakpointsAction
// - workbench.debug.viewlet.action.removeAllBreakpoints
// - workbench.explorer.fileView.focus
// - workbench.extensions.action.addToWorkspaceFolderIgnoredRecommendations
// - workbench.extensions.action.addToWorkspaceFolderRecommendations
// - workbench.extensions.action.addToWorkspaceIgnoredRecommendations
// - workbench.extensions.action.addToWorkspaceRecommendations
// - workbench.extensions.action.checkForUpdates
// - workbench.extensions.action.configureWorkspaceFolderRecommendedExtensions
// - workbench.extensions.action.configureWorkspaceRecommendedExtensions
// - workbench.extensions.action.debugExtensionHost
// - workbench.extensions.action.disableAll
// - workbench.extensions.action.disableAllWorkspace
// - workbench.extensions.action.disableAutoUpdate
// - workbench.extensions.action.enableAll
// - workbench.extensions.action.enableAllWorkspace
// - workbench.extensions.action.enableAutoUpdate
// - workbench.extensions.action.extensionHostProfile
// - workbench.extensions.action.install.specificVersion
// - workbench.extensions.action.installExtensions
// - workbench.extensions.action.installVSIX
// - workbench.extensions.action.listBuiltInExtensions
// - workbench.extensions.action.listOutdatedExtensions
// - workbench.extensions.action.manageAuthorizedExtensionURIs
// - workbench.extensions.action.openExtensionsFolder
// - workbench.extensions.action.reinstall
// - workbench.extensions.action.saveExtensionHostProfile
// - workbench.extensions.action.showAzureExtensions
// - workbench.extensions.action.showDisabledExtensions
// - workbench.extensions.action.showEnabledExtensions
// - workbench.extensions.action.showExtensionsForLanguage
// - workbench.extensions.action.showExtensionsWithIds
// - workbench.extensions.action.showInstalledExtensions
// - workbench.extensions.action.showLanguageExtensions
// - workbench.extensions.action.showPopularExtensions
// - workbench.extensions.action.showRecommendedExtensions
// - workbench.extensions.action.stopExtensionHostProfile
// - workbench.extensions.action.updateAllExtensions
// - workbench.extensions.installMissingDependencies
// - workbench.files.action.acceptLocalChanges
// - workbench.files.action.collapseExplorerFolders
// - workbench.files.action.compareFileWith
// - workbench.files.action.focusFilesExplorer
// - workbench.files.action.refreshFilesExplorer
// - workbench.files.action.revertLocalChanges
// - workbench.files.action.saveAllInGroup
// - workbench.files.action.showActiveFileInExplorer
// - workbench.output.action.clearOutput
// - workbench.view.extension.CppRenameActivityBar
// - workbench.view.extension.github-pull-requests
// - workbench.view.extension.gitlens
// - workbench.view.extension.references-view
// - workbench.view.extension.test
// - workbench.view.remote
// - workbench.view.search.focus
// - xmlTools.executeXQuery
// - xmlTools.getCurrentXPath
// - xmlTools.minifyXml
// - xmlTools.textToXml
// - xmlTools.xmlToText
// - xmlTreeView.focus
