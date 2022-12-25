import React from "react";

export const Card = ({ item }) => {
  return (
    <div className="card mb-6 mb-xl-9">
      {/*begin::Card body*/}
      <div className="card-body">
        {/*begin::Header*/}
        <div className="d-flex flex-stack mb-3">
          {/*begin::Badge*/}
          <div className="badge badge-light">UI Design</div>
          {/*end::Badge*/}
          {/*begin::Menu*/}
          <div>
            <button
              type="button"
              className="btn btn-sm btn-icon btn-color-light-dark btn-active-light-primary"
              data-kt-menu-trigger="click"
              data-kt-menu-placement="bottom-end"
            >
              {/*begin::Svg Icon | path: icons/duotune/general/gen024.svg*/}
              <span className="svg-icon svg-icon-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24px"
                  height="24px"
                  viewBox="0 0 24 24"
                >
                  <g
                    stroke="none"
                    strokeWidth={1}
                    fill="none"
                    fillRule="evenodd"
                  >
                    <rect
                      x={5}
                      y={5}
                      width={5}
                      height={5}
                      rx={1}
                      fill="currentColor"
                    />
                    <rect
                      x={14}
                      y={5}
                      width={5}
                      height={5}
                      rx={1}
                      fill="currentColor"
                      opacity="0.3"
                    />
                    <rect
                      x={5}
                      y={14}
                      width={5}
                      height={5}
                      rx={1}
                      fill="currentColor"
                      opacity="0.3"
                    />
                    <rect
                      x={14}
                      y={14}
                      width={5}
                      height={5}
                      rx={1}
                      fill="currentColor"
                      opacity="0.3"
                    />
                  </g>
                </svg>
              </span>
              {/*end::Svg Icon*/}
            </button>
            {/*begin::Menu 3*/}
            <div
              className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-semibold w-200px py-3"
              data-kt-menu="true"
            >
              {/*begin::Heading*/}
              <div className="menu-item px-3">
                <div className="menu-content text-muted pb-2 px-3 fs-7 text-uppercase">
                  Payments
                </div>
              </div>
              {/*end::Heading*/}
              {/*begin::Menu item*/}
              <div className="menu-item px-3">
                <a href="#" className="menu-link px-3">
                  Create Invoice
                </a>
              </div>
              {/*end::Menu item*/}
              {/*begin::Menu item*/}
              <div className="menu-item px-3">
                <a href="#" className="menu-link flex-stack px-3">
                  Create Payment
                  <i
                    className="fas fa-exclamation-circle ms-2 fs-7"
                    data-bs-toggle="tooltip"
                    aria-label="Specify a target name for future usage and reference"
                    data-bs-original-title="Specify a target name for future usage and reference"
                    data-kt-initialized={1}
                  />
                </a>
              </div>
              {/*end::Menu item*/}
              {/*begin::Menu item*/}
              <div className="menu-item px-3">
                <a href="#" className="menu-link px-3">
                  Generate Bill
                </a>
              </div>
              {/*end::Menu item*/}
              {/*begin::Menu item*/}
              <div
                className="menu-item px-3"
                data-kt-menu-trigger="hover"
                data-kt-menu-placement="right-end"
              >
                <a href="#" className="menu-link px-3">
                  <span className="menu-title">Subscription</span>
                  <span className="menu-arrow" />
                </a>
                {/*begin::Menu sub*/}
                <div className="menu-sub menu-sub-dropdown w-175px py-4">
                  {/*begin::Menu item*/}
                  <div className="menu-item px-3">
                    <a href="#" className="menu-link px-3">
                      Plans
                    </a>
                  </div>
                  {/*end::Menu item*/}
                  {/*begin::Menu item*/}
                  <div className="menu-item px-3">
                    <a href="#" className="menu-link px-3">
                      Billing
                    </a>
                  </div>
                  {/*end::Menu item*/}
                  {/*begin::Menu item*/}
                  <div className="menu-item px-3">
                    <a href="#" className="menu-link px-3">
                      Statements
                    </a>
                  </div>
                  {/*end::Menu item*/}
                  {/*begin::Menu separator*/}
                  <div className="separator my-2" />
                  {/*end::Menu separator*/}
                  {/*begin::Menu item*/}
                  <div className="menu-item px-3">
                    <div className="menu-content px-3">
                      {/*begin::Switch*/}
                      <label className="form-check form-switch form-check-custom form-check-solid">
                        {/*begin::Input*/}
                        <input
                          className="form-check-input w-30px h-20px"
                          type="checkbox"
                          defaultValue={1}
                          defaultChecked="checked"
                          name="notifications"
                        />
                        {/*end::Input*/}
                        {/*end::Label*/}
                        <span className="form-check-label text-muted fs-6">
                          Recuring
                        </span>
                        {/*end::Label*/}
                      </label>
                      {/*end::Switch*/}
                    </div>
                  </div>
                  {/*end::Menu item*/}
                </div>
                {/*end::Menu sub*/}
              </div>
              {/*end::Menu item*/}
              {/*begin::Menu item*/}
              <div className="menu-item px-3 my-1">
                <a href="#" className="menu-link px-3">
                  Settings
                </a>
              </div>
              {/*end::Menu item*/}
            </div>
            {/*end::Menu 3*/}
          </div>
          {/*end::Menu*/}
        </div>
        {/*end::Header*/}
        {/*begin::Title*/}
        <div className="mb-2">
          <a
            href="#"
            className="fs-4 fw-bold mb-1 text-gray-900 text-hover-primary"
          >
            {item.title}
          </a>
        </div>
        {/*end::Title*/}
        {/*begin::Content*/}
        <div className="fs-6 fw-semibold text-gray-600 mb-5">
          {item.subtitle}
        </div>
        {/*end::Content*/}
        {/*begin::Footer*/}
        <div className="d-flex flex-stack flex-wrapr">
          {/*begin::Users*/}
          <div className="symbol-group symbol-hover my-1">
            <div
              className="symbol symbol-35px symbol-circle"
              data-bs-toggle="tooltip"
              aria-label="Melody Macy"
              data-bs-original-title="Melody Macy"
              data-kt-initialized={1}
            >
              <img
                alt="Pic"
                src="/metronic8/demo7/assets/media/avatars/300-2.jpg"
              />
            </div>
            <div
              className="symbol symbol-35px symbol-circle"
              data-bs-toggle="tooltip"
              aria-label="Harry Mcpherson"
              data-bs-original-title="Harry Mcpherson"
              data-kt-initialized={1}
            >
              <img
                alt="Pic"
                src="/metronic8/demo7/assets/media/avatars/300-19.jpg"
              />
            </div>
            <div
              className="symbol symbol-35px symbol-circle"
              data-bs-toggle="tooltip"
              data-bs-original-title="Susan Redwood"
              data-kt-initialized={1}
            >
              <span className="symbol-label bg-primary text-inverse-primary fw-bold">
                S
              </span>
            </div>
          </div>
          {/*end::Users*/}
          {/*begin::Stats*/}
          <div className="d-flex my-1">
            {/*begin::Stat*/}
            <div className="border border-dashed border-gray-300 rounded py-2 px-3">
              {/*begin::Svg Icon | path: icons/duotune/communication/com008.svg*/}
              <span className="svg-icon svg-icon-3">
                <svg
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    opacity="0.3"
                    d="M4.425 20.525C2.525 18.625 2.525 15.525 4.425 13.525L14.825 3.125C16.325 1.625 18.825 1.625 20.425 3.125C20.825 3.525 20.825 4.12502 20.425 4.52502C20.025 4.92502 19.425 4.92502 19.025 4.52502C18.225 3.72502 17.025 3.72502 16.225 4.52502L5.82499 14.925C4.62499 16.125 4.62499 17.925 5.82499 19.125C7.02499 20.325 8.82501 20.325 10.025 19.125L18.425 10.725C18.825 10.325 19.425 10.325 19.825 10.725C20.225 11.125 20.225 11.725 19.825 12.125L11.425 20.525C9.525 22.425 6.425 22.425 4.425 20.525Z"
                    fill="currentColor"
                  />
                  <path
                    d="M9.32499 15.625C8.12499 14.425 8.12499 12.625 9.32499 11.425L14.225 6.52498C14.625 6.12498 15.225 6.12498 15.625 6.52498C16.025 6.92498 16.025 7.525 15.625 7.925L10.725 12.8249C10.325 13.2249 10.325 13.8249 10.725 14.2249C11.125 14.6249 11.725 14.6249 12.125 14.2249L19.125 7.22493C19.525 6.82493 19.725 6.425 19.725 5.925C19.725 5.325 19.525 4.825 19.125 4.425C18.725 4.025 18.725 3.42498 19.125 3.02498C19.525 2.62498 20.125 2.62498 20.525 3.02498C21.325 3.82498 21.725 4.825 21.725 5.925C21.725 6.925 21.325 7.82498 20.525 8.52498L13.525 15.525C12.325 16.725 10.525 16.725 9.32499 15.625Z"
                    fill="currentColor"
                  />
                </svg>
              </span>
              {/*end::Svg Icon*/}
              <span className="ms-1 fs-7 fw-bold text-gray-600">4</span>
            </div>
            {/*end::Stat*/}
            {/*begin::Stat*/}
            <div className="border border-dashed border-gray-300 rounded py-2 px-3 ms-3">
              {/*begin::Svg Icon | path: icons/duotune/communication/com012.svg*/}
              <span className="svg-icon svg-icon-3">
                <svg
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    opacity="0.3"
                    d="M20 3H4C2.89543 3 2 3.89543 2 5V16C2 17.1046 2.89543 18 4 18H4.5C5.05228 18 5.5 18.4477 5.5 19V21.5052C5.5 22.1441 6.21212 22.5253 6.74376 22.1708L11.4885 19.0077C12.4741 18.3506 13.6321 18 14.8167 18H20C21.1046 18 22 17.1046 22 16V5C22 3.89543 21.1046 3 20 3Z"
                    fill="currentColor"
                  />
                  <rect
                    x={6}
                    y={12}
                    width={7}
                    height={2}
                    rx={1}
                    fill="currentColor"
                  />
                  <rect
                    x={6}
                    y={7}
                    width={12}
                    height={2}
                    rx={1}
                    fill="currentColor"
                  />
                </svg>
              </span>
              {/*end::Svg Icon*/}
              <span className="ms-1 fs-7 fw-bold text-gray-600">5</span>
            </div>
            {/*end::Stat*/}
          </div>
          {/*end::Stats*/}
        </div>
        {/*end::Footer*/}
      </div>
      {/*end::Card body*/}
    </div>
  );
};
