app.controller("DebtController", function($scope, DebtService, ProductService) {

    $scope.debtRequest = { installments: 0, installmentValue: 0 };
    $scope.productId = null;
    
    $scope.calculateDebt = function() {
        console.log("Calculando dívida com valores:", $scope.debtRequest);
        
        DebtService.calculateDebt($scope.debtRequest)
            .then(function(response) {
                if (response.data) {
                    console.log("Dívida calculada:", response.data);
                    $scope.debtResult = response.data;
                } else {
                    console.warn("Nenhum dado retornado da API de Dívida");
                    alert("Erro ao calcular a dívida.");
                }
            })
            .catch(function(error) {
                console.error("Erro ao buscar cálculo da dívida:", error);
                alert("Erro ao buscar cálculo da dívida.");
            });
    };

    $scope.getFinancialProduct = function() {
        console.log("Buscando produto financeiro com ID:", $scope.productId);

        ProductService.getFinancialProduct($scope.productId)
            .then(function(response) {
                if (response.data) {
                    console.log("Produto encontrado:", response.data);
                    $scope.productResult = response.data;
                } else {
                    console.warn("Nenhum produto encontrado");
                    alert("Produto não encontrado.");
                }
            })
            .catch(function(error) {
                console.error("Erro ao buscar produto financeiro:", error);
                alert("Erro ao buscar produto financeiro.");
            });
    };

});
