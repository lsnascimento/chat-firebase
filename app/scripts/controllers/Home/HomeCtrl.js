(function () {
	'use strict';

	angular.module('ChatAPP').controller('HomeCtrl', HomeCtrl);

	HomeCtrl.$inject = ['$scope', '$mensagem'];

	function HomeCtrl ($scope, $mensagem) {
		var vm = this;

		vm.pagina = 'Home';

		vm.enviarMensagem = function (mensagem) {
			$mensagem.CadastrarMensagem
		};
	}
})();