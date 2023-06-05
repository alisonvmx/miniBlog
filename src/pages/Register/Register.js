// eslint-disable-next-line no-unused-vars
import styles from "./Register.module.css";
import { useState, useEffect } from "react";

import React from 'react'

const Register = () => {
  return (
    <div>
        <h1>Cadastre-se para postar</h1>
        <form>
            <label>
                <span>Nome:</span>
                <input 
                    type="text" 
                    name="displayName" 
                    required 
                    placeholder="Nome do Usúario" 
                />
            </label>
            <label>
                <span>E-mail:</span>
                <input 
                    type="email" 
                    name="email" 
                    required 
                    placeholder="E-mail do Usúario" 
                />
            </label>
            <label>
                <span>Senha:</span>
                <input 
                    type="password" 
                    name="password" 
                    required 
                    placeholder="Insira sua Senha" 
                />
            </label>
            <label>
                <span>Confirmação Senha:</span>
                <input 
                    type="password" 
                    name="confirmPassword" 
                    required 
                    placeholder="Confirme sua Senha" 
                />
            </label>
            <button className="btn">Cadastrar</button>
        </form>
    </div>
  )
}

export default Register