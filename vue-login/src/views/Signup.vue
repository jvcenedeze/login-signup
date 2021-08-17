<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-sm-2"></div>
      <div class="col-12 col-sm-8">
        <div class="d-flex flex-column justify-content-center align-items-center">
          <div class="input-group mt-3">
            <span class="input-group-text"><svg
                width="18"
                height="20"
                viewBox="0 0 18 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.1211 15.8969C16.679 14.8496 16.0374 13.8984 15.2321 13.0961C14.4292 12.2915 13.4781 11.65 12.4313 11.207C12.4219 11.2023 12.4126 11.2 12.4032 11.1953C13.8633 10.1406 14.8126 8.42266 14.8126 6.48438C14.8126 3.27344 12.211 0.671875 9.00005 0.671875C5.78912 0.671875 3.18756 3.27344 3.18756 6.48438C3.18756 8.42266 4.13678 10.1406 5.59693 11.1977C5.58756 11.2023 5.57818 11.2047 5.56881 11.2094C4.51881 11.6523 3.57662 12.2875 2.76803 13.0984C1.96344 13.9013 1.32194 14.8524 0.878964 15.8992C0.443782 16.924 0.209079 18.0228 0.187559 19.1359C0.186933 19.161 0.191321 19.1858 0.200463 19.2091C0.209605 19.2324 0.223317 19.2537 0.240791 19.2716C0.258264 19.2895 0.279146 19.3037 0.302206 19.3134C0.325265 19.3231 0.350036 19.3281 0.375059 19.3281H1.78131C1.88443 19.3281 1.96646 19.2461 1.96881 19.1453C2.01568 17.3359 2.74224 15.6414 4.02662 14.357C5.35552 13.0281 7.12037 12.2969 9.00005 12.2969C10.8797 12.2969 12.6446 13.0281 13.9735 14.357C15.2579 15.6414 15.9844 17.3359 16.0313 19.1453C16.0336 19.2484 16.1157 19.3281 16.2188 19.3281H17.625C17.6501 19.3281 17.6748 19.3231 17.6979 19.3134C17.721 19.3037 17.7418 19.2895 17.7593 19.2716C17.7768 19.2537 17.7905 19.2324 17.7996 19.2091C17.8088 19.1858 17.8132 19.161 17.8125 19.1359C17.7891 18.0156 17.5571 16.9258 17.1211 15.8969ZM9.00005 10.5156C7.92427 10.5156 6.91177 10.0961 6.15006 9.33438C5.38834 8.57266 4.96881 7.56016 4.96881 6.48438C4.96881 5.40859 5.38834 4.39609 6.15006 3.63437C6.91177 2.87266 7.92427 2.45312 9.00005 2.45312C10.0758 2.45312 11.0883 2.87266 11.8501 3.63437C12.6118 4.39609 13.0313 5.40859 13.0313 6.48438C13.0313 7.56016 12.6118 8.57266 11.8501 9.33438C11.0883 10.0961 10.0758 10.5156 9.00005 10.5156Z"
                  fill="#777777"
                  fill-opacity="0.6"
                />
              </svg>
            </span>
            <input
              type="email"
              class="form-control"
              v-model.trim.lazy="$v.user.name.$model"
              placeholder="Seu nome"
              aria-label="Seu nome"
            >
          </div>
          <div class="input-group mt-3">
            <span class="input-group-text"><svg
                width="16"
                height="24"
                viewBox="0 0 16 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.5 1.5C12.8978 1.5 13.2794 1.65804 13.5607 1.93934C13.842 2.22064 14 2.60218 14 3V21C14 21.3978 13.842 21.7794 13.5607 22.0607C13.2794 22.342 12.8978 22.5 12.5 22.5H3.5C3.10218 22.5 2.72064 22.342 2.43934 22.0607C2.15804 21.7794 2 21.3978 2 21V3C2 2.60218 2.15804 2.22064 2.43934 1.93934C2.72064 1.65804 3.10218 1.5 3.5 1.5H12.5ZM3.5 0C2.70435 0 1.94129 0.316071 1.37868 0.87868C0.81607 1.44129 0.5 2.20435 0.5 3V21C0.5 21.7956 0.81607 22.5587 1.37868 23.1213C1.94129 23.6839 2.70435 24 3.5 24H12.5C13.2956 24 14.0587 23.6839 14.6213 23.1213C15.1839 22.5587 15.5 21.7956 15.5 21V3C15.5 2.20435 15.1839 1.44129 14.6213 0.87868C14.0587 0.316071 13.2956 0 12.5 0L3.5 0Z"
                  fill="#777777"
                  fill-opacity="0.6"
                />
                <path
                  d="M8 21C8.39782 21 8.77936 20.842 9.06066 20.5607C9.34196 20.2794 9.5 19.8978 9.5 19.5C9.5 19.1022 9.34196 18.7206 9.06066 18.4393C8.77936 18.158 8.39782 18 8 18C7.60218 18 7.22064 18.158 6.93934 18.4393C6.65804 18.7206 6.5 19.1022 6.5 19.5C6.5 19.8978 6.65804 20.2794 6.93934 20.5607C7.22064 20.842 7.60218 21 8 21Z"
                  fill="#777777"
                  fill-opacity="0.6"
                />
              </svg>

            </span>
            <the-mask
              type="tel"
              class="form-control"
              v-model.lazy="$v.user.phone.$model"
              placeholder="Seu número de celular"
              aria-label="Seu número de celular"
              :mask="['(##) ####-####', '(##) #####-####']"
            />
          </div>
          <small
            class="text-danger"
            v-if="!$v.user.phone.minLength"
          >
            Digite um número de celular válido.
          </small>
          <div class="input-group mt-3">
            <span class="input-group-text"><svg
                width="20"
                height="16"
                viewBox="0 0 20 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17 0H3C2.20435 0 1.44129 0.316071 0.87868 0.87868C0.316071 1.44129 0 2.20435 0 3V13C0 13.7956 0.316071 14.5587 0.87868 15.1213C1.44129 15.6839 2.20435 16 3 16H17C17.7956 16 18.5587 15.6839 19.1213 15.1213C19.6839 14.5587 20 13.7956 20 13V3C20 2.20435 19.6839 1.44129 19.1213 0.87868C18.5587 0.316071 17.7956 0 17 0ZM16.33 2L10 6.75L3.67 2H16.33ZM17 14H3C2.73478 14 2.48043 13.8946 2.29289 13.7071C2.10536 13.5196 2 13.2652 2 13V3.25L9.4 8.8C9.5731 8.92982 9.78363 9 10 9C10.2164 9 10.4269 8.92982 10.6 8.8L18 3.25V13C18 13.2652 17.8946 13.5196 17.7071 13.7071C17.5196 13.8946 17.2652 14 17 14Z"
                  fill="#777777"
                  fill-opacity="0.6"
                />
              </svg>
            </span>
            <input
              type="email"
              class="form-control"
              v-model.trim.lazy="$v.user.email.$model"
              placeholder="Seu e-mail"
              aria-label="Seu e-mail"
            >
          </div>
          <small
            class="text-danger"
            v-if="!$v.user.email.email"
          >
            Digite um e-mail válido.
          </small>
          <div class="input-group mt-3">
            <span class="input-group-text">
              <svg
                width="16"
                height="20"
                viewBox="0 0 16 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 11C7.69555 10.9964 7.39732 11.0862 7.14544 11.2573C6.89357 11.4284 6.70015 11.6725 6.59121 11.9568C6.48228 12.2411 6.46306 12.552 6.53615 12.8476C6.60923 13.1431 6.77111 13.4092 7 13.61V15C7 15.2652 7.10536 15.5196 7.29289 15.7071C7.48043 15.8946 7.73478 16 8 16C8.26522 16 8.51957 15.8946 8.70711 15.7071C8.89464 15.5196 9 15.2652 9 15V13.61C9.22889 13.4092 9.39077 13.1431 9.46385 12.8476C9.53694 12.552 9.51772 12.2411 9.40879 11.9568C9.29985 11.6725 9.10643 11.4284 8.85456 11.2573C8.60268 11.0862 8.30445 10.9964 8 11ZM13 7V5C13 3.67392 12.4732 2.40215 11.5355 1.46447C10.5979 0.526784 9.32608 0 8 0C6.67392 0 5.40215 0.526784 4.46447 1.46447C3.52678 2.40215 3 3.67392 3 5V7C2.20435 7 1.44129 7.31607 0.87868 7.87868C0.316071 8.44129 0 9.20435 0 10V17C0 17.7956 0.316071 18.5587 0.87868 19.1213C1.44129 19.6839 2.20435 20 3 20H13C13.7956 20 14.5587 19.6839 15.1213 19.1213C15.6839 18.5587 16 17.7956 16 17V10C16 9.20435 15.6839 8.44129 15.1213 7.87868C14.5587 7.31607 13.7956 7 13 7ZM5 5C5 4.20435 5.31607 3.44129 5.87868 2.87868C6.44129 2.31607 7.20435 2 8 2C8.79565 2 9.55871 2.31607 10.1213 2.87868C10.6839 3.44129 11 4.20435 11 5V7H5V5ZM14 17C14 17.2652 13.8946 17.5196 13.7071 17.7071C13.5196 17.8946 13.2652 18 13 18H3C2.73478 18 2.48043 17.8946 2.29289 17.7071C2.10536 17.5196 2 17.2652 2 17V10C2 9.73478 2.10536 9.48043 2.29289 9.29289C2.48043 9.10536 2.73478 9 3 9H13C13.2652 9 13.5196 9.10536 13.7071 9.29289C13.8946 9.48043 14 9.73478 14 10V17Z"
                  fill="#777777"
                  fill-opacity="0.6"
                />
              </svg>
            </span>
            <input
              type="password"
              class="form-control"
              id="input-password"
              v-model.trim.lazy="$v.user.password.$model"
              placeholder="Digite uma senha forte"
              aria-label="Digite uma senha forte"
            >
            <span class="input-group-text show-password">
              <button
                class="btn"
                @click="showPassword('input-password')"
              >
                <svg
                  width="22"
                  height="16"
                  viewBox="0 0 22 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20.257 6.962C20.731 7.582 20.731 8.419 20.257 9.038C18.764 10.987 15.182 15 11 15C6.818 15 3.236 10.987 1.743 9.038C1.51238 8.74113 1.38719 8.37592 1.38719 8C1.38719 7.62408 1.51238 7.25887 1.743 6.962C3.236 5.013 6.818 1 11 1C15.182 1 18.764 5.013 20.257 6.962V6.962Z"
                    stroke="#4ECB71"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M11 11C12.6569 11 14 9.65685 14 8C14 6.34315 12.6569 5 11 5C9.34315 5 8 6.34315 8 8C8 9.65685 9.34315 11 11 11Z"
                    stroke="#4ECB71"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </span>
          </div>
          <small
            class="text-danger"
            v-if="!$v.user.password.minLength"
          >
            A senha deve conter no mínimo 6 carateres.
          </small>
          <div class="input-group mt-3">
            <span class="input-group-text">
              <svg
                width="16"
                height="20"
                viewBox="0 0 16 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 11C7.69555 10.9964 7.39732 11.0862 7.14544 11.2573C6.89357 11.4284 6.70015 11.6725 6.59121 11.9568C6.48228 12.2411 6.46306 12.552 6.53615 12.8476C6.60923 13.1431 6.77111 13.4092 7 13.61V15C7 15.2652 7.10536 15.5196 7.29289 15.7071C7.48043 15.8946 7.73478 16 8 16C8.26522 16 8.51957 15.8946 8.70711 15.7071C8.89464 15.5196 9 15.2652 9 15V13.61C9.22889 13.4092 9.39077 13.1431 9.46385 12.8476C9.53694 12.552 9.51772 12.2411 9.40879 11.9568C9.29985 11.6725 9.10643 11.4284 8.85456 11.2573C8.60268 11.0862 8.30445 10.9964 8 11ZM13 7V5C13 3.67392 12.4732 2.40215 11.5355 1.46447C10.5979 0.526784 9.32608 0 8 0C6.67392 0 5.40215 0.526784 4.46447 1.46447C3.52678 2.40215 3 3.67392 3 5V7C2.20435 7 1.44129 7.31607 0.87868 7.87868C0.316071 8.44129 0 9.20435 0 10V17C0 17.7956 0.316071 18.5587 0.87868 19.1213C1.44129 19.6839 2.20435 20 3 20H13C13.7956 20 14.5587 19.6839 15.1213 19.1213C15.6839 18.5587 16 17.7956 16 17V10C16 9.20435 15.6839 8.44129 15.1213 7.87868C14.5587 7.31607 13.7956 7 13 7ZM5 5C5 4.20435 5.31607 3.44129 5.87868 2.87868C6.44129 2.31607 7.20435 2 8 2C8.79565 2 9.55871 2.31607 10.1213 2.87868C10.6839 3.44129 11 4.20435 11 5V7H5V5ZM14 17C14 17.2652 13.8946 17.5196 13.7071 17.7071C13.5196 17.8946 13.2652 18 13 18H3C2.73478 18 2.48043 17.8946 2.29289 17.7071C2.10536 17.5196 2 17.2652 2 17V10C2 9.73478 2.10536 9.48043 2.29289 9.29289C2.48043 9.10536 2.73478 9 3 9H13C13.2652 9 13.5196 9.10536 13.7071 9.29289C13.8946 9.48043 14 9.73478 14 10V17Z"
                  fill="#777777"
                  fill-opacity="0.6"
                />
              </svg>
            </span>
            <input
              type="password"
              class="form-control"
              id="input-confirm-password"
              v-model.trim.lazy="$v.user.confirmPassword.$model"
              placeholder="Digite a senha novamente"
              aria-label="Digite a senha novamente"
            >
            <span class="input-group-text show-password">
              <button
                class="btn"
                @click="showPassword('input-confirm-password')"
              >
                <svg
                  width="22"
                  height="16"
                  viewBox="0 0 22 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20.257 6.962C20.731 7.582 20.731 8.419 20.257 9.038C18.764 10.987 15.182 15 11 15C6.818 15 3.236 10.987 1.743 9.038C1.51238 8.74113 1.38719 8.37592 1.38719 8C1.38719 7.62408 1.51238 7.25887 1.743 6.962C3.236 5.013 6.818 1 11 1C15.182 1 18.764 5.013 20.257 6.962V6.962Z"
                    stroke="#4ECB71"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M11 11C12.6569 11 14 9.65685 14 8C14 6.34315 12.6569 5 11 5C9.34315 5 8 6.34315 8 8C8 9.65685 9.34315 11 11 11Z"
                    stroke="#4ECB71"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </span>
          </div>
          <small
            class="text-danger"
            v-if="user.confirmPassword && user.password !== user.confirmPassword"
          >
            Digite as senhas iguais.
          </small>

          <div class="d-flex justify-content-center mt-3">
            <input
              type="checkbox"
              v-model="user.confirmTerm"
              class="me-2"
              aria-label="Declaro que li e concordo com os termos de uso, e a política de privacidade"
            >
            <p class="terms-text">Declaro que li e concordo com os <span class="terms-text-green">termos de uso</span>, e a <span class="terms-text-green">política de privacidade</span>.</p>
          </div>

          <button
            class="btn btn-submit shadow-none"
            @click="submit"
            :disabled="isLoading || !user.confirmTerm"
          >
            <div
              class="btn-sumbit-text"
              v-if="!isLoading"
            >Entrar</div>
            <div v-else>
              <div class="loader">Loading...</div>
            </div>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import { required, email, minLength, numeric, sameAs } from 'vuelidate/lib/validators'

