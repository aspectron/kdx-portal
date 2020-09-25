
import {BaseElement, html, dpc} from 'https://cdn.aspectron.com/latest/flow-ux-static/flow-ux/flow-ux.js';
//import {BaseElement, html, css} from './node_modules/@aspectron/flow-ux/dist/latest/flow-ux-static/flow-ux/flow-ux.js';

export class HomePage extends BaseElement{

    constructor(){
		super();
		//this.initLog();
		//this.init();
		dpc(async ()=>this.init());
	}

	async init(){
		//this.initSocketIORPC();
		//await this.initSocketIONATS();
        this.initUI();
        console.log("IN INIT()");
	//	dpc(()=>this.setLoading(false));
	}

	initUI(){
		this.bodyEl = document.body;
		this.initTabs();
	}

    createRenderRoot(){
        return this;
    }

    render(){
        let files = this.renderFiles();
        return html`
        <flow-app floating-drawer>
        <img slot="header" class="logo" src="resources/images/kdx.svg" />
        <div slot="header">KDX</div>
        <div slot="header" class="flex"></div>
        <a id="top-menu" slot="header" data-menu="home" class="active">Home</a>
        <a id="top-menu" slot="header" data-menu="faq">FAQ</a>
        
        <div slot="main">
            <div for="home" class="tab-content">
                <section>
                    <div class='intro'>
                        <h2>KDX</h2>

                        <p>KDX process manager provides zero-effort installation and configuration of the Kaspa 
                        software stack when running in a desktop operating system environment.  KDX allows you to run Kaspa 
                        full node software as well as Kasparov components that provide Kaspa BlockDAG API services.</p>

                        <p>KDX is not a wallet (although it does include 
                            Kaspa's command-line wallet demo).</p><!-- ' -->
                        <p>
                            Developers looking to integrate with Kaspa can leverage KDX to easily test integrations
                            with their development environments.  In production, developers are enouraged to setup their own deployment
                            of the Kaspa software stack by building software from sources or building docker images.
                        </p>

                        &nbsp;<br/>

                        <div row>
                            <div flex></div>
                            <div><img class='screen-shot' src="resources/images/kdx-ui-01.png" /></div>
                            <div flex></div>
                        </div>
                        &nbsp;<br/>
                    </div>
                    <div flex>&nbsp;</div>
                    <div class='separator'></div>
                    <div flex>&nbsp;</div>
                    <div>
                        <div><h2>Download KDX</h2></div>
                        <!-- div red notice><i xclass="fal fa-exclamation-triangle fa-lg"></i>Please read Known Problems</div -->
                        <flow-selector id="file-list" label="Select file" selected="${files.selected}"
                            class="file-list">${files.contents}</flow-selector>
                        <flow-btn @click="${this.onDownloadClick}">Download</flow-btn> 
                        <a class="download-sha1-link" @click="${this.onSha1DownloadClick}">SHA1</a>

                        <div style="text-align: left;">
                            <hr style="width: 30%; margin:24px 0px 14px 4px;"/>
                        </div>
                        
                        <div>
                            <span class="file-link" href=""><div class="icon icon-docker"></div><div>
                                Docker images can be generated<br/> directly from KDX sources.
                            </div></span>
                            
                        </div>
                        
                        
                        <div><h2>Sources</h2></div>
                        <div>
                            <a class="file-link" href="http://github.com/kaspanet/kdx"><div class="icon icon-github"></div><div>http://github.com/kaspanet/kdx</div></a>
                        </div>

                        <div><h2>KDX Components</h2></div>
                        <div>
                            <div style="margin-left:24px;">
                                KDX package includes the following components:
                            </div>
                            <ul class="components">
                                <li>Kaspad full node daemon</li>
                                <li>Kasparov API server</li>
                                <li>Kasparov blockDAG sync server</li>
                                <li>PostgreSQL (database)</li>
                                <li>Mosquitto (MQTT broker)</li>
                            </ul>
                            <div style="margin-left:24px;">
                                Please note that KDX is self-contained - 
                                these components will not be
                                installed on your computer.
                            </div>
                        </div>
                    </div>
            </section>
            <section column>
                <div>
                    <h2>Developers</h2>
                    <ul>
                        <li>KDX includes a miniature build toolchain that allows
                        you to rebuild Kaspa software stack directly from GitHub sources.</li>
                        <li>KDX includes and instance of KExplorer (Kaspa BlockDAG explorer) project configured against local instance of Kasparov API server.</li>
                    </ul>
                </div>
            </section>
        </div>
        
        <div for="faq" class="tab-content">
            <section column>
                <div>
                    <h2 red><i xclass="fal fa-exclamation-triangle fa-lg"></i> Mac OS - Known Problems</h2>
                    <p>
                        <center>
                            Mac OS prevents unsigned applications from execution.  When running KDX first time,
                            you will be prompted with a warning, preventing you from running KDX:
                            <br/>
                            <img class="osx-workaround" src="resources/images/osx-warning-dialog.png" />
                        </center>
                        <center>
                            Go to System Preferences, where you will see a note, allowing you to "Open Anyway"
                            <br/>
                            <img class="osx-workaround" style="min-width:560px;" src="resources/images/osx-settings-warning.png" />
                        </center>
                        <center>
                            Alternatively:
                            <br/>
                            <img class="osx-workaround" style="width:360px;" src="resources/images/osx-open-app-by-overriding.png" />
                        </center>
                    </p>
                    <h2 red><i xclass="fal fa-exclamation-triangle fa-lg"></i> Windows - Known Problems</h2>
                    <p>
                        Some OEM computers experience compatibility issue between PostgreSQL database module
                        and certain types of <u>international (non-US) Windows 10 installations</u>.  This problem especially
                        exists across DELL computers with manufacturer pre-installed Windows.
                    </p>
                    <p>
                        <strong red>Symptoms:</strong> Postgres fails to start, giving errors related to Locale settings such as:
                    &nbsp; <span monospace>WARNING: 01000: could not determine encoding for locale "English_Israel.utf8": codeset is "CPutf8"</span>
                        
                    </p>
                    <p>
                        Microsoft have introduced an experimental beta option for computer locale settings
                        that causes a variety of application compatibility issues and on some OEM OS installations
                        this option is turned on by default, which it should not be.
                    </p>
                    <p> If you are experiencing this, you need to apply the following workaround:</span></p>
                    <br/>
                    <p>
                        <center>
                            <h4>Open Control Panel and search for "Languages"</h4>
                            <img class="workaround" src="resources/images/control-panel.png" />
                        </center>
                        <center>
                            <h4>In the Languages panel select "Administrative Language Settings"</h4>
                            <img class="workaround" src="resources/images/language-panel.png" />
                        </center>
                        <center>
                            <h4>Select "Change system locale..."</h4>
                            <img class="workaround" src="resources/images/region-settings.png" />
                        </center>
                        <center>
                            <h4>Make sure that "Beta: Use Unicode UTF-8" checkbox if OFF</h4>
                            <img class="workaround" src="resources/images/system-locale.png" />
                        </center>
                        <center><h4>Reboot your computer.</h4></center>
                        <hr width="50%"/>
                    </p>
                </div>
            </section>
        </div>
    </div>
        </flow-app>
        `;
    }

