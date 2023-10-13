
// this file is generated — do not edit it


/// <reference types="@sveltejs/kit" />

/**
 * Environment variables [loaded by Vite](https://vitejs.dev/guide/env-and-mode.html#env-files) from `.env` files and `process.env`. Like [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), this module cannot be imported into client-side code. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://kit.svelte.dev/docs/configuration#env) (if configured).
 * 
 * _Unlike_ [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), the values exported from this module are statically injected into your bundle at build time, enabling optimisations like dead code elimination.
 * 
 * ```ts
 * import { API_KEY } from '$env/static/private';
 * ```
 * 
 * Note that all environment variables referenced in your code should be declared (for example in an `.env` file), even if they don't have a value until the app is deployed:
 * 
 * ```
 * MY_FEATURE_FLAG=""
 * ```
 * 
 * You can override `.env` values from the command line like so:
 * 
 * ```bash
 * MY_FEATURE_FLAG="enabled" npm run dev
 * ```
 */
declare module '$env/static/private' {
	export const BUN_INSTALL: string;
	export const COLORFGBG: string;
	export const COLORTERM: string;
	export const COMMAND_MODE: string;
	export const FIGTERM_SESSION_ID: string;
	export const FIG_PID: string;
	export const FIG_SET_PARENT: string;
	export const FIG_SET_PARENT_CHECK: string;
	export const FIG_TERM: string;
	export const GEM_HOME: string;
	export const GEM_PATH: string;
	export const GIT_ASKPASS: string;
	export const GOOGLE_API_KEY: string;
	export const GOOGLE_DEFAULT_CLIENT_ID: string;
	export const GOOGLE_DEFAULT_CLIENT_SECRET: string;
	export const HOME: string;
	export const IRBRC: string;
	export const ITERM_PROFILE: string;
	export const ITERM_SESSION_ID: string;
	export const LANG: string;
	export const LC_FIG_SET_PARENT: string;
	export const LC_TERMINAL: string;
	export const LC_TERMINAL_VERSION: string;
	export const LOGNAME: string;
	export const MY_RUBY_HOME: string;
	export const MallocNanoZone: string;
	export const NODE: string;
	export const NVM_BIN: string;
	export const NVM_CD_FLAGS: string;
	export const NVM_DIR: string;
	export const NVM_INC: string;
	export const ORIGINAL_XDG_CURRENT_DESKTOP: string;
	export const PATH: string;
	export const PNPM_HOME: string;
	export const PWD: string;
	export const RUBY_VERSION: string;
	export const SHELL: string;
	export const SHLVL: string;
	export const SSH_AUTH_SOCK: string;
	export const TERM: string;
	export const TERM_PROGRAM: string;
	export const TERM_PROGRAM_VERSION: string;
	export const TERM_SESSION_ID: string;
	export const TMPDIR: string;
	export const TTY: string;
	export const USER: string;
	export const USER_ZDOTDIR: string;
	export const VOLTA_HOME: string;
	export const VSCODE_GIT_ASKPASS_EXTRA_ARGS: string;
	export const VSCODE_GIT_ASKPASS_MAIN: string;
	export const VSCODE_GIT_ASKPASS_NODE: string;
	export const VSCODE_GIT_IPC_HANDLE: string;
	export const VSCODE_INJECTION: string;
	export const VSCODE_NONCE: string;
	export const XPC_FLAGS: string;
	export const XPC_SERVICE_NAME: string;
	export const ZDOTDIR: string;
	export const _: string;
	export const _VOLTA_TOOL_RECURSION: string;
	export const __CFBundleIdentifier: string;
	export const __CF_USER_TEXT_ENCODING: string;
	export const grpc_cfstream: string;
	export const npm_config_local_prefix: string;
	export const npm_config_user_agent: string;
	export const npm_execpath: string;
	export const npm_lifecycle_event: string;
	export const npm_node_execpath: string;
	export const npm_package_json: string;
	export const npm_package_name: string;
	export const npm_package_version: string;
	export const rvm_alias_expanded: string;
	export const rvm_bin_flag: string;
	export const rvm_bin_path: string;
	export const rvm_docs_type: string;
	export const rvm_gemstone_package_file: string;
	export const rvm_gemstone_url: string;
	export const rvm_hook: string;
	export const rvm_niceness: string;
	export const rvm_nightly_flag: string;
	export const rvm_only_path_flag: string;
	export const rvm_path: string;
	export const rvm_prefix: string;
	export const rvm_pretty_print_flag: string;
	export const rvm_proxy: string;
	export const rvm_quiet_flag: string;
	export const rvm_ruby_bits: string;
	export const rvm_ruby_file: string;
	export const rvm_ruby_make: string;
	export const rvm_ruby_make_install: string;
	export const rvm_ruby_mode: string;
	export const rvm_script_name: string;
	export const rvm_sdk: string;
	export const rvm_silent_flag: string;
	export const rvm_use_flag: string;
	export const rvm_version: string;
	export const NODE_ENV: string;
}