export default {
  name: 'Login',
  data () {
    return {
      isLoading: false,
      user: {
        name: '',
        phone: '',
        email: '',
        password: '',
        confirmPassword: '',
        confirmTerm: false
      }
    }
  },
  validations () {
    return {
      user: {
        name: { required, minLength: minLength(3) },
        phone: { required, numeric, minLength: minLength(10) },
        email: { required, email },
        password: { required, minLength: minLength(6) },
        confirmPassword: { required, sameAsPassword: sameAs('user.password') },
        confirmTerm: { required }
      }
    }
  },
  methods: {
    showPassword (id) {
      let input = document.getElementById(id);
      if (input.type === "password") {
        input.type = "text";
      } else {
        input.type = "password";
      }
    },
    submit () {
      this.isLoading = true
      setTimeout(() => {
        this.$v.$touch()
        if (this.$v.$invalid) {
          alert('Erro ao tentar conectar, verifique os campos e tente novamente!')
          this.isLoading = false
        } else {
          alert('form enviado')
          this.isLoading = false
        }
      }, 1000)

    }
  },
  mounted () {
    document.title = "Cadastrar-se"
  }
}
</script>

<style lang="scss">
.input-group {
  height: 50px;
  border-radius: 5px;
  border: 1px solid rgba(119, 119, 119, 0.3);
  min-width: 270px;
  span {
    background-color: white;
    border: none;
    button {
      border: none;
    }
    button:focus {
      box-shadow: none;
    }
    button {
      border: none;
    }
  }
  input {
    border: none;
    font-size: 14px;
    color: #777777;
  }
  input:focus {
    box-shadow: none;
  }
  .show-password {
    padding: 0;
    svg {
      cursor: pointer;
    }
  }
}
.input-group input:focus {
  border: 1px solid #4ad395;
}
input[type="checkbox"] {
  height: 18px;
  width: 18px;
  border: 2px solid #77777799;
  margin-top: -2px;
}
.terms-text {
  font-size: 10px;
  font-weight: 400;
  .terms-text-green {
    color: #4ad395;
  }
}
.btn-submit {
  background: #4ad395;
  width: 50%;
  height: 50px;
  .btn-sumbit-text {
    color: white;
    font-size: 16px;
    font-weight: 600;
  }
}

