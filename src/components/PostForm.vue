<template>
  <div class="post-form" v-if="!isFormSent">
    <h2>Working with POST request</h2>
    <div class="post-form__form">
      <div class="post-form__form-wrap">
        <FormKit
          type="form"
          :actions="false"
          :incomplete-message="false"
          @submit="submitHandler"
        >
          <div class="post-form__form__inputs">
            <FormKit
              type="text"
              name="name"
              label="Your name"
              validation-label="Name"
              validation="required|alpha|length:2,60"
              @focus="onInputFocus"
            />
            <FormKit
              type="email"
              name="email"
              validation-label="Email"
              validation="required|email"
              label="Email"
              @focus="onInputFocus"
            />
            <FormKit
              type="tel"
              label="Phone"
              name="phone"
              validation="required|matches:/^\+?[3][8][0][-\(]?\d{2}\)?-?\d{3}-?\d{2}-?\d{2}$/"
              validation-label="Phone"
              help="+38 (XXX) XXX - XX - XX"
              :validation-messages="{
                matches:
                  'Phone number must be formatted: +38 (XXX) XXX - XX - XX',
              }"
              @focus="onInputFocus"
            />
          </div>
          <div class="post-form__form__radio">
            <p class="radio-label">Select your position</p>
            <FormKit
              type="radio"
              name="position_id"
              validation="required"
              validation-label="Position"
              :options="positions"
            />
          </div>
          <div class="post-form__form__file">
            <FormKit
              type="file"
              label="Upload"
              name="photo"
              validation="required"
              validation-label="Photo"
              accept=".jpg,.jpeg"
            />
          </div>

          <button type="submit" class="button">
            Sign up
          </button>
        </FormKit>
      </div>
    </div>
  </div>

  <FormBanner v-else>
    User successfully registered
  </FormBanner>
</template>

<script setup>
import FormBanner from "./FormBanner.vue";
import Button from "./Button.vue";
import "@formkit/themes/genesis";

import { ref } from "vue";
import { useMainStore } from "../store";
import { storeToRefs } from "pinia";

const store = useMainStore();
const { createNewUser } = store;
const { positions } = storeToRefs(store);

const isFormSent = ref(false);

const onInputFocus = (e) => {
  e.target.closest(".formkit-wrapper").classList.add("active");
};

const submitHandler = (data) => {
  const photo = data.photo[0].file;

  if (photo.size / (1024 * 1024) > 5) {
    alert("File size is bigger than 5mb");
    return;
  }

  let formData = new FormData();
  formData.append("name", data.name);
  formData.append("email", data.email);
  formData.append("position_id", data.position_id);
  formData.append("phone", data.phone);
  formData.append("photo", photo);

  createNewUser(formData)
    .then(() => isFormSent.value = true)
    .catch(e => alert(e))
};
</script>

<style lang="scss" scoped>
@import "src/style/variables";

.post-form {
  &__form {
    max-width: 380px;
    margin: auto;

    @media (max-width: 414px) {
      max-width: unset;
      padding: 0 16px;
    }

    &-wrap {
      display: flex;
      flex-direction: column;

      :deep {
        //input error styles
        .formkit-label {
          font-weight: 400;
        }

        .formkit-fieldset {
          border: none;
        }

        .formkit-decorator {
          box-shadow: none;
          background: none;
          box-sizing: inherit;
        }

        .formkit-input:checked ~ .formkit-decorator {
          box-shadow: none;
        }

        [data-invalid] .formkit-inner {
          border: 2px solid $error;
          box-shadow: none;
          border-radius: 4px;
        }

        [data-invalid] .formkit-label {
          color: $error;
        }

        ul {
          padding: 0;
        }

        .formkit-message {
          font-size: 12px;
          margin-left: 16px;
          margin-top: 4px;
          color: $error;
          padding: 0;
        }

        #userForm-incomplete {
          display: none;
        }
      }
    }

    //input type text styles
    &__inputs {
      :deep {
        //custom label
        .formkit {
          &-wrapper {
            position: relative;

            &.active label {
              top: -8px;
              transform: translateY(0);
            }
          }

          &-label {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            padding: 0 5px;
            background: $background;
            z-index: 1;
            margin-left: 10px;
            font-size: 14px;
            color: $placeholder;
            transition: all 0.1s ease;
          }
        }

        .formkit-outer {
          margin-bottom: 50px;
        }

        .formkit-input {
          padding: 14px 0 14px 16px;
          background-color: $background;

          //remove background for autofill inputs
          &:-webkit-autofill {
            -webkit-box-shadow: inset 0 0 0 50px $background !important;
          }
        }

        //text above phone input
        .formkit-help {
          color: $placeholder;
          font-size: 12px;
          margin-left: 16px;
        }

        //removing blue border when input is active
        .formkit-inner {
          box-shadow: none;
          border: 1px solid $border;
        }
      }
    }

    //radio button styles
    &__radio {
      margin-bottom: 50px;

      .radio-label {
        margin-bottom: 11px;
      }

      :deep {
        //custom radio button
        .formkit-option {
          margin-bottom: 1px;
        }

        .formkit-wrapper {
          position: relative;
          margin-bottom: 7px;

          & input:checked ~ .formkit-decorator {
            border-color: $secondary;

            &:after {
              display: block;
            }
          }

          & .formkit-decorator:after {
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 10px;
            height: 10px;
            border-radius: 50%;
            background: $secondary;
          }
        }

        .formkit-decorator {
          position: absolute;
          top: -10px;
          left: 0;
          height: 20px;
          width: 20px;
          border-radius: 50%;
          border: 1px solid $border;

          &:after {
            content: "";
            position: absolute;
            display: none;
          }
        }

        .formkit-label {
          margin-left: 18px;
        }

        .formkit-input {
          position: absolute;
          opacity: 0;
        }

        .formkit-inner {
          margin-right: 12px;
        }

        .formkit-fieldset {
          padding: 0;
        }

        //error
        [data-invalid] .formkit-inner {
          border: none;
        }

        [data-invalid] .formkit-label {
          color: $placeholder;
        }
      }
    }

    //input type file styles
    &__file {
      margin-bottom: 50px;

      :deep {
        .formkit-label {
          width: 83px;
          padding: 0;
          border: 1px solid $black;
          border-radius: 4px 0px 0px 4px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .formkit-wrapper {
          height: 54px;
          display: flex;

          .formkit-inner {
            width: calc(100% - 83px);
            box-shadow: none;
            border: 1px solid $border;
            border-left: none;
            border-radius: 0 4px 4px 0;

            .formkit-icon {
              display: none;
            }

            span {
              padding: 5px 16px;
              overflow: hidden;
              white-space: nowrap;
              text-overflow: ellipsis;
            }
          }
        }

        .formkit-remove-files {
          display: none;
        }

        .formkit-input {
          display: none;

          &[aria-describedby] {
            display: none;
          }
        }

        //error
        [data-invalid] {
          .formkit-inner {
            border-radius: 0 4px 4px 0;
            border: 2px solid $error;
          }

          .formkit-label {
            color: $black;
            border: 2px solid $error;
            border-right: none;
          }
        }
      }
    }

    //post request button
    .button {
      color: #ffffff;
      width: 100px;
      height: 34px;
      background: $background2;
      border-radius: 80px;
      display: block;
      margin: auto;
      transition: 0.3s;

      &:hover {
        opacity: 0.7;
      }
    }
  }
}
</style>
