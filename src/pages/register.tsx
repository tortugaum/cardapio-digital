/* eslint-disable react-hooks/exhaustive-deps */

import Image from 'next/image';
import Link from 'next/link';
import { FormEvent, useState } from 'react';

import Container from '@/compnents/Container';
import TextField from '@/compnents/form/TextField';

import Styles from '../styles/Login.module.css';

const Register: React.FC = () => {
  const [formData, setFormData] = useState({
    user: '',
    email: '',
    password: ''
  });

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(formData);
    //tratar no envio pro backend
  };
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <Container>
      <div className={Styles.container}>
        <div className={Styles.logoContainer}>
          <Image
            src="/login-icon.png"
            alt="Icone do Login"
            height={160}
            width={160}
          />
        </div>

        <div className={Styles.form}>
          <form onSubmit={onSubmit}>
            <TextField
              value="Email"
              name="email"
              type="mail"
              onChange={onChange}
              icon={{ name: 'AiOutlineMail', color: '#ff6565' }}
            />
            <TextField
              value="Usuário"
              name="user"
              type="text"
              onChange={onChange}
              icon={{ name: 'BsPerson', color: '#ff6565' }}
            />
            <TextField
              value="Senha"
              name="password"
              type="password"
              onChange={onChange}
              icon={{ name: 'FiLock', color: '#ff6565' }}
            />

            <div className={Styles.loginContainer}>
              <button type="submit">Cadastrar</button>
              <span>
                Já tem uma conta? <Link href="/login">Entrar</Link>
              </span>
            </div>
          </form>
        </div>

        <footer className={Styles.footer}>
          <Image src="/burger.png" alt="Hambúrguer" width={80} height={80} />
          <Image
            src="/ingredients.png"
            alt="Hambúrguer"
            width={80}
            height={80}
          />
        </footer>
      </div>
    </Container>
  );
};

export default Register;