    renderFiles(){
        let userOS = this.getOS();
        let selected = '';
        let contents = Object.entries({
            'kdx-v1.0.0-windows-x64.exe' : 'installer',
            'kdx-v1.0.0-windows-x64.zip' : 'portable',
            'kdx-v1.0.3-darwin-x64.dmg' : 'DMG',
            '-kdx-1.0.3-darwin-x64.zip' : 'portable',
            '-kdx-1.0.0-linux-x64.zip' : 'portable'
        }).map(([file, descr]) => {
            let disable = '';
            if(file.charAt(0) == '-') {
                file = file.substring(1);
                disable = 'disable';
            }

            let [app,version,os,platform] = file.split('-');
            if(!selected && os == userOS)
                selected = file;
            return html`
            <flow-download-badge class="dl-wrapper ${disable} menu-item"
                file="downloads/${file}"
                icon="resources/images/${os}.svg"
                title="${file}"
                descr="${descr}"
                value="${file}"
                data-text="${file} ${descr}"
                ></flow-download-badge>
            `;
        });
        return {contents, selected}
    }
    getOS(){
        let userAgent = window.navigator.userAgent,
          platform = window.navigator.platform,
          macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'],
          windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'],
          iosPlatforms = ['iPhone', 'iPad', 'iPod'],
          os = null;

        if (macosPlatforms.indexOf(platform) !== -1) {
            os = 'darwin';
        } else if (iosPlatforms.indexOf(platform) !== -1) {
            os = 'ios';
        } else if (windowsPlatforms.indexOf(platform) !== -1) {
            os = 'windows';
        } else if (/Android/.test(userAgent)) {
            os = 'android';
        } else if (!os && /Linux/.test(platform)) {
            os = 'linux';
        }

        return os;
    }

    onDownloadClick(){
        let file = this.renderRoot.querySelector("#file-list").selected;
        if(!file)
            return
        this.download(file, 'downloads/'+file);
    }
    onSha1DownloadClick(){
        let file = this.renderRoot.querySelector("#file-list").selected;
        if(!file)
            return
        this.download(file+" SHA1", 'downloads/'+file+'.sha1sum');
    }

    download(name, href){
        let a = document.createElement('a');
        a.href = href;
        a.setAttribute("download", name);
        this.appendChild(a);
        a.click();
        setTimeout(()=>{
            this.removeChild(a);
        }, 1000)
    }

    getStateFromUrl(){
		//TODO 
		let menu = window.location.hash.replace("#", "");
		return {menu};
	}

    activateMenu(menu){
		console.log("MENU", menu)
		window.location.hash = menu;
		this.bodyEl.querySelectorAll(".tab-content").forEach(el=>{
			let m = el.getAttribute("data-menu") || el.getAttribute("for");
			if(el.classList.contains("active")){
				if(m == menu)
					return
                el.classList.remove("active");
			}
			if(m == menu){
                el.classList.add("active");
			}
		})
    }
    
    initTabs(){
        this.menuEl = document.querySelectorAll("#top-menu");
        console.log("MENU EL", this.menuEl);
        this.menuEl.forEach(el=>{
            addEventListener("click", e=>{
            el = e.target.closest("[data-menu]");
            console.log("ELEMENT", el);
			if(!el 
				//|| el.classList.contains("active")
				|| el.classList.contains("disabled"))
				return

			this.activateMenu(el.getAttribute("data-menu"));
        })});

        let {menu} = this.getStateFromUrl();
        console.log("MENU STATE FROM URL",menu);
		menu = menu || "home";
		this.activateMenu(menu);
	}

}

HomePage.define("home-page");
