const extensionUtil = {
    list: {
        // add more extensions if needed
      "securly_new": {
        name: "Securly",
        url: "chrome-extension://joflmkccibkooplaeoinecjbmdebglab/fonts/Metropolis.css"
      },
      "securly_old": {
        name: "Securly (old)",
        url: "chrome-extension://iheobagjkfklnlikgihanlhcddjoihkg/fonts/Metropolis.css"
      },
      "goguardian": {
        name: "Goguardian",
        url: "chrome-extension://haldlgldplgnggkjaafhelgiaglafanh/youtube_injection.js"
      },
      "lanschool": {
        name: "LANSchool",
        url: "chrome-extension://baleiojnjpgeojohhhfbichcodgljmnj/blocked.html"
      },
      "linewize": {
        name: "Linewize",
        url: "chrome-extension://ddfbkhpmcdbciejenfcolaaiebnjcbfc/background/assets/pages/default-blocked.html"
      },
      "blocksi": {
        name: "Blocksi",
        url: "chrome-extension://ghlpmldmjjhmdgmneoaibbegkjjbonbk/pages/blockPage.html"
      },
      "fortiguard": {
        name: "Fortiguard",
        url: "chrome-extension://igbgpehnbmhgdgjbhkkpedommgmfbeao/youtube_injection.js"
      },
      "cisco": {
        name: "Cisco Umbrella",
        url: "chrome-extension://jcdhmojfecjfmbdpchihbeilohgnbdci/blocked.html"
      },
      "contentkeeper": {
        name: "ContentKeeper",
        url: "chrome-extension://jdogphakondfdmcanpapfahkdomaicfa/img/ckauth19x.png"
      },
      "securlyclassroom": {
        name: "Securly Classroom",
        url: "chrome-extension://jfbecfmiegcjddenjhlbhlikcbfmnafd/notfound.html"
      },
      "hapara": {
        name: "Hapara",
        url: "chrome-extension://kbohafcopfpigkjdimdcdgenlhkmhbnc/blocked.html"
      },
      "iboss": {
        name: "iboss",
        url: "chrome-extension://kmffehbidlalibfeklaefnckpidbodff/restricted.html"
      },
      "lighspeed": {
        name: "Lightspeed",
        url: "chrome-extension://adkcpkpghahmbopkjchobieckeoaoeem/icon-128.png"
      },
      "interclass": {
        name: "InterCLASS Filtering Service",
        url: "chrome-extension://jbddgjglgkkneonnineaohdhabjbgopi/pages/message-page.html"
      },
      "intersafe": {
        name: "InterSafe GatewayConnection Agent",
        url: "chrome-extension://ecjoghccnjlodjlmkgmnbnkdcbnjgden/resources/options.js"
      },
      "gopher_buddy": {
        name: "Gopher Buddy",
        url: "chrome-extension://cgbbbjmgdpnifijconhamggjehlamcif/images/gopher-buddy_128x128_color.png"
      },
      "lanschool_helper": {
        name: "LanSchool Web Helper",
        url: "chrome-extension://honjcnefekfnompampcpmcdadibmjhlk/blocked.html"
      },
      "imtlazarus": {
        name: "IMTLazarus",
        url: "chrome-extension://cgigopjakkeclhggchgnhmpmhghcbnaf/models/model.json"
      },
      "impero_backdrop": {
        name: "Impero Backdrop",
        url: "chrome-extension://jjpmjccpemllnmgiaojaocgnakpmfgjg/licenses.html"
      },
      "mobile_guardian": {
        name: "Mobile Guardian",
        url: "chrome-extension://fgmafhdohjkdhfaacgbgclmfgkgokgmb/block.html"
      }
    },
  
     // this check system is based on dextensify, by ading.dev
     check: async function () {
        let detected = [];
        let school = false
    
        const check_url = async (url) => {
          let controller = new AbortController();
          let timeout = setTimeout(() => controller.abort(), 500);
          
    
          try {
            await fetch(url, { signal: controller.signal });
            return true;
          } catch (error) {
            let error_msg = error + "";
            return error_msg.includes("AbortError");
          }
        };
    
        for (let extension of Object.values(extensionUtil.list)) {
          let exists = await check_url(extension.url);
          if (exists) {
            detected.push(extension);
            school = true
          }
        }
    
        if (!window.chrome) {
          console.log("Extensions cannot be detected because the user is not using a Chromium browser.");
          school = error
          return [];
        }
    
        return detected;
      }
    };

    