/**
 * Similar to [`$env/static/private`](https://kit.svelte.dev/docs/modules#$env-static-private), except that it only includes environment variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Values are replaced statically at build time.
 * 
 * ```ts
 * import { PUBLIC_BASE_URL } from '$env/static/public';
 * ```
 */
declare module '$env/static/public' {
	
}

/**
 * This module provides access to runtime environment variables, as defined by the platform you're running on. For example if you're using [`adapter-node`](https://github.com/sveltejs/kit/tree/master/packages/adapter-node) (or running [`vite preview`](https://kit.svelte.dev/docs/cli)), this is equivalent to `process.env`. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://kit.svelte.dev/docs/configuration#env) (if configured).
 * 
 * This module cannot be imported into client-side code.
 * 
 * ```ts
 * import { env } from '$env/dynamic/private';
 * console.log(env.DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 * 
 * > In `dev`, `$env/dynamic` always includes environment variables from `.env`. In `prod`, this behavior will depend on your adapter.
 */
declare module '$env/dynamic/private' {
	export const env: {
		BUN_INSTALL: string;
		COLORFGBG: string;
		COLORTERM: string;
		COMMAND_MODE: string;
		FIGTERM_SESSION_ID: string;
		FIG_PID: string;
		FIG_SET_PARENT: string;
		FIG_SET_PARENT_CHECK: string;
		FIG_TERM: string;
		GEM_HOME: string;
		GEM_PATH: string;
		GIT_ASKPASS: string;
		GOOGLE_API_KEY: string;
		GOOGLE_DEFAULT_CLIENT_ID: string;
		GOOGLE_DEFAULT_CLIENT_SECRET: string;
		HOME: string;
		IRBRC: string;
		ITERM_PROFILE: string;
		ITERM_SESSION_ID: string;
		LANG: string;
		LC_FIG_SET_PARENT: string;
		LC_TERMINAL: string;
		LC_TERMINAL_VERSION: string;
		LOGNAME: string;
		MY_RUBY_HOME: string;
		MallocNanoZone: string;
		NODE: string;
		NVM_BIN: string;
		NVM_CD_FLAGS: string;
		NVM_DIR: string;
		NVM_INC: string;
		ORIGINAL_XDG_CURRENT_DESKTOP: string;
		PATH: string;
		PNPM_HOME: string;
		PWD: string;
		RUBY_VERSION: string;
		SHELL: string;
		SHLVL: string;
		SSH_AUTH_SOCK: string;
		TERM: string;
		TERM_PROGRAM: string;
		TERM_PROGRAM_VERSION: string;
		TERM_SESSION_ID: string;
		TMPDIR: string;
		TTY: string;
		USER: string;
		USER_ZDOTDIR: string;
		VOLTA_HOME: string;
		VSCODE_GIT_ASKPASS_EXTRA_ARGS: string;
		VSCODE_GIT_ASKPASS_MAIN: string;
		VSCODE_GIT_ASKPASS_NODE: string;
		VSCODE_GIT_IPC_HANDLE: string;
		VSCODE_INJECTION: string;
		VSCODE_NONCE: string;
		XPC_FLAGS: string;
		XPC_SERVICE_NAME: string;
		ZDOTDIR: string;
		_: string;
		_VOLTA_TOOL_RECURSION: string;
		__CFBundleIdentifier: string;
		__CF_USER_TEXT_ENCODING: string;
		grpc_cfstream: string;
		npm_config_local_prefix: string;
		npm_config_user_agent: string;
		npm_execpath: string;
		npm_lifecycle_event: string;
		npm_node_execpath: string;
		npm_package_json: string;
		npm_package_name: string;
		npm_package_version: string;
		rvm_alias_expanded: string;
		rvm_bin_flag: string;
		rvm_bin_path: string;
		rvm_docs_type: string;
		rvm_gemstone_package_file: string;
		rvm_gemstone_url: string;
		rvm_hook: string;
		rvm_niceness: string;
		rvm_nightly_flag: string;
		rvm_only_path_flag: string;
		rvm_path: string;
		rvm_prefix: string;
		rvm_pretty_print_flag: string;
		rvm_proxy: string;
		rvm_quiet_flag: string;
		rvm_ruby_bits: string;
		rvm_ruby_file: string;
		rvm_ruby_make: string;
		rvm_ruby_make_install: string;
		rvm_ruby_mode: string;
		rvm_script_name: string;
		rvm_sdk: string;
		rvm_silent_flag: string;
		rvm_use_flag: string;
		rvm_version: string;
		NODE_ENV: string;
		[key: `PUBLIC_${string}`]: undefined;
		[key: `${string}`]: string | undefined;
	}
}

/**
 * Similar to [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), but only includes variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Note that public dynamic environment variables must all be sent from the server to the client, causing larger network requests — when possible, use `$env/static/public` instead.
 * 
 * ```ts
 * import { env } from '$env/dynamic/public';
 * console.log(env.PUBLIC_DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 */
declare module '$env/dynamic/public' {
	export const env: {
		[key: `PUBLIC_${string}`]: string | undefined;
	}
}
