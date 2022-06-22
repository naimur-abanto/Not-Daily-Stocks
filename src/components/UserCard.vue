<template>
  <div class="main-div">
    <div class="name-pp">
      <div class="pp"></div>
      <div class="name">
        <p class="primary-p">Bruce Wayne</p>
        <p class="secondary-p">brucen@wayne.com</p>
      </div>
      <button>Edit</button>
    </div>
    <div class="subscription">
      <h3>Account Settings</h3>
      <p class="secondary-p">
        This is the personal information you use to access and manage your
        account.
      </p>
      <p class="primary-p">Email address</p>
      <p class="secondary-p">brucen@wayne.com</p>
      <input type="checkbox" />I’d like to receive stock news in email for my
      chosen stocks.
    </div>
    <div class="password">
      <p class="primary-p">Password</p>
      <p>*********</p>
      <button>Change Password</button>
    </div>
  </div>
</template>

<style>
.main-div {
  /* background-color: rebeccapurple; */
  width: 30vw;
  /* height: 50vh; */
  margin: 5em auto;
  padding: 2em 3em;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em,
    rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em,
    rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;
}

/* uppermost div */
.name-pp {
  display: flex;
  justify-content: space-around;
  border: 2px solid black;
}
/* profile picture on upper div */
.pp {
  background-color: rebeccapurple;
  width: 60px;
  height: 60px;
  border-radius: 50%;
}
/* name and email on upper div */
.name {
  display: flex;
  flex-direction: column;
}
/* name field on upper div */
.primary-p {
  font-weight: bold;
}

.secondary-p {
  font-size: small;
  font-weight: bold;
  color: rgb(74, 74, 74);
}

.subscription {
  padding-bottom: 50px;
  border-bottom: thin solid grey;
}
.password {
  padding-top: 30px;
}
</style>
