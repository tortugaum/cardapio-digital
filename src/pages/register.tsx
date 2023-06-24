/* eslint-disable react-hooks/exhaustive-deps */

import Image from 'next/image';
import Link from 'next/link';

import Container from '@/compnents/Container';
import TextField from '@/compnents/form/TextField';

import Styles from '../styles/Login.module.css';

const Register: React.FC = () => {
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
          <TextField
            value="Email"
            type="mail"
            icon={{ name: 'AiOutlineMail', color: '#ff6565' }}
          />
          <TextField
            value="Usuário"
            type="text"
            icon={{ name: 'BsPerson', color: '#ff6565' }}
          />
          <TextField
            value="Senha"
            type="password"
            icon={{ name: 'FiLock', color: '#ff6565' }}
          />

          <div className={Styles.loginContainer}>
            <button>Cadastrar</button>
            <span>
              Já tem uma conta? <Link href="/login">Entrar</Link>
            </span>
          </div>
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
