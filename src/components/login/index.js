import React from "react";

function Login() {
    return(
        <div>
            <div className="d-flex flex-column flex-root">
  {/*begin::Page bg image*/}
  <style
    dangerouslySetInnerHTML={{
      __html:
        "body { background-image: url('assets/media/auth/bg4.jpg'); } [data-theme=\"dark\"] body { background-image: url('assets/media/auth/bg4-dark.jpg'); }"
    }}
  />
  {/*end::Page bg image*/}
  {/*begin::Authentication - Sign-in */}
  <div className="d-flex flex-column flex-column-fluid flex-lg-row">
    {/*begin::Aside*/}
    <div className="d-flex flex-center w-lg-50 pt-15 pt-lg-0 px-10">
      {/*begin::Aside*/}
      <div className="d-flex flex-center flex-lg-start flex-column">
        {/*begin::Logo*/}
        <a href="#" className="mb-7">
          <img alt="Logo" src="assets/media/logos/custom-3.svg" />
        </a>
        {/*end::Logo*/}
        {/*begin::Title*/}
        <h2 className="text-white fw-normal m-0">
          Branding tools designed for your business
        </h2>
        {/*end::Title*/}
      </div>
      {/*begin::Aside*/}
    </div>
    {/*begin::Aside*/}
    {/*begin::Body*/}
    <div className="d-flex flex-center w-lg-50 p-10">
      {/*begin::Card*/}
      <div className="card rounded-3 w-md-550px">
        {/*begin::Card body*/}
        <div className="card-body p-10 p-lg-20">
          {/*begin::Form*/}
          <form
            className="form w-100"
            noValidate="novalidate"
            id="kt_sign_in_form"
            data-kt-redirect-url="../../demo7/dist/index.html"
            action="#"
          >
            {/*begin::Heading*/}
            <div className="text-center mb-11">
              {/*begin::Title*/}
              <h1 className="text-dark fw-bolder mb-3">Sign In</h1>
              {/*end::Title*/}
              {/*begin::Subtitle*/}
              <div className="text-gray-500 fw-semibold fs-6">
                Your Social Campaigns
              </div>
              {/*end::Subtitle=*/}
            </div>
            {/*begin::Heading*/}
            {/*begin::Login options*/}
            <div className="row g-3 mb-9">
              {/*begin::Col*/}
              <div className="col-md-6">
                {/*begin::Google link=*/}
                <a
                  href="#"
                  className="btn btn-flex btn-outline btn-text-gray-700 btn-active-color-primary bg-state-light flex-center text-nowrap w-100"
                >
                  <img
                    alt="Logo"
                    src="assets/media/svg/brand-logos/google-icon.svg"
                    className="h-15px me-3"
                  />
                  Sign in with Google
                </a>
                {/*end::Google link=*/}
              </div>
              {/*end::Col*/}
              {/*begin::Col*/}
              <div className="col-md-6">
                {/*begin::Google link=*/}
                <a
                  href="#"
                  className="btn btn-flex btn-outline btn-text-gray-700 btn-active-color-primary bg-state-light flex-center text-nowrap w-100"
                >
                  <img
                    alt="Logo"
                    src="assets/media/svg/brand-logos/apple-black.svg"
                    className="theme-light-show h-15px me-3"
                  />
                  <img
                    alt="Logo"
                    src="assets/media/svg/brand-logos/apple-black-dark.svg"
                    className="theme-dark-show h-15px me-3"
                  />
                  Sign in with Apple
                </a>
                {/*end::Google link=*/}
              </div>
              {/*end::Col*/}
            </div>
            {/*end::Login options*/}
            {/*begin::Separator*/}
            <div className="separator separator-content my-14">
              <span className="w-125px text-gray-500 fw-semibold fs-7">
                Or with email
              </span>
            </div>
            {/*end::Separator*/}
            {/*begin::Input group=*/}
            <div className="fv-row mb-8">
              {/*begin::Email*/}
              <input
                type="text"
                placeholder="Email"
                name="email"
                autoComplete="off"
                className="form-control bg-transparent"
              />
              {/*end::Email*/}
            </div>
            {/*end::Input group=*/}
            <div className="fv-row mb-3">
              {/*begin::Password*/}
              <input
                type="password"
                placeholder="Password"
                name="password"
                autoComplete="off"
                className="form-control bg-transparent"
              />
              {/*end::Password*/}
            </div>
            {/*end::Input group=*/}
            {/*begin::Wrapper*/}
            <div className="d-flex flex-stack flex-wrap gap-3 fs-base fw-semibold mb-8">
              <div />
              {/*begin::Link*/}
              <a
                href="#"
                className="link-primary"
              >
                Forgot Password ?
              </a>
              {/*end::Link*/}
            </div>
            {/*end::Wrapper*/}
            {/*begin::Submit button*/}
            <div className="d-grid mb-10">
              <button
                type="submit"
                id="kt_sign_in_submit"
                className="btn btn-primary"
                
              >
                {/*begin::Indicator label*/}
                <span className="indicator-label">Sign In</span>
                {/*end::Indicator label*/}
                {/*begin::Indicator progress*/}
                <span className="indicator-progress">
                  Please wait...
                  <span className="spinner-border spinner-border-sm align-middle ms-2" />
                </span>
                {/*end::Indicator progress*/}
              </button>
            </div>
            {/*end::Submit button*/}
            {/*begin::Sign up*/}
            <div className="text-gray-500 text-center fw-semibold fs-6">
              Not a Member yet?
              <a
                href="#"
                className="link-primary"
              >
                Sign up
              </a>
            </div>
            {/*end::Sign up*/}
          </form>
          {/*end::Form*/}
        </div>
        {/*end::Card body*/}
      </div>
      {/*end::Card*/}
    </div>
    {/*end::Body*/}
  </div>
  {/*end::Authentication - Sign-in*/}
</div>

        </div>
    )
}

export default Login;