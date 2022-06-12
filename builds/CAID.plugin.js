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
		"title": "Fixed URL validation",
		"type": "fixed",
		"items": [
			"Would show invalid URL even when user didn't place any input",
			"Create accommodating forms for various scenarios",
			"BROKEN: DM injections; needs fixing"
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
	(() => {
		"use strict";
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
			666: (module, __webpack_exports__, __webpack_require__) => {
				__webpack_require__.d(__webpack_exports__, {
					Z: () => __WEBPACK_DEFAULT_EXPORT__
				});
				var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(645);
				var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
				var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()((function(i) {
					return i[1];
				}));
				___CSS_LOADER_EXPORT___.push([module.id, '.CAID-main-AvatarImg{width:40%;height:40%;object-fit:cover;display:block;margin-left:auto;margin-right:auto}.CAID-main-successAvatarImg{display:block;line-height:normal}.CAID-main-InvalidUrl{color:#f66 !important}img[class*=avatar-][class*=clickable-]{width:40px;height:40px;object-fit:cover}a[class*=reset-avatar]{margin-top:5px !important;display:inline-block !important;text-decoration:none !important}a[class*=reset-avatar]::after{background:none repeat scroll 0 0 rgba(0,0,0,0) !important;bottom:0 !important;content:"" !important;width:0px !important;height:1px !important;left:25% !important;display:block !important;background:#00aff4 !important;text-decoration:underline !important;transition:width .3s ease 0s,left .3s ease 0s !important;width:0 !important}a[class*=reset-avatar]:hover::after{width:100% !important;left:0 !important}', ""]);
				___CSS_LOADER_EXPORT___.locals = {
					AvatarImg: "CAID-main-AvatarImg",
					successAvatarImg: "CAID-main-successAvatarImg",
					InvalidUrl: "CAID-main-InvalidUrl"
				};
				StyleLoader.append(module.id, ___CSS_LOADER_EXPORT___.toString());
				const __WEBPACK_DEFAULT_EXPORT__ = Object.assign(___CSS_LOADER_EXPORT___, ___CSS_LOADER_EXPORT___.locals);
			},
			645: module => {
				module.exports = function(cssWithMappingToString) {
					var list = [];
					list.toString = function toString() {
						return this.map((function(item) {
							var content = cssWithMappingToString(item);
							if (item[2]) return "@media ".concat(item[2], " {").concat(content, "}");
							return content;
						})).join("");
					};
					list.i = function(modules, mediaQuery, dedupe) {
						if ("string" === typeof modules) modules = [
							[null, modules, ""]
						];
						var alreadyImportedModules = {};
						if (dedupe)
							for (var i = 0; i < this.length; i++) {
								var id = this[i][0];
								if (null != id) alreadyImportedModules[id] = true;
							}
						for (var _i = 0; _i < modules.length; _i++) {
							var item = [].concat(modules[_i]);
							if (dedupe && alreadyImportedModules[item[0]]) continue;
							if (mediaQuery)
								if (!item[2]) item[2] = mediaQuery;
								else item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
							list.push(item);
						}
					};
					return list;
				};
			},
			113: module => {
				module.exports = BdApi.React;
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
		var __webpack_exports__ = {};
		(() => {
			__webpack_require__.r(__webpack_exports__);
			__webpack_require__.d(__webpack_exports__, {
				default: () => CAIDInjector
			});
			var main = __webpack_require__(666);
			const external_StyleLoader_namespaceObject = StyleLoader;
			var external_StyleLoader_default = __webpack_require__.n(external_StyleLoader_namespaceObject);
			const external_BasePlugin_namespaceObject = BasePlugin;
			var external_BasePlugin_default = __webpack_require__.n(external_BasePlugin_namespaceObject);
			const stores_namespaceObject = Modules["@discord/stores"];
			const external_PluginApi_namespaceObject = PluginApi;
			const bdapi_namespaceObject = require("betterdiscord/bdapi");
			var bdapi_default = __webpack_require__.n(bdapi_namespaceObject);
			const external_path_namespaceObject = require("path");
			const external_fs_namespaceObject = require("fs");
			function _defineProperty(obj, key, value) {
				if (key in obj) Object.defineProperty(obj, key, {
					value,
					enumerable: true,
					configurable: true,
					writable: true
				});
				else obj[key] = value;
				return obj;
			}
			class Settings {
				constructor() {
					_defineProperty(this, "settings", void 0);
					this.settings = {};
					this.set();
					this.load();
				}
				alter(property, value = null, subValue = null) {
					if (null == value) return;
					if (!this.isPresent(property, subValue)) null != subValue ? this.settings[property][subValue] = value : this.settings[property] = value;
				}
				get(property, subValue = null) {
					try {
						return null != subValue ? this.settings[property][subValue] : this.settings[property];
					} catch {
						return null;
					}
				}
				writeImageUrl(id, imageUrl, deleteEntry = false) {
					if (!id) return new Error("'id' value not provided!");
					try {
						if (!Object.keys(this.get("guilds")).length) this.alter("guilds", {});
						if (this.get("guilds")[id] && deleteEntry || null == imageUrl) {
							delete this.get("guilds")[id];
							this.alter("guilds", this.get("guilds") || {});
							return (0, external_fs_namespaceObject.writeFileSync)(this.get("path"), JSON.stringify(this.settings, null, 2));
						}
						Object.keys(this.get("guilds") || {}).length ? this.alter("guilds", imageUrl, id) : this.alter("guilds", {
							[id]: imageUrl
						});
						(0, external_fs_namespaceObject.writeFileSync)(this.get("path"), JSON.stringify(this.settings, null, 2));
					} catch (e) {
						return e;
					}
				}
				writeDisableConfig(type, disabled) {
					if (!type || "string" != typeof type || !["guild", "dm"].some((t => type.toLowerCase() == t))) return console.error("[CAID_CONFIG]: Invalid value for 'disabled'! Must be 'guild' or 'dm'!");
					this.alter(`${type}Disabled`, disabled);
					(0, external_fs_namespaceObject.writeFileSync)(this.get("path"), JSON.stringify(this.settings, null, 2));
				}
				findConfig(pluginsPath = bdapi_default().Plugins.folder) {
					let found = null;
					try {
						const results = (0, external_fs_namespaceObject.readdirSync)(pluginsPath);
						for (const result of results) {
							if (null != found) break;
							const stat = (0, external_fs_namespaceObject.statSync)(external_path_namespaceObject.join(pluginsPath, result));
							if (stat.isDirectory()) {
								this.findConfig(external_path_namespaceObject.join(pluginsPath, result));
								continue;
							} else if (result.match(/caid\s?\.config\s?\.json/gi)?.length) found = external_path_namespaceObject.join(pluginsPath, result);
						}
					} catch {
						console.error("Unable to find configuration file.");
					}
					return found;
				}
				load() {
					const home = bdapi_default().Plugins.folder;
					this.alter("path", this.findConfig(home));
					if (null == this.get("path")) return;
					delete window.require.cache[window.require.resolve(this.get("path"))];
					this.alter("guilds", this.get("guilds") || {});
					const watcher = (0, external_fs_namespaceObject.watch)(this.get("path"));
					watcher.on("change", (() => {
						this.alter("guilds", {});
						delete window.require.cache[window.require.resolve(this.get("path"))];
						const options = window.require(this.get("path"));
						this.alter("guilds", options?.guilds || {});
						this.alter("guildDisabled", options?.guildDisabled || false);
						this.alter("dmDisabled", options?.dmDisabled || false);
					}));
					const data = window.require(this.get("path"));
					this.alter("guildDisabled", data.guildDisabled);
					this.alter("dmDisabled", data.dmDisabled);
					this.alter("guilds", data.guilds);
				}
				set() {
					this.alter("path", this.findConfig());
					this.alter("original", stores_namespaceObject.Users.getCurrentUser().getAvatarURL());
					this.load();
				}
				isPresent(property, subValue = null) {
					for (const entry in this.settings) try {
						return Boolean(null != subValue ? entry?.[property]?.[subValue] : entry?.[property]);
					} catch {}
					return false;
				}
			}
			var React = __webpack_require__(113);
			const Modal = ({
				data,
				type,
				settings
			}) => {
				if (!(settings instanceof Settings)) return console.error(new Error("'settings' property must of type 'PluginSettings'!"));
				if (!["dm", "guild"].some((t => type.toLowerCase() == t))) return console.error("'type' property must be either 'guild' or 'dm'!");
				const dmDisabled = settings.get("dmDisabled");
				const guildDisabled = settings.get("guildDisabled");
				const [{
					url,
					disabled,
					timeout
				}, setProps] = React.useState({
					url: "",
					disabled: type && "dm" === type.toLowerCase() ? dmDisabled : guildDisabled,
					timeout: null
				});
				return React.createElement("div", {
					className: "AvatarPanel",
					children: [external_PluginApi_namespaceObject.ReactTools.createWrappedElement(new external_PluginApi_namespaceObject.Settings.Textbox("", disabled || !url ? null : React.createElement("a", {
						onClick: () => {
							bdapi_default().findModuleByProps("closeModal").closeModal(settings.get(`${type}Disabled`));
							return settings.writeImageUrl(data.id, null, true);
						},
						className: "reset-avatar"
					}, "Reset Avatar"), url, (value => {
						settings.alter("temporary", value);
						clearTimeout(timeout);
						setProps({
							timeout: setTimeout((() => setProps({
								url: value,
								disabled,
								timeout: null
							})), 1e3),
							url,
							disabled
						});
					}), {
						placeholder: "Enter URL",
						disabled
					}).getElement()), !url ? null : React.createElement("img", {
						src: url,
						className: main.Z.AvatarImg
					}), url ? null : external_PluginApi_namespaceObject.ReactTools.createWrappedElement(new external_PluginApi_namespaceObject.Settings.Switch("Disabled", "", disabled, (_disabled => {
						setProps({
							url,
							disabled: _disabled,
							timeout
						});
						settings.alter("temporary", settings.get("original"));
						settings.alter(`${type}Disabled`, _disabled);
						if (!_disabled) settings.writeImageUrl(data.id, settings.get("guilds")[data.id], false);
						settings.writeDisableConfig(type, _disabled);
					})).getElement())]
				});
			};
			var Util_React = __webpack_require__(113);
			class Util {
				static validateUrl(imageUrl) {
					return imageUrl && "string" === typeof imageUrl && !!imageUrl.match(/\.(jpg|jpeg|png|webp|svg|gif)/gi)?.length;
				}
				static constructImg(imageUrl) {
					if (!imageUrl) return;
					if (!this.validateUrl(imageUrl)) return Util_React.createElement("p", {
						className: main.Z.InvalidUrl
					}, "Invalid URL!");
					return Util_React.createElement("img", {
						src: imageUrl,
						className: main.Z.AvatarImg
					});
				}
			}
			var CAID_React = __webpack_require__(113);
			function CAID_defineProperty(obj, key, value) {
				if (key in obj) Object.defineProperty(obj, key, {
					value,
					enumerable: true,
					configurable: true,
					writable: true
				});
				else obj[key] = value;
				return obj;
			}
			class CAIDInjector extends(external_BasePlugin_default()) {
				constructor(...args) {
					super(...args);
					CAID_defineProperty(this, "pluginSettings", void 0);
					CAID_defineProperty(this, "settings", void 0);
					CAID_defineProperty(this, "guilds", void 0);
					CAID_defineProperty(this, "id", void 0);
				}
				async onStart() {
					this.guilds = {};
					external_StyleLoader_default().inject();
					try {
						this.pluginSettings = new Settings;
						this.settings = this.pluginSettings.settings;
						this.id = stores_namespaceObject.Users.getCurrentUser().id;
						if (!this.id) {
							console.error("[CAID]: Unable to fetch current user ID, this should not happen.\nEXITING.");
							return;
						}
						setTimeout((() => {
							this.patchAvatarUrl();
							this.patchGuildContextMenu();
						}), 1e3);
					} catch (e) {
						console.error(e);
					}
				}
				onStop() {
					return this.stop();
				}
				stop() {
					console.log("[CAID]: Exiting...");
					external_StyleLoader_default().remove();
					external_PluginApi_namespaceObject.Patcher.unpatchAll();
					bdapi_default().saveData("CAID", "temporary", null);
					console.log("[CAID]: Successfully exited.");
				}
				onSwitch() {
					this.pluginSettings.alter("guilds", this.pluginSettings.get("guilds") || {});
				}
				patchAvatarUrl() {
					const Avatar = bdapi_default().findModuleByProps("getUserAvatarURL");
					external_PluginApi_namespaceObject.Patcher.after(Avatar.default, "getUserAvatarURL", ((_this, props) => {
						const locationId = window.location.href.includes("@me") ? window.location.href.split("/@me/")[1] : window.location.href.split("/").filter((x => x))[3];
						const type = window.location.href.includes("@me") ? "dm" : "guild";
						if (type && this.pluginSettings.get(`${type}Disabled`)) return this.pluginSettings.get("original");
						if (props[0].id !== this.id) return;
						return this.pluginSettings.get("guilds")?.[locationId];
					}));
				}
				patchGuildContextMenu() {
					if (window.location.href.includes("@me")) return;
					const GuildContextMenu = (filter => external_PluginApi_namespaceObject.WebpackModules.getModule((m => m && m?.default && filter(m.default))))((m => "GuildContextMenu" === m?.displayName));
					if (!GuildContextMenu) return void setTimeout((() => {
						this.patchGuildContextMenu();
					}), 1e3);
					external_PluginApi_namespaceObject.Patcher.after(GuildContextMenu, "default", ((_, [props], ret) => {
						const children = external_PluginApi_namespaceObject.Utilities.getNestedProp(ret, "props.children");
						if (!Array.isArray(children)) return;
						const {
							guild
						} = props;
						const menu = external_PluginApi_namespaceObject.ContextMenu.buildMenuItem({
							label: "Set Avatar URL",
							action: () => {
								bdapi_default().showConfirmationModal("Change Avatar", CAID_React.createElement(Modal, {
									settings: this.pluginSettings,
									data: guild,
									type: "guild"
								}), {
									onConfirm: () => {
										try {
											let err = null;
											const val = this.pluginSettings.get("temporary");
											if (!val) return this.pluginSettings.writeImageUrl(guild.id, null, true);
											if (val && val === this.pluginSettings.get("original")) return;
											if (!Util.validateUrl(val)) return bdapi_default().showConfirmationModal("INVALID", "Please specify a valid URL!", {
												danger: true
											});
											if (guild?.id && val) err = this.pluginSettings.writeImageUrl(guild.id, val);
											if (err) return console.error(err);
											bdapi_default().showConfirmationModal(`Success!`, CAID_React.createElement("div", {
												className: main.Z.successAvatarImg
											}, "Successfully established new avatar for ", guild.name, "!", " ", CAID_React.createElement("br", null), "(Change channels to fully apply it.)"), {});
										} catch (e) {
											console.error(`Unknown error occurred. Please contact the plugin developer and report the issue.\n\n[STACK]: ${e.message}`);
										}
									},
									onCancel: () => console.log("Out of there!"),
									cancelText: "Back",
									confirmText: "Apply"
								});
							}
						});
						children.splice(4, 0, menu);
					}));
				}
			}
		})();
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