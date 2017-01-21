import React from 'react';
import {
	Appear,
	Deck,
	Heading,
	Image,
	Link,
	ListItem,
	List,
	Slide,
	Spectacle,
} from 'spectacle';
import preloader from 'spectacle/lib/utils/preloader';
import createTheme from 'spectacle/lib/themes/default';
import 'normalize.css';
import 'spectacle/lib/themes/default/index.css';

// images
import noob from '../assets/noob.gif';
import shapes from '../assets/shapes.gif';
import question from '../assets/question.gif';
import check from '../assets/check.gif';
import dom from '../assets/dom.gif';
import click from '../assets/click.gif';
import bonus from '../assets/bonus.gif';

preloader({
	noob,
	shapes,
	question,
	check,
	dom,
	click,
	bonus,
});

const theme = createTheme({
	primary: '#7B1FA2',
});

const Presentation = () => (
	<Spectacle theme={theme}>
		<Deck transition={['zoom', 'fade']} transitionDuration={500}>
			<Slide bgColor="primary">
				<Heading size={1} fit caps lineHeight={1} textColor="black">
					JavaScript
				</Heading>
				<Heading size={1} fit caps>
					mon amour
				</Heading>
			</Slide>
			<Slide bgColor="primary">
				<Image src={noob} margin="0px auto 40px" height="293px" />
				<Heading size={2} caps fit>
					JavaScript pour les noobs
				</Heading>
			</Slide>
			<Slide bgColor="primary">
				<Heading size={1} fit caps lineHeight={1} textColor="white">
					JavaScript permet:
				</Heading>
				<List>
					<Appear><ListItem>de gérer les interactions utilisateurs (clics, clavier, etc., etc.)</ListItem></Appear>
					<Appear><ListItem>manipuler la page HTML en ajoutant, supprimant, modifiant des tags HTML</ListItem></Appear>
					<Appear><ListItem>récupérer des données depuis un serveur</ListItem></Appear>
					<Appear><ListItem>manipuler ces données, les traiter</ListItem></Appear>
					<Appear><ListItem>faire des pages web dynamiques</ListItem></Appear>
					<Appear><ListItem>et tellement plus (mais c'est pas pour tout de suite!)</ListItem></Appear>
				</List>
			</Slide>
			<Slide bgColor="primary">
				<Heading size={1} fit caps lineHeight={1} textColor="white">
					La syntaxe JavaScript
				</Heading>
				<List>
					<Appear><ListItem><pre style={{ display: 'inline' }}>var maVariable = 2;</pre> stocke la valeur 2 dans la variable "maVariable"</ListItem></Appear>
					<Appear><ListItem><pre style={{ display: 'inline' }}>var carre = function(x) &#123; return x * x; &#125;;</pre> stocke dans la variable "carre", la fonction retournant le carré de la valeur "x" passée en paramètre</ListItem></Appear>
					<Appear><ListItem><pre style={{ display: 'inline' }}>var result = carre(4);</pre> stocke dans la variable "result", la valeur du résultat de la fonction "carre" pour le paramètre 4, "result" vaut donc 16</ListItem></Appear>
				</List>
			</Slide>
			<Slide bgColor="primary">
				<Image src={shapes} margin="0px auto 40px" height="293px" />
				<Heading size={2} caps fit>
					Les types de données
				</Heading>
			</Slide>
			<Slide bgColor="primary">
				<Heading size={1} fit caps lineHeight={1} textColor="white">
					Dans une variable on peut stocker:
				</Heading>
				<List>
					<Appear><ListItem><pre style={{ display: 'inline' }}>var monNombre = 2;</pre> un nombre (entier ou décimal)</ListItem></Appear>
					<Appear><ListItem><pre style={{ display: 'inline' }}>var maString = 'toto';</pre> une chaine de caractères (aussi appelée <i>string</i>), définie entre "quotes"</ListItem></Appear>
					<Appear><ListItem><pre style={{ display: 'inline' }}>var monBooleen = true;</pre> un booléen, qui peut valoir "vrai" (true) ou "faux" (false)</ListItem></Appear>
					<Appear><ListItem><Link href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Structures_de_donn%C3%A9es" target="_blank">Approfondir le sujet</Link></ListItem></Appear>
				</List>
			</Slide>
			<Slide bgColor="primary">
				<Image src={check} margin="0px auto 40px" height="293px" />
				<Heading size={2} caps fit>
					Les opérateurs
				</Heading>
			</Slide>
			<Slide bgColor="primary">
				<Heading size={1} fit caps lineHeight={1} textColor="white">
					ajouter, supprimer, manipuler
				</Heading>
				<List>
					<Appear><ListItem><Link href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Op%C3%A9rateurs/Op%C3%A9rateurs_d_affectation" target="_blank">Opérateurs d'affectation</Link></ListItem></Appear>
					<Appear><ListItem><Link href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Op%C3%A9rateurs/Op%C3%A9rateurs_arithm%C3%A9tiques" target="_blank">Opérateurs arithmétiques</Link></ListItem></Appear>
					<Appear><ListItem><Link href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Op%C3%A9rateurs/Op%C3%A9rateurs_de_comparaison" target="_blank">Opérateurs de comparaison</Link></ListItem></Appear>
					<Appear><ListItem><Link href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Op%C3%A9rateurs/Op%C3%A9rateurs_logiques" target="_blank">Opérateurs logiques</Link></ListItem></Appear>
					<Appear><ListItem><Link href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Op%C3%A9rateurs/Groupement" target="_blank">Groupement</Link></ListItem></Appear>
				</List>
			</Slide>
			<Slide bgColor="primary">
				<Image src={question} margin="0px auto 40px" height="293px" />
				<Heading size={2} caps fit>
					Les instructions
				</Heading>
			</Slide>
			<Slide bgColor="primary">
				<Heading size={1} fit caps lineHeight={1} textColor="white">
					if then else et leurs copains
				</Heading>
				<List>
					<Appear><ListItem><Link href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Instructions/if...else" target="_blank">if, then, else</Link></ListItem></Appear>
					<Appear><ListItem><Link href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Instructions/for" target="_blank">la boucle for</Link></ListItem></Appear>
					<Appear><ListItem><Link href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Instructions/function" target="_blank">les fonctions</Link></ListItem></Appear>
					<Appear><ListItem><Link href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Instructions/return" target="_blank">le mot clef return</Link></ListItem></Appear>
				</List>
			</Slide>
			<Slide bgColor="primary">
				<Image src={dom} margin="0px auto 40px" height="293px" />
				<Heading size={2} caps fit>
					Manipuler le HTML avec JavaScript
				</Heading>
			</Slide>
			<Slide bgColor="primary">
				<Heading size={1} fit caps lineHeight={1} textColor="white">
					Sélectionner un élément HTML
				</Heading>
				<List>
					<Appear><ListItem>var monElement = document.querySelector('h1')</ListItem></Appear>
					<Appear><ListItem>var monElement = document.querySelector('#monId')</ListItem></Appear>
					<Appear><ListItem>var monElement = document.querySelector('.maClasse')</ListItem></Appear>
					<Appear><ListItem><Link href="https://developer.mozilla.org/fr/docs/Web/API/Document/querySelector" target="_blank">document.querySelector</Link></ListItem></Appear>
					<Appear><ListItem><Link href="https://developer.mozilla.org/fr/docs/Web/API/document/querySelectorAll" target="_blank">document.querySelectorAll</Link></ListItem></Appear>
				</List>
			</Slide>
			<Slide bgColor="primary">
				<Heading size={1} fit caps lineHeight={1} textColor="white">
					Créer un élément HTML
				</Heading>
				<List>
					<Appear><ListItem>var monTitre = document.createElement('h1')</ListItem></Appear>
					<Appear><ListItem>monTitre.textContent = 'Hello world';</ListItem></Appear>
					<Appear><ListItem>document.body.appendChild(monTitre);</ListItem></Appear>
					<Appear><ListItem><Link href="https://developer.mozilla.org/fr/docs/Web/API/Document/createElement" target="_blank">createElement</Link></ListItem></Appear>
					<Appear><ListItem><Link href="https://developer.mozilla.org/fr/docs/Web/API/Node/textContent" target="_blank">textContent</Link></ListItem></Appear>
					<Appear><ListItem><Link href="https://developer.mozilla.org/fr/docs/Web/API/Node/appendChild" target="_blank">appendChild</Link></ListItem></Appear>
				</List>
			</Slide>
			<Slide bgColor="primary">
				<Image src={click} margin="0px auto 40px" height="293px" />
				<Heading size={2} caps fit>
					Les évènements utilisateurs
				</Heading>
			</Slide>
			<Slide bgColor="primary">
				<Heading size={1} fit caps lineHeight={1} textColor="white">
					onclick, onkeypress, onpoop
				</Heading>
				<List>
					<Appear><ListItem><Link href="https://developer.mozilla.org/fr/docs/Web/API/GlobalEventHandlers/onclick" target="_blank">onclick</Link></ListItem></Appear>
					<Appear><ListItem><Link href="https://developer.mozilla.org/fr/docs/Web/API/GlobalEventHandlers/onkeypress" target="_blank">onkeypress</Link></ListItem></Appear>
					<Appear><ListItem><Link href="https://developer.mozilla.org/fr/docs/Web/API/GlobalEventHandlers/onmousemove" target="_blank">onmousemove</Link></ListItem></Appear>
					<Appear><ListItem>etc., etc.</ListItem></Appear>
				</List>
			</Slide>
			<Slide bgColor="primary">
				<Image src={bonus} margin="0px auto 40px" height="293px" />
				<Heading size={2} caps fit>
					Bonus!
				</Heading>
			</Slide>
			<Slide bgColor="primary">
				<Heading size={1} fit caps lineHeight={1} textColor="white">
					Ajouter/enelever une classe css, lister les enfants, le parent d'un élément HTML
				</Heading>
				<List>
					<Appear><ListItem><Link href="https://developer.mozilla.org/fr/docs/Web/API/Element/classList" target="_blank">element.classList</Link></ListItem></Appear>
					<Appear><ListItem><Link href="https://developer.mozilla.org/fr/docs/Web/API/ParentNode/children" target="_blank">element.children</Link></ListItem></Appear>
					<Appear><ListItem><Link href="https://developer.mozilla.org/fr/docs/Web/API/Node/parentElement" target="_blank">element.parentElement</Link></ListItem></Appear>
				</List>
			</Slide>
		</Deck>
	</Spectacle>
);

export default Presentation;
