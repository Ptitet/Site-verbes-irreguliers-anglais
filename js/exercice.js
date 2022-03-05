const vbs = [
    ['casser', 'break', 'broke', 'broken'],
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
    document.getElementById('verb').remove();
    document.getElementById('inter').remove();
    document.getElementById('stat').remove();
    document.getElementById('game').insertAdjacentElement('afterbegin', document.createElement('table'));
    document.querySelector('table').insertAdjacentElement('afterbegin', document.createElement('tbody'));
    const tr1 = document.querySelector('tbody').insertAdjacentElement('afterbegin', document.createElement('tr'));
    const tr2 = document.querySelector('tbody').insertAdjacentElement('afterbegin', document.createElement('tr'));
    const arr = [`Temps : ${displayTime(Date.now() - t)}`, `Nombre d'essais : ${essais}`, `Réponses justes : ${correct}`, `Réponses fausses : ${faux}`, `${Math.floor((correct / essais) * 100)}% de réponses justes`, `${100 - Math.floor((correct / essais) * 100)}% de réponses fausses`];
    for (let i = 0; i < 6; i++) {
        let current;
        if (i < 3) {
            current = tr1.insertAdjacentElement('beforeend', document.createElement('td'));
        } else {
            current = tr2.insertAdjacentElement('beforeend', document.createElement('td'));
        }
        current.innerHTML = arr[i];
    }
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
    document.querySelector('.help').remove();

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