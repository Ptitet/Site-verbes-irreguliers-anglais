const vbs = [
    ['casser', 'break', 'broke', 'broken'],
    ['choisir', 'choose', 'chose', 'chosen'],
    ['conduire', 'drive', 'drove', 'driven'],
    ['manger', 'eat', 'ate', 'eaten'],
    ['tomber', 'fall', 'fell', 'fallen'],
    ['interdire', 'forbid', 'forbade', 'forbidden'],
    ['oublier', 'forget', 'forgot', 'forgotten'],
    ['pardonner', 'forgive', 'forgave', 'forgiven'],
    ['geler', 'freeze', 'froze', 'frozen'],
    ['donner', 'give', 'gave', 'given'],
    ['(se) cacher', 'hide', 'hid', 'hidden'],
    ['se promener (cheval, vélo, ...)', 'ride', 'rode', 'ridden'],
    ['se lever (soleil)', 'rise', 'rose', 'risen'],
    ['voir', 'see', 'saw', 'seen'],
    ['secouer / serrer la main', 'shake', 'shook', 'shaken'],
    ['parler', 'speak', 'spoke', 'spoken'],
    ['voler / dérober', 'steal', 'stole', 'stolen'],
    ['prendre', 'take', 'took', 'taken'],
    ['se réveiller', 'wake', 'woke', 'woken'],
    ['écrire', 'write', 'wrote', 'written'],
    ['souffler', 'blow', 'blew', 'blown'],
    ['voler (oiseau, avion)', 'fly', 'flew', 'flown'],
    ['grandir', 'grow', 'grew', 'grown'],
    ['savoir / connaître', 'know', 'knew', 'known'],
    ['jeter', 'throw', 'threw', 'thrown'],
    ['faire', 'do', 'did', 'done'],
    ['aller', 'go', 'went', 'gone'],
    ['être couché', 'lie', 'lay', 'lain'],
    ['parier', 'bet', 'bet', 'bet'],
    ['coûter', 'cost', 'cost', 'cost'],
    ['couper', 'cut', 'cut', 'cut'],
    ['frapper', 'hit', 'hit', 'hit'],
    ['blesser / faire mal', 'hurt', 'hurt', 'hurt'],
    ['laisser / permettre', 'let', 'let', 'let'],
    ['poser / mettre', 'put', 'put', 'put'],
    ['lire', 'read', 'read', 'read'],
    ['débarasser', 'rid', 'rid', 'rid'],
    ['fermer', 'shut', 'shut', 'shut'],
    ['devenir', 'become', 'became', 'become'],
    ['venir', 'come', 'came', 'come'],
    ['courrir', 'run', 'ran', 'run'],
    ['plier', 'bend', 'bent', 'bent'],
    ['construire', 'build', 'built', 'built'],
    ['brûler', 'burn', 'burnt', 'burnt'],
    ['apprendre', 'learn', 'learnt', 'learnt'],
    ['prêter', 'lend', 'lent', 'lent'],
    ['envoyer', 'send', 'sent', 'sent'],
    ['sentir (odorat)', 'smell', 'smelt', 'smelt'],
    ['épeler', 'spell', 'spelt', 'spelt'],
    ['dépenser / passer du temps', 'spend', 'spent', 'spent'],
    ['gâter', 'spoil', 'spoilt', 'spoilt'],
    ['apporter', 'bring', 'brought', 'brought'],
    ['acheter', 'buy', 'bought', 'bought'],
    ['attraper', 'catch', 'caught', 'caught'],
    ['combattre', 'fight', 'fought', 'fought'],
    ['enseigner', 'teach', 'taught', 'taught'],
    ['penser', 'think', 'thought', 'thought'],
    ['poser à plat', 'lay', 'laid', 'laid'],
    ['payer', 'pay', 'paid', 'paid'],
    ['dire', 'say', 'said', 'said'],
    ['saigner', 'bleed', 'bled', 'bled'],
    ['élever des animeaux', 'breed', 'bred', 'bred'],
    ['rêver', 'dream', 'dreamt', 'dreamt'],
    ['nourrir', 'feed', 'fed', 'fed'],
    ['ressentir', 'feel', 'felt', 'felt'],
    ['garder', 'keep', 'kept', 'kept'],
    ['mener', 'lead', 'led', 'led'],
    ['se pencher', 'lean', 'leant', 'leant'],
    ['partir / quitter', 'leave', 'left', 'left'],
    ['signifier / vouloir dire', 'mean', 'meant', 'meant'],
    ['rencontrer', 'meet', 'met', 'met'],
    ['dormir', 'sleep', 'slept', 'slept'],
    ['balayer', 'sweep', 'swept', 'swept'],
    ['accrocher', 'hang', 'hung', 'hung'],
    ['coller', 'stick', 'stuck', 'stuck'],
    ['piquer (guêpe)', 'sting', 'stung', 'stung'],
    ['trouver', 'find', 'found', 'found'],
    ['obtenir', 'get', 'got', 'got'],
    ['avoir', 'have', 'had', 'had'],
    ['entendre', 'hear', 'heard', 'heard'],
    ['tenir', 'hold', 'held', 'held'],
    ['allumer', 'light', 'lit', 'lit'],
    ['perdre', 'lose', 'lost', 'lost'],
    ['faire / fabriquer', 'make', 'made', 'made'],
    ['vendre', 'sell', 'sold', 'sold'],
    ['tirer (pistolet) / descendre (quelqu\'un)', 'shoot', 'shot', 'shot'],
    ['s\'asseoir', 'sit', 'sat', 'sat'],
    ['glisser', 'slide', 'slid', 'slid'],
    ['se tenir debout', 'stand', 'stood', 'stood'],
    ['dire / raconter', 'tell', 'told', 'told'],
    ['comprendre', 'understand', 'understood', 'understood'],
    ['gagner (compétition)', 'win', 'won', 'won'],
    ['tondre', 'mow', 'mowed', 'mown'],
    ['scier', 'saw', 'sawed', 'sawn'],
    ['coudre', 'sew', 'sewed', 'sewn'],
    ['montrer', 'show', 'showed', 'shown'],
    ['commencer', 'begin', 'began', 'begun'],
    ['boire', 'drink', 'drank', 'drunk'],
    ['sonner / téléphoner', 'ring', 'rang', 'rung'],
    ['rétrécir', 'shrink', 'shrank', 'shrunk'],
    ['chanter', 'sing', 'sang', 'sung'],
    ['couler', 'sink', 'sank', 'sunk'],
    ['nager', 'swim', 'swam', 'swum'],
    ['mettre au monde', 'bear', 'bore', 'born'],
    ['supporter', 'bear', 'bore', 'borne'],
    ['porter (vêtements)', 'wear', 'wore', 'worn'],
    ['déchirer', 'tear', 'tore', 'torn'],
    ['jurer', 'swear', 'swore', 'sworn'],
    ['être', 'be', 'was', 'were', 'been'],
    ['battre', 'beat', 'beat', 'beaten'],
    ['mordre', 'bite', 'bit', 'bitten']
];

