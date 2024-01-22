const display = require('./affichageNombres');

describe('Affichage de Nombres', () => {
	describe('Afficher les chiffres de 1 à 10', () => {
		test('displays numbers from 1 to 10', () => {
			expect(display.afficherLesNombresDe1A10()).toBe('1 2 3 4 5 6 7 8 9 10');
		});
	});

	describe('Afficher les chiffres pairs de 1 à 10', () => {
		test('displays even numbers from 1 to 10', () => {
			expect(display.afficherLesNombresPairDe1a10()).toBe('2 4 6 8 10');
		});
	});

	describe('Afficher les chiffres de 1 à n', () => {
		test('afficher les nombres de 1 to 5', () => {
			expect(display.afficherLesNombresDe1aN(5)).toBe('1 2 3 4 5');
		});

		test('displays numbers from 1 to 10', () => {
			expect(display.afficherLesNombresDe1aN(10)).toBe('1 2 3 4 5 6 7 8 9 10');
		});
	});
});
