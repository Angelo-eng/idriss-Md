const _0x4b1923=_0x513a;(function(_0x1909dd,_0x4e9bcc){const _0x4e548a=_0x513a,_0x3081ff=_0x1909dd();while(!![]){try{const _0x4e359e=-parseInt(_0x4e548a(0x93))/0x1+-parseInt(_0x4e548a(0x92))/0x2+-parseInt(_0x4e548a(0x8f))/0x3+-parseInt(_0x4e548a(0xa4))/0x4+parseInt(_0x4e548a(0xa7))/0x5+-parseInt(_0x4e548a(0x96))/0x6*(parseInt(_0x4e548a(0x99))/0x7)+parseInt(_0x4e548a(0x9c))/0x8*(parseInt(_0x4e548a(0x8d))/0x9);if(_0x4e359e===_0x4e9bcc)break;else _0x3081ff['push'](_0x3081ff['shift']());}catch(_0x254b5d){_0x3081ff['push'](_0x3081ff['shift']());}}}(_0x1495,0x5cd50));import _0x1463ac from'node-fetch';import _0x312e91 from'cheerio';let handler=async(_0x215b6e,{conn:_0xfa70b0,args:_0x2896fe,usedPrefix:_0x2c5d06,command:_0x537ebc})=>{const _0x8ca5bb=_0x513a,_0x54dcc2=_0x2896fe[_0x8ca5bb(0xa8)]>=0x1?_0x2896fe[_0x8ca5bb(0x80)](0x0)[_0x8ca5bb(0x89)]('\x20'):_0x215b6e[_0x8ca5bb(0x79)]&&_0x215b6e[_0x8ca5bb(0x79)]?.['text']||_0x215b6e['quoted']?.['caption']||_0x215b6e['quoted']?.['description']||null;if(!_0x54dcc2)return _0x215b6e[_0x8ca5bb(0x7a)](_0x8ca5bb(0x82)+_0x2c5d06+_0x537ebc+_0x8ca5bb(0xa3));try{const _0x4b1b01=[{'role':_0x8ca5bb(0x81),'content':_0x8ca5bb(0x7f)},{'role':'user','content':_0x54dcc2}],_0x542ddc=await ChatGpt(_0x4b1b01[0x0][_0x8ca5bb(0x9d)],_0x4b1b01[0x1][_0x8ca5bb(0x9d)]);await _0x215b6e[_0x8ca5bb(0x7a)](_0x542ddc);}catch(_0x3cd13b){try{let _0x49e16a=await bardaifree(_0x54dcc2);await _0x215b6e['reply'](_0x49e16a);}catch(_0x248caa){try{let _0x2436c4=await chatgptss(_0x54dcc2);await _0x215b6e[_0x8ca5bb(0x7a)](_0x2436c4);}catch(_0x2ffabf){try{let _0x5e779c=await bartai(_0x54dcc2);await _0x215b6e[_0x8ca5bb(0x7a)](_0x5e779c);}catch(_0x3e97fc){await _0x215b6e[_0x8ca5bb(0x7a)](eror);}}}}};handler[_0x4b1923(0x7c)]=['chatgpt'],handler[_0x4b1923(0x87)]=[_0x4b1923(0x8b),'ai','gpt'],handler[_0x4b1923(0xa1)]=/^(ai|gpt4|chatgpt|bard)$/i;export default handler;async function processChat(_0x2cfce4,_0x1f5590){const _0xc50c12=_0x4b1923;try{const _0x2e5c6a=await(await _0x1463ac(_0x2cfce4))[_0xc50c12(0x9f)](),_0x11ef22=_0x312e91[_0xc50c12(0xa0)](_0x2e5c6a),_0x4800aa=_0x11ef22(_0xc50c12(0x83))[_0xc50c12(0x7b)]((_0x40c535,_0x1aa275)=>{const _0x3a9127=_0xc50c12;return Object[_0x3a9127(0x84)](Object['entries'](_0x1aa275[_0x3a9127(0x8e)]));})[_0xc50c12(0x78)](),_0x3e1067=new FormData();_0x3e1067[_0xc50c12(0x9a)]('_wpnonce',_0x4800aa[0x0][_0xc50c12(0xa5)]),_0x3e1067[_0xc50c12(0x9a)]('post_id',_0x4800aa[0x0][_0xc50c12(0x8c)]),_0x3e1067['append'](_0xc50c12(0x98),_0xc50c12(0x8a)),_0x3e1067[_0xc50c12(0x9a)](_0xc50c12(0x88),_0x1f5590);const _0x2a15ea=await _0x1463ac(_0x2cfce4+'/wp-admin/admin-ajax.php',{'method':_0xc50c12(0x97),'body':_0x3e1067});if(!_0x2a15ea['ok'])throw new Error(_0xc50c12(0x77));const {data:_0x3b6b47}=await _0x2a15ea['json']();return _0x3b6b47||'';}catch(_0x505eba){console[_0xc50c12(0x7d)]('An\x20error\x20occurred:',_0x505eba['message']);throw _0x505eba;}}async function chatgptss(_0x350aa7){const _0x5dcade=_0x4b1923;try{const _0x4b90b2=await processChat(_0x5dcade(0x94),_0x350aa7);return _0x4b90b2;}catch(_0x45b933){console[_0x5dcade(0x7d)]('An\x20error\x20occurred:',_0x45b933[_0x5dcade(0x88)]);throw _0x45b933;}}async function bardaifree(_0x33f9ed){const _0xd8cea4=_0x4b1923;try{const _0x505b82=await processChat(_0xd8cea4(0xa2),_0x33f9ed);return _0x505b82;}catch(_0x37c45b){console[_0xd8cea4(0x7d)]('An\x20error\x20occurred:',_0x37c45b['message']);throw _0x37c45b;}}async function bartai(_0x24c9ff){const _0x3bb8b3=_0x4b1923;try{const _0x43631e=await processChat('https://bartai.org',_0x24c9ff);return _0x43631e;}catch(_0x4f7916){console[_0x3bb8b3(0x7d)](_0x3bb8b3(0x9b),_0x4f7916['message']);throw _0x4f7916;}}function _0x513a(_0x1d38db,_0x1be4f5){const _0x1495c7=_0x1495();return _0x513a=function(_0x513ae9,_0x270140){_0x513ae9=_0x513ae9-0x77;let _0x1c49f0=_0x1495c7[_0x513ae9];return _0x1c49f0;},_0x513a(_0x1d38db,_0x1be4f5);}async function ChatGpt(_0x5d6634,_0x48bdc4){const _0x3aa152=_0x4b1923;try{const _0x41bc9f='47.116.100.195',_0x5afe30=_0x3aa152(0x7e),_0x26cd89={'method':_0x3aa152(0x97),'headers':{'Host':_0x41bc9f,'User-Agent':'Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/114.0.0.0\x20Safari/537.36','Accept':_0x3aa152(0x86),'Accept-Language':_0x3aa152(0xa6),'Content-Type':_0x3aa152(0x9e),'Origin':_0x3aa152(0x95)},'body':JSON['stringify']({'prompt':_0x48bdc4,'network':!![],'system':_0x5d6634,'withoutContext':![],'stream':![]})},_0x24a140=await _0x1463ac(_0x3aa152(0x91)+_0x41bc9f+':'+_0x5afe30+_0x3aa152(0x85),_0x26cd89),_0x4b72a7=await _0x24a140[_0x3aa152(0x9f)]();return _0x4b72a7;}catch(_0x3eee25){throw new Error(_0x3aa152(0x90));}}function _0x1495(){const _0x207bd5=['append','An\x20error\x20occurred:','8gWHDfW','content','application/json','text','load','command','https://bardaifree.com','\x20Hi,\x20how\x20are\x20you?','387464JqIdwB','data-nonce','id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7','1051170itLvNe','length','Network\x20response\x20was\x20not\x20ok','get','quoted','reply','map','help','error','188','Anda\x20adalah\x20asisten\x20yang\x20membantu.','slice','system','Enter\x20the\x20text\x20or\x20reply\x20to\x20the\x20message\x20with\x20the\x20text\x20you\x20want\x20to\x20process.\x0aExample\x20usage:\x0a*\x20','.wpaicg-chat-shortcode','fromEntries','/api/generateStream','application/json,\x20text/plain,\x20*/*','tags','message','join','wpaicg_chatbox_message','internet','data-post-id','10732347FgtwoI','attribs','1640187dPKVHa','Error\x20fetching\x20data\x20from\x20AI\x20service.','http://','670638YNGSii','32864TWHQyb','https://chatgptss.org','http://47.116.100.195','78wPKGgQ','POST','action','5761FvkQuB'];_0x1495=function(){return _0x207bd5;};return _0x1495();}