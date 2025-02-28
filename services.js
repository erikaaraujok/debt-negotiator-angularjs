app.service("DebtService", function($http) {
    var apiBaseUrl = "http://localhost:7213"; 

    this.calculateDebt = function(debtRequest) {
        console.log("Chamando API de Cálculo de Dívida...");
        return $http.post(apiBaseUrl + "/api/debt/calculate", debtRequest)
            .then(function(response) {
                console.log("Resposta da API de Dívida:", response.data);
                return response;
            })
            .catch(function(error) {
                console.error("Erro na API de Dívida:", error);
                return error;
            });
    };
});

app.service("ProductService", function($http) {
    var apiBaseUrl = "http://localhost:7213"; 

    this.getFinancialProduct = function(productId) {
        console.log("Buscando Produto Financeiro com ID:", productId);
        return $http.get(apiBaseUrl + "/api/financial-product/" + productId)
            .then(function(response) {
                console.log("Resposta da API de Produto:", response.data);
                return response;
            })
            .catch(function(error) {
                console.error("Erro na API de Produto:", error);
                return error;
            });
    };
});
