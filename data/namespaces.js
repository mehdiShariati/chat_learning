// Mock data baraye Chat
const Namespace =  require('../classes/Namespace');
const Room =  require('../classes/Room');


let namespaces = [];
let wikiNs = new Namespace(0,'Wiki','https://upload.wikimedia.org/wikipedia/en/thumb/8/80/Wikipedia-logo-v2.svg/103px-Wikipedia-logo-v2.svg.png','/wiki');
let masoudNs = new Namespace(1,'masoud','https://www.mozilla.org/media/img/logos/firefox/logo-quantum.9c5e96634f92.png','/masoud');
let MehdiNs = new Namespace(2,'Mehdi','https://upload.wikimedia.org/wikipedia/commons/a/af/Tux.png','/Mehdi');

namespaces.push(wikiNs,masoudNs,MehdiNs);


wikiNs.addRoom(new Room(0,'New Articles','Wiki'));
wikiNs.addRoom(new Room(1,'Editors','Wiki'));
wikiNs.addRoom(new Room(2,'Other','Wiki'));

 masoudNs.addRoom(new Room(0,'Firefox','Mozilla'));
 masoudNs.addRoom(new Room(1,'SeaMonkey','Mozilla'));
 masoudNs.addRoom(new Room(2,'SpiderMonkey','Mozilla'));
 masoudNs.addRoom(new Room(3,'Rust','Mozilla'));

MehdiNs.addRoom(new Room(0,'Debian','Linux'));
MehdiNs.addRoom(new Room(1,'Red Hat','Linux'));
MehdiNs.addRoom(new Room(2,'MacOs','Linux'));
MehdiNs.addRoom(new Room(3,'Kernal Development','Linux'));

module.exports = namespaces;