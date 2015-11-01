(function () {
	'use strict';

	angular.module('ChatAPP').factory('$mensagem', MensagemService);

	MensagemService.$inject = ['$firebaseArray', 'APP_SETTINGS'];

	function MensagemService ($firebaseArray, APP_SETTINGS) {
		var ref = new Firebase(APP_SETTINGS.FIREBASE_URL + 'mensagem');

		function CadastrarMensagem (data) {
			ref.push(data);
		}

		return {
			CadastrarMensagem : CadastrarMensagem
		}
	}
})();