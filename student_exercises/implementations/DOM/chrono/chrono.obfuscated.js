const _0x4bf711=_0x509c;(function(_0x116215,_0x181cd0){const _0x1fd812=_0x509c,_0x2f2eb8=_0x116215();while(!![]){try{const _0x4b4be8=-parseInt(_0x1fd812(0x194))/0x1+parseInt(_0x1fd812(0x191))/0x2+parseInt(_0x1fd812(0x190))/0x3*(-parseInt(_0x1fd812(0x18d))/0x4)+parseInt(_0x1fd812(0x180))/0x5*(parseInt(_0x1fd812(0x18e))/0x6)+parseInt(_0x1fd812(0x17d))/0x7*(-parseInt(_0x1fd812(0x195))/0x8)+parseInt(_0x1fd812(0x186))/0x9*(-parseInt(_0x1fd812(0x18b))/0xa)+parseInt(_0x1fd812(0x18a))/0xb*(parseInt(_0x1fd812(0x17f))/0xc);if(_0x4b4be8===_0x181cd0)break;else _0x2f2eb8['push'](_0x2f2eb8['shift']());}catch(_0x277b7a){_0x2f2eb8['push'](_0x2f2eb8['shift']());}}}(_0x95b8,0x63302));const vitesseInterval=0xa;function _0x95b8(){const _0x54edd8=['secondes','minutes','length','801WFFoEV','addEventListener','forEach','millisecondes','33sqhnrD','64490ldyFTi','innerHTML','20vECUlx','13242nfKPDB','#app','312027CleyCk','943266DDZWEB','querySelector','\x0a\x20\x20<div\x20id=\x22ecran\x22>00:00:00</div>\x0a\x20\x20<button\x20id=\x22start\x22>Start</button>\x0a\x20\x20<button\x20id=\x22stop\x22>Stop</button>\x0a\x20\x20<button\x20id=\x22reset\x22>Reset</button>\x0a\x20\x20<button\x20id=\x22ti\x22>TI</button>\x0a\x20\x20<ul\x20id=\x22resultats\x22></ul>\x0a','405614ZPgHwT','856OfwJWM','splice','6797UTYzMN','reset','4254612jNpyKd','1075EQhRXt','#resultats','#ecran'];_0x95b8=function(){return _0x54edd8;};return _0x95b8();}function _0x509c(_0x228b78,_0x264f67){const _0x95b84b=_0x95b8();return _0x509c=function(_0x509c86,_0x37b4a4){_0x509c86=_0x509c86-0x17c;let _0x38d172=_0x95b84b[_0x509c86];return _0x38d172;},_0x509c(_0x228b78,_0x264f67);}let millisecondes=0x0,secondes=0x0,minutes=0x0,interval=undefined,isDisplay=!![];const listTI=[],myApp=document[_0x4bf711(0x192)](_0x4bf711(0x18f));myApp[_0x4bf711(0x18c)]=_0x4bf711(0x193),myApp[_0x4bf711(0x187)]('click',_0x45dfba=>{const _0x452762=_0x4bf711,_0xdf04be=_0x45dfba['target'];switch(!![]){case _0xdf04be['id']==='start':if(interval!==undefined)return;interval=setInterval(()=>{start(),affichage();},vitesseInterval);break;case _0xdf04be['id']==='stop':clearInterval(interval),interval=undefined;break;case _0xdf04be['id']===_0x452762(0x17e):clearInterval(interval),interval=undefined,millisecondes=0x0,secondes=0x0,minutes=0x0,listTI[_0x452762(0x17c)](0x0,listTI[_0x452762(0x185)]),affichage();break;case _0xdf04be['id']==='ti':const _0x3c20a8={'millisecondes':millisecondes,'secondes':secondes,'minutes':minutes};listTI['push'](_0x3c20a8);break;default:break;}});const start=()=>{millisecondes<0x3e8-vitesseInterval?millisecondes+=vitesseInterval:(millisecondes=0x0,secondes+=0x1),secondes>=0x3c&&(secondes=0x0,minutes+=0x1);},affichage=()=>{const _0x43d629=_0x4bf711,_0x3d1141=document['querySelector'](_0x43d629(0x182));_0x3d1141[_0x43d629(0x18c)]=(minutes<0xa?'0'+minutes:minutes)+':'+(secondes<0xa?'0'+secondes:secondes)+':'+(millisecondes<vitesseInterval?'0'+millisecondes:millisecondes/0xa);const _0x276679=document['querySelector'](_0x43d629(0x181));_0x276679[_0x43d629(0x18c)]='',listTI[_0x43d629(0x188)](_0xe21c72=>{const _0x3277a4=_0x43d629;_0x276679[_0x3277a4(0x18c)]+='<li>'+_0xe21c72[_0x3277a4(0x184)]+':'+_0xe21c72[_0x3277a4(0x183)]+':'+_0xe21c72[_0x3277a4(0x189)]+'</li>';});};