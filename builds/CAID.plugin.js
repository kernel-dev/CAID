/**
 * @name CAID
 * @author Kernel
 * @version 1.0.0-alpha
 * @description Client-side avatar injection (from URL) for BetterDiscord.
 */
/*@cc_on
@if (@_jscript)
    
    // Offer to self-install for clueless users that try to run this directly.
    var shell = WScript.CreateObject("WScript.Shell");
    var fs = new ActiveXObject("Scripting.FileSystemObject");
    var pathPlugins = shell.ExpandEnvironmentStrings("%APPDATA%\BetterDiscord\plugins");
    var pathSelf = WScript.ScriptFullName;
    // Put the user at ease by addressing them in the first person
    shell.Popup("It looks like you've mistakenly tried to run me directly. \n(Don't do that!)", 0, "I'm a plugin for BetterDiscord", 0x30);
    if (fs.GetParentFolderName(pathSelf) === fs.GetAbsolutePathName(pathPlugins)) {
        shell.Popup("I'm in the correct folder already.", 0, "I'm already installed", 0x40);
    } else if (!fs.FolderExists(pathPlugins)) {
        shell.Popup("I can't find the BetterDiscord plugins folder.\nAre you sure it's even installed?", 0, "Can't install myself", 0x10);
    } else if (shell.Popup("Should I copy myself to BetterDiscord's plugins folder for you?", 0, "Do you need some help?", 0x34) === 6) {
        fs.CopyFile(pathSelf, fs.BuildPath(pathPlugins, fs.GetFileName(pathSelf)), true);
        // Show the user where to put plugins in the future
        shell.Exec("explorer " + pathPlugins);
        shell.Popup("I'm installed!", 0, "Successfully installed", 0x40);
    }
    WScript.Quit();
@else@*/
/* Generated Code */
const config = {
	"dependencies": {
		"@types/node": "^17.0.40",
		"@types/react": "^18.0.12"
	},
	"info": {
		"name": "CAID",
		"authors": [{
			"name": "Kernel",
			"discord_id": "575108662457139201",
			"github_username": "kernel-dev",
			"twitter_username": "eboy_sleepy"
		}],
		"version": "1.0.0-alpha",
		"description": "Client-side avatar injection (from URL) for BetterDiscord."
	},
	"changelog": [{
		"title": "Fixed",
		"type": "fixed",
		"items": [
			"Initial release!"
		]
	}],
	"build": {
		"zlibrary": true,
		"copy": true,
		"production": false,
		"scssHash": false,
		"alias": {
			"components": "components/Modal.tsx"
		}
	}
};
function buildPlugin([BasePlugin, PluginApi]) {
	const module = {
		exports: {}
	};
	/*! For license information please see index.js.LICENSE.txt */
	(() => {
		class StyleLoader {
			static styles = "";
			static element = null;
			static append(module, css) {
				this.styles += `/* ${module} */\n${css}`;
			}
			static inject(name = config.info.name) {
				if (this.element) this.element.remove();
				this.element = document.head.appendChild(Object.assign(document.createElement("style"), {
					id: name,
					textContent: this.styles
				}));
			}
			static remove() {
				if (this.element) {
					this.element.remove();
					this.element = null;
				}
			}
		}
		function ___createMemoize___(instance, name, value) {
			value = value();
			Object.defineProperty(instance, name, {
				value,
				configurable: true
			});
			return value;
		};
		const Modules = {
			get 'react-spring'() {
				return ___createMemoize___(this, 'react-spring', () => BdApi.findModuleByProps('useSpring'))
			},
			'@discord/utils': {
				get 'joinClassNames'() {
					return ___createMemoize___(this, 'joinClassNames', () => BdApi.findModule(e => e.toString().indexOf('return e.join(" ")') > 200))
				},
				get 'useForceUpdate'() {
					return ___createMemoize___(this, 'useForceUpdate', () => BdApi.findModuleByProps('useForceUpdate')?.useForceUpdate)
				},
				get 'Logger'() {
					return ___createMemoize___(this, 'Logger', () => BdApi.findModuleByProps('setLogFn')?.default)
				},
				get 'Navigation'() {
					return ___createMemoize___(this, 'Navigation', () => BdApi.findModuleByProps('replaceWith', 'currentRouteIsPeekView'))
				}
			},
			'@discord/components': {
				get 'Tooltip'() {
					return ___createMemoize___(this, 'Tooltip', () => BdApi.findModuleByDisplayName('Tooltip'))
				},
				get 'TooltipContainer'() {
					return ___createMemoize___(this, 'TooltipContainer', () => BdApi.findModuleByProps('TooltipContainer')?.TooltipContainer)
				},
				get 'TextInput'() {
					return ___createMemoize___(this, 'TextInput', () => BdApi.findModuleByDisplayName('TextInput'))
				},
				get 'SlideIn'() {
					return ___createMemoize___(this, 'SlideIn', () => BdApi.findModuleByDisplayName('SlideIn'))
				},
				get 'SettingsNotice'() {
					return ___createMemoize___(this, 'SettingsNotice', () => BdApi.findModuleByDisplayName('SettingsNotice'))
				},
				get 'TransitionGroup'() {
					return ___createMemoize___(this, 'TransitionGroup', () => BdApi.findModuleByDisplayName('TransitionGroup'))
				},
				get 'Button'() {
					return ___createMemoize___(this, 'Button', () => BdApi.findModule(m => 'DropdownSizes' in m && typeof(m) === 'function'))
				},
				get 'Popout'() {
					return ___createMemoize___(this, 'Popout', () => BdApi.findModuleByDisplayName('Popout'))
				},
				get 'Flex'() {
					return ___createMemoize___(this, 'Flex', () => BdApi.findModuleByDisplayName('Flex'))
				},
				get 'Text'() {
					return ___createMemoize___(this, 'Text', () => BdApi.findModuleByDisplayName('Text'))
				},
				get 'Card'() {
					return ___createMemoize___(this, 'Card', () => BdApi.findModuleByDisplayName('Card'))
				}
			},
			'@discord/modules': {
				get 'Dispatcher'() {
					return ___createMemoize___(this, 'Dispatcher', () => BdApi.findModuleByProps('dirtyDispatch', 'subscribe'))
				},
				get 'ComponentDispatcher'() {
					return ___createMemoize___(this, 'ComponentDispatcher', () => BdApi.findModuleByProps('ComponentDispatch')?.ComponentDispatch)
				},
				get 'EmojiUtils'() {
					return ___createMemoize___(this, 'EmojiUtils', () => BdApi.findModuleByProps('uploadEmoji'))
				},
				get 'PermissionUtils'() {
					return ___createMemoize___(this, 'PermissionUtils', () => BdApi.findModuleByProps('computePermissions', 'canManageUser'))
				},
				get 'DMUtils'() {
					return ___createMemoize___(this, 'DMUtils', () => BdApi.findModuleByProps('openPrivateChannel'))
				}
			},
			'@discord/stores': {
				get 'Messages'() {
					return ___createMemoize___(this, 'Messages', () => BdApi.findModuleByProps('getMessage', 'getMessages'))
				},
				get 'Channels'() {
					return ___createMemoize___(this, 'Channels', () => BdApi.findModuleByProps('getChannel', 'getDMFromUserId'))
				},
				get 'Guilds'() {
					return ___createMemoize___(this, 'Guilds', () => BdApi.findModuleByProps('getGuild'))
				},
				get 'SelectedGuilds'() {
					return ___createMemoize___(this, 'SelectedGuilds', () => BdApi.findModuleByProps('getGuildId', 'getLastSelectedGuildId'))
				},
				get 'SelectedChannels'() {
					return ___createMemoize___(this, 'SelectedChannels', () => BdApi.findModuleByProps('getChannelId', 'getLastSelectedChannelId'))
				},
				get 'Info'() {
					return ___createMemoize___(this, 'Info', () => BdApi.findModuleByProps('getSessionId'))
				},
				get 'Status'() {
					return ___createMemoize___(this, 'Status', () => BdApi.findModuleByProps('getStatus', 'getActivities', 'getState'))
				},
				get 'Users'() {
					return ___createMemoize___(this, 'Users', () => BdApi.findModuleByProps('getUser', 'getCurrentUser'))
				},
				get 'SettingsStore'() {
					return ___createMemoize___(this, 'SettingsStore', () => BdApi.findModuleByProps('afkTimeout', 'status'))
				},
				get 'UserProfile'() {
					return ___createMemoize___(this, 'UserProfile', () => BdApi.findModuleByProps('getUserProfile'))
				},
				get 'Members'() {
					return ___createMemoize___(this, 'Members', () => BdApi.findModuleByProps('getMember'))
				},
				get 'Activities'() {
					return ___createMemoize___(this, 'Activities', () => BdApi.findModuleByProps('getActivities'))
				},
				get 'Games'() {
					return ___createMemoize___(this, 'Games', () => BdApi.findModuleByProps('getGame', 'games'))
				},
				get 'Auth'() {
					return ___createMemoize___(this, 'Auth', () => BdApi.findModuleByProps('getId', 'isGuest'))
				},
				get 'TypingUsers'() {
					return ___createMemoize___(this, 'TypingUsers', () => BdApi.findModuleByProps('isTyping'))
				}
			},
			'@discord/actions': {
				get 'ProfileActions'() {
					return ___createMemoize___(this, 'ProfileActions', () => BdApi.findModuleByProps('fetchProfile'))
				},
				get 'GuildActions'() {
					return ___createMemoize___(this, 'GuildActions', () => BdApi.findModuleByProps('requestMembersById'))
				}
			},
			get '@discord/i18n'() {
				return ___createMemoize___(this, '@discord/i18n', () => BdApi.findModule(m => m.Messages?.CLOSE && typeof(m.getLocale) === 'function'))
			},
			get '@discord/constants'() {
				return ___createMemoize___(this, '@discord/constants', () => BdApi.findModuleByProps('API_HOST'))
			},
			get '@discord/contextmenu'() {
				return ___createMemoize___(this, '@discord/contextmenu', () => {
					const ctx = Object.assign({}, BdApi.findModuleByProps('openContextMenu'), BdApi.findModuleByProps('MenuItem'));
					ctx.Menu = ctx.default;
					return ctx;
				})
			},
			get '@discord/forms'() {
				return ___createMemoize___(this, '@discord/forms', () => BdApi.findModuleByProps('FormItem'))
			},
			get '@discord/scrollbars'() {
				return ___createMemoize___(this, '@discord/scrollbars', () => BdApi.findModuleByProps('ScrollerAuto'))
			},
			get '@discord/native'() {
				return ___createMemoize___(this, '@discord/native', () => BdApi.findModuleByProps('requireModule'))
			},
			get '@discord/flux'() {
				return ___createMemoize___(this, '@discord/flux', () => Object.assign({}, BdApi.findModuleByProps('useStateFromStores').default, BdApi.findModuleByProps('useStateFromStores')))
			},
			get '@discord/modal'() {
				return ___createMemoize___(this, '@discord/modal', () => Object.assign({}, BdApi.findModuleByProps('ModalRoot'), BdApi.findModuleByProps('openModal', 'closeAllModals')))
			},
			get '@discord/connections'() {
				return ___createMemoize___(this, '@discord/connections', () => BdApi.findModuleByProps('get', 'isSupported', 'map'))
			},
			get '@discord/sanitize'() {
				return ___createMemoize___(this, '@discord/sanitize', () => BdApi.findModuleByProps('stringify', 'parse', 'encode'))
			},
			get '@discord/icons'() {
				return ___createMemoize___(this, '@discord/icons', () => BdApi.findAllModules(m => m.displayName && ~m.toString().indexOf('currentColor')).reduce((icons, icon) => (icons[icon.displayName] = icon, icons), {}))
			},
			'@discord/classes': {
				get 'Timestamp'() {
					return ___createMemoize___(this, 'Timestamp', () => BdApi.findModuleByPrototypes('toDate', 'month'))
				},
				get 'Message'() {
					return ___createMemoize___(this, 'Message', () => BdApi.findModuleByPrototypes('getReaction', 'isSystemDM'))
				},
				get 'User'() {
					return ___createMemoize___(this, 'User', () => BdApi.findModuleByPrototypes('tag'))
				},
				get 'Channel'() {
					return ___createMemoize___(this, 'Channel', () => BdApi.findModuleByPrototypes('isOwner', 'isCategory'))
				}
			}
		};
		var __webpack_modules__ = {
			"./plugins/CAID/main.scss": (module, __webpack_exports__, __webpack_require__) => {
				"use strict";
				eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _usr_local_lib_node_modules_betterdiscordbuilder_bdbuilder_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../usr/local/lib/node_modules/@betterdiscordbuilder/bdbuilder/node_modules/css-loader/dist/runtime/api.js */ "../../../../usr/local/lib/node_modules/@betterdiscordbuilder/bdbuilder/node_modules/css-loader/dist/runtime/api.js");\n/* harmony import */ var _usr_local_lib_node_modules_betterdiscordbuilder_bdbuilder_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_usr_local_lib_node_modules_betterdiscordbuilder_bdbuilder_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _usr_local_lib_node_modules_betterdiscordbuilder_bdbuilder_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, ".CAID-main-AvatarImg {\\n  width: 40%;\\n  height: 40%;\\n  object-fit: cover;\\n  display: block;\\n  margin-left: auto;\\n  margin-right: auto;\\n}\\n\\n.CAID-main-successAvatarImg {\\n  display: block;\\n  line-height: normal;\\n}\\n\\nimg[class*=avatar-][class*=clickable-] {\\n  width: 40px;\\n  height: 40px;\\n  object-fit: cover;\\n}\\n\\na[class*=reset-avatar] {\\n  margin-top: 5px !important;\\n  display: inline-block !important;\\n  text-decoration: none !important;\\n}\\n\\na[class*=reset-avatar]::after {\\n  background: none repeat scroll 0 0 transparent !important;\\n  bottom: 0 !important;\\n  content: \\"\\" !important;\\n  width: 0px !important;\\n  height: 1px !important;\\n  left: 25% !important;\\n  display: block !important;\\n  background: #00aff4 !important;\\n  text-decoration: underline !important;\\n  transition: width 0.3s ease 0s, left 0.3s ease 0s !important;\\n  width: 0 !important;\\n}\\n\\na[class*=reset-avatar]:hover::after {\\n  width: 100% !important;\\n  left: 0 !important;\\n}", ""]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t"AvatarImg": "CAID-main-AvatarImg",\n\t"successAvatarImg": "CAID-main-successAvatarImg"\n};\nStyleLoader.append(module.id, ___CSS_LOADER_EXPORT___.toString())\n;\n\t/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Object.assign(___CSS_LOADER_EXPORT___, ___CSS_LOADER_EXPORT___.locals));\n\n\n//# sourceURL=webpack://LibraryPluginHack/./plugins/CAID/main.scss?');
			},
			"./plugins/CAID/Settings.ts": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
				"use strict";
				eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "Settings": () => (/* binding */ Settings)\n/* harmony export */ });\n/* harmony import */ var _discord_stores__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @discord/stores */ "@discord/stores");\n/* harmony import */ var _discord_stores__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_discord_stores__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var betterdiscord_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! betterdiscord/api */ "betterdiscord/api");\n/* harmony import */ var betterdiscord_api__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(betterdiscord_api__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! path */ "path");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! fs */ "fs");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_3__);\n function _optionalChain(ops) { let lastAccessLHS = undefined; let value = ops[0]; let i = 1; while (i < ops.length) { const op = ops[i]; const fn = ops[i + 1]; i += 2; if ((op === \'optionalAccess\' || op === \'optionalCall\') && value == null) { return undefined; } if (op === \'access\' || op === \'optionalAccess\') { lastAccessLHS = value; value = fn(value); } else if (op === \'call\' || op === \'optionalCall\') { value = fn((...args) => value.call(lastAccessLHS, ...args)); lastAccessLHS = undefined; } } return value; }\n\n\n\n\nclass Settings {\n    \n    \n     constructor() { \n        this.settings = {};\n\t\tthis.set();\n\t\tthis.load();\n    }\n\n     alter(\n\t\tproperty, \n\t\tvalue = null, \n\t\tsubValue = null\n\t) {\n        if (value == null)\n            return;\n\n        if (!this.isPresent(property, subValue))    \n            subValue != null\n                ? this.settings[property][subValue] = value\n                : this.settings[property] = value\n    }\n\n     get(\n\t\tproperty, \n\t\tsubValue = null\n\t) {\n        try {\n            return (\n                subValue != null\n                    ? this.settings[property][subValue]\n                    : this.settings[property]\n            )\n        } catch (e2) { return null; }\n    }\n\n\t/**\n\t * Returns an error, or nothing if it successfully updated.\n\t */\n\t writeImageUrl(\n\t\tid,\n\t\timageUrl,\n\t\tdeleteEntry = false\n\t) {\n\t\tif (!id) return new Error("\'id\' value not provided!");\n\n\t\ttry {\n\t\t\tif (!Object.keys(this.get("guilds")).length)\n\t\t\t\tthis.alter(\n\t\t\t\t\t"guilds",\n\t\t\t\t\t{}\n\t\t\t\t);\n\n\t\t\tif ((this.get("guilds")[id] && deleteEntry) || imageUrl == null) {\n\t\t\t\tdelete this.get("guilds")[id];\n\n\t\t\t\tthis.alter("guilds", (this.get("guilds") || {}) );\n\n\t\t\t\treturn (0,fs__WEBPACK_IMPORTED_MODULE_3__.writeFileSync)(this.get("path"), JSON.stringify(this.settings, null, 2));\n\t\t\t}\n\n\t\t\tObject.keys(this.get("guilds") || {}).length\n\t\t\t\t? this.alter("guilds", imageUrl, id)\n\t\t\t\t: this.alter("guilds", { [id]: imageUrl })\n\n\t\t\t;(0,fs__WEBPACK_IMPORTED_MODULE_3__.writeFileSync)(this.get("path"), JSON.stringify(this.settings, null, 2));\n\t\t} catch (e) { return e; }\n\t}\n\n\t writeDisableConfig(\n\t\ttype,\n\t\tdisabled\n\t) {\n\t\tif (\n\t\t\t!type ||\n\t\t\ttypeof type != "string" ||\n\t\t\t!["guild", "dm"].some((t) => type.toLowerCase() == t)\n\t\t)\n\t\t\treturn console.error(\n\t\t\t\t"[CAID_CONFIG]: Invalid value for \'disabled\'! Must be \'guild\' or \'dm\'!"\n\t\t\t);\n\t\t\n\t\tthis.alter(`${type}Disabled`, disabled);\n\n\t\t(0,fs__WEBPACK_IMPORTED_MODULE_3__.writeFileSync)(this.get("path"), JSON.stringify(this.settings, null, 2));\n\t}\n\n\t findConfig(pluginsPath = (betterdiscord_api__WEBPACK_IMPORTED_MODULE_1___default().Plugins.folder)) {\n\t\tlet found = null;\n\n\t\ttry {\n\t\t\tconst results = (0,fs__WEBPACK_IMPORTED_MODULE_3__.readdirSync)(pluginsPath);\n\n\t\t\tfor (const result of results) {\n\t\t\t\tif (found != null) break;\n\n\t\t\t\tconst stat = (0,fs__WEBPACK_IMPORTED_MODULE_3__.statSync)(path__WEBPACK_IMPORTED_MODULE_2__.join(pluginsPath, result));\n\n\t\t\t\tif (stat.isDirectory()){\n\t\t\t\t\tthis.findConfig(path__WEBPACK_IMPORTED_MODULE_2__.join(pluginsPath, result));\n\t\t\t\t\tcontinue;\n\t\t\t\t} else {\n\t\t\t\t\tif (_optionalChain([result, \'access\', _ => _.match, \'call\', _2 => _2(/caid\\s?\\.config\\s?\\.json/gi), \'optionalAccess\', _3 => _3.length]))\n\t\t\t\t\t\tfound = path__WEBPACK_IMPORTED_MODULE_2__.join(pluginsPath, result);\n\t\t\t\t}\n\t\t\t}\n\t\t} catch (e3) {\n\t\t\tconsole.error("Unable to find configuration file.");\n\t\t}\n\n\t\treturn found;\n\t}\n\n\t load() {\n\t\tconst home = (betterdiscord_api__WEBPACK_IMPORTED_MODULE_1___default().Plugins.folder) ;\n\n\t\tthis.alter("path", this.findConfig(home));\n\n\t\tif (this.get("path") == null) return;\n\t\t\n\t\tdelete window.require.cache[window.require.resolve(this.get("path"))];\n\t\tthis.alter("guilds", this.get("guilds") || {});\n\n\t\tconst watcher = (0,fs__WEBPACK_IMPORTED_MODULE_3__.watch)(this.get("path"))\n\n\t\twatcher.on("change", () => {\n\t\t\tthis.alter("guilds", {} )\n\t\t\tdelete window.require.cache[window.require.resolve(this.get("path"))];\n\n\t\t\tconst options = window.require(this.get("path")) ;\n\n\t\t\tthis.alter("guilds", _optionalChain([options, \'optionalAccess\', _4 => _4.guilds]) || {});\n\t\t\tthis.alter("guildDisabled", _optionalChain([options, \'optionalAccess\', _5 => _5.guildDisabled]) || false);\n\t\t\tthis.alter("dmDisabled", _optionalChain([options, \'optionalAccess\', _6 => _6.dmDisabled]) || false);\n\t\t});\n\n\t\tconst data = window.require(this.get("path")) ;\n\n\t\tthis.alter("guildDisabled", data.guildDisabled);\n\t\tthis.alter("dmDisabled", data.dmDisabled);\n\t\tthis.alter("guilds", data.guilds);\n\t}\n\n\t set() {\n\t\tthis.alter("path", this.findConfig());\n\t\tthis.alter("original", _discord_stores__WEBPACK_IMPORTED_MODULE_0__.Users.getCurrentUser().getAvatarURL());\n\t\tthis.load();\n\t}\n\n     isPresent(\n\t\tproperty, \n\t\tsubValue = null\n\t) {\n        for (const entry in this.settings) {\n            try {\n                return Boolean(\n                    subValue != null \n                        ? _optionalChain([entry, \'optionalAccess\', _7 => _7[property], \'optionalAccess\', _8 => _8[subValue]]) \n                        : _optionalChain([entry, \'optionalAccess\', _9 => _9[property]])\n                )\n            } catch (e4) {}\n        }\n\n\t\treturn false;\n    }\n}\n\n//# sourceURL=webpack://LibraryPluginHack/./plugins/CAID/Settings.ts?');
			},
			"./plugins/CAID/Util.ts": () => {
				eval(" function _optionalChain(ops) { let lastAccessLHS = undefined; let value = ops[0]; let i = 1; while (i < ops.length) { const op = ops[i]; const fn = ops[i + 1]; i += 2; if ((op === 'optionalAccess' || op === 'optionalCall') && value == null) { return undefined; } if (op === 'access' || op === 'optionalAccess') { lastAccessLHS = value; value = fn(value); } else if (op === 'call' || op === 'optionalCall') { value = fn((...args) => value.call(lastAccessLHS, ...args)); lastAccessLHS = undefined; } } return value; } class Util {\n     validateUrl(imageUrl) {\n        return (\n            imageUrl &&\n            typeof imageUrl === \"string\" &&\n            !_optionalChain([imageUrl, 'access', _ => _.match, 'call', _2 => _2(/\\.(jpg|jpeg|png|webp|svg|gif)/gi), 'optionalAccess', _3 => _3.length])\n        );\n    }\n}\n\n//# sourceURL=webpack://LibraryPluginHack/./plugins/CAID/Util.ts?");
			},
			"./plugins/CAID/components/Modal.tsx": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
				"use strict";
				eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "Modal": () => (/* binding */ Modal)\n/* harmony export */ });\n/* harmony import */ var _zlibrary__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @zlibrary */ "@zlibrary");\n/* harmony import */ var _zlibrary__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_zlibrary__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Settings */ "./plugins/CAID/Settings.ts");\n/* harmony import */ var betterdiscord_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! betterdiscord/api */ "betterdiscord/api");\n/* harmony import */ var betterdiscord_api__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(betterdiscord_api__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _main_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../main.scss */ "./plugins/CAID/main.scss");\n/* provided dependency */ var React = __webpack_require__(/*! react */ "react");\n\n\n\n\n\nconst Modal = (\n    { data, type, settings }\n\n) => {\n    if (!(settings instanceof _Settings__WEBPACK_IMPORTED_MODULE_1__.Settings))\n        return console.error(\n            new Error("\'settings\' property must of type \'PluginSettings\'!")\n        );\n\n    if (!["dm", "guild"].some((t) => type.toLowerCase() == t))\n        return console.error(\n            "\'type\' property must be either \'guild\' or \'dm\'!" // This should never happen.\n        );\n\n    const dmDisabled = settings.get("dmDisabled");\n    const guildDisabled = settings.get("guildDisabled");\n\n    const [{ url, disabled, timeout }, setProps] = React.useState({\n        url: "",\n        disabled: type && type.toLowerCase() === "dm" ? dmDisabled : guildDisabled,\n        timeout: null\n    });\n\n    return (\n        React.createElement(\'div\', {\n            className: "AvatarPanel",\n            children: [\n                _zlibrary__WEBPACK_IMPORTED_MODULE_0__.ReactTools.createWrappedElement(\n                    new _zlibrary__WEBPACK_IMPORTED_MODULE_0__.Settings.Textbox(\n                        "",\n                        disabled || !url ? null : (\n                            React.createElement(\'a\', {\n                                onClick: () => {\n                                    betterdiscord_api__WEBPACK_IMPORTED_MODULE_2___default().findModuleByProps("closeModal").closeModal(\n                                        settings.get(`${type}Disabled`)\n                                    );\n\n                                    return settings.writeImageUrl(data.id, null, true);\n                                },\n                                className: "reset-avatar",}\n                            , "Reset Avatar"\n\n                            )\n                        ),\n                        url,\n                        (value) => {\n                            settings.alter("temporary", value);\n                            clearTimeout(timeout);\n                            setProps({\n                                timeout: setTimeout(\n                                    () => setProps({ url: value, disabled }),\n                                    500\n                                )\n                            });\n                        },\n                        {\n                            placeholder: "Enter URL",\n                            disabled\n                        }\n                    ).getElement()\n                ),\n            !url ? null : React.createElement(\'img\', { src: url, className: _main_scss__WEBPACK_IMPORTED_MODULE_3__["default"].AvatarImg,} ),\n            url ? null : _zlibrary__WEBPACK_IMPORTED_MODULE_0__.ReactTools.createWrappedElement(\n                new _zlibrary__WEBPACK_IMPORTED_MODULE_0__.Settings.Switch(\n                    "Disabled",\n                    "",\n                    disabled,\n                    (_disabled) => {\n                        setProps({ url, disabled: _disabled });\n                        settings.alter("temporary", settings.get("original"));\n                        settings.alter(`${type}Disabled`, _disabled);\n                        settings.writeImageUrl(\n                            data.id,\n                            _disabled === true\n                                ? settings.get("original")\n                                : settings.get("guilds")[data.id],\n                            false\n                        );\n                        settings.writeDisableConfig(type, _disabled);\n                    }\n                ).getElement()\n            )\n            ],}\n        )\n    )\n}\n\n//# sourceURL=webpack://LibraryPluginHack/./plugins/CAID/components/Modal.tsx?');
			},
			"./plugins/CAID/index.tsx": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
				"use strict";
				eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (/* binding */ CAIDInjector)\n/* harmony export */ });\n/* harmony import */ var _main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.scss */ "./plugins/CAID/main.scss");\n/* harmony import */ var styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styles */ "styles");\n/* harmony import */ var styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styles__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _zlibrary_plugin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @zlibrary/plugin */ "@zlibrary/plugin");\n/* harmony import */ var _zlibrary_plugin__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_zlibrary_plugin__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _discord_stores__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @discord/stores */ "@discord/stores");\n/* harmony import */ var _discord_stores__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_discord_stores__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _zlibrary__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @zlibrary */ "@zlibrary");\n/* harmony import */ var _zlibrary__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_zlibrary__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var betterdiscord_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! betterdiscord/api */ "betterdiscord/api");\n/* harmony import */ var betterdiscord_api__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(betterdiscord_api__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _components_Modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/Modal */ "./plugins/CAID/components/Modal.tsx");\n/* harmony import */ var _Settings__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Settings */ "./plugins/CAID/Settings.ts");\n/* harmony import */ var _Util__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Util */ "./plugins/CAID/Util.ts");\n/* harmony import */ var _Util__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_Util__WEBPACK_IMPORTED_MODULE_8__);\n/* provided dependency */ var React = __webpack_require__(/*! react */ "react");\n function _optionalChain(ops) { let lastAccessLHS = undefined; let value = ops[0]; let i = 1; while (i < ops.length) { const op = ops[i]; const fn = ops[i + 1]; i += 2; if ((op === \'optionalAccess\' || op === \'optionalCall\') && value == null) { return undefined; } if (op === \'access\' || op === \'optionalAccess\') { lastAccessLHS = value; value = fn(value); } else if (op === \'call\' || op === \'optionalCall\') { value = fn((...args) => value.call(lastAccessLHS, ...args)); lastAccessLHS = undefined; } } return value; }/// <reference path="../types/main.d.ts" />\n\n\n\n\n\n\n\n\n\n\n\nclass CAIDInjector extends (_zlibrary_plugin__WEBPACK_IMPORTED_MODULE_2___default()) {\n    \n    \n    \n    \n\n     async onStart() {\n        this.guilds = {};\n        styles__WEBPACK_IMPORTED_MODULE_1___default().inject();\n\n        try {\n            this.pluginSettings = new _Settings__WEBPACK_IMPORTED_MODULE_7__.Settings();\n            this.settings = this.pluginSettings.settings ;\n            this.id = _discord_stores__WEBPACK_IMPORTED_MODULE_3__.Users.getCurrentUser().id;\n\n            if (!this.id) {\n                console.error("[CAID]: Unable to fetch current user ID, this should not happen.\\nEXITING.");\n                return;\n            }\n\n            this.patchAvatarUrl();\n            this.patchDMContextMenu();\n            this.patchGuildContextMenu();\n        } catch (e) {\n            console.error(e);\n        }\n    }\n\n     onStop() {\n        return this.stop();\n    }\n\n     stop() {\n        console.log("[CAID]: Exiting...");\n\n        styles__WEBPACK_IMPORTED_MODULE_1___default().remove();\n        _zlibrary__WEBPACK_IMPORTED_MODULE_4__.Patcher.unpatchAll();\n        betterdiscord_api__WEBPACK_IMPORTED_MODULE_5___default().saveData("CAID", "temporary", null);\n\n        console.log("[CAID]: Successfully exited.");\n    }\n\n     onSwitch() {\n        this.pluginSettings.alter(\n            "guilds",\n            this.pluginSettings.get("guilds") || {}\n        );\n    }\n\n     patchAvatarUrl() {\n        const Avatar = betterdiscord_api__WEBPACK_IMPORTED_MODULE_5___default().findModuleByProps("getUserAvatarURL");\n\n        _zlibrary__WEBPACK_IMPORTED_MODULE_4__.Patcher.after(\n            Avatar.default,\n            "getUserAvatarURL",\n            (_this, props, ret) => {\n                const locationId = window.location.href.includes("@me")\n                    ? window.location.href.split("/@me/")[1]\n                    : window.location.href.split("/").filter((x) => x)[3];\n\n                if (props[0].id !== this.id) return;\n\n                return _optionalChain([this, \'access\', _2 => _2.pluginSettings, \'access\', _3 => _3.get, \'call\', _4 => _4("guilds"), \'optionalAccess\', _5 => _5[locationId]]);\n            }\n        );\n    }\n\n     patchDMContextMenu() {\n        const findWithDefault = (filter) =>\n            _zlibrary__WEBPACK_IMPORTED_MODULE_4__.WebpackModules.getModule((m) => m && _optionalChain([m, \'optionalAccess\', _6 => _6.default]) && filter(m.default));\n\n        const DMContextMenu = findWithDefault(\n            (m) => _optionalChain([m, \'optionalAccess\', _7 => _7.displayName]) === "DMUserContextMenu"\n        );\n\n        if (!DMContextMenu) return;\n\n        _zlibrary__WEBPACK_IMPORTED_MODULE_4__.Patcher.after(\n            DMContextMenu,\n            "default",\n            (_, [props], ret) => {\n                const children = _zlibrary__WEBPACK_IMPORTED_MODULE_4__.Utilities.getNestedProp(\n                    ret,\n                    "props.children.props.children"\n                );\n\n                if (!Array.isArray(children)) return;\n\n                const { channel } = props;\n\n                children.splice(\n                    4,\n                    0,\n                    _zlibrary__WEBPACK_IMPORTED_MODULE_4__.ContextMenu.buildMenuItem({\n                        label: "Set Avatar URL",\n                        action: () => {\n                            betterdiscord_api__WEBPACK_IMPORTED_MODULE_5___default().showConfirmationModal(\n                                "Change Avatar",\n                                React.createElement(_components_Modal__WEBPACK_IMPORTED_MODULE_6__.Modal, null\n\n                                ),\n                                {\n                                    onConfirm: () => {\n                                        try {\n                                            let err = null;\n                                            const value = this.pluginSettings.get("temporary");\n\n                                            if (value && typeof value === "boolean" && (value ) === false)\n                                                return this.pluginSettings.writeImageUrl(\n                                                    channel.id,\n                                                    null,\n                                                    true\n                                                );\n\n                                            if (\n                                                value &&\n                                                value === this.pluginSettings.get("original")\n                                            ) return;\n\n                                            if (!_Util__WEBPACK_IMPORTED_MODULE_8__.Util.validateUrl(value))\n                                                return betterdiscord_api__WEBPACK_IMPORTED_MODULE_5___default().showConfirmationModal(\n                                                    "INVALID",\n                                                    "Please specify a valid URL.",\n                                                    { danger: true }\n                                                );\n\n                                            if (_optionalChain([channel, \'optionalAccess\', _8 => _8.id]) && value)\n                                                err = this.pluginSettings.writeImageUrl(\n                                                    channel.id,\n                                                    value \n                                                );\n\n                                            if (err) return console.error(err);\n\n                                            betterdiscord_api__WEBPACK_IMPORTED_MODULE_5___default().showConfirmationModal(\n                                                "Success!",\n                                                React.createElement(\'div\', { className: _main_scss__WEBPACK_IMPORTED_MODULE_0__["default"].successAvatarImg,}, "Successfully established new avatar for DM channel with "\n\n                                                     , channel.rawRecipients[0].username, "! " , React.createElement(\'br\', null ), "(Change channels to apply it.)"\n\n                                                ),\n                                                {}\n                                            )\n\n                                        } catch (e) {\n                                            console.error(`[CAID]: Unknown error occurred. Please contact the plugin developer.\\nStack: ${e}`);\n                                        }\n                                    },\n                                    onCancel: () => console.log("Out of there!"),\n                                    cancelText: "Back",\n                                    confirmText: "Apply"\n                                }\n                            )\n                        }\n\n                    })\n                )\n            }\n        )\n    }\n\n     patchGuildContextMenu() {\n        const findWithDefault = (filter) =>\n            _zlibrary__WEBPACK_IMPORTED_MODULE_4__.WebpackModules.getModule((m) => m && _optionalChain([m, \'optionalAccess\', _9 => _9.default]) && filter(m.default));\n\n        const GuildContextMenu = findWithDefault(\n            (m) => _optionalChain([m, \'optionalAccess\', _10 => _10.displayName]) === "GuildContextMenu"\n        );\n\n        if (!GuildContextMenu) return;\n\n        _zlibrary__WEBPACK_IMPORTED_MODULE_4__.Patcher.after(\n            GuildContextMenu,\n            "default",\n            (_, [props], ret) => {\n                const children = _zlibrary__WEBPACK_IMPORTED_MODULE_4__.Utilities.getNestedProp(ret, "props.children");\n                if (!Array.isArray(children)) return;\n\n                const { guild } = props;\n\n                const menu = _zlibrary__WEBPACK_IMPORTED_MODULE_4__.ContextMenu.buildMenuItem({\n                    label: "Set Avatar URL",\n                    action: () => {\n                        betterdiscord_api__WEBPACK_IMPORTED_MODULE_5___default().showConfirmationModal(\n                            "Change Avatar",\n                            React.createElement(_components_Modal__WEBPACK_IMPORTED_MODULE_6__.Modal, {\n                                settings: this.pluginSettings,\n                                data: guild,\n                                type: "guild",}\n                            ),\n                            {\n                                onConfirm: () => {\n                                    try {\n                                        let err = null;\n                                        const val = this.pluginSettings.get("temporary");\n\n                                        if (typeof val === "boolean" && val === false)\n                                            return this.pluginSettings.writeImageUrl(\n                                                guild.id,\n                                                null,\n                                                true\n                                            );\n\n                                        if (val && val === this.pluginSettings.get("original"))\n                                            return;\n\n                                        if (\n                                            !val ||\n                                            (_optionalChain([val, \'optionalAccess\', _11 => _11.length]) &&\n                                                !_optionalChain([val, \'access\', _12 => _12.match, \'call\', _13 => _13(/\\.(jpg|jpeg|png|webp|svg|gif)/gi), \'optionalAccess\', _14 => _14.length]))\n                                        )\n                                            return betterdiscord_api__WEBPACK_IMPORTED_MODULE_5___default().showConfirmationModal(\n                                                "INVALID",\n                                                "Please specify a valid URL!",\n                                                { danger: true }\n                                            );\n\n                                        if (_optionalChain([guild, \'optionalAccess\', _15 => _15.id]) && val)\n                                            err = this.pluginSettings.writeImageUrl(guild.id, val);\n\n                                        if (err) return console.error(err);\n\n                                        betterdiscord_api__WEBPACK_IMPORTED_MODULE_5___default().showConfirmationModal(\n                                            `Success!`,\n                                            React.createElement(\'div\', { className: _main_scss__WEBPACK_IMPORTED_MODULE_0__["default"].successAvatarImg,}, "Successfully established new avatar for "\n                                                     , guild.name, "!", " "\n                                                , React.createElement(\'br\', null ), "(Change channels to fully apply it.)"\n\n                                            ),\n                                            {}\n                                        );\n                                    } catch (e) {\n                                        console.error(\n                                            `Unknown error occurred. Please contact the plugin developer and report the issue.\\n\\n[STACK]: ${e.message}`\n                                        );\n                                    }\n                                },\n                                onCancel: () => console.log("Out of there!"),\n                                cancelText: "Back",\n                                confirmText: "Apply",\n                            }\n                        );\n                    },\n                });\n\n                children.splice(4, 0, menu);\n            }\n        )\n    }\n}\n\n//# sourceURL=webpack://LibraryPluginHack/./plugins/CAID/index.tsx?');
			},
			"../../../../usr/local/lib/node_modules/@betterdiscordbuilder/bdbuilder/node_modules/css-loader/dist/runtime/api.js": module => {
				"use strict";
				eval('\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return "@media ".concat(item[2], " {").concat(content, "}");\n      }\n\n      return content;\n    }).join("");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === "string") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, ""]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://LibraryPluginHack/../../../../usr/local/lib/node_modules/@betterdiscordbuilder/bdbuilder/node_modules/css-loader/dist/runtime/api.js?');
			},
			fs: module => {
				"use strict";
				module.exports = require("fs");
			},
			path: module => {
				"use strict";
				module.exports = require("path");
			},
			"@zlibrary/plugin": module => {
				"use strict";
				module.exports = BasePlugin;
			},
			react: module => {
				"use strict";
				module.exports = BdApi.React;
			},
			"@zlibrary": module => {
				"use strict";
				module.exports = PluginApi;
			},
			styles: module => {
				"use strict";
				module.exports = StyleLoader;
			},
			"betterdiscord/api": module => {
				"use strict";
				module.exports = require("betterdiscord/bdapi");
			},
			"@discord/stores": module => {
				"use strict";
				module.exports = Modules["@discord/stores"];
			}
		};
		var __webpack_module_cache__ = {};
		function __webpack_require__(moduleId) {
			var cachedModule = __webpack_module_cache__[moduleId];
			if (void 0 !== cachedModule) return cachedModule.exports;
			var module = __webpack_module_cache__[moduleId] = {
				id: moduleId,
				exports: {}
			};
			__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
			return module.exports;
		}
		(() => {
			__webpack_require__.n = module => {
				var getter = module && module.__esModule ? () => module["default"] : () => module;
				__webpack_require__.d(getter, {
					a: getter
				});
				return getter;
			};
		})();
		(() => {
			__webpack_require__.d = (exports, definition) => {
				for (var key in definition)
					if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) Object.defineProperty(exports, key, {
						enumerable: true,
						get: definition[key]
					});
			};
		})();
		(() => {
			__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop);
		})();
		(() => {
			__webpack_require__.r = exports => {
				if ("undefined" !== typeof Symbol && Symbol.toStringTag) Object.defineProperty(exports, Symbol.toStringTag, {
					value: "Module"
				});
				Object.defineProperty(exports, "__esModule", {
					value: true
				});
			};
		})();
		var __webpack_exports__ = __webpack_require__("./plugins/CAID/index.tsx");
		module.exports.LibraryPluginHack = __webpack_exports__;
	})();
	const PluginExports = module.exports.LibraryPluginHack;
	return PluginExports?.__esModule ? PluginExports.default : PluginExports;
}
module.exports = window.hasOwnProperty("ZeresPluginLibrary") ?
	buildPlugin(window.ZeresPluginLibrary.buildPlugin(config)) :
	class {
		getName() {
			return config.info.name;
		}
		getAuthor() {
			return config.info.authors.map(a => a.name).join(", ");
		}
		getDescription() {
			return `${config.info.description}. __**ZeresPluginLibrary was not found! This plugin will not work!**__`;
		}
		getVersion() {
			return config.info.version;
		}
		load() {
			BdApi.showConfirmationModal(
				"Library plugin is needed",
				[`The library plugin needed for ${config.info.name} is missing. Please click Download to install it.`], {
					confirmText: "Download",
					cancelText: "Cancel",
					onConfirm: () => {
						require("request").get("https://rauenzi.github.io/BDPluginLibrary/release/0PluginLibrary.plugin.js", async (error, response, body) => {
							if (error) return require("electron").shell.openExternal("https://betterdiscord.net/ghdl?url=https://raw.githubusercontent.com/rauenzi/BDPluginLibrary/master/release/0PluginLibrary.plugin.js");
							await new Promise(r => require("fs").writeFile(require("path").join(BdApi.Plugins.folder, "0PluginLibrary.plugin.js"), body, r));
						});
					}
				}
			);
		}
		start() {}
		stop() {}
	};
/*@end@*/