// loading
.loader {
  font-size: 10px;
  margin: 7px auto;
  text-indent: -9999em;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: #ffffff;
  background: -moz-linear-gradient(
    left,
    #ffffff 10%,
    rgba(255, 255, 255, 0) 42%
  );
  background: -webkit-linear-gradient(
    left,
    #ffffff 10%,
    rgba(255, 255, 255, 0) 42%
  );
  background: -o-linear-gradient(left, #ffffff 10%, rgba(255, 255, 255, 0) 42%);
  background: -ms-linear-gradient(
    left,
    #ffffff 10%,
    rgba(255, 255, 255, 0) 42%
  );
  background: linear-gradient(
    to right,
    #ffffff 10%,
    rgba(255, 255, 255, 0) 42%
  );
  position: relative;
  -webkit-animation: load3 1.4s infinite linear;
  animation: load3 1.4s infinite linear;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
}
.loader:before {
  width: 50%;
  height: 50%;
  background: #ffffff;
  border-radius: 100% 0 0 0;
  position: absolute;
  top: 0;
  left: 0;
  content: "";
}
.loader:after {
  background: #4ad395;
  width: 75%;
  height: 75%;
  border-radius: 50%;
  content: "";
  margin: auto;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}
@-webkit-keyframes load3 {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@keyframes load3 {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
</style>