function check(test, cible) {
    for (const i in test) if (test[i] != cible[i]) return false;
    return true;
}

function displayTime(ms) {
    let secondes = Math.floor(ms / 1000);
    let minutes = Math.floor(secondes / 60);
    secondes %= 60;

    return `${minutes.toString().length == 1 ? '0' : ''}${minutes}:${secondes.toString().length == 1 ? '0' : ''}${secondes}`;
}

function finish(t) {
    document.getElementById('game').childNodes.forEach(e => {
        e.remove();
    });
    document.getElementById('verb').remove();
    const d = document.getElementById('game').insertAdjacentElement('afterbegin', document.createElement('div'));
    d.id = 'finish';
    ['temps', 'essais', 'correct', 'faux','pourcentj', 'pourcentf'].map(e => {
        let el = document.getElementById('finish').insertAdjacentElement('beforeend', document.createElement('p'));
        el.id = e;
        el.className = 'fin';
        switch(e) {
            case 'temps': {
                el.innerHTML = `Temps : ${displayTime(Date.now() - t)}`;
                break;
            }

            case 'essais': {
                el.innerHTML = `Nombre d'essais : ${essais}`;
                break;
            }

            case 'correct': {
                el.innerHTML = `Réponses justes : ${correct}`;
                break;
            }

            case 'faux': {
                el.innerHTML = `Réponses fausses : ${faux}`;
                break;
            }

            case 'pourcentj': {
                el.innerHTML = `${Math.floor((correct / essais) * 100)}% de réponses justes`;
                break;
            }

            case 'pourcentf': {
                el.innerHTML = `${100 - Math.floor((correct / essais) * 100)}% de réponses fausses`;
                break;
            }
        }
    });
}

