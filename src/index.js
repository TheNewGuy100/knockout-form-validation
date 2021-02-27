import api from './../api/api.js'
import css from "./style.css"

// This is a simple *viewmodel* - JavaScript that defines the data and behavior of your UI
function AppViewModel() {
    
    // PRIMEIRO NOME
        this.firstName = ko.observable("").extend({ required: {
            message: 'Necessário preencher',
            params: true,
            css: 'invalid-feedback'
        } });
    
    // ULTIMO NOME
        this.lastName = ko.observable("").extend({ required: {
            message: 'Necessário preencher',
            params: true
        } });
    
    // TELEFONE
        this.telefone = ko.observable("").extend({ required: {
            message: 'Necessário preencher',
            params: true,
            number: true
        } });
    
    // CEP
        this.cep_input = ko.observable("").extend({ required: {
            message: 'Necessário preencher',
            params: true
        } });
    
    // NUMERO DE RESIDÊNCIA
        this.num_residencia = ko.observable("").extend({ required: {
            message: 'Necessário preencher',
            params: true,
            number: true
        } });
    
    // BAIRRO
        this.bairro = ko.observable("").extend({ required: {
            message: 'Necessário preencher',
            params: true
        } });
    
    // RUA COM COMPLEMENTOS
        this.endereco = ko.observable('').extend({ required: {
            message: 'Necessário preencher',
            params: true,
        } });                     
    
    // ESTADO
        this.uf = ko.observable('').extend({ required: {
            message: 'Necessário preencher',
            params: true,
        } });                             
    
    // COMPLEMENTO
        this.complemento = ko.observable('')

    // CIDADE
        this.localidade = ko.observable('').extend({ required: {
            message: 'Necessário preencher',
            params: true,
        } });                     

    var self = this

    self.myfunction = function () {
        var cep = this.cep_input()          // A FUNÇÃO PADRÃO DEVOLVE O VALOR DO ITEM
        api.getCep(cep).then( (result) => {

            console.log(result)

            appViewModel.endereco(result.logradouro) 
            appViewModel.uf(result.uf)
            appViewModel.complemento(result.complemento)
            appViewModel.localidade(result.localidade)
        })
    }

    // CHECKER DO PRIMEIRO NOME
    self.checker1 = () => {
        if (this.firstName().length == 0) {         // MANDA UM SISTEMA QUE VERIFICA SE AINDA NÃO FOI DIGITADO OU ESTÁ NULO
            return null
        }
        
        if ( this.firstName().length > 2 && this.firstName().length < 10) {       // GERENCIA PARA VER SE O NOME É MUITO CURTO
            return true
        } else {
            return false
        }
    }

    // CHECKER DO PRIMEIRO NOME
    self.checker1 = () => {
        if (this.firstName().length == 0) {         // MANDA UM SISTEMA QUE VERIFICA SE AINDA NÃO FOI DIGITADO OU ESTÁ NULO
            return null
        }
        
        if ( this.firstName().length > 2 && this.firstName().length < 10) {       // GERENCIA PARA VER SE O NOME É MUITO CURTO
            return true
        } else {
            return false
        }
    }
    
    // CHECKER DO SEGUNDO NOME
    self.checker2 = () => {
        if (this.lastName().length == 0) {         // MANDA UM SISTEMA QUE VERIFICA SE AINDA NÃO FOI DIGITADO OU ESTÁ NULO
            return null
        }
        
        if ( this.lastName().length > 2 && this.lastName().length < 10) {       // GERENCIA PARA VER SE O NOME É MUITO CURTO
            return true
        } else {
            return false
        }
    }

    // CHECKER DO TELEFONE
    self.checker3 = () => {
        if (this.telefone().length == 0) {         // MANDA UM SISTEMA QUE VERIFICA SE AINDA NÃO FOI DIGITADO OU ESTÁ NULO
            return null
        }
        
        if ( this.telefone().length >= 11 && this.telefone().length < 13) {       // GERENCIA PARA VER SE O NÚMERO É MUITO CURTO OU LARGO
            return true
        } else {
            return false
        }
    }

    // CHECKER DO CEP
    self.checker4 = () => {
        if (this.cep_input().length == 0) {         // MANDA UM SISTEMA QUE VERIFICA SE AINDA NÃO FOI DIGITADO OU ESTÁ NULO
            return null
        }
        
        if ( this.cep_input().length == 8 ) {       // GERENCIA PARA VER SE O NÚMERO É MUITO CURTO OU LARGO
            return true
        } else {
            return false
        }
    }

    // CHECKER DO ENDEREÇO
    self.checker5 = () => {
        if (this.endereco().length == 0) {         // MANDA UM SISTEMA QUE VERIFICA SE AINDA NÃO FOI DIGITADO OU ESTÁ NULO
            return null
        }
        
        if ( this.endereco().length >= 1 && this.endereco().length < 40) {       // GERENCIA PARA VER SE O NÚMERO É MUITO CURTO OU LARGO
            return true
        } else {
            return false
        }
    }

    // CHECKER DO NUMERO DA CASA
    self.checker6 = () => {
        if (this.num_residencia().length == 0) {         // MANDA UM SISTEMA QUE VERIFICA SE AINDA NÃO FOI DIGITADO OU ESTÁ NULO
            return null
        }
        
        if ( this.num_residencia().length >= 1 && this.num_residencia().length < 8) {       // GERENCIA PARA VER SE O NÚMERO É MUITO CURTO OU LARGO
            return true
        } else {
            return false
        }
    }

    // CHECKER DO BAIRRO
    self.checker7 = () => {
        if (this.bairro().length == 0) {         // MANDA UM SISTEMA QUE VERIFICA SE AINDA NÃO FOI DIGITADO OU ESTÁ NULO
            return null
        }
        
        if ( this.bairro().length >= 1 && this.bairro().length < 40) {       // GERENCIA PARA VER SE O NÚMERO É MUITO CURTO OU LARGO
            return true
        } else {
            return false
        }
    }


    self.verify_all = () => {
        if (this.checker1() && 
            this.checker2() && 
            this.checker3() &&
            this.checker4() &&
            this.checker5() &&
            this.checker6() &&
            this.checker7() ) {
            console.log('Parabéns, enviando os arquivos para o servidor...')
            return true
        } else {
            console.log('false')
            return false
        }
    }
}

const appViewModel = new AppViewModel()

// can be used in the navigation console
window.appViewModel = appViewModel

// Activates knockout.js
ko.applyBindings(appViewModel)


