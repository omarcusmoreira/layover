import { useState } from "react";
import { useNavigate } from "react-router-dom";

import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";

import backgroundImage from "../../assets/images/backgroud-register-hotel.svg";

export function RegisterHotel() {
  const [fantasyName, setFantasyName] = useState("");
  const [starts, setStarts] = useState(0);
  const [social, setSocial] = useState("");
  const [cep, setCep] = useState("");
  const [adress, setAdress] = useState("");
  const [neighboor, setNeighboor] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [compl, setCompl] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassoword, setConfirmPassoword] = useState("");

  const stylesInput = {
    border: "1px solid #021442",
    borderRadius: ".4rem",
    fontSize: "1.2rem",
    backgroundColor: "#fff",
    paddingInline: ".8rem",
  };

  const navigate = useNavigate();

  return (
    <div className="registry-hotel-container">
      <div className="registry-hotel-action">
        <div className="registry-hotel-title">
          <h1>Cadastro Hotel</h1>
          <img src={backgroundImage} alt="" />
        </div>
        <div className="registry-hotel-form">
          <form>
            <div className="registry-hotel-box-informations">
              <div className="registry-hotel-form-input">
                <div className="registry-hotel-hotel-generic-infos">
                  <div className="text-field-div">
                    <label htmlFor="">
                      <p>NOME FANTASIA</p>
                    </label>
                    <TextField
                      required
                      type="text"
                      variant="standard"
                      InputProps={{
                        style: stylesInput,
                        disableUnderline: true,
                      }}
                      onChange={(e) => setFantasyName(e.target.value)}
                    />
                  </div>
                  <div className="text-field-div">
                    <label htmlFor="">
                      <span>Número de estrelas</span>
                    </label>
                    <Select
                      required
                      disableUnderline
                      variant="standard"
                      className="registry-hotel-select"
                      SelectDisplayProps={{ style: stylesInput }}
                      onChange={(e) => setStarts(Number(e.target.value))}
                      value={starts}
                    >
                      <MenuItem value={0}>0</MenuItem>
                      <MenuItem value={1}>1</MenuItem>
                      <MenuItem value={2}>2</MenuItem>
                      <MenuItem value={3}>3</MenuItem>
                      <MenuItem value={4}>4</MenuItem>
                      <MenuItem value={5}>5</MenuItem>
                    </Select>
                  </div>
                  <div className="text-field-div">
                    <label htmlFor="">
                      <p>RAZÃO SOCIAL</p>
                    </label>
                    <TextField
                      onChange={(e) => setSocial(e.target.value)}
                      required
                      type="text"
                      variant="standard"
                      InputProps={{
                        style: stylesInput,
                        disableUnderline: true,
                      }}
                    />
                  </div>
                </div>
                <div className="registry-hotel-box-adress">
                  <h2>Onde está localizada a sua propriedade</h2>
                  <div className="register-hotel-form-adress">
                    <div className="register-hotel-form-street">
                      <div className="text-field-div">
                        <label htmlFor="">
                          <p>CEP</p>
                        </label>
                        <TextField
                          onChange={(e) => setCep(e.target.value)}
                          className="text-field"
                          required
                          type="text"
                          variant="standard"
                          InputProps={{
                            style: stylesInput,
                            disableUnderline: true,
                          }}
                        />
                      </div>
                      <div className="text-field-div">
                        <label htmlFor="">
                          <p>ENDEREÇO</p>
                        </label>
                        <TextField
                          onChange={(e) => setAdress(e.target.value)}
                          className="text-field"
                          required
                          type="text"
                          variant="standard"
                          InputProps={{
                            style: stylesInput,
                            disableUnderline: true,
                          }}
                        />
                      </div>
                      <div className="text-field-div">
                        <label htmlFor="">
                          <p>BAIRRO</p>
                        </label>
                        <TextField
                          onChange={(e) => setNeighboor(e.target.value)}
                          className="text-field"
                          required
                          type="text"
                          variant="standard"
                          InputProps={{
                            style: stylesInput,
                            disableUnderline: true,
                          }}
                        />
                      </div>
                      <div className="text-field-div">
                        <label htmlFor="">
                          <p>PAÍS</p>
                        </label>
                        <TextField
                          onChange={(e) => setCountry(e.target.value)}
                          className="text-field"
                          required
                          type="text"
                          variant="standard"
                          InputProps={{
                            style: stylesInput,
                            disableUnderline: true,
                          }}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="register-hotel-form-city">
                    <div className="register-hotel-form-street">
                      <div className="text-field-div">
                        <label htmlFor="">
                          <p>CIDADE</p>
                        </label>
                        <TextField
                          onChange={(e) => setCity(e.target.value)}
                          className="text-field"
                          required
                          type="text"
                          variant="standard"
                          InputProps={{
                            style: stylesInput,
                            disableUnderline: true,
                          }}
                        />
                      </div>
                      <div className="text-field-div">
                        <label htmlFor="">
                          <p>UF</p>
                        </label>
                        <TextField
                          onChange={(e) => setState(e.target.value)}
                          className="text-field"
                          required
                          type="text"
                          variant="standard"
                          InputProps={{
                            style: stylesInput,
                            disableUnderline: true,
                          }}
                        />
                      </div>
                      <div className="text-field-div">
                        <label htmlFor="">
                          <p>COMPLEMENTO</p>
                        </label>
                        <TextField
                          onChange={(e) => setCompl(e.target.value)}
                          className="text-field"
                          required
                          type="text"
                          variant="standard"
                          InputProps={{
                            style: stylesInput,
                            disableUnderline: true,
                          }}
                        />
                      </div>
                      <div className="text-field-div">
                        <label htmlFor="">
                          <p>TELEFONE</p>
                        </label>
                        <TextField
                          onChange={(e) => setPhone(e.target.value)}
                          className="text-field"
                          required
                          type="text"
                          variant="standard"
                          InputProps={{
                            style: stylesInput,
                            disableUnderline: true,
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="registry-hotel-form-email">
                  <div className="text-field-div">
                    <label htmlFor="">
                      <p>E-mail</p>
                    </label>
                    <TextField
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      type="email"
                      variant="standard"
                      className="registry-hotel-input"
                      InputProps={{
                        style: stylesInput,
                        disableUnderline: true,
                      }}
                    />
                  </div>
                  <div className="text-field-div">
                    <label htmlFor="">
                      <p>Confirme o email</p>
                    </label>
                    <TextField
                      onChange={(e) => setConfirmEmail(e.target.value)}
                      required
                      type="email"
                      variant="standard"
                      className="registry-hotel-input"
                      InputProps={{
                        style: stylesInput,
                        disableUnderline: true,
                      }}
                    />
                  </div>
                </div>
                <div className="registry-hotel-form-password">
                  <div className="text-field-div">
                    <label htmlFor="">
                      <p>Coloque uma senha</p>
                    </label>
                    <TextField
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      type="password"
                      variant="standard"
                      className="registry-hotel-input"
                      InputProps={{
                        style: stylesInput,
                        disableUnderline: true,
                      }}
                    />
                  </div>
                  <div className="text-field-div">
                    <label htmlFor="">
                      <p>Confirme sua senha</p>
                    </label>
                    <TextField
                      onChange={(e) => setConfirmPassoword(e.target.value)}
                      required
                      type="password"
                      variant="standard"
                      className="registry-hotel-input"
                      InputProps={{
                        style: stylesInput,
                        disableUnderline: true,
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="registry-hotel-send-and-accept">
              <div className="registry-hotel-accept">
                <Checkbox />
                <span>
                  Li e estou de acordo com os{" "}
                  <a href="/terms" target="_blank">
                    Termos e condições de uso
                  </a>{" "}
                  e as <a href="">Politica de Privacidade</a>
                </span>
              </div>
              <div className="registry-hotel-send">
                <Button
                  onClick={() => {
                    navigate("/register-hotel/accommodations");
                  }}
                  type="submit"
                >
                  Avançar
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