let verbs = Array.from(vbs),
verb = verbs[Math.floor(Math.random() * verbs.length)],

essais = 0,
correct = 0,
faux = 0,

mode = 'normal',

maxVal = 20,
timeVal = '02:00';

document.querySelectorAll('input[name="mode"]').forEach(e => e.addEventListener('click', () => {
    mode = e.value;
    document.querySelector('#opt')?.remove();
    switch (mode) {
        case 'time': {
            const inp = document.getElementById('dtime').insertAdjacentElement('beforeend', document.createElement('input'));
            inp.type = 'text';
            inp.placeholder = 'mm:ss';
            inp.id = 'opt';
            inp.value = timeVal;
            inp.addEventListener('change', () => inp.value ? timeVal = inp.value : timeVal = '02:00');
            break;
        }

        case 'max': {
            const inp = document.getElementById('dmax').insertAdjacentElement('beforeend', document.createElement('input'));
            inp.type = 'text';
            inp.placeholder = 'essais';
            inp.id = 'opt';
            inp.value = maxVal;
            inp.addEventListener('change', () => inp.value ? maxVal = inp.value : maxVal = 20);
            break;
        }
    }
}));

document.getElementById('start').addEventListener('click', () => {

    const time = Date.now();

    document.getElementById('start').remove();
    document.querySelector('.options').remove();

    switch (mode) {
        case 'max': {

            const game = document.getElementById('game'),
            inter = game.insertAdjacentElement('afterbegin', document.createElement('div')),
            sub = inter.insertAdjacentElement('afterbegin', document.createElement('button')),
            vb = game.insertAdjacentElement('afterbegin', document.createElement('p')),
            stat = game.insertAdjacentElement('afterbegin', document.createElement('div')),
            win = stat.insertAdjacentElement('afterbegin', document.createElement('p')),
            lose = stat.insertAdjacentElement('afterbegin', document.createElement('p'));
            let inp = inter.insertAdjacentElement('afterbegin', document.createElement('input'));
            inter.id = 'inter';
            stat.id = 'stat';
            win.id = 'win';
            win.className = 'stat';
            win.innerHTML = 'Réponses correctes : 0';
            lose.innerHTML = 'Réponses fausses : 0';
            lose.className = 'stat';
            lose.id = 'lose';
            vb.innerHTML = verb[0];
            vb.id = 'verb';
            inp.placeholder = 'Entrez une réponse';
            inp.id = 'inp';
            inp.type = 'text';
            sub.innerHTML = 'Vérifier';
            sub.id = 'sub';
            sub.type = 'submit';

            sub.addEventListener('click', () => {

                if (!inp.value) {
                    vb.innerHTML = 'Entrez une réponse !';
                    return setTimeout(() => {
                        vb.innerHTML = verb[0];
                    }, 2000);
                }

                const essai = inp.value.toLowerCase().trim().split(' ');
                essais++;

                if (check(essai, verb.slice(1))) {
                    correct++;
                    win.innerHTML = `Réponses correctes : ${correct}`;
                    if (((maxVal - essais) < verbs.length)) verbs.splice(verbs.indexOf(verb), 1);
                    
                    verb = verbs[Math.floor(Math.random() * verbs.length)];
                    vb.innerHTML = 'Bravo !';
                    setTimeout(() => {
                        if (essais == maxVal) return finish(time);
                        else vb.innerHTML = verb[0];
                    }, 1000);

                } else {
                    faux++;
                    lose.innerHTML = `Réponses fausses : ${faux}`;
                    vb.innerHTML = `Faux ! La réponse était ${verb.slice(1).join(' ')}`;
                    verb = verbs[Math.floor(Math.random() * verbs.length)];
                    setTimeout(() => {
                        if (essais == maxVal) return finish(time);
                        else vb.innerHTML = verb[0];
                    }, 3000);
                }

                inp.value = '';
            });
            break;
        }

        case 'time': {
            timeVal = timeVal.split(':');
            let timeout = timeVal[0] * 60000 + timeVal[1] * 1000;

            const game = document.getElementById('game'),
            inter = game.insertAdjacentElement('afterbegin', document.createElement('div')),
            sub = inter.insertAdjacentElement('afterbegin', document.createElement('button')),
            vb = game.insertAdjacentElement('afterbegin', document.createElement('p')),
            stat = game.insertAdjacentElement('afterbegin', document.createElement('div')),
            win = stat.insertAdjacentElement('afterbegin', document.createElement('p')),
            lose = stat.insertAdjacentElement('afterbegin', document.createElement('p')),
            ttime = stat.insertAdjacentElement('beforeend', document.createElement('p'));
            let inp = inter.insertAdjacentElement('afterbegin', document.createElement('input'));
            inter.id = 'inter';
            stat.id = 'stat';
            win.id = 'win';
            win.className = 'stat';
            win.innerHTML = 'Réponses correctes : 0';
            lose.innerHTML = 'Réponses fausses : 0';
            lose.className = 'stat';
            lose.id = 'lose';
            ttime.className = 'stat';
            ttime.id = 'ttime';
            ttime.innerHTML = `Temps restant : ${displayTime(timeout)}`;
            vb.innerHTML = verb[0];
            vb.id = 'verb';
            inp.placeholder = 'Entrez une réponse';
            inp.id = 'inp';
            inp.type = 'text';
            sub.innerHTML = 'Vérifier';
            sub.id = 'sub';
            sub.type = 'submit';

            const iid = setInterval(() => {
                timeout -= 1000;
                if (!timeout) {
                    clearInterval(iid);
                    return finish(time);
                }
                ttime.innerHTML = `Temps restant : ${displayTime(timeout)}`;
            }, 1000);
        
            sub.addEventListener('click', () => {
                if (!verbs.length) {
                    verbs = Array.from(vbs);
                    inp = inter.insertAdjacentElement('afterbegin', document.createElement('input'));
                    inp.type = 'text';
                    inp.id = 'input';
                    sub.innerHTML = 'Vérifier';
                    verb = verbs[Math.floor(Math.random() * verbs.length)];
                    vb.innerHTML = verb[0];
                    win.innerHTML = 'Réponses correctes : 0';
                    lose.innerHTML = 'Réponses fausses : 0';
                    return;
                }

                if (!inp.value) {
                    vb.innerHTML = 'Entrez une réponse !';
                    return setTimeout(() => {
                        vb.innerHTML = verb[0];
                    }, 2000);
                }

                const essai = inp.value.toLowerCase().trim().split(' ');
                essais++;

                if (check(essai, verb.slice(1))) {
                    correct++;
                    win.innerHTML = `Réponses correctes : ${correct}`;
                    if (!verbs.length) {
                        inp.remove();
                        sub.innerHTML = 'Recommencer ?';
                        vb.innerHTML = 'Terminé !';
                    } else {
                        verb = verbs[Math.floor(Math.random() * verbs.length)];
                        vb.innerHTML = 'Bravo !';
                        setTimeout(() => {
                            vb.innerHTML = verb[0];
                        }, 1000);
                    }
                } else {
                    faux++;
                    lose.innerHTML = `Réponses fausses : ${faux}`;
                    vb.innerHTML = `Faux ! La réponse était ${verb.slice(1).join(' ')}`;
                    verb = verbs[Math.floor(Math.random() * verbs.length)];
                    setTimeout(() => {
                        vb.innerHTML = verb[0];
                    }, 3000);
                }
            
                inp.value = '';
            });
            break;
        }

        case 'infini': {
            const game = document.getElementById('game'),
            inter = game.insertAdjacentElement('afterbegin', document.createElement('div')),
            sub = inter.insertAdjacentElement('afterbegin', document.createElement('button')),
            vb = game.insertAdjacentElement('afterbegin', document.createElement('p')),
            stat = game.insertAdjacentElement('afterbegin', document.createElement('div')),
            win = stat.insertAdjacentElement('afterbegin', document.createElement('p')),
            lose = stat.insertAdjacentElement('afterbegin', document.createElement('p'));
            let inp = inter.insertAdjacentElement('afterbegin', document.createElement('input')),
            correct = 0,
            faux = 0;
            inter.id = 'inter';
            stat.id = 'stat';
            win.id = 'win';
            win.className = 'stat';
            win.innerHTML = 'Réponses correctes : 0';
            lose.innerHTML = 'Réponses fausses : 0';
            lose.className = 'stat';
            lose.id = 'lose';
            vb.innerHTML = verb[0];
            vb.id = 'verb';
            inp.placeholder = 'Entrez une réponse';
            inp.id = 'inp';
            inp.type = 'text';
            sub.innerHTML = 'Vérifier';
            sub.id = 'sub';
            sub.type = 'submit';
        
            sub.addEventListener('click', () => {
        
                if (!inp.value) {
                    vb.innerHTML = 'Entrez une réponse !';
                    return setTimeout(() => {
                        vb.innerHTML = verb[0];
                    }, 2000);
                }
        
                const essai = inp.value.toLowerCase().trim().split(' ');
                essais++;
            
                if (check(essai, verb.slice(1))) {
                    correct++;
                    win.innerHTML = `Réponses correctes : ${correct}`;
                    verb = verbs[Math.floor(Math.random() * verbs.length)];
                    vb.innerHTML = 'Bravo !';
                    setTimeout(() => {
                        vb.innerHTML = verb[0];
                    }, 1000);
                } else {
                    faux++;
                    lose.innerHTML = `Réponses fausses : ${faux}`;
                    vb.innerHTML = `Faux ! La réponse était ${verb.slice(1).join(' ')}`;
                    verb = verbs[Math.floor(Math.random() * verbs.length)];
                    setTimeout(() => {
                        vb.innerHTML = verb[0];
                    }, 3000);
                }
            
                inp.value = '';
            });
            break;
        }
    
        case 'normal': {
            const game = document.getElementById('game'),
            inter = game.insertAdjacentElement('afterbegin', document.createElement('div')),
            sub = inter.insertAdjacentElement('afterbegin', document.createElement('button')),
            vb = game.insertAdjacentElement('afterbegin', document.createElement('p')),
            stat = game.insertAdjacentElement('afterbegin', document.createElement('div')),
            win = stat.insertAdjacentElement('afterbegin', document.createElement('p')),
            lose = stat.insertAdjacentElement('afterbegin', document.createElement('p'));
            let inp = inter.insertAdjacentElement('afterbegin', document.createElement('input'));
            inter.id = 'inter';
            stat.id = 'stat';
            win.id = 'win';
            win.className = 'stat';
            win.innerHTML = 'Réponses correctes : 0';
            lose.innerHTML = 'Réponses fausses : 0';
            lose.className = 'stat';
            lose.id = 'lose';
            vb.innerHTML = verb[0];
            vb.id = 'verb';
            inp.placeholder = 'Entrez une réponse';
            inp.id = 'inp';
            inp.type = 'text';
            sub.innerHTML = 'Vérifier';
            sub.id = 'sub';
            sub.type = 'submit';
        
            sub.addEventListener('click', () => {
        
                if (!inp.value) {
                    vb.innerHTML = 'Entrez une réponse !';
                    return setTimeout(() => {
                        vb.innerHTML = verb[0];
                    }, 2000);
                }
        
                const essai = inp.value.toLowerCase().trim().split(' ');
                essais++;
            
                if (check(essai, verb.slice(1))) {
                    correct++;
                    win.innerHTML = `Réponses correctes : ${correct}`;
                    verbs.splice(verbs.indexOf(verb), 1);
                    if (!verbs.length) {
                        return finish(time);
                    } else {
                        verb = verbs[Math.floor(Math.random() * verbs.length)];
                        vb.innerHTML = 'Bravo !';
                        setTimeout(() => {
                            vb.innerHTML = verb[0];
                        }, 1000);
                    }
                } else {
                    faux++;
                    lose.innerHTML = `Réponses fausses : ${faux}`;
                    vb.innerHTML = `Faux ! La réponse était ${verb.slice(1).join(' ')}`;
                    verb = verbs[Math.floor(Math.random() * verbs.length)];
                    setTimeout(() => {
                        vb.innerHTML = verb[0];
                    }, 3000);
                }
                inp.value = '';
            });
        }
    }
});