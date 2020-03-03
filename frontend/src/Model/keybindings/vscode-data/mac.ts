// Override key bindings by placing them into your key bindings file.
export const bindings = [
	{
		key: "escape escape",
		command: "workbench.action.exitZenMode",
		when: "inZenMode",
	},
	{
		key: "shift+escape",
		command: "closeReferenceSearch",
		when: "inReferenceSearchEditor && !config.editor.stablePeek",
	},
	{
		key: "escape",
		command: "closeReferenceSearch",
		when: "inReferenceSearchEditor && !config.editor.stablePeek",
	},
	{
		key: "shift+escape",
		command: "cancelSelection",
		when: "editorHasSelection && textInputFocus",
	},
	{
		key: "escape",
		command: "cancelSelection",
		when: "editorHasSelection && textInputFocus",
	},
	{ key: "cmd+down", command: "cursorBottom", when: "textInputFocus" },
	{
		key: "shift+cmd+down",
		command: "cursorBottomSelect",
		when: "textInputFocus",
	},
	{
		key: "shift+alt+cmd+down",
		command: "cursorColumnSelectDown",
		when: "textInputFocus",
	},
	{
		key: "shift+alt+cmd+left",
		command: "cursorColumnSelectLeft",
		when: "textInputFocus",
	},
	{
		key: "shift+alt+cmd+pagedown",
		command: "cursorColumnSelectPageDown",
		when: "textInputFocus",
	},
	{
		key: "shift+alt+cmd+pageup",
		command: "cursorColumnSelectPageUp",
		when: "textInputFocus",
	},
	{
		key: "shift+alt+cmd+right",
		command: "cursorColumnSelectRight",
		when: "textInputFocus",
	},
	{
		key: "shift+alt+cmd+up",
		command: "cursorColumnSelectUp",
		when: "textInputFocus",
	},
	{ key: "ctrl+n", command: "cursorDown", when: "textInputFocus" },
	{ key: "down", command: "cursorDown", when: "textInputFocus" },
	{ key: "shift+down", command: "cursorDownSelect", when: "textInputFocus" },
	{ key: "cmd+right", command: "cursorEnd", when: "textInputFocus" },
	{ key: "end", command: "cursorEnd", when: "textInputFocus" },
	{
		key: "shift+cmd+right",
		command: "cursorEndSelect",
		when: "textInputFocus",
	},
	{ key: "shift+end", command: "cursorEndSelect", when: "textInputFocus" },
	{ key: "cmd+left", command: "cursorHome", when: "textInputFocus" },
	{ key: "home", command: "cursorHome", when: "textInputFocus" },
	{
		key: "shift+cmd+left",
		command: "cursorHomeSelect",
		when: "textInputFocus",
	},
	{ key: "shift+home", command: "cursorHomeSelect", when: "textInputFocus" },
	{ key: "ctrl+b", command: "cursorLeft", when: "textInputFocus" },
	{ key: "left", command: "cursorLeft", when: "textInputFocus" },
	{ key: "shift+left", command: "cursorLeftSelect", when: "textInputFocus" },
	{ key: "ctrl+e", command: "cursorLineEnd", when: "textInputFocus" },
	{ key: "ctrl+a", command: "cursorLineStart", when: "textInputFocus" },
	{ key: "pagedown", command: "cursorPageDown", when: "textInputFocus" },
	{
		key: "shift+pagedown",
		command: "cursorPageDownSelect",
		when: "textInputFocus",
	},
	{ key: "pageup", command: "cursorPageUp", when: "textInputFocus" },
	{
		key: "shift+pageup",
		command: "cursorPageUpSelect",
		when: "textInputFocus",
	},
	{ key: "ctrl+f", command: "cursorRight", when: "textInputFocus" },
	{ key: "right", command: "cursorRight", when: "textInputFocus" },
	{
		key: "shift+right",
		command: "cursorRightSelect",
		when: "textInputFocus",
	},
	{ key: "cmd+up", command: "cursorTop", when: "textInputFocus" },
	{ key: "shift+cmd+up", command: "cursorTopSelect", when: "textInputFocus" },
	{ key: "ctrl+p", command: "cursorUp", when: "textInputFocus" },
	{ key: "up", command: "cursorUp", when: "textInputFocus" },
	{ key: "shift+up", command: "cursorUpSelect", when: "textInputFocus" },
	{
		key: "ctrl+backspace",
		command: "deleteLeft",
		when: "textInputFocus && !editorReadonly",
	},
	{
		key: "ctrl+h",
		command: "deleteLeft",
		when: "textInputFocus && !editorReadonly",
	},
	{
		key: "shift+backspace",
		command: "deleteLeft",
		when: "textInputFocus && !editorReadonly",
	},
	{
		key: "backspace",
		command: "deleteLeft",
		when: "textInputFocus && !editorReadonly",
	},
	{
		key: "ctrl+delete",
		command: "deleteRight",
		when: "textInputFocus && !editorReadonly",
	},
	{
		key: "ctrl+d",
		command: "deleteRight",
		when: "textInputFocus && !editorReadonly",
	},
	{
		key: "delete",
		command: "deleteRight",
		when: "textInputFocus && !editorReadonly",
	},
	{
		key: "cmd+a",
		command: "editor.action.selectAll",
		when: "textInputFocus",
	},
	{ key: "cmd+c", command: "execCopy" },
	{ key: "cmd+x", command: "execCut" },
	{ key: "cmd+v", command: "execPaste" },
	{ key: "cmd+l", command: "expandLineSelection", when: "textInputFocus" },
	{
		key: "ctrl+o",
		command: "lineBreakInsert",
		when: "textInputFocus && !editorReadonly",
	},
	{
		key: "shift+tab",
		command: "outdent",
		when: "editorTextFocus && !editorReadonly && !editorTabMovesFocus",
	},
	{
		key: "shift+cmd+z",
		command: "redo",
		when: "textInputFocus && !editorReadonly",
	},
	{ key: "ctrl+pagedown", command: "scrollLineDown", when: "textInputFocus" },
	{ key: "ctrl+pageup", command: "scrollLineUp", when: "textInputFocus" },
	{ key: "cmd+pagedown", command: "scrollPageDown", when: "textInputFocus" },
	{ key: "cmd+pageup", command: "scrollPageUp", when: "textInputFocus" },
	{
		key: "tab",
		command: "tab",
		when: "editorTextFocus && !editorReadonly && !editorTabMovesFocus",
	},
	{
		key: "cmd+z",
		command: "undo",
		when: "textInputFocus && !editorReadonly",
	},
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
	{
		key: "f12",
		command: "goToNextReference",
		when: "inReferenceSearchEditor || referenceSearchVisible",
	},
	{
		key: "f4",
		command: "goToNextReference",
		when: "inReferenceSearchEditor || referenceSearchVisible",
	},
	{
		key: "shift+f12",
		command: "goToPreviousReference",
		when: "inReferenceSearchEditor || referenceSearchVisible",
	},
	{
		key: "shift+f4",
		command: "goToPreviousReference",
		when: "inReferenceSearchEditor || referenceSearchVisible",
	},
	{
		key: "shift+enter",
		command: "refactorPreview.apply",
		when:
			"panelFocus && refactorPreview.enabled && refactorPreview.enabled && refactorPreview.hasCheckedChanges && activePanel == 'refactorPreview'",
	},
	{ key: "cmd+f", command: "actions.find" },
	{ key: "cmd+e", command: "actions.findWithSelection" },
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
	{ key: "cmd+u", command: "cursorUndo", when: "textInputFocus" },
	{ key: "alt+right", command: "cursorWordEndRight", when: "textInputFocus" },
	{
		key: "shift+alt+right",
		command: "cursorWordEndRightSelect",
		when: "textInputFocus",
	},
	{
		key: "ctrl+alt+left",
		command: "cursorWordPartLeft",
		when: "textInputFocus",
	},
	{
		key: "ctrl+shift+alt+left",
		command: "cursorWordPartLeftSelect",
		when: "textInputFocus",
	},
	{
		key: "ctrl+alt+right",
		command: "cursorWordPartRight",
		when: "textInputFocus",
	},
	{
		key: "ctrl+shift+alt+right",
		command: "cursorWordPartRightSelect",
		when: "textInputFocus",
	},
	{ key: "alt+left", command: "cursorWordStartLeft", when: "textInputFocus" },
	{
		key: "shift+alt+left",
		command: "cursorWordStartLeftSelect",
		when: "textInputFocus",
	},
	{
		key: "cmd+backspace",
		command: "deleteAllLeft",
		when: "textInputFocus && !editorReadonly",
	},
	{
		key: "cmd+delete",
		command: "deleteAllRight",
		when: "textInputFocus && !editorReadonly",
	},
	{
		key: "ctrl+k",
		command: "deleteAllRight",
		when: "textInputFocus && !editorReadonly",
	},
	{
		key: "alt+backspace",
		command: "deleteWordLeft",
		when: "textInputFocus && !editorReadonly",
	},
	{
		key: "ctrl+alt+backspace",
		command: "deleteWordPartLeft",
		when: "textInputFocus && !editorReadonly",
	},
	{
		key: "ctrl+alt+delete",
		command: "deleteWordPartRight",
		when: "textInputFocus && !editorReadonly",
	},
	{
		key: "alt+delete",
		command: "deleteWordRight",
		when: "textInputFocus && !editorReadonly",
	},
	{
		key: "cmd+k cmd+c",
		command: "editor.action.addCommentLine",
		when: "editorTextFocus && !editorReadonly",
	},
	{
		key: "cmd+d",
		command: "editor.action.addSelectionToNextFindMatch",
		when: "editorFocus",
	},
	{
		key: "alt+cmd+.",
		command: "editor.action.autoFix",
		when:
			"editorTextFocus && !editorReadonly && supportedCodeAction =~ /(\\s|^)quickfix\\b/",
	},
	{
		key: "shift+alt+a",
		command: "editor.action.blockComment",
		when: "editorTextFocus && !editorReadonly",
	},
	{
		key: "cmd+f2",
		command: "editor.action.changeAll",
		when: "editorTextFocus && editorTextFocus && !editorReadonly",
	},
	{
		key: "cmd+c",
		command: "editor.action.clipboardCopyAction",
		when: "textInputFocus",
	},
	{
		key: "cmd+x",
		command: "editor.action.clipboardCutAction",
		when: "textInputFocus && !editorReadonly",
	},
	{
		key: "cmd+v",
		command: "editor.action.clipboardPasteAction",
		when: "textInputFocus && !editorReadonly",
	},
	{
		key: "cmd+/",
		command: "editor.action.commentLine",
		when: "editorTextFocus && !editorReadonly",
	},
	{
		key: "shift+alt+down",
		command: "editor.action.copyLinesDownAction",
		when: "editorTextFocus && !editorReadonly",
	},
	{
		key: "shift+alt+up",
		command: "editor.action.copyLinesUpAction",
		when: "editorTextFocus && !editorReadonly",
	},
	{
		key: "shift+cmd+z",
		command: "editor.action.customEditor.redo",
		when: "focusedCustomEditorIsEditable && !inputFocus",
	},
	{
		key: "cmd+z",
		command: "editor.action.customEditor.undo",
		when: "focusedCustomEditorIsEditable && !inputFocus",
	},
	{
		key: "cmd+k cmd+k",
		command: "editor.action.defineKeybinding",
		when: "editorTextFocus && !editorReadonly && editorLangId == 'jsonc'",
	},
	{
		key: "shift+cmd+k",
		command: "editor.action.deleteLines",
		when: "textInputFocus && !editorReadonly",
	},
	{
		key: "f7",
		command: "editor.action.diffReview.next",
		when: "isInDiffEditor",
	},
	{
		key: "shift+f7",
		command: "editor.action.diffReview.prev",
		when: "isInDiffEditor",
	},
	{
		key: "alt+f3",
		command: "editor.action.dirtydiff.next",
		when: "editorTextFocus",
	},
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
		key: "cmd+f",
		command: "editor.action.extensioneditor.showfind",
		when: "!editorFocus && activeEditor == 'workbench.editor.extension'",
	},
	{
		key: "shift+alt+f",
		command: "editor.action.formatDocument",
		when:
			"editorHasDocumentFormattingProvider && editorHasDocumentFormattingProvider && editorTextFocus && !editorReadonly",
	},
	{
		key: "shift+alt+f",
		command: "editor.action.formatDocument.none",
		when:
			"editorTextFocus && !editorHasDocumentFormattingProvider && !editorHasDocumentFormattingProvider && !editorReadonly",
	},
	{
		key: "cmd+k cmd+f",
		command: "editor.action.formatSelection",
		when:
			"editorHasDocumentSelectionFormattingProvider && editorHasDocumentSelectionFormattingProvider && editorTextFocus && !editorReadonly",
	},
	{
		key: "cmd+f12",
		command: "editor.action.goToImplementation",
		when:
			"editorHasImplementationProvider && editorTextFocus && !isInEmbeddedEditor",
	},
	{
		key: "shift+f12",
		command: "editor.action.goToReferences",
		when:
			"editorHasReferenceProvider && editorTextFocus && !inReferenceSearchEditor && !isInEmbeddedEditor",
	},
	{
		key: "shift+cmd+.",
		command: "editor.action.inPlaceReplace.down",
		when: "editorTextFocus && !editorReadonly",
	},
	{
		key: "shift+cmd+,",
		command: "editor.action.inPlaceReplace.up",
		when: "editorTextFocus && !editorReadonly",
	},
	{
		key: "cmd+]",
		command: "editor.action.indentLines",
		when: "editorTextFocus && !editorReadonly",
	},
	{
		key: "alt+cmd+up",
		command: "editor.action.insertCursorAbove",
		when: "editorTextFocus",
	},
	{
		key: "shift+alt+i",
		command: "editor.action.insertCursorAtEndOfEachLineSelected",
		when: "editorTextFocus",
	},
	{
		key: "alt+cmd+down",
		command: "editor.action.insertCursorBelow",
		when: "editorTextFocus",
	},
	{
		key: "cmd+enter",
		command: "editor.action.insertLineAfter",
		when: "editorTextFocus && !editorReadonly",
	},
	{
		key: "shift+cmd+enter",
		command: "editor.action.insertLineBefore",
		when: "editorTextFocus && !editorReadonly",
	},
	{
		key: "ctrl+j",
		command: "editor.action.joinLines",
		when: "editorTextFocus && !editorReadonly",
	},
	{
		key: "shift+cmd+\\",
		command: "editor.action.jumpToBracket",
		when: "editorTextFocus",
	},
	{
		key: "alt+f8",
		command: "editor.action.marker.next",
		when: "editorFocus && !editorReadonly",
	},
	{
		key: "f8",
		command: "editor.action.marker.nextInFiles",
		when: "editorFocus && !editorReadonly",
	},
	{
		key: "shift+alt+f8",
		command: "editor.action.marker.prev",
		when: "editorFocus && !editorReadonly",
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
		key: "cmd+k cmd+d",
		command: "editor.action.moveSelectionToNextFindMatch",
		when: "editorFocus",
	},
	{
		key: "f3",
		command: "editor.action.nextMatchFindAction",
		when: "editorFocus",
	},
	{
		key: "cmd+g",
		command: "editor.action.nextMatchFindAction",
		when: "editorFocus",
	},
	{
		key: "enter",
		command: "editor.action.nextMatchFindAction",
		when: "editorFocus && findInputFocussed",
	},
	{
		key: "cmd+f3",
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
		key: "cmd+[",
		command: "editor.action.outdentLines",
		when: "editorTextFocus && !editorReadonly",
	},
	{
		key: "alt+f12",
		command: "editor.action.peekDefinition",
		when:
			"editorHasDefinitionProvider && editorTextFocus && !inReferenceSearchEditor && !isInEmbeddedEditor",
	},
	{
		key: "shift+cmd+f12",
		command: "editor.action.peekImplementation",
		when:
			"editorHasImplementationProvider && editorTextFocus && !inReferenceSearchEditor && !isInEmbeddedEditor",
	},
	{
		key: "shift+f3",
		command: "editor.action.previousMatchFindAction",
		when: "editorFocus",
	},
	{
		key: "shift+cmd+g",
		command: "editor.action.previousMatchFindAction",
		when: "editorFocus",
	},
	{
		key: "shift+enter",
		command: "editor.action.previousMatchFindAction",
		when: "editorFocus && findInputFocussed",
	},
	{
		key: "shift+cmd+f3",
		command: "editor.action.previousSelectionMatchFindAction",
		when: "editorFocus",
	},
	{
		key: "cmd+.",
		command: "editor.action.quickFix",
		when:
			"editorHasCodeActionsProvider && editorTextFocus && !editorReadonly",
	},
	{
		key: "ctrl+shift+r",
		command: "editor.action.refactor",
		when:
			"editorHasCodeActionsProvider && editorTextFocus && !editorReadonly",
	},
	{
		key: "cmd+k cmd+u",
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
		when:
			"editorHasDefinitionProvider && editorTextFocus && !isInEmbeddedEditor",
	},
	{
		key: "cmd+k f12",
		command: "editor.action.revealDefinitionAside",
		when:
			"editorHasDefinitionProvider && editorTextFocus && !isInEmbeddedEditor",
	},
	{
		key: "shift+cmd+l",
		command: "editor.action.selectHighlights",
		when: "editorFocus",
	},
	{
		key: "alt+f1",
		command: "editor.action.showAccessibilityHelp",
		when: "editorFocus",
	},
	{
		key: "shift+f10",
		command: "editor.action.showContextMenu",
		when: "textInputFocus",
	},
	{
		key: "cmd+k cmd+i",
		command: "editor.action.showHover",
		when: "editorTextFocus",
	},
	{
		key: "ctrl+shift+right",
		command: "editor.action.smartSelect.expand",
		when: "editorTextFocus",
	},
	{
		key: "ctrl+shift+cmd+right",
		command: "editor.action.smartSelect.expand",
		when: "editorTextFocus",
	},
	{
		key: "ctrl+shift+left",
		command: "editor.action.smartSelect.shrink",
		when: "editorTextFocus",
	},
	{
		key: "ctrl+shift+cmd+left",
		command: "editor.action.smartSelect.shrink",
		when: "editorTextFocus",
	},
	{ key: "alt+cmd+f", command: "editor.action.startFindReplaceAction" },
	{ key: "ctrl+shift+m", command: "editor.action.toggleTabFocusMode" },
	{ key: "alt+z", command: "editor.action.toggleWordWrap" },
	{
		key: "ctrl+t",
		command: "editor.action.transposeLetters",
		when: "textInputFocus && !editorReadonly",
	},
	{
		key: "shift+cmd+space",
		command: "editor.action.triggerParameterHints",
		when: "editorHasSignatureHelpProvider && editorTextFocus",
	},
	{
		key: "alt+escape",
		command: "editor.action.triggerSuggest",
		when:
			"editorHasCompletionItemProvider && textInputFocus && !editorReadonly",
	},
	{
		key: "ctrl+space",
		command: "editor.action.triggerSuggest",
		when:
			"editorHasCompletionItemProvider && textInputFocus && !editorReadonly",
	},
	{
		key: "cmd+k cmd+x",
		command: "editor.action.trimTrailingWhitespace",
		when: "editorTextFocus && !editorReadonly",
	},
	{
		key: "cmd+c",
		command: "editor.action.webvieweditor.copy",
		when: "!editorFocus && !inputFocus && activeEditor == 'WebviewEditor'",
	},
	{
		key: "cmd+x",
		command: "editor.action.webvieweditor.cut",
		when: "!editorFocus && !inputFocus && activeEditor == 'WebviewEditor'",
	},
	{
		key: "enter",
		command: "editor.action.webvieweditor.findNext",
		when:
			"webviewFindWidgetFocused && !editorFocus && activeEditor == 'WebviewEditor'",
	},
	{
		key: "shift+enter",
		command: "editor.action.webvieweditor.findPrevious",
		when:
			"webviewFindWidgetFocused && !editorFocus && activeEditor == 'WebviewEditor'",
	},
	{
		key: "escape",
		command: "editor.action.webvieweditor.hideFind",
		when:
			"webviewFindWidgetVisible && !editorFocus && activeEditor == 'WebviewEditor'",
	},
	{
		key: "cmd+v",
		command: "editor.action.webvieweditor.paste",
		when: "!editorFocus && !inputFocus && activeEditor == 'WebviewEditor'",
	},
	{
		key: "shift+cmd+z",
		command: "editor.action.webvieweditor.redo",
		when:
			"!editorFocus && !inputFocus && !webviewHasOwnEditFunctions && activeEditor == 'WebviewEditor'",
	},
	{
		key: "cmd+a",
		command: "editor.action.webvieweditor.selectAll",
		when: "!editorFocus && !inputFocus && activeEditor == 'WebviewEditor'",
	},
	{
		key: "cmd+f",
		command: "editor.action.webvieweditor.showFind",
		when: "!editorFocus && activeEditor == 'WebviewEditor'",
	},
	{
		key: "cmd+z",
		command: "editor.action.webvieweditor.undo",
		when:
			"!editorFocus && !inputFocus && !webviewHasOwnEditFunctions && activeEditor == 'WebviewEditor'",
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
	{
		key: "escape",
		command: "editor.cancelOperation",
		when: "cancellableOperation",
	},
	{
		key: "cmd+k cmd+i",
		command: "editor.debug.action.showDebugHover",
		when: "editorTextFocus && inDebugMode",
	},
	{
		key: "f9",
		command: "editor.debug.action.toggleBreakpoint",
		when: "editorTextFocus",
	},
	{
		key: "tab",
		command: "editor.emmet.action.expandAbbreviation",
		when:
			"config.emmet.triggerExpansionOnTab && editorTextFocus && !editorReadonly && !editorTabMovesFocus",
	},
	{
		key: "alt+cmd+[",
		command: "editor.fold",
		when: "editorTextFocus && foldingEnabled",
	},
	{
		key: "cmd+k cmd+0",
		command: "editor.foldAll",
		when: "editorTextFocus && foldingEnabled",
	},
	{
		key: "cmd+k cmd+/",
		command: "editor.foldAllBlockComments",
		when: "editorTextFocus && foldingEnabled",
	},
	{
		key: "cmd+k cmd+8",
		command: "editor.foldAllMarkerRegions",
		when: "editorTextFocus && foldingEnabled",
	},
	{
		key: "cmd+k cmd+1",
		command: "editor.foldLevel1",
		when: "editorTextFocus && foldingEnabled",
	},
	{
		key: "cmd+k cmd+2",
		command: "editor.foldLevel2",
		when: "editorTextFocus && foldingEnabled",
	},
	{
		key: "cmd+k cmd+3",
		command: "editor.foldLevel3",
		when: "editorTextFocus && foldingEnabled",
	},
	{
		key: "cmd+k cmd+4",
		command: "editor.foldLevel4",
		when: "editorTextFocus && foldingEnabled",
	},
	{
		key: "cmd+k cmd+5",
		command: "editor.foldLevel5",
		when: "editorTextFocus && foldingEnabled",
	},
	{
		key: "cmd+k cmd+6",
		command: "editor.foldLevel6",
		when: "editorTextFocus && foldingEnabled",
	},
	{
		key: "cmd+k cmd+7",
		command: "editor.foldLevel7",
		when: "editorTextFocus && foldingEnabled",
	},
	{
		key: "cmd+k cmd+[",
		command: "editor.foldRecursively",
		when: "editorTextFocus && foldingEnabled",
	},
	{
		key: "f12",
		command: "editor.gotoNextSymbolFromResult",
		when: "hasSymbols",
	},
	{
		key: "escape",
		command: "editor.gotoNextSymbolFromResult.cancel",
		when: "hasSymbols",
	},
	{
		key: "cmd+k cmd+l",
		command: "editor.toggleFold",
		when: "editorTextFocus && foldingEnabled",
	},
	{
		key: "alt+cmd+]",
		command: "editor.unfold",
		when: "editorTextFocus && foldingEnabled",
	},
	{
		key: "cmd+k cmd+j",
		command: "editor.unfoldAll",
		when: "editorTextFocus && foldingEnabled",
	},
	{
		key: "cmd+k cmd+9",
		command: "editor.unfoldAllMarkerRegions",
		when: "editorTextFocus && foldingEnabled",
	},
	{
		key: "cmd+k cmd+]",
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
	{
		key: "enter",
		command: "repl.action.acceptInput",
		when: "inDebugRepl && textInputFocus",
	},
	{
		key: "cmd+f",
		command: "repl.action.filter",
		when: "inDebugRepl && textInputFocus",
	},
	{
		key: "escape",
		command: "settings.action.clearSearchResults",
		when: "inSettingsSearch",
	},
	{
		key: "cmd+.",
		command: "settings.action.editFocusedSetting",
		when: "inSettingsSearch",
	},
	{
		key: "enter",
		command: "settings.action.focusNextSetting",
		when: "inSettingsSearch",
	},
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
	{
		key: "cmd+f",
		command: "settings.action.search",
		when: "inSettingsEditor",
	},
	{
		key: "cmd+/",
		command: "toggleExplainMode",
		when: "suggestWidgetVisible",
	},
	{
		key: "cmd+k f2",
		command: "togglePeekWidgetFocus",
		when: "inReferenceSearchEditor || referenceSearchVisible",
	},
	{
		key: "alt+f5",
		command: "workbench.action.editor.nextChange",
		when: "editorTextFocus",
	},
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
	{
		key: "escape",
		command: "workbench.action.hideComment",
		when: "commentEditorFocused",
	},
	{
		key: "cmd+enter",
		command: "workbench.action.submitComment",
		when: "commentEditorFocused",
	},
	{
		key: "shift+escape",
		command: "closeFindWidget",
		when: "editorFocus && findWidgetVisible",
	},
	{
		key: "escape",
		command: "closeFindWidget",
		when: "editorFocus && findWidgetVisible",
	},
	{
		key: "alt+cmd+enter",
		command: "editor.action.replaceAll",
		when: "editorFocus && findWidgetVisible",
	},
	{
		key: "cmd+enter",
		command: "editor.action.replaceAll",
		when: "editorFocus && findWidgetVisible && replaceInputFocussed",
	},
	{
		key: "shift+cmd+1",
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
	{
		key: "alt+cmd+c",
		command: "toggleFindCaseSensitive",
		when: "editorFocus",
	},
	{ key: "alt+cmd+l", command: "toggleFindInSelection", when: "editorFocus" },
	{ key: "alt+cmd+r", command: "toggleFindRegex", when: "editorFocus" },
	{ key: "alt+cmd+w", command: "toggleFindWholeWord", when: "editorFocus" },
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
	{
		key: "shift+escape",
		command: "leaveSnippet",
		when: "editorTextFocus && inSnippetMode",
	},
	{
		key: "escape",
		command: "leaveSnippet",
		when: "editorTextFocus && inSnippetMode",
	},
	{
		key: "shift+escape",
		command: "closeDirtyDiff",
		when: "dirtyDiffVisible",
	},
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
		key: "ctrl+n",
		command: "showNextParameterHint",
		when:
			"editorFocus && parameterHintsMultipleSignatures && parameterHintsVisible",
	},
	{
		key: "alt+down",
		command: "showNextParameterHint",
		when:
			"editorFocus && parameterHintsMultipleSignatures && parameterHintsVisible",
	},
	{
		key: "down",
		command: "showNextParameterHint",
		when:
			"editorFocus && parameterHintsMultipleSignatures && parameterHintsVisible",
	},
	{
		key: "ctrl+p",
		command: "showPrevParameterHint",
		when:
			"editorFocus && parameterHintsMultipleSignatures && parameterHintsVisible",
	},
	{
		key: "alt+up",
		command: "showPrevParameterHint",
		when:
			"editorFocus && parameterHintsMultipleSignatures && parameterHintsVisible",
	},
	{
		key: "up",
		command: "showPrevParameterHint",
		when:
			"editorFocus && parameterHintsMultipleSignatures && parameterHintsVisible",
	},
	{
		key: "shift+tab",
		command: "acceptAlternativeSelectedSuggestion",
		when: "suggestWidgetVisible && textInputFocus && textInputFocus",
	},
	{
		key: "shift+enter",
		command: "acceptAlternativeSelectedSuggestion",
		when: "suggestWidgetVisible && textInputFocus && textInputFocus",
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
		key: "cmd+pagedown",
		command: "selectNextPageSuggestion",
		when:
			"suggestWidgetMultipleSuggestions && suggestWidgetVisible && textInputFocus",
	},
	{
		key: "pagedown",
		command: "selectNextPageSuggestion",
		when:
			"suggestWidgetMultipleSuggestions && suggestWidgetVisible && textInputFocus",
	},
	{
		key: "ctrl+n",
		command: "selectNextSuggestion",
		when:
			"suggestWidgetMultipleSuggestions && suggestWidgetVisible && textInputFocus",
	},
	{
		key: "cmd+down",
		command: "selectNextSuggestion",
		when:
			"suggestWidgetMultipleSuggestions && suggestWidgetVisible && textInputFocus",
	},
	{
		key: "down",
		command: "selectNextSuggestion",
		when:
			"suggestWidgetMultipleSuggestions && suggestWidgetVisible && textInputFocus",
	},
	{
		key: "cmd+pageup",
		command: "selectPrevPageSuggestion",
		when:
			"suggestWidgetMultipleSuggestions && suggestWidgetVisible && textInputFocus",
	},
	{
		key: "pageup",
		command: "selectPrevPageSuggestion",
		when:
			"suggestWidgetMultipleSuggestions && suggestWidgetVisible && textInputFocus",
	},
	{
		key: "ctrl+p",
		command: "selectPrevSuggestion",
		when:
			"suggestWidgetMultipleSuggestions && suggestWidgetVisible && textInputFocus",
	},
	{
		key: "cmd+up",
		command: "selectPrevSuggestion",
		when:
			"suggestWidgetMultipleSuggestions && suggestWidgetVisible && textInputFocus",
	},
	{
		key: "up",
		command: "selectPrevSuggestion",
		when:
			"suggestWidgetMultipleSuggestions && suggestWidgetVisible && textInputFocus",
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
	{
		key: "enter",
		command: "acceptRenameInput",
		when: "editorFocus && renameInputVisible",
	},
	{
		key: "shift+enter",
		command: "acceptRenameInputWithPreview",
		when:
			"config.editor.rename.enablePreview && editorFocus && renameInputVisible",
	},
	{
		key: "shift+escape",
		command: "cancelRenameInput",
		when: "editorFocus && renameInputVisible",
	},
	{
		key: "escape",
		command: "cancelRenameInput",
		when: "editorFocus && renameInputVisible",
	},
	{
		key: "shift+cmd+l",
		command: "addCursorsAtSearchResults",
		when: "fileMatchOrMatchFocus && searchViewletVisible",
	},
	{
		key: "shift+cmd+;",
		command: "breadcrumbs.focus",
		when: "breadcrumbsPossible",
	},
	{
		key: "shift+cmd+.",
		command: "breadcrumbs.focusAndSelect",
		when: "breadcrumbsPossible",
	},
	{
		key: "alt+right",
		command: "breadcrumbs.focusNext",
		when: "breadcrumbsActive && breadcrumbsVisible",
	},
	{
		key: "right",
		command: "breadcrumbs.focusNext",
		when: "breadcrumbsActive && breadcrumbsVisible",
	},
	{
		key: "alt+left",
		command: "breadcrumbs.focusPrevious",
		when: "breadcrumbsActive && breadcrumbsVisible",
	},
	{
		key: "left",
		command: "breadcrumbs.focusPrevious",
		when: "breadcrumbsActive && breadcrumbsVisible",
	},
	{
		key: "cmd+enter",
		command: "breadcrumbs.revealFocused",
		when: "breadcrumbsActive && breadcrumbsVisible",
	},
	{
		key: "space",
		command: "breadcrumbs.revealFocused",
		when: "breadcrumbsActive && breadcrumbsVisible",
	},
	{
		key: "cmd+enter",
		command: "breadcrumbs.revealFocusedFromTreeAside",
		when:
			"breadcrumbsActive && breadcrumbsVisible && listFocus && !inputFocus",
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
		key: "shift+cmd+.",
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
	{ key: "alt+cmd+c", command: "copyFilePath", when: "!editorFocus" },
	{
		key: "shift+alt+cmd+c",
		command: "copyRelativeFilePath",
		when: "!editorFocus",
	},
	{
		key: "alt+enter",
		command: "debug.openBreakpointToSide",
		when: "breakpointsFocused",
	},
	{
		key: "cmd+enter",
		command: "debug.openBreakpointToSide",
		when: "breakpointsFocused",
	},
	{
		key: "cmd+backspace",
		command: "debug.removeBreakpoint",
		when: "breakpointsFocused && !breakpointSelected",
	},
	{
		key: "cmd+backspace",
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
		when:
			"editorHasCallHierarchyProvider && editorTextFocus && !inReferenceSearchEditor",
	},
	{
		key: "shift+alt+h",
		command: "editor.toggleCallHierarchy",
		when: "callHierarchyVisible",
	},
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
		key: "cmd+c",
		command: "keybindings.editor.copyKeybindingEntry",
		when: "inKeybindings && keybindingFocus",
	},
	{
		key: "cmd+k cmd+k",
		command: "keybindings.editor.defineKeybinding",
		when: "inKeybindings && keybindingFocus",
	},
	{
		key: "cmd+k cmd+e",
		command: "keybindings.editor.defineWhenExpression",
		when: "inKeybindings && keybindingFocus",
	},
	{
		key: "down",
		command: "keybindings.editor.focusKeybindings",
		when: "inKeybindings && inKeybindingsSearch",
	},
	{
		key: "alt+cmd+k",
		command: "keybindings.editor.recordSearchKeys",
		when: "inKeybindings && inKeybindingsSearch",
	},
	{
		key: "cmd+k cmd+backspace",
		command: "keybindings.editor.removeKeybinding",
		when: "inKeybindings && keybindingFocus",
	},
	{
		key: "cmd+f",
		command: "keybindings.editor.searchKeybindings",
		when: "inKeybindings",
	},
	{
		key: "alt+cmd+p",
		command: "keybindings.editor.toggleSortByPrecedence",
		when: "inKeybindings",
	},
	{
		key: "escape",
		command: "list.clear",
		when: "listFocus && listHasSelectionOrFocus && !inputFocus",
	},
	{
		key: "cmd+up",
		command: "list.collapse",
		when: "listFocus && !inputFocus",
	},
	{ key: "left", command: "list.collapse", when: "listFocus && !inputFocus" },
	{
		key: "shift+cmd+up",
		command: "list.collapseAll",
		when: "listFocus && !inputFocus",
	},
	{
		key: "cmd+left",
		command: "list.collapseAll",
		when: "listFocus && !inputFocus",
	},
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
	{
		key: "ctrl+n",
		command: "list.focusDown",
		when: "listFocus && !inputFocus",
	},
	{
		key: "down",
		command: "list.focusDown",
		when: "listFocus && !inputFocus",
	},
	{
		key: "home",
		command: "list.focusFirst",
		when: "listFocus && !inputFocus",
	},
	{ key: "end", command: "list.focusLast", when: "listFocus && !inputFocus" },
	{
		key: "pagedown",
		command: "list.focusPageDown",
		when: "listFocus && !inputFocus",
	},
	{
		key: "pageup",
		command: "list.focusPageUp",
		when: "listFocus && !inputFocus",
	},
	{
		key: "ctrl+p",
		command: "list.focusUp",
		when: "listFocus && !inputFocus",
	},
	{ key: "up", command: "list.focusUp", when: "listFocus && !inputFocus" },
	{
		key: "cmd+down",
		command: "list.scrollDown",
		when: "listFocus && !inputFocus",
	},
	{
		key: "cmd+up",
		command: "list.scrollUp",
		when: "listFocus && !inputFocus",
	},
	{
		key: "cmd+down",
		command: "list.select",
		when: "listFocus && !inputFocus",
	},
	{ key: "enter", command: "list.select", when: "listFocus && !inputFocus" },
	{
		key: "cmd+a",
		command: "list.selectAll",
		when: "listFocus && listSupportsMultiselect && !inputFocus",
	},
	{
		key: "space",
		command: "list.toggleExpand",
		when: "listFocus && !inputFocus",
	},
	{
		key: "cmd+backspace",
		command: "notification.clear",
		when: "notificationFocus",
	},
	{
		key: "left",
		command: "notification.collapse",
		when: "notificationFocus",
	},
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
	{ key: "cmd+c", command: "problems.action.copy", when: "problemFocus" },
	{
		key: "cmd+f",
		command: "problems.action.focusFilter",
		when: "problemsViewFocus",
	},
	{
		key: "cmd+down",
		command: "problems.action.focusProblemsFromFilter",
		when: "problemsFilterFocus",
	},
	{
		key: "ctrl+enter",
		command: "problems.action.openToSide",
		when: "problemFocus",
	},
	{
		key: "cmd+.",
		command: "problems.action.showQuickFixes",
		when: "problemFocus",
	},
	{
		key: "space",
		command: "refactorPreview.toggleCheckedState",
		when: "listFocus && refactorPreview.enabled && !inputFocus",
	},
	{ key: "alt+cmd+r", command: "revealFileInOS", when: "!editorFocus" },
	{ key: "cmd+enter", command: "scm.acceptInput", when: "scmRepository" },
	{
		key: "escape",
		command: "search.action.cancel",
		when: "listFocus && searchViewletVisible && !inputFocus",
	},
	{
		key: "cmd+c",
		command: "search.action.copyMatch",
		when: "fileMatchOrMatchFocus",
	},
	{
		key: "alt+cmd+c",
		command: "search.action.copyPath",
		when: "fileMatchOrFolderMatchWithResourceFocus",
	},
	{
		key: "f4",
		command: "search.action.focusNextSearchResult",
		when: "hasSearchResult",
	},
	{
		key: "shift+f4",
		command: "search.action.focusPreviousSearchResult",
		when: "hasSearchResult",
	},
	{
		key: "cmd+up",
		command: "search.action.focusSearchFromResults",
		when: "firstMatchFocus && searchViewletVisible",
	},
	{
		key: "cmd+enter",
		command: "search.action.openInEditor",
		when:
			"hasSearchResult && previewSearchEditor && previewSearchEditor && searchViewletFocus",
	},
	{
		key: "ctrl+enter",
		command: "search.action.openResultToSide",
		when: "fileMatchOrMatchFocus && searchViewletVisible",
	},
	{
		key: "cmd+backspace",
		command: "search.action.remove",
		when: "fileMatchOrMatchFocus && searchViewletVisible",
	},
	{
		key: "shift+cmd+1",
		command: "search.action.replace",
		when: "matchFocus && replaceActive && searchViewletVisible",
	},
	{
		key: "alt+cmd+enter",
		command: "search.action.replaceAll",
		when: "replaceActive && searchViewletVisible && !findWidgetVisible",
	},
	{
		key: "shift+cmd+enter",
		command: "search.action.replaceAllInFile",
		when: "fileMatchFocus && replaceActive && searchViewletVisible",
	},
	{
		key: "shift+cmd+1",
		command: "search.action.replaceAllInFile",
		when: "fileMatchFocus && replaceActive && searchViewletVisible",
	},
	{
		key: "shift+cmd+enter",
		command: "search.action.replaceAllInFolder",
		when: "folderMatchFocus && replaceActive && searchViewletVisible",
	},
	{
		key: "shift+cmd+1",
		command: "search.action.replaceAllInFolder",
		when: "folderMatchFocus && replaceActive && searchViewletVisible",
	},
	{
		key: "cmd+down",
		command: "search.focus.nextInputBox",
		when:
			"inSearchEditor && inputBoxFocus || inputBoxFocus && searchViewletVisible",
	},
	{
		key: "cmd+up",
		command: "search.focus.previousInputBox",
		when:
			"inSearchEditor && inputBoxFocus || inputBoxFocus && searchViewletVisible && !searchInputBoxFocus",
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
	{
		key: "shift+f9",
		command: "settings.action.showContextMenu",
		when: "inSettingsEditor",
	},
	{
		key: "alt+cmd+c",
		command: "toggleSearchCaseSensitive",
		when:
			"searchViewletFocus && searchViewletVisible && !fileMatchOrFolderMatchFocus",
	},
	{
		key: "alt+cmd+c",
		command: "toggleSearchEditorCaseSensitive",
		when: "inSearchEditor && searchInputBoxFocus",
	},
	{
		key: "alt+cmd+l",
		command: "toggleSearchEditorContextLines",
		when: "inSearchEditor",
	},
	{
		key: "alt+cmd+r",
		command: "toggleSearchEditorRegex",
		when: "inSearchEditor && searchInputBoxFocus",
	},
	{
		key: "alt+cmd+w",
		command: "toggleSearchEditorWholeWord",
		when: "inSearchEditor && searchInputBoxFocus",
	},
	{
		key: "alt+cmd+r",
		command: "toggleSearchRegex",
		when: "searchViewletFocus && searchViewletVisible",
	},
	{
		key: "alt+cmd+w",
		command: "toggleSearchWholeWord",
		when: "searchViewletFocus && searchViewletVisible",
	},
	{ key: "cmd+w", command: "workbench.action.closeActiveEditor" },
	{ key: "cmd+k cmd+w", command: "workbench.action.closeAllEditors" },
	{ key: "cmd+k shift+cmd+w", command: "workbench.action.closeAllGroups" },
	{ key: "cmd+k w", command: "workbench.action.closeEditorsInGroup" },
	{ key: "cmd+k f", command: "workbench.action.closeFolder" },
	{
		key: "cmd+w",
		command: "workbench.action.closeGroup",
		when: "activeEditorGroupEmpty && multipleEditorGroups",
	},
	{ key: "alt+cmd+t", command: "workbench.action.closeOtherEditors" },
	{
		key: "shift+escape",
		command: "workbench.action.closeQuickOpen",
		when: "inQuickOpen",
	},
	{
		key: "escape",
		command: "workbench.action.closeQuickOpen",
		when: "inQuickOpen",
	},
	{ key: "cmd+k u", command: "workbench.action.closeUnmodifiedEditors" },
	{ key: "shift+cmd+w", command: "workbench.action.closeWindow" },
	{
		key: "cmd+w",
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
	{
		key: "f5",
		command: "workbench.action.debug.continue",
		when: "inDebugMode",
	},
	{
		key: "f6",
		command: "workbench.action.debug.pause",
		when: "debugState == 'running'",
	},
	{
		key: "shift+cmd+f5",
		command: "workbench.action.debug.restart",
		when: "inDebugMode",
	},
	{ key: "ctrl+f5", command: "workbench.action.debug.run" },
	{
		key: "f5",
		command: "workbench.action.debug.start",
		when: "!inDebugMode",
	},
	{
		key: "shift+f11",
		command: "workbench.action.debug.stepOut",
		when: "debugState == 'stopped'",
	},
	{
		key: "f10",
		command: "workbench.action.debug.stepOver",
		when: "debugState == 'stopped'",
	},
	{
		key: "shift+f5",
		command: "workbench.action.debug.stop",
		when: "inDebugMode",
	},
	{ key: "cmd+k m", command: "workbench.action.editor.changeLanguageMode" },
	{ key: "cmd+k p", command: "workbench.action.files.copyPathOfActiveFile" },
	{ key: "cmd+n", command: "workbench.action.files.newUntitledFile" },
	{ key: "cmd+o", command: "workbench.action.files.openFileFolder" },
	{
		key: "cmd+o",
		command: "workbench.action.files.openLocalFileFolder",
		when: "remoteFileDialogVisible",
	},
	{
		key: "cmd+k r",
		command: "workbench.action.files.revealActiveFileInWindows",
	},
	{ key: "cmd+s", command: "workbench.action.files.save" },
	{ key: "alt+cmd+s", command: "workbench.action.files.saveAll" },
	{ key: "shift+cmd+s", command: "workbench.action.files.saveAs" },
	{
		key: "shift+cmd+s",
		command: "workbench.action.files.saveLocalFile",
		when: "remoteFileDialogVisible",
	},
	{ key: "cmd+k s", command: "workbench.action.files.saveWithoutFormatting" },
	{
		key: "cmd+k o",
		command: "workbench.action.files.showOpenedFileInNewWindow",
	},
	{ key: "shift+cmd+f", command: "workbench.action.findInFiles" },
	{ key: "cmd+k cmd+up", command: "workbench.action.focusAboveGroup" },
	{ key: "cmd+k cmd+down", command: "workbench.action.focusBelowGroup" },
	{ key: "cmd+8", command: "workbench.action.focusEighthEditorGroup" },
	{ key: "cmd+5", command: "workbench.action.focusFifthEditorGroup" },
	{ key: "cmd+1", command: "workbench.action.focusFirstEditorGroup" },
	{ key: "cmd+4", command: "workbench.action.focusFourthEditorGroup" },
	{ key: "cmd+k cmd+left", command: "workbench.action.focusLeftGroup" },
	{ key: "cmd+k cmd+right", command: "workbench.action.focusRightGroup" },
	{ key: "cmd+2", command: "workbench.action.focusSecondEditorGroup" },
	{ key: "cmd+7", command: "workbench.action.focusSeventhEditorGroup" },
	{ key: "cmd+0", command: "workbench.action.focusSideBar" },
	{ key: "cmd+6", command: "workbench.action.focusSixthEditorGroup" },
	{ key: "cmd+3", command: "workbench.action.focusThirdEditorGroup" },
	{ key: "ctrl+g", command: "workbench.action.gotoLine" },
	{ key: "shift+cmd+o", command: "workbench.action.gotoSymbol" },
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
	{ key: "cmd+k enter", command: "workbench.action.keepEditor" },
	{ key: "cmd+k cmd+r", command: "workbench.action.keybindingsReference" },
	{ key: "cmd+9", command: "workbench.action.lastEditorInGroup" },
	{ key: "ctrl+0", command: "workbench.action.lastEditorInGroup" },
	{
		key: "cmd+k down",
		command: "workbench.action.moveActiveEditorGroupDown",
	},
	{
		key: "cmd+k left",
		command: "workbench.action.moveActiveEditorGroupLeft",
	},
	{
		key: "cmd+k right",
		command: "workbench.action.moveActiveEditorGroupRight",
	},
	{ key: "cmd+k up", command: "workbench.action.moveActiveEditorGroupUp" },
	{
		key: "cmd+k shift+cmd+left",
		command: "workbench.action.moveEditorLeftInGroup",
	},
	{
		key: "cmd+k shift+cmd+right",
		command: "workbench.action.moveEditorRightInGroup",
	},
	{ key: "ctrl+cmd+1", command: "workbench.action.moveEditorToFirstGroup" },
	{ key: "ctrl+cmd+9", command: "workbench.action.moveEditorToLastGroup" },
	{
		key: "ctrl+cmd+right",
		command: "workbench.action.moveEditorToNextGroup",
	},
	{
		key: "ctrl+cmd+left",
		command: "workbench.action.moveEditorToPreviousGroup",
	},
	{ key: "ctrl+-", command: "workbench.action.navigateBack" },
	{ key: "ctrl+shift+-", command: "workbench.action.navigateForward" },
	{
		key: "cmd+k cmd+q",
		command: "workbench.action.navigateToLastEditLocation",
	},
	{ key: "shift+cmd+n", command: "workbench.action.newWindow" },
	{ key: "shift+cmd+]", command: "workbench.action.nextEditor" },
	{ key: "alt+cmd+right", command: "workbench.action.nextEditor" },
	{
		key: "cmd+k alt+cmd+right",
		command: "workbench.action.nextEditorInGroup",
	},
	{ key: "ctrl+1", command: "workbench.action.openEditorAtIndex1" },
	{ key: "ctrl+2", command: "workbench.action.openEditorAtIndex2" },
	{ key: "ctrl+3", command: "workbench.action.openEditorAtIndex3" },
	{ key: "ctrl+4", command: "workbench.action.openEditorAtIndex4" },
	{ key: "ctrl+5", command: "workbench.action.openEditorAtIndex5" },
	{ key: "ctrl+6", command: "workbench.action.openEditorAtIndex6" },
	{ key: "ctrl+7", command: "workbench.action.openEditorAtIndex7" },
	{ key: "ctrl+8", command: "workbench.action.openEditorAtIndex8" },
	{ key: "ctrl+9", command: "workbench.action.openEditorAtIndex9" },
	{ key: "cmd+k cmd+s", command: "workbench.action.openGlobalKeybindings" },
	{ key: "ctrl+r", command: "workbench.action.openRecent" },
	{ key: "cmd+,", command: "workbench.action.openSettings" },
	{ key: "shift+cmd+u", command: "workbench.action.output.toggleOutput" },
	{ key: "shift+cmd+[", command: "workbench.action.previousEditor" },
	{ key: "alt+cmd+left", command: "workbench.action.previousEditor" },
	{
		key: "cmd+k alt+cmd+left",
		command: "workbench.action.previousEditorInGroup",
	},
	{ key: "cmd+p", command: "workbench.action.quickOpen" },
	{
		key: "ctrl+shift+tab",
		command: "workbench.action.quickOpenLeastRecentlyUsedEditorInGroup",
	},
	{
		key: "ctrl+tab",
		command: "workbench.action.quickOpenPreviousRecentlyUsedEditorInGroup",
	},
	{ key: "ctrl+q", command: "workbench.action.quickOpenView" },
	{ key: "cmd+q", command: "workbench.action.quit" },
	{ key: "shift+cmd+t", command: "workbench.action.reopenClosedEditor" },
	{ key: "shift+cmd+h", command: "workbench.action.replaceInFiles" },
	{
		key: "shift+cmd+j",
		command: "workbench.action.search.toggleQueryDetails",
		when: "inSearchEditor || searchViewletVisible",
	},
	{ key: "cmd+k cmd+t", command: "workbench.action.selectTheme" },
	{ key: "alt+cmd+tab", command: "workbench.action.showAllEditors" },
	{ key: "cmd+t", command: "workbench.action.showAllSymbols" },
	{ key: "f1", command: "workbench.action.showCommands" },
	{ key: "shift+cmd+p", command: "workbench.action.showCommands" },
	{ key: "cmd+\\", command: "workbench.action.splitEditor" },
	{ key: "cmd+k cmd+\\", command: "workbench.action.splitEditorOrthogonal" },
	{ key: "ctrl+w", command: "workbench.action.switchWindow" },
	{ key: "shift+cmd+b", command: "workbench.action.tasks.build" },
	{
		key: "escape",
		command: "workbench.action.terminal.clearSelection",
		when:
			"terminalFocus && terminalTextSelected && !terminalFindWidgetVisible",
	},
	{
		key: "cmd+c",
		command: "workbench.action.terminal.copySelection",
		when: "terminalFocus && terminalTextSelected",
	},
	{
		key: "cmd+backspace",
		command: "workbench.action.terminal.deleteToLineStart",
		when: "terminalFocus",
	},
	{
		key: "alt+backspace",
		command: "workbench.action.terminal.deleteWordLeft",
		when: "terminalFocus",
	},
	{
		key: "alt+delete",
		command: "workbench.action.terminal.deleteWordRight",
		when: "terminalFocus",
	},
	{
		key: "shift+enter",
		command: "workbench.action.terminal.findNext",
		when: "terminalFindWidgetFocused",
	},
	{
		key: "f3",
		command: "workbench.action.terminal.findNext",
		when: "terminalFocus",
	},
	{
		key: "f3",
		command: "workbench.action.terminal.findNext",
		when: "terminalFindWidgetFocused",
	},
	{
		key: "cmd+g",
		command: "workbench.action.terminal.findNext",
		when: "terminalFocus",
	},
	{
		key: "cmd+g",
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
		key: "shift+cmd+g",
		command: "workbench.action.terminal.findPrevious",
		when: "terminalFocus",
	},
	{
		key: "shift+cmd+g",
		command: "workbench.action.terminal.findPrevious",
		when: "terminalFindWidgetFocused",
	},
	{
		key: "cmd+f",
		command: "workbench.action.terminal.focusFindWidget",
		when: "terminalFocus",
	},
	{
		key: "cmd+f",
		command: "workbench.action.terminal.focusFindWidget",
		when: "terminalFindWidgetFocused",
	},
	{
		key: "alt+cmd+down",
		command: "workbench.action.terminal.focusNextPane",
		when: "terminalFocus",
	},
	{
		key: "alt+cmd+right",
		command: "workbench.action.terminal.focusNextPane",
		when: "terminalFocus",
	},
	{
		key: "alt+cmd+up",
		command: "workbench.action.terminal.focusPreviousPane",
		when: "terminalFocus",
	},
	{
		key: "alt+cmd+left",
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
		key: "cmd+right",
		command: "workbench.action.terminal.moveToLineEnd",
		when: "terminalFocus",
	},
	{
		key: "cmd+left",
		command: "workbench.action.terminal.moveToLineStart",
		when: "terminalFocus",
	},
	{
		key: "escape",
		command: "workbench.action.terminal.navigationModeExit",
		when: "accessibilityModeEnabled && terminalA11yTreeFocus",
	},
	{
		key: "cmd+down",
		command: "workbench.action.terminal.navigationModeFocusNext",
		when: "accessibilityModeEnabled && terminalFocus",
	},
	{
		key: "cmd+down",
		command: "workbench.action.terminal.navigationModeFocusNext",
		when: "accessibilityModeEnabled && terminalA11yTreeFocus",
	},
	{
		key: "cmd+up",
		command: "workbench.action.terminal.navigationModeFocusPrevious",
		when: "accessibilityModeEnabled && terminalFocus",
	},
	{
		key: "cmd+up",
		command: "workbench.action.terminal.navigationModeFocusPrevious",
		when: "accessibilityModeEnabled && terminalA11yTreeFocus",
	},
	{ key: "ctrl+shift+`", command: "workbench.action.terminal.new" },
	{
		key: "shift+cmd+c",
		command: "workbench.action.terminal.openNativeConsole",
		when: "!terminalFocus",
	},
	{
		key: "cmd+v",
		command: "workbench.action.terminal.paste",
		when: "terminalFocus",
	},
	{
		key: "ctrl+cmd+down",
		command: "workbench.action.terminal.resizePaneDown",
		when: "terminalFocus",
	},
	{
		key: "ctrl+cmd+left",
		command: "workbench.action.terminal.resizePaneLeft",
		when: "terminalFocus",
	},
	{
		key: "ctrl+cmd+right",
		command: "workbench.action.terminal.resizePaneRight",
		when: "terminalFocus",
	},
	{
		key: "ctrl+cmd+up",
		command: "workbench.action.terminal.resizePaneUp",
		when: "terminalFocus",
	},
	{
		key: "alt+cmd+pagedown",
		command: "workbench.action.terminal.scrollDown",
		when: "terminalFocus",
	},
	{
		key: "pagedown",
		command: "workbench.action.terminal.scrollDownPage",
		when: "terminalFocus",
	},
	{
		key: "cmd+end",
		command: "workbench.action.terminal.scrollToBottom",
		when: "terminalFocus",
	},
	{
		key: "cmd+down",
		command: "workbench.action.terminal.scrollToNextCommand",
		when: "terminalFocus && !accessibilityModeEnabled",
	},
	{
		key: "cmd+up",
		command: "workbench.action.terminal.scrollToPreviousCommand",
		when: "terminalFocus && !accessibilityModeEnabled",
	},
	{
		key: "cmd+home",
		command: "workbench.action.terminal.scrollToTop",
		when: "terminalFocus",
	},
	{
		key: "alt+cmd+pageup",
		command: "workbench.action.terminal.scrollUp",
		when: "terminalFocus",
	},
	{
		key: "pageup",
		command: "workbench.action.terminal.scrollUpPage",
		when: "terminalFocus",
	},
	{
		key: "cmd+a",
		command: "workbench.action.terminal.selectAll",
		when: "terminalFocus",
	},
	{
		key: "shift+cmd+down",
		command: "workbench.action.terminal.selectToNextCommand",
		when: "terminalFocus",
	},
	{
		key: "shift+cmd+up",
		command: "workbench.action.terminal.selectToPreviousCommand",
		when: "terminalFocus",
	},
	{
		key: "ctrl+shift+5",
		command: "workbench.action.terminal.split",
		when: "terminalFocus",
	},
	{
		key: "cmd+\\",
		command: "workbench.action.terminal.split",
		when: "terminalFocus",
	},
	{
		key: "alt+cmd+c",
		command: "workbench.action.terminal.toggleFindCaseSensitive",
		when: "terminalFindWidgetFocused",
	},
	{
		key: "alt+cmd+c",
		command: "workbench.action.terminal.toggleFindCaseSensitive",
		when: "terminalFocus",
	},
	{
		key: "alt+cmd+r",
		command: "workbench.action.terminal.toggleFindRegex",
		when: "terminalFindWidgetFocused",
	},
	{
		key: "alt+cmd+r",
		command: "workbench.action.terminal.toggleFindRegex",
		when: "terminalFocus",
	},
	{
		key: "alt+cmd+w",
		command: "workbench.action.terminal.toggleFindWholeWord",
		when: "terminalFindWidgetFocused",
	},
	{
		key: "alt+cmd+w",
		command: "workbench.action.terminal.toggleFindWholeWord",
		when: "terminalFocus",
	},
	{ key: "ctrl+`", command: "workbench.action.terminal.toggleTerminal" },
	{ key: "alt+cmd+0", command: "workbench.action.toggleEditorGroupLayout" },
	{ key: "ctrl+cmd+f", command: "workbench.action.toggleFullScreen" },
	{ key: "cmd+j", command: "workbench.action.togglePanel" },
	{ key: "cmd+b", command: "workbench.action.toggleSidebarVisibility" },
	{ key: "ctrl+cmd+w", command: "workbench.action.toggleTabsVisibility" },
	{ key: "cmd+k z", command: "workbench.action.toggleZenMode" },
	{ key: "cmd+numpad_add", command: "workbench.action.zoomIn" },
	{ key: "shift+cmd+=", command: "workbench.action.zoomIn" },
	{ key: "cmd+=", command: "workbench.action.zoomIn" },
	{ key: "cmd+numpad_subtract", command: "workbench.action.zoomOut" },
	{ key: "shift+cmd+-", command: "workbench.action.zoomOut" },
	{ key: "cmd+-", command: "workbench.action.zoomOut" },
	{ key: "cmd+numpad0", command: "workbench.action.zoomReset" },
	{ key: "shift+cmd+m", command: "workbench.actions.view.problems" },
	{ key: "shift+cmd+y", command: "workbench.debug.action.toggleRepl" },
	{
		key: "cmd+k cmd+m",
		command: "workbench.extensions.action.showRecommendedKeymapExtensions",
	},
	{ key: "cmd+k c", command: "workbench.files.action.compareWithClipboard" },
	{ key: "cmd+k d", command: "workbench.files.action.compareWithSaved" },
	{
		key: "cmd+k e",
		command: "workbench.files.action.focusOpenEditorsView",
		when: "workbench.explorer.openEditorsView.active",
	},
	{ key: "shift+cmd+d", command: "workbench.view.debug" },
	{ key: "shift+cmd+e", command: "workbench.view.explorer" },
	{ key: "shift+cmd+x", command: "workbench.view.extensions" },
	{ key: "ctrl+shift+g", command: "workbench.view.scm" },
	{
		key: "shift+cmd+f",
		command: "workbench.view.search",
		when: "!searchViewletVisible",
	},
	{
		key: "alt+right",
		command: "breadcrumbs.focusNextWithPicker",
		when:
			"breadcrumbsActive && breadcrumbsVisible && listFocus && !inputFocus",
	},
	{
		key: "alt+left",
		command: "breadcrumbs.focusPreviousWithPicker",
		when:
			"breadcrumbsActive && breadcrumbsVisible && listFocus && !inputFocus",
	},
	{
		key: "escape",
		command: "breadcrumbs.selectEditor",
		when: "breadcrumbsActive && breadcrumbsVisible",
	},
	{
		key: "cmd+k",
		command: "workbench.action.terminal.clear",
		when: "terminalFocus",
	},
	{
		key: "enter",
		command: "debug.renameWatchExpression",
		when: "watchExpressionsFocused",
	},
	{ key: "enter", command: "debug.setVariable", when: "variablesFocused" },
	{
		key: "space",
		command: "debug.toggleBreakpoint",
		when: "breakpointsFocused && !inputFocus",
	},
	{
		key: "alt+cmd+backspace",
		command: "deleteFile",
		when:
			"explorerViewletVisible && filesExplorerFocus && !explorerResourceReadonly && !inputFocus",
	},
	{
		key: "cmd+backspace",
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
		key: "cmd+c",
		command: "filesExplorer.copy",
		when:
			"explorerViewletVisible && filesExplorerFocus && !explorerResourceIsRoot && !inputFocus",
	},
	{
		key: "cmd+x",
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
		key: "cmd+v",
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
		key: "cmd+backspace",
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
		key: "cmd+backspace",
		command: "remote.tunnel.closeInline",
		when: "tunnelCloseable && tunnelViewFocus",
	},
	{
		key: "cmd+c",
		command: "remote.tunnel.copyAddressInline",
		when:
			"tunnelViewFocus && tunnelType == 'Detected' || tunnelViewFocus && tunnelType == 'Forwarded'",
	},
	{
		key: "enter",
		command: "remote.tunnel.label",
		when: "tunnelViewFocus && tunnelType == 'Forwarded'",
	},
	{
		key: "enter",
		command: "renameFile",
		when:
			"explorerViewletVisible && filesExplorerFocus && !explorerResourceIsRoot && !explorerResourceReadonly && !inputFocus",
	},
	{
		key: "f11",
		command: "workbench.action.debug.stepInto",
		when: "debugState != 'inactive'",
	},
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
	{
		key: "escape",
		command: "notifications.hideList",
		when: "notificationCenterVisible",
	},
	{
		key: "escape",
		command: "notifications.hideToasts",
		when: "notificationToastsVisible",
	},
	{
		key: "ctrl+-",
		command: "workbench.action.quickInputBack",
		when: "inQuickOpen",
	},
	{
		key: "ctrl+tab",
		command: "workbench.action.quickOpenNavigateNextInEditorPicker",
		when: "inEditorsPicker && inQuickOpen",
	},
	{
		key: "cmd+p",
		command: "workbench.action.quickOpenNavigateNextInFilePicker",
		when: "inFilesPicker && inQuickOpen",
	},
	{
		key: "ctrl+r",
		command: "workbench.action.quickOpenNavigateNextInRecentFilesPicker",
		when: "inQuickOpen && inRecentFilesPicker",
	},
	{
		key: "ctrl+q",
		command: "workbench.action.quickOpenNavigateNextInViewPicker",
		when: "inQuickOpen && inViewsPicker",
	},
	{
		key: "ctrl+shift+tab",
		command: "workbench.action.quickOpenNavigatePreviousInEditorPicker",
		when: "inEditorsPicker && inQuickOpen",
	},
	{
		key: "shift+cmd+p",
		command: "workbench.action.quickOpenNavigatePreviousInFilePicker",
		when: "inFilesPicker && inQuickOpen",
	},
	{
		key: "ctrl+shift+r",
		command:
			"workbench.action.quickOpenNavigatePreviousInRecentFilesPicker",
		when: "inQuickOpen && inRecentFilesPicker",
	},
	{
		key: "ctrl+shift+q",
		command: "workbench.action.quickOpenNavigatePreviousInViewPicker",
		when: "inQuickOpen && inViewsPicker",
	},
	{
		key: "ctrl+n",
		command: "workbench.action.quickOpenSelectNext",
		when: "inQuickOpen",
	},
	{
		key: "ctrl+p",
		command: "workbench.action.quickOpenSelectPrevious",
		when: "inQuickOpen",
	},
	{
		key: "cmd+r",
		command: "workbench.action.reloadWindow",
		when: "isDevelopment",
	},
	{
		key: "alt+cmd+i",
		command: "workbench.action.toggleDevTools",
		when: "isDevelopment",
	},
	{
		key: "cmd+f4",
		command: "extension.node-debug.pickLoadedScript",
		when: "debugType == 'node'",
	},
	{
		key: "cmd+f4",
		command: "extension.node-debug.pickLoadedScript",
		when: "debugType == 'node2'",
	},
	{
		key: "shift+cmd+v",
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
		key: "cmd+k v",
		command: "markdown.showPreviewToSide",
		when: "editorLangId == 'markdown'",
	},
	{
		key: "f4",
		command: "references-view.next",
		when: "reference-list.hasResult",
	},
	{
		key: "f11",
		command: "extension.node-debug.startWithStopOnEntry",
		when: "!inDebugMode && debugConfigurationType == 'node'",
	},
	{
		key: "shift+f4",
		command: "references-view.prev",
		when: "reference-list.hasResult",
	},
	{
		key: "shift+alt+h",
		command: "references-view.showCallHierarchy",
		when: "editorHasCallHierarchyProvider",
	},
	{ key: "alt+cmd+k", command: "bookmarks.toggle", when: "editorTextFocus" },
	{
		key: "shift+cmd+r",
		command: "extension.snippetSearch",
		when: "editorTextFocus",
	},
	{ key: "shift+alt+u", command: "extension.updateSettings" },
	{ key: "left", command: "gitlens.key.left", when: "gitlens:key:left" },
	{
		key: "cmd+b",
		command: "markdown.extension.editing.toggleBold",
		when:
			"editorTextFocus && !editorReadonly && editorLangId == 'markdown'",
	},
	{
		key: "cmd+k q",
		command: "quokka.makeQuokkaFromExistingFile",
		when: "!quokka.isLiveShareClient && !terminalFocus",
	},
	{
		key: "shift+alt+r",
		command: "remote-wsl.revealInExplorer",
		when: "editorFocus && isWindows && remoteName == 'wsl'",
	},
	{
		key: "ctrl+shift+p",
		command: "vscode-neovim.send",
		when: "editorTextFocus && neovim.mode == 'visual'",
	},
	{
		key: "alt+cmd+l",
		command: "bookmarks.jumpToNext",
		when: "editorTextFocus",
	},
	{ key: "shift+alt+d", command: "extension.downloadSettings" },
	{
		key: "alt+left",
		command: "gitlens.key.alt+left",
		when: "gitlens:key:alt+left",
	},
	{
		key: "cmd+i",
		command: "markdown.extension.editing.toggleItalic",
		when:
			"editorTextFocus && !editorReadonly && editorLangId == 'markdown'",
	},
	{
		key: "cmd+k j",
		command: "quokka.createJavaScriptFile",
		when: "!quokka.isLiveShareClient && !terminalFocus",
	},
	{
		key: "f1",
		command: "vscode-neovim.send",
		when: "editorTextFocus && neovim.mode == 'visual'",
	},
	{
		key: "alt+cmd+j",
		command: "bookmarks.jumpToPrevious",
		when: "editorTextFocus",
	},
	{
		key: "cmd+left",
		command: "gitlens.key.ctrl+left",
		when: "gitlens:key:ctrl+left",
	},
	{
		key: "ctrl+n",
		command: "list.focusDown",
		when: "listFocus && !inputFocus",
	},
	{
		key: "alt+s",
		command: "markdown.extension.editing.toggleStrikethrough",
		when:
			"editorTextFocus && !editorReadonly && !isMac && editorLangId == 'markdown'",
	},
	{
		key: "cmd+k t",
		command: "quokka.createTypeScriptFile",
		when: "!quokka.isLiveShareClient && !terminalFocus",
	},
	{
		key: "shift+alt+k",
		command: "bookmarks.shrinkSelection",
		when: "editorTextFocus",
	},
	{ key: "right", command: "gitlens.key.right", when: "gitlens:key:right" },
	{
		key: "ctrl+p",
		command: "list.focusUp",
		when: "listFocus && !inputFocus",
	},
	{
		key: "ctrl+shift+]",
		command: "markdown.extension.editing.toggleHeadingUp",
		when:
			"editorTextFocus && !editorReadonly && editorLangId == 'markdown'",
	},
	{
		key: "cmd+k l",
		command: "quokka.createFile",
		when: "!quokka.isLiveShareClient && !terminalFocus",
	},
	{
		key: "shift+alt+l",
		command: "bookmarks.expandSelectionToNext",
		when: "editorTextFocus",
	},
	{
		key: "alt+right",
		command: "gitlens.key.alt+right",
		when: "gitlens:key:alt+right",
	},
	{
		key: "ctrl+shift+[",
		command: "markdown.extension.editing.toggleHeadingDown",
		when:
			"editorTextFocus && !editorReadonly && editorLangId == 'markdown'",
	},
	{
		key: "cmd+k s",
		command: "quokka.stopCurrent",
		when:
			"quokka.hasActiveSession && !quokka.isLiveShareClient && !terminalFocus",
	},
	{
		key: "ctrl+n",
		command: "showNextParameterHint",
		when:
			"editorTextFocus && parameterHintsMultipleSignatures && parameterHintsVisible",
	},
	{
		key: "shift+alt+j",
		command: "bookmarks.expandSelectionToPrevious",
		when: "editorTextFocus",
	},
	{
		key: "cmd+right",
		command: "gitlens.key.ctrl+right",
		when: "gitlens:key:ctrl+right",
	},
	{
		key: "cmd+m",
		command: "markdown.extension.editing.toggleMath",
		when:
			"editorTextFocus && !editorReadonly && editorLangId == 'markdown'",
	},
	{
		key: "cmd+k l",
		command: "quokka.showOutput",
		when: "quokka.hasActiveSession && !terminalFocus",
	},
	{
		key: "ctrl+p",
		command: "showPrevParameterHint",
		when:
			"editorTextFocus && parameterHintsMultipleSignatures && parameterHintsVisible",
	},
	{ key: "alt+,", command: "gitlens.key.alt+,", when: "gitlens:key:," },
	{
		key: "enter",
		command: "markdown.extension.onEnterKey",
		when:
			"editorTextFocus && !editorReadonly && !suggestWidgetVisible && editorLangId == 'markdown' && vim.mode != 'CommandlineInProgress' && vim.mode != 'EasyMotionInputMode' && vim.mode != 'EasyMotionMode' && vim.mode != 'Normal' && vim.mode != 'Replace' && vim.mode != 'SearchInProgressMode' && vim.mode != 'SurroundInputMode' && vim.mode != 'Visual' && vim.mode != 'VisualBlock' && vim.mode != 'VisualLine'",
	},
	{
		key: "cmd+k v",
		command: "quokka.showValue",
		when:
			"quokka.hasActiveSession && !quokka.isLiveShareClient && !terminalFocus",
	},
	{
		key: "ctrl+n",
		command: "selectNextSuggestion",
		when:
			"suggestWidgetMultipleSuggestions && suggestWidgetVisible && textInputFocus",
	},
	{ key: "alt+.", command: "gitlens.key.alt+.", when: "gitlens:key:." },
	{
		key: "cmd+enter",
		command: "markdown.extension.onCtrlEnterKey",
		when:
			"editorTextFocus && !editorReadonly && !suggestWidgetVisible && editorLangId == 'markdown'",
	},
	{
		key: "cmd+k x",
		command: "quokka.copyValue",
		when:
			"quokka.hasActiveSession && !quokka.isLiveShareClient && !terminalFocus",
	},
	{
		key: "ctrl+p",
		command: "selectPrevSuggestion",
		when:
			"suggestWidgetMultipleSuggestions && suggestWidgetVisible && textInputFocus",
	},
	{
		key: "escape",
		command: "gitlens.key.escape",
		when:
			"editorTextFocus && gitlens:key:escape && !findWidgetVisible && !isInEmbeddedEditor && !renameInputVisible && !suggestWidgetVisible",
	},
	{
		key: "shift+enter",
		command: "markdown.extension.onShiftEnterKey",
		when:
			"editorTextFocus && !editorReadonly && !suggestWidgetVisible && editorLangId == 'markdown'",
	},
	{
		key: "cmd+k i",
		command: "quokka.installMissingPackageToQuokka",
		when:
			"quokka.hasActiveSession && !quokka.isLiveShareClient && !terminalFocus",
	},
	{
		key: "ctrl+n",
		command: "workbench.action.quickOpenSelectNext",
		when: "inQuickOpen",
	},
	{
		key: "alt+b",
		command: "gitlens.toggleFileBlame",
		when:
			"editorTextFocus && config.gitlens.keymap == 'alternate' && gitlens:activeFileStatus =~ /blameable/",
	},
	{
		key: "tab",
		command: "markdown.extension.onTabKey",
		when:
			"editorTextFocus && !editorReadonly && !editorTabMovesFocus && !hasOtherSuggestions && !hasSnippetCompletions && !inSnippetMode && !suggestWidgetVisible && editorLangId == 'markdown'",
	},
	{
		key: "ctrl+p",
		command: "workbench.action.quickOpenSelectPrevious",
		when: "inQuickOpen",
	},
	{
		key: "shift+alt+b",
		command: "gitlens.toggleCodeLens",
		when:
			"editorTextFocus && gitlens:canToggleCodeLens && gitlens:enabled && config.gitlens.keymap == 'alternate'",
	},
	{
		key: "shift+tab",
		command: "markdown.extension.onShiftTabKey",
		when:
			"editorTextFocus && !editorReadonly && !editorTabMovesFocus && !hasOtherSuggestions && !hasSnippetCompletions && !inSnippetMode && !suggestWidgetVisible && editorLangId == 'markdown'",
	},
	{
		key: "ctrl+c",
		command: "vscode-neovim.escape",
		when: "editorTextFocus && neovim.init",
	},
	{
		key: "alt+-",
		command: "gitlens.showLastQuickPick",
		when: "gitlens:enabled && config.gitlens.keymap == 'alternate'",
	},
	{
		key: "backspace",
		command: "markdown.extension.onBackspaceKey",
		when:
			"editorTextFocus && !editorReadonly && !suggestWidgetVisible && editorLangId == 'markdown' && vim.mode != 'CommandlineInProgress' && vim.mode != 'EasyMotionInputMode' && vim.mode != 'EasyMotionMode' && vim.mode != 'Normal' && vim.mode != 'Replace' && vim.mode != 'SearchInProgressMode' && vim.mode != 'SurroundInputMode' && vim.mode != 'Visual' && vim.mode != 'VisualBlock' && vim.mode != 'VisualLine'",
	},
	{
		key: "escape",
		command: "vscode-neovim.escape",
		when: "editorTextFocus && neovim.init",
	},
	{
		key: "alt+/",
		command: "gitlens.showCommitSearch",
		when: "gitlens:enabled && config.gitlens.keymap == 'alternate'",
	},
	{
		key: "alt+up",
		command: "markdown.extension.onMoveLineUp",
		when:
			"editorTextFocus && !editorReadonly && !suggestWidgetVisible && editorLangId == 'markdown'",
	},
	{
		key: "ctrl+[",
		command: "vscode-neovim.escape",
		when: "editorTextFocus && neovim.init",
	},
	{
		key: "alt+h",
		command: "gitlens.showQuickFileHistory",
		when: "gitlens:enabled && config.gitlens.keymap == 'alternate'",
	},
	{
		key: "alt+down",
		command: "markdown.extension.onMoveLineDown",
		when:
			"editorTextFocus && !editorReadonly && !suggestWidgetVisible && editorLangId == 'markdown'",
	},
	{
		key: "ctrl+g",
		command: "vscode-neovim.send",
		when:
			"neovim.mode == 'cmdline_insert' || neovim.mode == 'cmdline_normal' || neovim.mode == 'cmdline_replace'",
	},
	{
		key: "shift+alt+h",
		command: "gitlens.showQuickRepoHistory",
		when: "gitlens:enabled && config.gitlens.keymap == 'alternate'",
	},
	{
		key: "shift+alt+up",
		command: "markdown.extension.onCopyLineUp",
		when:
			"editorTextFocus && !editorReadonly && !suggestWidgetVisible && editorLangId == 'markdown'",
	},
	{
		key: "ctrl+t",
		command: "vscode-neovim.send",
		when:
			"neovim.mode == 'cmdline_insert' || neovim.mode == 'cmdline_normal' || neovim.mode == 'cmdline_replace'",
	},
	{
		key: "alt+s",
		command: "gitlens.showQuickRepoStatus",
		when: "gitlens:enabled && config.gitlens.keymap == 'alternate'",
	},
	{
		key: "shift+alt+down",
		command: "markdown.extension.onCopyLineDown",
		when:
			"editorTextFocus && !editorReadonly && !suggestWidgetVisible && editorLangId == 'markdown'",
	},
	{
		key: "ctrl+r",
		command: "vscode-neovim.send",
		when:
			"neovim.mode == 'cmdline_insert' || neovim.mode == 'cmdline_normal' || neovim.mode == 'cmdline_replace'",
	},
	{
		key: "alt+c",
		command: "gitlens.showQuickCommitFileDetails",
		when:
			"editorTextFocus && gitlens:enabled && config.gitlens.keymap == 'alternate'",
	},
	{
		key: "cmd+]",
		command: "markdown.extension.onIndentLines",
		when:
			"editorTextFocus && !suggestWidgetVisible && editorLangId == 'markdown'",
	},
	{
		key: "ctrl+l",
		command: "vscode-neovim.send",
		when:
			"neovim.mode == 'cmdline_insert' || neovim.mode == 'cmdline_normal' || neovim.mode == 'cmdline_replace'",
	},
	{
		key: "alt+.",
		command: "gitlens.diffWithNext",
		when:
			"editorTextFocus && !isInDiffEditor && config.gitlens.keymap == 'alternate' && gitlens:activeFileStatus =~ /revision/ && gitlens:activeFileStatus =~ /revision/",
	},
	{
		key: "cmd+[",
		command: "markdown.extension.onOutdentLines",
		when:
			"editorTextFocus && !suggestWidgetVisible && editorLangId == 'markdown'",
	},
	{
		key: "up",
		command: "vscode-neovim.history-up-cmdline",
		when: "neovim.mode == 'cmdline_normal'",
	},
	{
		key: "alt+.",
		command: "gitlens.diffWithNext",
		when:
			"editorTextFocus && isInDiffRightEditor && config.gitlens.keymap == 'alternate' && gitlens:activeFileStatus =~ /revision/ && gitlens:activeFileStatus =~ /revision/",
	},
	{
		key: "alt+c",
		command: "markdown.extension.checkTaskList",
		when: "editorTextFocus && editorLangId == 'markdown'",
	},
	{
		key: "down",
		command: "vscode-neovim.history-down-cmdline",
		when: "neovim.mode == 'cmdline_normal'",
	},
	{
		key: "alt+.",
		command: "gitlens.diffWithNextInDiffLeft",
		when:
			"editorTextFocus && isInDiffLeftEditor && config.gitlens.keymap == 'alternate' && gitlens:activeFileStatus =~ /revision/ && gitlens:activeFileStatus =~ /revision/",
	},
	{
		key: "shift+cmd+v",
		command: "markdown.extension.togglePreview",
		when: "!terminalFocus",
	},
	{
		key: "ctrl+w",
		command: "vscode-neovim.delete-word-left-cmdline",
		when: "neovim.mode == 'cmdline_normal'",
	},
	{
		key: "alt+,",
		command: "gitlens.diffWithPrevious",
		when:
			"editorTextFocus && !isInDiffEditor && config.gitlens.keymap == 'alternate' && gitlens:activeFileStatus =~ /tracked/",
	},
	{
		key: "cmd+k v",
		command: "markdown.extension.togglePreviewToSide",
		when: "!terminalFocus",
	},
	{
		key: "ctrl+u",
		command: "vscode-neovim.delete-all-cmdline",
		when: "neovim.mode == 'cmdline_normal'",
	},
	{
		key: "alt+,",
		command: "gitlens.diffWithPrevious",
		when:
			"editorTextFocus && isInDiffLeftEditor && config.gitlens.keymap == 'alternate' && gitlens:activeFileStatus =~ /tracked/",
	},
	{
		key: "cmd+v",
		command: "markdown.extension.editing.paste",
		when:
			"editorHasSelection && editorTextFocus && editorLangId == 'markdown'",
	},
	{
		key: "ctrl+h",
		command: "vscode-neovim.delete-char-left-cmdline",
		when: "neovim.mode == 'cmdline_normal'",
	},
	{
		key: "alt+,",
		command: "gitlens.diffWithPreviousInDiffRight",
		when:
			"editorTextFocus && isInDiffRightEditor && config.gitlens.keymap == 'alternate' && gitlens:activeFileStatus =~ /tracked/",
	},
	{
		key: "tab",
		command: "vscode-neovim.complete-selection-cmdline",
		when: "neovim.mode == 'cmdline_normal'",
	},
	{
		key: "shift+alt+,",
		command: "gitlens.diffLineWithPrevious",
		when:
			"editorTextFocus && config.gitlens.keymap == 'alternate' && gitlens:activeFileStatus =~ /tracked/",
	},
	{
		key: "ctrl+n",
		command: "workbench.action.quickOpenSelectNext",
		when: "neovim.mode == 'cmdline_normal'",
	},
	{
		key: "shift+alt+.",
		command: "gitlens.diffWithWorking",
		when:
			"editorTextFocus && config.gitlens.keymap == 'alternate' && gitlens:activeFileStatus =~ /revision/",
	},
	{
		key: "ctrl+p",
		command: "workbench.action.quickOpenSelectPrevious",
		when: "neovim.mode == 'cmdline_normal'",
	},
	{
		key: "alt+w",
		command: "gitlens.diffLineWithWorking",
		when:
			"editorTextFocus && config.gitlens.keymap == 'alternate' && gitlens:activeFileStatus =~ /tracked/",
	},
	{
		key: "backspace",
		command: "vscode-neovim.send",
		when:
			"neovim.recording || editorTextFocus && neovim.init && neovim.mode != 'insert'",
	},
	{
		key: "alt+cmd+g b",
		command: "gitlens.toggleFileBlame",
		when:
			"editorTextFocus && config.gitlens.keymap == 'chorded' && gitlens:activeFileStatus =~ /blameable/",
	},
	{
		key: "shift+backspace",
		command: "vscode-neovim.send",
		when:
			"neovim.recording || editorTextFocus && neovim.init && neovim.mode != 'insert'",
	},
	{
		key: "alt+cmd+g shift+b",
		command: "gitlens.toggleCodeLens",
		when:
			"editorTextFocus && gitlens:canToggleCodeLens && gitlens:enabled && config.gitlens.keymap == 'chorded'",
	},
	{
		key: "ctrl+backspace",
		command: "vscode-neovim.send",
		when:
			"neovim.recording || editorTextFocus && neovim.init && neovim.mode != 'insert'",
	},
	{
		key: "alt+cmd+g -",
		command: "gitlens.showLastQuickPick",
		when: "gitlens:enabled && config.gitlens.keymap == 'chorded'",
	},
	{
		key: "delete",
		command: "vscode-neovim.send",
		when:
			"neovim.recording || editorTextFocus && neovim.init && neovim.mode != 'insert'",
	},
	{
		key: "alt+cmd+g /",
		command: "gitlens.showCommitSearch",
		when: "gitlens:enabled && config.gitlens.keymap == 'chorded'",
	},
	{
		key: "shift+delete",
		command: "vscode-neovim.send",
		when:
			"neovim.recording || editorTextFocus && neovim.init && neovim.mode != 'insert'",
	},
	{
		key: "alt+cmd+g h",
		command: "gitlens.showQuickFileHistory",
		when: "gitlens:enabled && config.gitlens.keymap == 'chorded'",
	},
	{
		key: "ctrl+delete",
		command: "vscode-neovim.send",
		when:
			"neovim.recording || editorTextFocus && neovim.init && neovim.mode != 'insert'",
	},
	{
		key: "alt+cmd+g shift+h",
		command: "gitlens.showQuickRepoHistory",
		when: "gitlens:enabled && config.gitlens.keymap == 'chorded'",
	},
	{
		key: "tab",
		command: "vscode-neovim.send",
		when:
			"editorTextFocus && neovim.init && neovim.mode != 'cmdline_normal' && neovim.mode != 'insert'",
	},
	{
		key: "alt+cmd+g s",
		command: "gitlens.showQuickRepoStatus",
		when: "gitlens:enabled && config.gitlens.keymap == 'chorded'",
	},
	{
		key: "shift+tab",
		command: "vscode-neovim.send",
		when:
			"editorTextFocus && neovim.init && neovim.mode != 'cmdline_normal' && neovim.mode != 'insert'",
	},
	{
		key: "alt+cmd+g c",
		command: "gitlens.showQuickCommitFileDetails",
		when:
			"editorTextFocus && gitlens:enabled && config.gitlens.keymap == 'chorded'",
	},
	{
		key: "down",
		command: "vscode-neovim.send",
		when:
			"neovim.recording || editorTextFocus && neovim.init && neovim.mode != 'insert'",
	},
	{
		key: "alt+cmd+g .",
		command: "gitlens.diffWithNext",
		when:
			"editorTextFocus && !isInDiffEditor && config.gitlens.keymap == 'chorded' && gitlens:activeFileStatus =~ /revision/ && gitlens:activeFileStatus =~ /revision/",
	},
	{
		key: "up",
		command: "vscode-neovim.send",
		when:
			"neovim.recording || editorTextFocus && neovim.init && neovim.mode != 'insert'",
	},
	{
		key: "alt+cmd+g .",
		command: "gitlens.diffWithNext",
		when:
			"editorTextFocus && isInDiffRightEditor && config.gitlens.keymap == 'chorded' && gitlens:activeFileStatus =~ /revision/ && gitlens:activeFileStatus =~ /revision/",
	},
	{
		key: "left",
		command: "vscode-neovim.send",
		when:
			"neovim.recording || editorTextFocus && neovim.init && neovim.mode != 'insert'",
	},
	{
		key: "alt+cmd+g .",
		command: "gitlens.diffWithNextInDiffLeft",
		when:
			"editorTextFocus && isInDiffLeftEditor && config.gitlens.keymap == 'chorded' && gitlens:activeFileStatus =~ /revision/ && gitlens:activeFileStatus =~ /revision/",
	},
	{
		key: "right",
		command: "vscode-neovim.send",
		when:
			"neovim.recording || editorTextFocus && neovim.init && neovim.mode != 'insert'",
	},
	{
		key: "alt+cmd+g ,",
		command: "gitlens.diffWithPrevious",
		when:
			"editorTextFocus && !isInDiffEditor && config.gitlens.keymap == 'chorded' && gitlens:activeFileStatus =~ /tracked/",
	},
	{
		key: "ctrl+right",
		command: "vscode-neovim.send",
		when:
			"neovim.recording || editorTextFocus && neovim.init && neovim.mode != 'insert'",
	},
	{
		key: "alt+cmd+g ,",
		command: "gitlens.diffWithPrevious",
		when:
			"editorTextFocus && isInDiffLeftEditor && config.gitlens.keymap == 'chorded' && gitlens:activeFileStatus =~ /tracked/",
	},
	{
		key: "ctrl+left",
		command: "vscode-neovim.send",
		when:
			"neovim.recording || editorTextFocus && neovim.init && neovim.mode != 'insert'",
	},
	{
		key: "alt+cmd+g ,",
		command: "gitlens.diffWithPreviousInDiffRight",
		when:
			"editorTextFocus && isInDiffRightEditor && config.gitlens.keymap == 'chorded' && gitlens:activeFileStatus =~ /tracked/",
	},
	{
		key: "ctrl+a",
		command: "vscode-neovim.send",
		when:
			"editorTextFocus && neovim.ctrlKeysNormal && neovim.init && neovim.mode != 'insert'",
	},
	{
		key: "alt+cmd+g shift+,",
		command: "gitlens.diffLineWithPrevious",
		when:
			"editorTextFocus && config.gitlens.keymap == 'chorded' && gitlens:activeFileStatus =~ /tracked/",
	},
	{
		key: "ctrl+b",
		command: "vscode-neovim.ctrl-b",
		when:
			"editorTextFocus && neovim.ctrlKeysNormal && neovim.init && neovim.mode != 'insert'",
	},
	{
		key: "alt+cmd+g shift+.",
		command: "gitlens.diffWithWorking",
		when:
			"editorTextFocus && config.gitlens.keymap == 'chorded' && gitlens:activeFileStatus =~ /revision/",
	},
	{
		key: "ctrl+d",
		command: "vscode-neovim.ctrl-d",
		when:
			"editorTextFocus && neovim.ctrlKeysNormal && neovim.init && neovim.mode != 'insert'",
	},
	{
		key: "alt+cmd+g w",
		command: "gitlens.diffLineWithWorking",
		when:
			"editorTextFocus && config.gitlens.keymap == 'chorded' && gitlens:activeFileStatus =~ /tracked/",
	},
	{
		key: "ctrl+e",
		command: "vscode-neovim.ctrl-e",
		when:
			"editorTextFocus && neovim.ctrlKeysNormal && neovim.init && neovim.mode != 'insert'",
	},
	{
		key: "ctrl+f",
		command: "vscode-neovim.ctrl-f",
		when:
			"editorTextFocus && neovim.ctrlKeysNormal && neovim.init && neovim.mode != 'insert'",
	},
	{
		key: "ctrl+shift+g",
		command: "workbench.view.scm",
		when: "gitlens:enabled && config.gitlens.keymap == 'chorded'",
	},
	{
		key: "cmd+c",
		command: "gitlens.views.repositories.copy",
		when:
			"gitlens:enabled && focusedView =~ /^gitlens\\.views\\.repositories/",
	},
	{
		key: "ctrl+i",
		command: "vscode-neovim.send",
		when:
			"editorTextFocus && neovim.ctrlKeysNormal && neovim.init && neovim.mode != 'insert'",
	},
	{
		key: "cmd+c",
		command: "gitlens.views.fileHistory.copy",
		when:
			"gitlens:enabled && focusedView =~ /^gitlens\\.views\\.fileHistory/",
	},
	{
		key: "ctrl+o",
		command: "vscode-neovim.send",
		when:
			"editorTextFocus && neovim.ctrlKeysNormal && neovim.init && neovim.mode != 'insert'",
	},
	{
		key: "cmd+c",
		command: "gitlens.views.lineHistory.copy",
		when:
			"gitlens:enabled && focusedView =~ /^gitlens\\.views\\.lineHistory/",
	},
	{
		key: "ctrl+r",
		command: "vscode-neovim.send",
		when:
			"editorTextFocus && neovim.ctrlKeysNormal && neovim.init && neovim.mode != 'insert'",
	},
	{
		key: "cmd+c",
		command: "gitlens.views.compare.copy",
		when: "gitlens:enabled && focusedView =~ /^gitlens\\.views\\.compare/",
	},
	{
		key: "ctrl+u",
		command: "vscode-neovim.ctrl-u",
		when:
			"editorTextFocus && neovim.ctrlKeysNormal && neovim.init && neovim.mode != 'insert'",
	},
	{
		key: "cmd+c",
		command: "gitlens.views.search.copy",
		when: "gitlens:enabled && focusedView =~ /^gitlens\\.views\\.search/",
	},
	{
		key: "ctrl+v",
		command: "vscode-neovim.send",
		when:
			"editorTextFocus && neovim.ctrlKeysNormal && neovim.init && neovim.mode != 'insert'",
	},
	{
		key: "ctrl+w",
		command: "vscode-neovim.send",
		when:
			"editorTextFocus && neovim.ctrlKeysNormal && neovim.init && neovim.mode != 'insert'",
	},
	{
		key: "ctrl+x",
		command: "vscode-neovim.send",
		when:
			"editorTextFocus && neovim.ctrlKeysNormal && neovim.init && neovim.mode != 'insert'",
	},
	{
		key: "ctrl+y",
		command: "vscode-neovim.ctrl-y",
		when:
			"editorTextFocus && neovim.ctrlKeysNormal && neovim.init && neovim.mode != 'insert'",
	},
	{
		key: "ctrl+z",
		command: "vscode-neovim.send",
		when:
			"editorTextFocus && neovim.ctrlKeysNormal && neovim.init && neovim.mode != 'insert'",
	},
	{
		key: "ctrl+]",
		command: "vscode-neovim.send",
		when:
			"editorTextFocus && neovim.ctrlKeysNormal && neovim.init && neovim.mode != 'insert'",
	},
	{
		key: "ctrl+j",
		command: "vscode-neovim.send",
		when:
			"editorTextFocus && neovim.ctrlKeysNormal && neovim.init && neovim.mode != 'insert'",
	},
	{
		key: "ctrl+k",
		command: "vscode-neovim.send",
		when:
			"editorTextFocus && neovim.ctrlKeysNormal && neovim.init && neovim.mode != 'insert'",
	},
	{
		key: "ctrl+l",
		command: "vscode-neovim.send",
		when:
			"editorTextFocus && neovim.ctrlKeysNormal && neovim.init && neovim.mode != 'insert'",
	},
	{
		key: "ctrl+h",
		command: "vscode-neovim.send",
		when:
			"editorTextFocus && neovim.ctrlKeysNormal && neovim.init && neovim.mode != 'insert'",
	},
	{
		key: "ctrl+/",
		command: "vscode-neovim.send",
		when:
			"editorTextFocus && neovim.ctrlKeysNormal && neovim.init && neovim.mode != 'insert'",
	},
	{
		key: "ctrl+u",
		command: "deleteAllLeft",
		when:
			"editorTextFocus && neovim.ctrlKeysInsert && !neovim.recording && neovim.mode == 'insert'",
	},
	{
		key: "ctrl+u",
		command: "vscode-neovim.send",
		when:
			"editorTextFocus && neovim.ctrlKeysInsert && neovim.recording && neovim.mode == 'insert'",
	},
	{
		key: "ctrl+w",
		command: "deleteWordLeft",
		when:
			"editorTextFocus && neovim.ctrlKeysInsert && !neovim.recording && neovim.mode == 'insert'",
	},
	{
		key: "ctrl+w",
		command: "vscode-neovim.send",
		when:
			"editorTextFocus && neovim.ctrlKeysInsert && neovim.recording && neovim.mode == 'insert'",
	},
	{
		key: "ctrl+h",
		command: "deleteLeft",
		when:
			"editorTextFocus && neovim.ctrlKeysInsert && !neovim.recording && neovim.mode == 'insert'",
	},
	{
		key: "ctrl+h",
		command: "vscode-neovim.send",
		when:
			"editorTextFocus && neovim.ctrlKeysInsert && neovim.recording && neovim.mode == 'insert'",
	},
	{
		key: "ctrl+t",
		command: "editor.action.indentLines",
		when:
			"editorTextFocus && neovim.ctrlKeysInsert && !neovim.recording && neovim.mode == 'insert'",
	},
	{
		key: "ctrl+t",
		command: "vscode-neovim.send",
		when:
			"editorTextFocus && neovim.ctrlKeysInsert && neovim.recording && neovim.mode == 'insert'",
	},
	{
		key: "ctrl+d",
		command: "editor.action.outdentLines",
		when:
			"editorTextFocus && neovim.ctrlKeysInsert && !neovim.recording && neovim.mode == 'insert'",
	},
	{
		key: "ctrl+d",
		command: "vscode-neovim.send",
		when:
			"editorTextFocus && neovim.ctrlKeysInsert && neovim.recording && neovim.mode == 'insert'",
	},
	{
		key: "ctrl+j",
		command: "editor.action.insertLineAfter",
		when:
			"editorTextFocus && neovim.ctrlKeysInsert && !neovim.recording && neovim.mode == 'insert'",
	},
	{
		key: "ctrl+j",
		command: "vscode-neovim.send",
		when:
			"editorTextFocus && neovim.ctrlKeysInsert && neovim.recording && neovim.mode == 'insert'",
	},
	{
		key: "ctrl+a",
		command: "vscode-neovim.ctrl-a-insert",
		when:
			"editorTextFocus && neovim.ctrlKeysInsert && !neovim.recording && neovim.mode == 'insert'",
	},
	{
		key: "ctrl+a",
		command: "vscode-neovim.send",
		when:
			"editorTextFocus && neovim.ctrlKeysInsert && neovim.recording && neovim.mode == 'insert'",
	},
	{
		key: "ctrl+r",
		command: "vscode-neovim.send",
		when:
			"editorTextFocus && neovim.ctrlKeysInsert && neovim.recording && neovim.mode == 'insert'",
	},
	{
		key: "ctrl+r 0",
		command: "vscode-neovim.paste-register",
		when:
			"editorTextFocus && neovim.ctrlKeysInsert && !neovim.recording && neovim.mode == 'insert'",
	},
	{
		key: "ctrl+r 1",
		command: "vscode-neovim.paste-register",
		when:
			"editorTextFocus && neovim.ctrlKeysInsert && !neovim.recording && neovim.mode == 'insert'",
	},
	{
		key: "ctrl+r 2",
		command: "vscode-neovim.paste-register",
		when:
			"editorTextFocus && neovim.ctrlKeysInsert && !neovim.recording && neovim.mode == 'insert'",
	},
	{
		key: "ctrl+r 3",
		command: "vscode-neovim.paste-register",
		when:
			"editorTextFocus && neovim.ctrlKeysInsert && !neovim.recording && neovim.mode == 'insert'",
	},
	{
		key: "ctrl+r 4",
		command: "vscode-neovim.paste-register",
		when:
			"editorTextFocus && neovim.ctrlKeysInsert && !neovim.recording && neovim.mode == 'insert'",
	},
	{
		key: "ctrl+r 5",
		command: "vscode-neovim.paste-register",
		when:
			"editorTextFocus && neovim.ctrlKeysInsert && !neovim.recording && neovim.mode == 'insert'",
	},
	{
		key: "ctrl+r 6",
		command: "vscode-neovim.paste-register",
		when:
			"editorTextFocus && neovim.ctrlKeysInsert && !neovim.recording && neovim.mode == 'insert'",
	},
	{
		key: "ctrl+r 7",
		command: "vscode-neovim.paste-register",
		when:
			"editorTextFocus && neovim.ctrlKeysInsert && !neovim.recording && neovim.mode == 'insert'",
	},
	{
		key: "ctrl+r 8",
		command: "vscode-neovim.paste-register",
		when:
			"editorTextFocus && neovim.ctrlKeysInsert && !neovim.recording && neovim.mode == 'insert'",
	},
	{
		key: "ctrl+r 9",
		command: "vscode-neovim.paste-register",
		when:
			"editorTextFocus && neovim.ctrlKeysInsert && !neovim.recording && neovim.mode == 'insert'",
	},
	{
		key: "ctrl+r shift+'",
		command: "vscode-neovim.paste-register",
		when:
			"editorTextFocus && neovim.ctrlKeysInsert && !neovim.recording && neovim.mode == 'insert'",
	},
	{
		key: "ctrl+r shift+5",
		command: "vscode-neovim.paste-register",
		when:
			"editorTextFocus && neovim.ctrlKeysInsert && !neovim.recording && neovim.mode == 'insert'",
	},
	{
		key: "ctrl+r shift+3",
		command: "vscode-neovim.paste-register",
		when:
			"editorTextFocus && neovim.ctrlKeysInsert && !neovim.recording && neovim.mode == 'insert'",
	},
	{
		key: "ctrl+r shift+8",
		command: "vscode-neovim.paste-register",
		when:
			"editorTextFocus && neovim.ctrlKeysInsert && !neovim.recording && neovim.mode == 'insert'",
	},
	{
		key: "ctrl+r shift+=",
		command: "vscode-neovim.paste-register",
		when:
			"editorTextFocus && neovim.ctrlKeysInsert && !neovim.recording && neovim.mode == 'insert'",
	},
	{
		key: "ctrl+r shift+;",
		command: "vscode-neovim.paste-register",
		when:
			"editorTextFocus && neovim.ctrlKeysInsert && !neovim.recording && neovim.mode == 'insert'",
	},
	{
		key: "ctrl+r .",
		command: "vscode-neovim.paste-register",
		when:
			"editorTextFocus && neovim.ctrlKeysInsert && !neovim.recording && neovim.mode == 'insert'",
	},
	{
		key: "ctrl+r -",
		command: "vscode-neovim.paste-register",
		when:
			"editorTextFocus && neovim.ctrlKeysInsert && !neovim.recording && neovim.mode == 'insert'",
	},
	{
		key: "ctrl+r =",
		command: "vscode-neovim.paste-register",
		when:
			"editorTextFocus && neovim.ctrlKeysInsert && !neovim.recording && neovim.mode == 'insert'",
	},
	{
		key: "ctrl+r b",
		command: "vscode-neovim.paste-register",
		when:
			"editorTextFocus && neovim.ctrlKeysInsert && !neovim.recording && neovim.mode == 'insert'",
	},
	{
		key: "ctrl+r c",
		command: "vscode-neovim.paste-register",
		when:
			"editorTextFocus && neovim.ctrlKeysInsert && !neovim.recording && neovim.mode == 'insert'",
	},
	{
		key: "ctrl+r d",
		command: "vscode-neovim.paste-register",
		when:
			"editorTextFocus && neovim.ctrlKeysInsert && !neovim.recording && neovim.mode == 'insert'",
	},
	{
		key: "ctrl+r e",
		command: "vscode-neovim.paste-register",
		when:
			"editorTextFocus && neovim.ctrlKeysInsert && !neovim.recording && neovim.mode == 'insert'",
	},
	{
		key: "ctrl+r f",
		command: "vscode-neovim.paste-register",
		when:
			"editorTextFocus && neovim.ctrlKeysInsert && !neovim.recording && neovim.mode == 'insert'",
	},
	{
		key: "ctrl+r g",
		command: "vscode-neovim.paste-register",
		when:
			"editorTextFocus && neovim.ctrlKeysInsert && !neovim.recording && neovim.mode == 'insert'",
	},
	{
		key: "ctrl+r h",
		command: "vscode-neovim.paste-register",
		when:
			"editorTextFocus && neovim.ctrlKeysInsert && !neovim.recording && neovim.mode == 'insert'",
	},
	{
		key: "ctrl+r i",
		command: "vscode-neovim.paste-register",
		when:
			"editorTextFocus && neovim.ctrlKeysInsert && !neovim.recording && neovim.mode == 'insert'",
	},
	{
		key: "ctrl+r j",
		command: "vscode-neovim.paste-register",
		when:
			"editorTextFocus && neovim.ctrlKeysInsert && !neovim.recording && neovim.mode == 'insert'",
	},
	{
		key: "ctrl+r k",
		command: "vscode-neovim.paste-register",
		when:
			"& !neovim.recording & neovim.ctrlKeysInsert && editorTextFocus && neovim.mode == 'insert'",
	},
	{
		key: "ctrl+r l",
		command: "vscode-neovim.paste-register",
		when:
			"editorTextFocus && neovim.ctrlKeysInsert && !neovim.recording && neovim.mode == 'insert'",
	},
	{
		key: "ctrl+r m",
		command: "vscode-neovim.paste-register",
		when:
			"editorTextFocus && neovim.ctrlKeysInsert && !neovim.recording && neovim.mode == 'insert'",
	},
	{
		key: "ctrl+r n",
		command: "vscode-neovim.paste-register",
		when:
			"editorTextFocus && neovim.ctrlKeysInsert && !neovim.recording && neovim.mode == 'insert'",
	},
	{
		key: "ctrl+r o",
		command: "vscode-neovim.paste-register",
		when:
			"editorTextFocus && neovim.ctrlKeysInsert && !neovim.recording && neovim.mode == 'insert'",
	},
	{
		key: "ctrl+r p",
		command: "vscode-neovim.paste-register",
		when:
			"editorTextFocus && neovim.ctrlKeysInsert && !neovim.recording && neovim.mode == 'insert'",
	},
	{
		key: "ctrl+r q",
		command: "vscode-neovim.paste-register",
		when:
			"editorTextFocus && neovim.ctrlKeysInsert && !neovim.recording && neovim.mode == 'insert'",
	},
	{
		key: "ctrl+r r",
		command: "vscode-neovim.paste-register",
		when:
			"editorTextFocus && neovim.ctrlKeysInsert && !neovim.recording && neovim.mode == 'insert'",
	},
	{
		key: "ctrl+r s",
		command: "vscode-neovim.paste-register",
		when:
			"editorTextFocus && neovim.ctrlKeysInsert && !neovim.recording && neovim.mode == 'insert'",
	},
	{
		key: "ctrl+r t",
		command: "vscode-neovim.paste-register",
		when:
			"editorTextFocus && neovim.ctrlKeysInsert && !neovim.recording && neovim.mode == 'insert'",
	},
	{
		key: "ctrl+r u",
		command: "vscode-neovim.paste-register",
		when:
			"editorTextFocus && neovim.ctrlKeysInsert && !neovim.recording && neovim.mode == 'insert'",
	},
	{
		key: "ctrl+r v",
		command: "vscode-neovim.paste-register",
		when:
			"editorTextFocus && neovim.ctrlKeysInsert && !neovim.recording && neovim.mode == 'insert'",
	},
	{
		key: "ctrl+r w",
		command: "vscode-neovim.paste-register",
		when:
			"editorTextFocus && neovim.ctrlKeysInsert && !neovim.recording && neovim.mode == 'insert'",
	},
	{
		key: "ctrl+r x",
		command: "vscode-neovim.paste-register",
		when:
			"editorTextFocus && neovim.ctrlKeysInsert && !neovim.recording && neovim.mode == 'insert'",
	},
	{
		key: "ctrl+r y",
		command: "vscode-neovim.paste-register",
		when:
			"editorTextFocus && neovim.ctrlKeysInsert && !neovim.recording && neovim.mode == 'insert'",
	},
	{
		key: "ctrl+r z",
		command: "vscode-neovim.paste-register",
		when:
			"editorTextFocus && neovim.ctrlKeysInsert && !neovim.recording && neovim.mode == 'insert'",
	},
];

// Here are other available commands:
// - 84256
// - acceptSelectedSuggestionOnEnter
// - acceptSnippet
// - addRootFolder
// - base16.generator.activateTheme
// - base16.generator.deactivateTheme
// - bookmarks.clear
// - bookmarks.clearFromAllFiles
// - bookmarks.clearFromFile
// - bookmarks.deleteBookmark
// - bookmarks.editLabel
// - bookmarks.expandAll
// - bookmarks.jumpTo
// - bookmarks.list
// - bookmarks.listFromAllFiles
// - bookmarks.refresh
// - bookmarks.selectLines
// - bookmarks.toggleLabeled
// - bookmarks.whatsNew
// - bookmarksExplorer.focus
// - bookmarksExplorer.moveView
// - breadcrumbs.toggle
// - changeEditorIndentation
// - closeReferenceSearchEditor
// - columnSelect
// - commitViewProvider.focus
// - commitViewProvider.moveView
// - compareCommitViewProvider.focus
// - compareCommitViewProvider.moveView
// - compareFiles
// - compareSelected
// - compositionEnd
// - compositionStart
// - createCursor
// - cursorRedo
// - cursorWordAccessibilityLeft
// - cursorWordAccessibilityLeftSelect
// - cursorWordAccessibilityRight
// - cursorWordAccessibilityRightSelect
// - cursorWordEndLeft
// - cursorWordEndLeftSelect
// - cursorWordLeft
// - cursorWordLeftSelect
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
// - deleteWordEndLeft
// - deleteWordEndRight
// - deleteWordStartLeft
// - deleteWordStartRight
// - editor.action.addCursorsToBottom
// - editor.action.addCursorsToTop
// - editor.action.addSelectionToPreviousFindMatch
// - editor.action.clearoutput
// - editor.action.clipboardCopyWithSyntaxHighlightingAction
// - editor.action.customEditor.toggle
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
// - eslint.createConfig
// - eslint.disable
// - eslint.enable
// - eslint.executeAutofix
// - eslint.migrateSettings
// - eslint.showOutputChannel
// - explorer.download
// - explorer.newFile
// - explorer.newFolder
// - extension.HowSettings
// - extension.multiCommand.execute
// - extension.node-debug.attachNodeProcess
// - extension.node-debug.toggleAutoAttach
// - extension.node-debug.toggleSkippingFile
// - extension.node-debug2.toggleSkippingFile
// - extension.open
// - extension.otherOptions
// - extension.resetSettings
// - extensions.builtInBasicsExtensionsList.focus
// - extensions.builtInBasicsExtensionsList.moveView
// - extensions.builtInExtensionsList.focus
// - extensions.builtInExtensionsList.moveView
// - extensions.builtInThemesExtensionsList.focus
// - extensions.builtInThemesExtensionsList.moveView
// - extensions.disabledExtensionList.focus
// - extensions.disabledExtensionList.moveView
// - extensions.disabledExtensionList2.focus
// - extensions.disabledExtensionList2.moveView
// - extensions.enabledExtensionList.focus
// - extensions.enabledExtensionList.moveView
// - extensions.enabledExtensionList2.focus
// - extensions.enabledExtensionList2.moveView
// - extensions.listView.focus
// - extensions.listView.moveView
// - extensions.otherrecommendedList.focus
// - extensions.otherrecommendedList.moveView
// - extensions.popularExtensionsList.focus
// - extensions.popularExtensionsList.moveView
// - extensions.recommendedList.focus
// - extensions.recommendedList.moveView
// - extensions.vscode-local.default.focus
// - extensions.vscode-local.default.moveView
// - extensions.vscode-local.installed.focus
// - extensions.vscode-local.installed.moveView
// - extensions.vscode-local.outdated.focus
// - extensions.vscode-local.outdated.moveView
// - extensions.workspaceRecommendedList.focus
// - extensions.workspaceRecommendedList.moveView
// - filesExplorer.findInWorkspace
// - gene.clearSearch
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
// - git.commit.FileEntry.CompareAgainstPrevious
// - git.commit.FileEntry.CompareAgainstWorkspace
// - git.commit.FileEntry.ViewFileContents
// - git.commit.FileEntry.compare
// - git.commit.FileEntry.selectForComparison
// - git.commit.ViewChangeLog
// - git.commit.cherryPick
// - git.commit.compare
// - git.commit.compare.file.compare
// - git.commit.compare.selectForComparison
// - git.commit.compare.view.hide
// - git.commit.compare.view.show
// - git.commit.compare.view.showFilesOnly
// - git.commit.compare.view.showFolderView
// - git.commit.createBranch
// - git.commit.merge
// - git.commit.rebase
// - git.commit.view.hide
// - git.commit.view.show
// - git.commit.view.showFilesOnly
// - git.commit.view.showFolderView
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
// - git.openDiff
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
// - git.setLogLevel
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
// - git.viewFileHistory
// - git.viewHistory
// - git.viewLineHistory
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
// - gitlens.views.compare:explorer.moveView
// - gitlens.views.compare:gitlens.focus
// - gitlens.views.compare:gitlens.moveView
// - gitlens.views.compare:scm.focus
// - gitlens.views.compare:scm.moveView
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
// - gitlens.views.fileHistory:explorer.moveView
// - gitlens.views.fileHistory:gitlens.focus
// - gitlens.views.fileHistory:gitlens.moveView
// - gitlens.views.fileHistory:scm.focus
// - gitlens.views.fileHistory:scm.moveView
// - gitlens.views.highlightChanges
// - gitlens.views.highlightRevisionChanges
// - gitlens.views.lineHistory.changeBase
// - gitlens.views.lineHistory.refresh
// - gitlens.views.lineHistory.setEditorFollowingOff
// - gitlens.views.lineHistory.setEditorFollowingOn
// - gitlens.views.lineHistory.setRenameFollowingOff
// - gitlens.views.lineHistory.setRenameFollowingOn
// - gitlens.views.lineHistory:explorer.focus
// - gitlens.views.lineHistory:explorer.moveView
// - gitlens.views.lineHistory:gitlens.focus
// - gitlens.views.lineHistory:gitlens.moveView
// - gitlens.views.lineHistory:scm.focus
// - gitlens.views.lineHistory:scm.moveView
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
// - gitlens.views.repositories:explorer.moveView
// - gitlens.views.repositories:gitlens.focus
// - gitlens.views.repositories:gitlens.moveView
// - gitlens.views.repositories:scm.focus
// - gitlens.views.repositories:scm.moveView
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
// - gitlens.views.search:explorer.moveView
// - gitlens.views.search:gitlens.focus
// - gitlens.views.search:gitlens.moveView
// - gitlens.views.search:scm.focus
// - gitlens.views.search:scm.moveView
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
// - goToNextReferenceFromEmbeddedEditor
// - goToPreviousReferenceFromEmbeddedEditor
// - imagePreview.zoomIn
// - imagePreview.zoomOut
// - javascript.goToProjectConfig
// - javascript.reloadProjects
// - keybindings.editor.copyCommandKeybindingEntry
// - keybindings.editor.resetKeybinding
// - keybindings.editor.showConflicts
// - keybindings.editor.showDefaultKeybindings
// - keybindings.editor.showUserKeybindings
// - lastCursorLineSelect
// - lastCursorLineSelectDrag
// - lastCursorWordSelect
// - layoutEditorGroups
// - list.focusFirstChild
// - list.focusLastChild
// - list.focusParent
// - list.scrollRight
// - list.toggleFilterOnType
// - list.toggleKeyboardNavigation
// - markdown.api.render
// - markdown.extension.editing.toggleCodeBlock
// - markdown.extension.editing.toggleCodeSpan
// - markdown.extension.editing.toggleList
// - markdown.extension.editing.toggleMathReverse
// - markdown.extension.printToHtml
// - markdown.extension.toc.create
// - markdown.extension.toc.update
// - markdown.preview.refresh
// - markdown.preview.toggleLock
// - markdown.showLockedPreviewToSide
// - markdown.showPreviewSecuritySelector
// - markdown.showSource
// - material-icon-theme.activateIcons
// - material-icon-theme.changeFolderColor
// - material-icon-theme.changeFolderTheme
// - material-icon-theme.changeOpacity
// - material-icon-theme.changeSaturation
// - material-icon-theme.restoreDefaultConfig
// - material-icon-theme.toggleExplorerArrows
// - material-icon-theme.toggleGrayscale
// - material-icon-theme.toggleIconPacks
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
// - npm.moveView
// - npm.openScript
// - npm.refresh
// - npm.runInstall
// - npm.runScript
// - npm.runScriptFromFolder
// - npm.runScriptFromHover
// - npm.runSelectedScript
// - openInTerminal
// - openReference
// - outline.focus
// - outline.moveView
// - paste
// - perfview.show
// - php.untrustValidationExecutable
// - polacode.activate
// - prettier.createConfigFile
// - prettier.openOutput
// - problems.action.copyMessage
// - problems.action.copyRelatedInformationMessage
// - problems.action.showMultilineMessage
// - problems.action.showSinglelineMessage
// - quokka.addImport
// - quokka.addRequire
// - quokka.copyExpressionData
// - quokka.copyExpressionPath
// - quokka.goToLineInQuokkaFile
// - quokka.installMissingPackageToProject
// - quokka.installQuokkaPlugin
// - quokka.runOnSave
// - quokka.runOnce
// - quokka.selectWorkspaceFolder
// - quokka.showInstrumentedFile
// - quokka.showLicense
// - quokka.stopAll
// - quokka.switchToCommunity
// - quokka.switchToPro
// - quokka.toggle
// - quokkaValueExplorer.focus
// - quokkaValueExplorer.moveView
// - reOpenWith
// - reactNative.publishToExpHost
// - reactNative.reloadApp
// - reactNative.restartPackager
// - reactNative.runAndroidDevice
// - reactNative.runAndroidSimulator
// - reactNative.runExponent
// - reactNative.runInspector
// - reactNative.runIosDevice
// - reactNative.runIosSimulator
// - reactNative.showDevMenu
// - reactNative.startPackager
// - reactNative.stopPackager
// - refactorPreview.discard
// - refactorPreview.focus
// - refactorPreview.groupByFile
// - refactorPreview.groupByType
// - refactorPreview.moveView
// - refactorPreview.toggleGrouping
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
// - references-view.tree.moveView
// - remote-wsl.addDistro
// - remote-wsl.attachToWsl
// - remote-wsl.explorerTargetsRefresh
// - remote-wsl.getHelp
// - remote-wsl.getStarted
// - remote-wsl.newWindow
// - remote-wsl.newWindowForDistro
// - remote-wsl.openFolderInWsl
// - remote-wsl.provideFeedback
// - remote-wsl.removeRecentFolder
// - remote-wsl.reopenInWSL
// - remote-wsl.reopenInWindows
// - remote-wsl.reportIssue
// - remote-wsl.setDefaultDistro
// - remote-wsl.showLog
// - remote.tunnel.changeLocalPort
// - remote.tunnel.closeCommandPalette
// - remote.tunnel.copyAddressCommandPalette
// - remote.tunnel.forwardCommandPalette
// - remote.tunnel.forwardInline
// - remote.tunnel.open
// - remote.tunnel.refresh
// - removeRootFolder
// - repl.action.copyAll
// - replacePreviousChar
// - revealInExplorer
// - saveAll
// - search.action.clearHistory
// - search.action.clearSearchResults
// - search.action.collapseSearchResults
// - search.action.copyAll
// - search.action.expandSearchResults
// - search.action.focusSearchList
// - search.action.openNewEditor
// - search.action.refreshSearchResults
// - search.action.revealInSideBar
// - searchEditor.rerunSerach
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
// - targetsWsl.focus
// - targetsWsl.moveView
// - toggle.diff.ignoreTrimWhitespace
// - toggle.diff.renderSideBySide
// - toggleEscapeSequenceLogging
// - type
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
// - vetur.generateGrammar
// - vetur.openUserScaffoldSnippetFolder
// - vetur.showCorrespondingVirtualFile
// - vscode-neovim.compositeEscape1
// - vscode-neovim.compositeEscape2
// - vscode-neovim.shift-l
// - vscode-neovim.shift-m
// - vscode-neovim:shift-h
// - wakatime.apikey
// - wakatime.config_file
// - wakatime.dashboard
// - wakatime.debug
// - wakatime.log_file
// - wakatime.proxy
// - wakatime.status_bar_coding_activity
// - wakatime.status_bar_enabled
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
// - workbench.action.installCommandLine
// - workbench.action.joinAllGroups
// - workbench.action.joinTwoGroups
// - workbench.action.logStorage
// - workbench.action.logWorkingCopies
// - workbench.action.manageTrustedDomain
// - workbench.action.maximizeEditor
// - workbench.action.mergeAllWindowTabs
// - workbench.action.minimizeOtherEditors
// - workbench.action.moveEditorToAboveGroup
// - workbench.action.moveEditorToBelowGroup
// - workbench.action.moveEditorToLeftGroup
// - workbench.action.moveEditorToRightGroup
// - workbench.action.moveWindowTabToNewWindow
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
// - workbench.action.newWindowTab
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
// - workbench.action.openNewsletterSignupUrl
// - workbench.action.openNextRecentlyUsedEditor
// - workbench.action.openNextRecentlyUsedEditorInGroup
// - workbench.action.openPreviousEditorFromHistory
// - workbench.action.openPreviousRecentlyUsedEditor
// - workbench.action.openPreviousRecentlyUsedEditorInGroup
// - workbench.action.openPrivacyStatementUrl
// - workbench.action.openProcessExplorer
// - workbench.action.openRawDefaultSettings
// - workbench.action.openRemoteSettings
// - workbench.action.openRequestFeatureUrl
// - workbench.action.openSettings2
// - workbench.action.openSettingsJson
// - workbench.action.openSnippets
// - workbench.action.openTipsAndTricksUrl
// - workbench.action.openTwitterUrl
// - workbench.action.openView
// - workbench.action.openWorkspace
// - workbench.action.openWorkspaceConfigFile
// - workbench.action.openWorkspaceInNewWindow
// - workbench.action.openWorkspaceSettings
// - workbench.action.positionPanelBottom
// - workbench.action.positionPanelLeft
// - workbench.action.positionPanelRight
// - workbench.action.previousPanelView
// - workbench.action.previousSideBarView
// - workbench.action.problems.focus
// - workbench.action.quickOpenLeastRecentlyUsedEditor
// - workbench.action.quickOpenNavigateNext
// - workbench.action.quickOpenNavigateNextInTerminalPicker
// - workbench.action.quickOpenNavigatePrevious
// - workbench.action.quickOpenNavigatePreviousInTerminalPicker
// - workbench.action.quickOpenPreviousEditor
// - workbench.action.quickOpenPreviousRecentlyUsedEditor
// - workbench.action.quickOpenRecent
// - workbench.action.quickOpenTerm
// - workbench.action.quickPickManyToggle
// - workbench.action.quickSwitchWindow
// - workbench.action.reloadWindowWithExtensionsDisabled
// - workbench.action.remote.showMenu
// - workbench.action.removeFromEditorHistory
// - workbench.action.removeRootFolder
// - workbench.action.reportPerformanceIssueUsingReporter
// - workbench.action.restartExtensionHost
// - workbench.action.revealPathInFinder1
// - workbench.action.revealPathInFinder2
// - workbench.action.revealPathInFinder3
// - workbench.action.revealPathInFinder4
// - workbench.action.revealPathInFinder5
// - workbench.action.revealPathInFinder6
// - workbench.action.revertAndCloseActiveEditor
// - workbench.action.saveWorkspaceAs
// - workbench.action.selectIconTheme
// - workbench.action.setLogLevel
// - workbench.action.showAboutDialog
// - workbench.action.showAllEditorsByMostRecentlyUsed
// - workbench.action.showEditorsInActiveGroup
// - workbench.action.showEditorsInGroup
// - workbench.action.showEmmetCommands
// - workbench.action.showErrorsWarnings
// - workbench.action.showInteractivePlayground
// - workbench.action.showInterfaceOverview
// - workbench.action.showLogs
// - workbench.action.showNextWindowTab
// - workbench.action.showPreviousWindowTab
// - workbench.action.showRuntimeExtensions
// - workbench.action.showWelcomePage
// - workbench.action.splitEditorDown
// - workbench.action.splitEditorLeft
// - workbench.action.splitEditorRight
// - workbench.action.splitEditorUp
// - workbench.action.tasks.configureDefaultBuildTask
// - workbench.action.tasks.configureDefaultTestTask
// - workbench.action.tasks.configureTaskRunner
// - workbench.action.tasks.manageAutomaticRunning
// - workbench.action.tasks.openUserTasks
// - workbench.action.tasks.openWorkspaceFileTasks
// - workbench.action.tasks.reRunTask
// - workbench.action.tasks.restartTask
// - workbench.action.tasks.runTask
// - workbench.action.tasks.showLog
// - workbench.action.tasks.showTasks
// - workbench.action.tasks.terminate
// - workbench.action.tasks.test
// - workbench.action.tasks.toggleProblems
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
// - workbench.action.terminal.newInActiveWorkspace
// - workbench.action.terminal.rename
// - workbench.action.terminal.runActiveFile
// - workbench.action.terminal.runSelectedText
// - workbench.action.terminal.selectDefaultShell
// - workbench.action.terminal.selectToNextLine
// - workbench.action.terminal.selectToPreviousLine
// - workbench.action.terminal.splitInActiveWorkspace
// - workbench.action.toggleActivityBarVisibility
// - workbench.action.toggleAutoSave
// - workbench.action.toggleCenteredLayout
// - workbench.action.toggleEditorVisibility
// - workbench.action.toggleEditorWidths
// - workbench.action.toggleMaximizedPanel
// - workbench.action.toggleMultiCursorModifier
// - workbench.action.toggleScreencastMode
// - workbench.action.toggleSearchOnType
// - workbench.action.toggleSharedProcess
// - workbench.action.toggleSidebarPosition
// - workbench.action.toggleStatusbarVisibility
// - workbench.action.toggleWindowTabsBar
// - workbench.action.uninstallCommandLine
// - workbench.action.url.openUrl
// - workbench.action.webview.openDeveloperTools
// - workbench.action.webview.reloadWebviewAction
// - workbench.actions.view.toggleProblems
// - workbench.debug.action.focusBreakpointsView
// - workbench.debug.action.focusCallStackView
// - workbench.debug.action.focusRepl
// - workbench.debug.action.focusVariablesView
// - workbench.debug.action.focusWatchView
// - workbench.debug.breakPointsView.moveView
// - workbench.debug.callStackView.moveView
// - workbench.debug.loadedScriptsView.focus
// - workbench.debug.loadedScriptsView.moveView
// - workbench.debug.panel.action.clearReplAction
// - workbench.debug.startView.focus
// - workbench.debug.startView.moveView
// - workbench.debug.variablesView.moveView
// - workbench.debug.viewlet.action.addFunctionBreakpointAction
// - workbench.debug.viewlet.action.disableAllBreakpoints
// - workbench.debug.viewlet.action.enableAllBreakpoints
// - workbench.debug.viewlet.action.reapplyBreakpointsAction
// - workbench.debug.viewlet.action.removeAllBreakpoints
// - workbench.debug.watchExpressionsView.moveView
// - workbench.explorer.fileView.focus
// - workbench.explorer.fileView.moveView
// - workbench.explorer.openEditorsView.moveView
// - workbench.extensions.action.addToWorkspaceFolderIgnoredRecommendations
// - workbench.extensions.action.addToWorkspaceFolderRecommendations
// - workbench.extensions.action.addToWorkspaceIgnoredRecommendations
// - workbench.extensions.action.addToWorkspaceRecommendations
// - workbench.extensions.action.checkForUpdates
// - workbench.extensions.action.configure
// - workbench.extensions.action.configureWorkspaceFolderRecommendedExtensions
// - workbench.extensions.action.configureWorkspaceRecommendedExtensions
// - workbench.extensions.action.copyExtension
// - workbench.extensions.action.copyExtensionId
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
// - workbench.panel.markers.view.focus
// - workbench.panel.markers.view.moveView
// - workbench.panel.repl.view.focus
// - workbench.panel.repl.view.moveView
// - workbench.view.extension.bookmarks
// - workbench.view.extension.gitlens
// - workbench.view.extension.references-view
// - workbench.view.extension.test
// - workbench.view.extension.wallaby
// - workbench.view.remote
// - workbench.view.search.focus
// - workbench.view.search.moveView
