// /Frontend/src/Cadastro.jsx
import React, { useState } from 'react';
import { useForm } from 'react-hook-form'; // Requisito 2
import axios from 'axios';

function Cadastro() {
  // Inicialização do React Hook Form
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  
  // useState retorna um array com 2 elementos [cite: 769] que usaremos para exibir feedback
  const [mensagem, setMensagem] = useState(null);
  const [erroAtivo, setErroAtivo] = useState(null);

  // Monitora o campo senha para validar a confirmação
  const senhaAtual = watch("senha");

  // Requisito 6: Configurar o envio via Axios (POST) explicitamente com try/catch
  const onSubmit = async (dados) => {
    setMensagem(null);
    setErroAtivo(null);
    
// 'http://localhost:3000/cadastro' quando for local 

    try {
      const resposta = await axios.post('https://atividade-pratica-sistema-de-cadastro-e-r6qp.onrender.com/cadastro', dados);
      setMensagem(resposta.data.mensagem); // Feedback de sucesso
    } catch (error) {
      // Requisito 5: Tratamento de Exceções claro
      if (error.response && error.response.data.erro) {
         setErroAtivo(error.response.data.erro);
      } else {
         setErroAtivo("Falha de comunicação: Não foi possível conectar ao servidor.");
      }
    }
  };

  return (
    <div className="container-formulario">
      <h2>Criar Conta</h2>
      
      {/* Exibição de exceções/sucesso */}
      {mensagem && <div style={{ color: 'green' }}>{mensagem}</div>}
      {erroAtivo && <div style={{ color: 'red' }}>{erroAtivo}</div>}

      {/* O handleSubmit junta todos os campos em um único objeto [cite: 19] */}
      <form onSubmit={handleSubmit(onSubmit)}>
        
        {/* Requisito 3 e 4: Campo Nome com validação */}
        <div>
          <label>Nome:</label>
          <input {...register("nome", { required: "O nome é obrigatório" })} />
          {errors.nome && <span style={{ color: 'red' }}>{errors.nome.message}</span>}
        </div>

        {/* Requisito 3 e 4: Campo E-mail com validação */}
        <div>
          <label>E-mail:</label>
          {/* O React Hook Form já permite validar direto no register [cite: 24] */}
          <input 
            type="email" 
            {...register("email", { 
              required: "O e-mail é obrigatório",
              pattern: { value: /^\S+@\S+\.\S+$/, message: "E-mail inválido" }
            })} 
          />
          {errors.email && <span style={{ color: 'red' }}>{errors.email.message}</span>}
        </div>

        {/* Requisito 3 e 4: Campo Senha com validação */}
        {/* Campo Senha com validação avançada */}
        <div>
        <label>Senha:</label>
        <input 
            type="password" 
            {...register("senha", { 
            required: "A senha é obrigatória",
            minLength: { value: 6, message: "A senha deve ter no mínimo 6 caracteres" },
            pattern: {
                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).+$/,
                message: "A senha deve conter letra maiúscula, minúscula e um caractere especial."
            }
            })} 
        />
        {errors.senha && <span style={{ color: 'red' }}>{errors.senha.message}</span>}
        </div>

        {/* Requisito 3 e 4: Campo Confirmação de Senha */}
        <div>
          <label>Confirmação de Senha:</label>
          <input 
            type="password" 
            {...register("confirmacaoSenha", { 
              required: "Confirme a sua senha",
              validate: (value) => value === senhaAtual || "As senhas não coincidem"
            })} 
          />
          {errors.confirmacaoSenha && <span style={{ color: 'red' }}>{errors.confirmacaoSenha.message}</span>}
        </div>

        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
}

export default Cadastro;