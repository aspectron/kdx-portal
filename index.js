
import {BaseElement, html, dpc} from 'https://cdn.aspectron.com/latest/flow-ux-static/flow-ux/flow-ux.js';
import {downloads} from './downloads.js';
//import {BaseElement, html, css, dpc} from './node_modules/@aspectron/flow-ux/dist/latest/flow-ux-static/flow-ux/flow-ux.js';

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
        //console.log("IN INIT()");
	    //dpc(()=>this.setLoading(false));
	}

	initUI(){
		this.bodyEl = document.body;
		this.initTabs();
	}

    createRenderRoot(){
        return this;
    }

    render(){

        const dagvizUrl = /^localhost/.test(window.location.host) ? 'http://localhost:8686' : 'https://alpha.dagviz.com';
        const iframeSrc = `${dagvizUrl}?noux=true&quality=high&track=1&k=0.3&displace=0.3`;

        let files = this.renderFiles();
        return html`
        <flow-app floating-drawer>
            <img slot="header" class="logo" src="resources/images/kdx.svg" />
            <div slot="header"><h2>KDX<!-- span class='beta'>BETA</span --></h2></div>
            <div slot="header" class="flex"></div>
            <div slot="header" class="top-menus" @click="${this.onTopMenuClick}">
                <a data-menu="home" class="active">Home</a>
                <a data-menu="faq">FAQ</a>
            </div>

            <div slot="footer" class='footer-wrapper'>
                <div class="footer">
                    Copyright (c) ${new Date().getFullYear()} KDX &amp; Kaspa Developers.  All Rights Reserved.
                </div>
            </div>
            
            <div slot="main">
                <div for="home" class="tab-content">
                    <section>
                        <div class='intro'>
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

                            <div>
                                <h2>Kaspa Network</h2>
                                <p>
                                    Kaspa is a <a href="https://en.bitcoin.it/wiki/Proof_of_work" target="_blank">PoW</a>-based
                                    ledger organized in a DAG (Directed Acyclic Graph) of blocks -- a
                                    <a href="https://docs.kas.pa/kaspa/reference/blockdag" target="_blank"> blockDAG.</a>
                                </p>
                                <p>
                                    A new block gets added to the blockDAG every second and many blocks are created in parallel.
                                    Unlike a blockchain, blocks are not
                                        <a href="https://en.bitcoin.it/wiki/Orphan_Block" target="_blank">orphaned</a>.
                                            Kaspa merges all blocks into one blockDAG by allowing them to reference multiple parents.
                                    
                                </p>
                                <p>
                                    Rather than deciding on which conflicting blocks to discard,
                                    the consensus protocol governing the blockDAG, known as
                                    <a href="https://eprint.iacr.org/2018/104.pdf" target="_blank">PHANTOM</a>,
                                    orders blocks created in parallel. PHANTOM is a generalization
                                    of Bitcoin’s Nakamoto Consensus.
                                </p>
                            </div>

                        </div>
                        <div flex>&nbsp;</div>
                        <div class='separator'></div>
                        <div flex>&nbsp;</div>
                        <div>
                            <!-- div style="background-color:#fcc;padding:16px;border:1px solid #ccc;border-radius:10px;"><center><b>UNDER CONSTRUCTION</b><br/>
                                DOWNLOADS WILL BE AVAILABLE<br/>IN THE COMING DAYS</center>
                            </div -->
                            <div><h2>Download KDX</h2></div>
                            <!-- div red notice><i xclass="fal fa-exclamation-triangle fa-lg"></i>Please read Known Problems</div -->
                            <flow-selector id="file-list" label="Select file" hidefilter selected="${files.selected}"
                                class="file-list">${files.contents}</flow-selector>
                            <flow-btn @click="${this.onDownloadClick}">Download</flow-btn> 
                            <a class="download-sha1-link" @click="${this.onSha1DownloadClick}">SHA1</a>

                            <div style="text-align: left;">
                                <hr style="width: 30%; margin:24px 0px 14px 4px;"/>
                            </div>

                            <div style="max-width:400px;">
                                KDX is available in two editions:<br/>
                                <ul>
                                <li><b>STANDARD</b> - Full Kaspa Stack</li>
                                <li><b>DEV</b> - includes kExplorer, DAGViz and kMetrics test applications. This build is intended for developes and is heavier on the system.</li>
                                </ul>
                                Current release: &nbsp; KDX 1.2.0 &nbsp; Kaspa 0.7.2-dev<br/>
                                
                            </div>

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
                                <a class="file-link" href="http://github.com/kaspanet" target="_blank"><div class="icon icon-github"></div><div><span style="color:black;">Kaspa -</span> http://github.com/kaspanet</div></a>
                                <a class="file-link" href="http://github.com/aspectron/kdx" target="_blank"><div class="icon icon-github"></div><div><span style="color:black;">KDX -</span>http://github.com/aspectron/kdx</div></a>
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
                            <div><h2>Kaspa Resources</h2></div>
                            <div>
                                <a class="file-link" href="https://discord.gg/vMT39xB" target="_blank"><div class="icon icon-discord"></div><div>Discord Chat</div></a>
                                <a class="file-link" href="https://docs.kas.pa/kaspa/about-kaspa/get-started" target="_blank"><div class="icon icon-book"></div><div>Documentation</div></a>
                            </div>

                        </div>
                </section>
                <section column>
                    <div>
                        DAGViz Phantom visualizer and DAG explorer can be found at <a href="https://alpha.dagviz.com" target="_blank">https://alpha.dagviz.com</a><br/>&nbsp;
                    </div>
                    <div row>
                        <iframe id="dagviz" src="${iframeSrc}" border="0"></iframe>
                        <div flex></div>
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
                    <h3>Frequently Asked Questions</h3>
                    <p>
                        Following section contains information and tips to help you troubleshoot KDX.
                    </p>
                    <flow-expandable caption="Mac OS prevents unsigned applications from running">
                        <center>
                            When running KDX for the first time, you may be prompted with a warning, preventing you from running KDX:
                            <br/>
                            <img class="osx-workaround" src="resources/images/osx-warning-dialog.png" />
                        </center>
                        <center>
                            To resolve this, go to System Preferences, where you will see a note, allowing you to "Open Anyway"
                            <br/>
                            <img class="osx-workaround" style="min-width:560px;" src="resources/images/osx-settings-warning.png" />
                        </center>
                        <center>
                            Alternatively:
                            <br/>
                            <img class="osx-workaround" style="width:360px;" src="resources/images/osx-open-app-by-overriding.png" />
                        </center>
                    </flow-expandable>
                    <flow-expandable xcaption="PostgreSQL modules fails to start on Windows">
                        <span slot="title">
                            PostgreSQL fails to start on Windows. Enabling Advanced options and looking in the PostgreSQL terminal tab
                            you can see errors related to Locale settings such as:<br/>
                            <flow-code fixindent lang="text">
                                <textarea>
                                    WARNING: 01000: could not determine encoding 
                                    for locale "English_<country>.utf8": codeset is "CPutf8"
                                </textarea>
                            </flow-code>
                        </span>
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
                    </flow-expandable>
                    <flow-expandable xcaption="PostgreSQL modules fails to start on Windows">
                        <span slot="title">
                            PostgreSQL fails to start (development environment) with a similar message:<br/>
                            <flow-code fixindent lang="text">
                                <textarea>
                                    Exiting...2020-10-07 20:48:00.165 [INF] KVSD: Version 0.7.2
                                    2020-10-07 20:48:00.172 [CRT] KVSD: Exiting: Fatal error in goroutine 'main':
                                    Error connecting to database: Database is not current (version 0). 
                                    Please migrate the database by running the server with --migrate flag and then run it again
                                </textarea>
                            </flow-code>
                        </span>
                        <p>
                            This occurs when Kasparov upgrades its database (PostgreSQL database schema).
                            You can upgrade the database manually by running the <flow-code>migrate</flow-code> command from KDX Console.
                        </p>
                    </flow-expandable>
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
            'kdx-v1.2.0-windows-x64.exe' : 'installer',
            'kdx-dev-v1.2.0-windows-x64.exe' : 'installer',
            'kdx-v1.2.0-windows-x64.zip' : 'portable',
            'kdx-dev-v1.2.0-windows-x64.zip' : 'portable',
            'kdx-v1.2.0-darwin-x64.dmg' : 'DMG',
            'kdx-dev-v1.2.0-darwin-x64.dmg' : 'DMG',
            //'kdx-v1.2.0-darwin-x64.tar.gz' : 'portable',
            //'-kdx-1.0.3-darwin-x64.zip' : 'portable',
            '-kdx-v1.2.0-linux-x64.zip' : 'portable'
        }).map(([file, descr]) => {
            let disable = '';
            if(file.charAt(0) == '-') {
                file = file.substring(1);
                disable = 'disable';
            }
/*


*/
            let [app,suffix] = file.split('-v');
            let [version,os,platform] = suffix.split('-');
            // let [app,version,os,platform] = file.split('-');
            let size = '';
            if(downloads[file])
                size = downloads[file].size.toFileSize(true);

            if(!selected && os == userOS)
                selected = file;
            return html`
            <flow-download-badge class="dl-wrapper ${disable} menu-item"
                file="downloads/${file}"
                icon="resources/images/${os}.svg"
                value="${file}"
                title="${file}"
                xdescr="${descr}"
                data-text="${file} ${descr}"
                >
                ${
                    !/-dev-/.test(file) ? 
                html`<div style="color:#666;"><div style="font-size:0.62em;"><b>STANDARD</b></div><div style="font-size:0.62em;">${descr.toUpperCase()}</div><div style="font-size:0.70em;">${size}</div></div>` : 
                html`<div style="color:#666;"><div  style="font-size:0.62em;"><b>DEV</b></div><div style="font-size:0.62em;">${descr.toUpperCase()}</div><div style="font-size:0.70em;"><nobr>${size}</div></div>`
                }
                
                
            </flow-download-badge>
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
        let file = this.renderRoot.querySelector("#file-list").value;
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
		this.renderRoot.querySelectorAll(".tab-content, [data-menu]").forEach(el=>{
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

    firstUpdated(){
        this.initUI();
    }
    
    initTabs(){
        this.menuEl = this.renderRoot.querySelectorAll("#top-menu");
        console.log("MENU EL", this.menuEl);

        let {menu} = this.getStateFromUrl();
        console.log("MENU STATE FROM URL",menu);
		menu = menu || "home";
		this.activateMenu(menu);
	}

    onTopMenuClick(e){
        let el = e.target.closest("[data-menu]");
        console.log("ELEMENT", el);
        if(!el 
            //|| el.classList.contains("active")
            || el.classList.contains("disabled"))
            return

        this.activateMenu(el.getAttribute("data-menu"));
    }

}

HomePage.define("home-page");


if(!Number.prototype.toFileSize) {
    Object.defineProperty(Number.prototype, 'toFileSize', {
       value: function(a, asNumber){
           var b,c,d;
           var r = (
               a=a?[1e3,'k','B']:[1024,'K','iB'],
               b=Math,
               c=b.log,
               d=c(this)/c(a[0])|0,this/b.pow(a[0],d)
           ).toFixed(2)
  
           if(!asNumber){
               r += ' '+(d?(a[1]+'MGTPEZY')[--d]+a[2]:'Bytes');
           }
           return r;
       },
       writable:false,
       enumerable:false
    });
}