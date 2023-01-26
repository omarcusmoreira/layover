import { Button, Checkbox, MenuItem, Select, TextField } from "@mui/material";
import { useState } from "react";
import RegistryBackground from '../../assets/images/RegistryBackground.svg'

export function RegisterUser() {
  const [name, setName] = useState("");
  const [born, setBorn] = useState("");
  const [genre, setGenre] = useState("");
  const [nacionaly, setNacionaly] = useState("");
  const [cpf, setCpf] = useState("");
  const [passport, setPassport] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatEmail, setRepeatEmail] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [isBrazilian, setIsBrazilian] = useState(true);
  const [agreeAll, setAgreeAll] = useState(false);

  const [messageErrorEmail, setMessageErrorEmail] = useState("");
  const [messageErrorPassword, setMessageErrorPassword] = useState("");

  const [userData, setUserData] = useState({
    name,
    born,
    genre,
    cpf,
    passport,
    email,
    password,
    agreeAll,
  });

  const stylesInput = {
    border: "1px solid #021442",
    borderRadius: ".4rem",
    fontSize: "1rem",
    backgroundColor: "#fff",
    paddingInline: ".5rem",
  };

  const styleError = {
    border: "1px solid #E30B22",
    borderRadius: ".4rem",
    fontSize: "1rem",
    backgroundColor: "#fff",
    paddingInline: ".5rem",
  };

  const cpfMask = (value: any) => {
    return value
      .replace(/\D/g, "")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d{1,2})/, "$1-$2")
      .replace(/(-\d{2})\d+?$/, "$1");
  };

  function handleNationality(event: any) {
    setNacionaly(event.target.value);
    const value = event.target.value;
    if (value === "brazilian") {
      setIsBrazilian(true);
    } else {
      setIsBrazilian(false);
    }
  }

  function handleValidateEmail() {
    if (!repeatEmail.includes("@") || !email.includes("@")) {
      setMessageErrorEmail("Por favor coloque um email válido");
    } else if (repeatEmail !== email) {
      setMessageErrorEmail("Emails não coincidem");
      return false;
    } else {
      setMessageErrorEmail("");
      return true;
    }
  }

  function handleValidatePassword() {
    console.log(repeatPassword);
    if (repeatPassword !== password) {
      setMessageErrorPassword("Senhas não coincidem");
      return false;
    } else {
      setMessageErrorPassword("");
      return true;
    }
  }

  function handleSubmit(event: any) {
    event.preventDefault();
    if (!handleValidateEmail() || !handleValidatePassword()) return false;

    setUserData({
      name,
      born,
      genre,
      cpf,
      passport,
      email,
      password,
      agreeAll,
    });
  }

  return (
    <div className="registry-container">
      <div className="registry-info">
        <TextField
          value={name}
          onChange={(event) => setName(event.target.value)}
          label="Nome Completo"
          variant="outlined"
          className="mb15"
        />

        <div className="display-flex align-items-center col-1-1">
          <TextField
            onChange={(e) => setBorn(e.target.value)}
            type="date"
            variant="standard"
            datatype="DD/MM/AAAA"
            placeholder="Data de Nascimento"
            InputProps={{
              style: stylesInput,
              disableUnderline: true,
            }}
          />
          <Select
            placeholder="Gênero"
            disableUnderline
            variant="standard"
            className="registry-select"
            SelectDisplayProps={{ style: stylesInput }}
            onChange={(e) => setGenre(e.target.value)}
            value={genre}
          >
            <MenuItem value={"Masc"}>Masculino</MenuItem>
            <MenuItem value={"Fem"}>Feminino</MenuItem>
            <MenuItem value={"Others"}>Outros</MenuItem>
            <MenuItem value={"Not-prefer"}>Prefiro não especificar</MenuItem>
          </Select>
          <Select
            placeholder="Nacionalidade"
            variant="standard"
            disableUnderline
            className="registry-select"
            SelectDisplayProps={{ style: stylesInput }}
            onChange={handleNationality}
            value={nacionaly}
          >
            <MenuItem value={"brazilian"}>Brasileiro</MenuItem>
            <MenuItem value={"others"}>Outros</MenuItem>
          </Select>
        </div>

        <div className="registry-form-about-document">
          <div className="registry-form-cpf">
            {isBrazilian ? (
              <div className="registry-infos-input">
                <label htmlFor="">
                  <p>CPF</p>
                  <span>(Digite seu cpf)</span>
                </label>
                <TextField
                  placeholder="123.123.123-12"
                  onChange={(e) => {
                    setCpf(e.target.value);
                  }}
                  value={cpfMask(cpf)}
                  variant="standard"
                  className="registry-input"
                  InputProps={{
                    style: stylesInput,
                    disableUnderline: true,
                  }}
                />
              </div>
            ) : (
              <div className="registry-infos-input">
                <label htmlFor="">
                  <p>Passaporte</p>
                  <span>(Digite número do passaporte)</span>
                </label>
                <TextField
                  onChange={(e) => setPassport(e.target.value)}
                  variant="standard"
                  className="registry-input"
                  InputProps={{
                    style: stylesInput,
                    disableUnderline: true,
                  }}
                />
              </div>
            )}
          </div>
        </div>
        <div className="registry-form-email">
          <div className="registry-infos-input">
            <label htmlFor="">
              <p>E-mail</p>
              <span>(Digite o email)</span>
            </label>
            <TextField
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              variant="standard"
              className="registry-input"
              InputProps={{
                style: messageErrorEmail.length > 0 ? styleError : stylesInput,
                disableUnderline: true,
              }}
            />
          </div>
          <div className="registry-infos-input">
            <label htmlFor="">
              <p>Confirme o email</p>
              <span>(Digite o email)</span>
            </label>
            <TextField
              onChange={(e) => {
                setRepeatEmail(e.target.value);
              }}
              variant="standard"
              className="registry-input"
              InputProps={{
                style: messageErrorEmail.length > 0 ? styleError : stylesInput,
                disableUnderline: true,
              }}
            />
            <span className="error">{messageErrorEmail}</span>
          </div>
        </div>
        <div className="registry-form-password">
          <div className="registry-infos-input">
            <label htmlFor="">
              <p>Coloque uma senha</p>
              <span>(Digite uma senha)</span>
            </label>
            <TextField
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              variant="standard"
              className="registry-input"
              InputProps={{
                style:
                  messageErrorPassword.length > 0 ? styleError : stylesInput,
                disableUnderline: true,
              }}
            />
          </div>
          <div className="registry-infos-input">
            <label htmlFor="">
              <p>Confirme sua senha</p>
              <span>(Digite sua senha)</span>
            </label>
            <TextField
              onChange={(e) => setRepeatPassword(e.target.value)}
              type="password"
              variant="standard"
              className="registry-input"
              InputProps={{
                style:
                  messageErrorPassword.length > 0 ? styleError : stylesInput,
                disableUnderline: true,
              }}
            />
            <span className="error">{messageErrorPassword}</span>
          </div>
        </div>

        <div className="registry-send-and-accept">
          <div className="registry-accept">
            <Checkbox onChange={(e) => setAgreeAll(!agreeAll)} />
            <span>
              Li e estou de acordo com os{" "}
              <a href="/terms" target="_blank">
                Termos e condições de uso
              </a>{" "}
              e as <a href="">Politica de Privacidade</a>
            </span>
          </div>
          <div className="registry-send">
            <Button>Cadastrar</Button>
          </div>
        </div>
      </div>
      <img src={RegistryBackground} alt="" />
    </div>
  );
}
