import React from "react";

function Project () {
    return(
<section>
{/* header */}
<div
  id="kt_header"
  className="header"
  data-kt-sticky="true"
  data-kt-sticky-name="header"
  data-kt-sticky-offset="{default: '200px', lg: '300px'}"
>
  <div
    className="container-xxl d-flex align-items-center justify-content-between"
    id="kt_header_container"
  >
    <div
      className="page-title d-flex flex-column align-items-start justify-content-center flex-wrap mt-n5 mt-lg-0 me-lg-2 pb-2 pb-lg-0"
      data-kt-swapper="true"
      data-kt-swapper-mode="prepend"
      data-kt-swapper-parent="{default: '#kt_content_container', lg: '#kt_header_container'}"
    >
      <h1 className="text-dark fw-bold my-0 fs-2">Dashboard</h1>
      <ul className="breadcrumb fw-semibold fs-base my-1">
        <li className="breadcrumb-item text-muted">
          <a href="../../demo7/dist/index.html" className="text-muted">
            Home
          </a>
        </li>
        <li className="breadcrumb-item text-muted">Dashboards</li>
        <li className="breadcrumb-item text-dark">Default</li>
      </ul>
    </div>
    <div className="d-flex d-lg-none align-items-center ms-n2 me-2">
      <div
        className="btn btn-icon btn-active-icon-primary"
        id="kt_aside_mobile_toggle"
      >
        <span className="svg-icon svg-icon-1">
          <svg
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21 7H3C2.4 7 2 6.6 2 6V4C2 3.4 2.4 3 3 3H21C21.6 3 22 3.4 22 4V6C22 6.6 21.6 7 21 7Z"
              fill="currentColor"
            />
            <path
              opacity="0.3"
              d="M21 14H3C2.4 14 2 13.6 2 13V11C2 10.4 2.4 10 3 10H21C21.6 10 22 10.4 22 11V13C22 13.6 21.6 14 21 14ZM22 20V18C22 17.4 21.6 17 21 17H3C2.4 17 2 17.4 2 18V20C2 20.6 2.4 21 3 21H21C21.6 21 22 20.6 22 20Z"
              fill="currentColor"
            />
          </svg>
        </span>
      </div>
      <a
        href="../../demo7/dist/index.html"
        className="d-flex align-items-center"
      >
        <img
          alt="Logo"
          src="/static/media/demo7.415056e033d09e09693ab0176f74a6cb.svg"
          className="h-30px"
        />
      </a>
    </div>
    <div className="d-flex flex-shrink-0">
      <div className="d-flex ms-3">
        <a
          className="btn btn-flex flex-center bg-body btn-color-gray-700 btn-active-color-primary w-40px w-md-auto h-40px px-0 px-md-6"
          data-bs-toggle="modal"
          data-bs-target="#kt_modal_invite_friends"
        >
          <span className="svg-icon svg-icon-2 svg-icon-primary me-0 me-md-2">
            <svg
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                opacity="0.5"
                x="11.364"
                y="20.364"
                width={16}
                height={2}
                rx={1}
                transform="rotate(-90 11.364 20.364)"
                fill="currentColor"
              />
              <rect
                x="4.36396"
                y="11.364"
                width={16}
                height={2}
                rx={1}
                fill="currentColor"
              />
            </svg>
          </span>
          <span className="d-none d-md-inline">New Member</span>
        </a>
      </div>
      <div className="d-flex ms-3">
        <a
          className="btn btn-flex flex-center bg-body btn-color-gray-700 btn-active-color-primary w-40px w-md-auto h-40px px-0 px-md-6"
          data-bs-toggle="modal"
          data-bs-target="#kt_modal_create_app"
          id="kt_toolbar_primary_button"
        >
          <span className="svg-icon svg-icon-2 svg-icon-primary me-0 me-md-2">
            <svg
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.3"
                d="M19 22H5C4.4 22 4 21.6 4 21V3C4 2.4 4.4 2 5 2H14L20 8V21C20 21.6 19.6 22 19 22ZM12.5 18C12.5 17.4 12.6 17.5 12 17.5H8.5C7.9 17.5 8 17.4 8 18C8 18.6 7.9 18.5 8.5 18.5L12 18C12.6 18 12.5 18.6 12.5 18ZM16.5 13C16.5 12.4 16.6 12.5 16 12.5H8.5C7.9 12.5 8 12.4 8 13C8 13.6 7.9 13.5 8.5 13.5H15.5C16.1 13.5 16.5 13.6 16.5 13ZM12.5 8C12.5 7.4 12.6 7.5 12 7.5H8C7.4 7.5 7.5 7.4 7.5 8C7.5 8.6 7.4 8.5 8 8.5H12C12.6 8.5 12.5 8.6 12.5 8Z"
                fill="currentColor"
              />
              <rect
                x={7}
                y={17}
                width={6}
                height={2}
                rx={1}
                fill="currentColor"
              />
              <rect
                x={7}
                y={12}
                width={10}
                height={2}
                rx={1}
                fill="currentColor"
              />
              <rect
                x={7}
                y={7}
                width={6}
                height={2}
                rx={1}
                fill="currentColor"
              />
              <path
                d="M15 8H20L14 2V7C14 7.6 14.4 8 15 8Z"
                fill="currentColor"
              />
            </svg>
          </span>
          <span className="d-none d-md-inline">New Product</span>
        </a>
      </div>
      <div className="d-flex align-items-center ms-3">
        <a
          href="#"
          className="btn btn-icon flex-center bg-body btn-color-gray-600 btn-active-color-primary h-40px"
          data-kt-menu-trigger="{default:'click', lg: 'hover'}"
          data-kt-menu-attach="parent"
          data-kt-menu-placement="bottom-end"
        >
          <span className="svg-icon theme-light-show svg-icon-2">
            <svg
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.9905 5.62598C10.7293 5.62574 9.49646 5.9995 8.44775 6.69997C7.39903 7.40045 6.58159 8.39619 6.09881 9.56126C5.61603 10.7263 5.48958 12.0084 5.73547 13.2453C5.98135 14.4823 6.58852 15.6185 7.48019 16.5104C8.37186 17.4022 9.50798 18.0096 10.7449 18.2557C11.9818 18.5019 13.2639 18.3757 14.429 17.8931C15.5942 17.4106 16.5901 16.5933 17.2908 15.5448C17.9915 14.4962 18.3655 13.2634 18.3655 12.0023C18.3637 10.3119 17.6916 8.69129 16.4964 7.49593C15.3013 6.30056 13.6808 5.62806 11.9905 5.62598Z"
                fill="currentColor"
              />
              <path
                d="M22.1258 10.8771H20.627C20.3286 10.8771 20.0424 10.9956 19.8314 11.2066C19.6204 11.4176 19.5018 11.7038 19.5018 12.0023C19.5018 12.3007 19.6204 12.5869 19.8314 12.7979C20.0424 13.0089 20.3286 13.1274 20.627 13.1274H22.1258C22.4242 13.1274 22.7104 13.0089 22.9214 12.7979C23.1324 12.5869 23.2509 12.3007 23.2509 12.0023C23.2509 11.7038 23.1324 11.4176 22.9214 11.2066C22.7104 10.9956 22.4242 10.8771 22.1258 10.8771Z"
                fill="currentColor"
              />
              <path
                d="M11.9905 19.4995C11.6923 19.5 11.4064 19.6187 11.1956 19.8296C10.9848 20.0405 10.8663 20.3265 10.866 20.6247V22.1249C10.866 22.4231 10.9845 22.7091 11.1953 22.9199C11.4062 23.1308 11.6922 23.2492 11.9904 23.2492C12.2886 23.2492 12.5746 23.1308 12.7854 22.9199C12.9963 22.7091 13.1147 22.4231 13.1147 22.1249V20.6247C13.1145 20.3265 12.996 20.0406 12.7853 19.8296C12.5745 19.6187 12.2887 19.5 11.9905 19.4995Z"
                fill="currentColor"
              />
              <path
                d="M4.49743 12.0023C4.49718 11.704 4.37865 11.4181 4.16785 11.2072C3.95705 10.9962 3.67119 10.8775 3.37298 10.8771H1.87445C1.57603 10.8771 1.28984 10.9956 1.07883 11.2066C0.867812 11.4176 0.749266 11.7038 0.749266 12.0023C0.749266 12.3007 0.867812 12.5869 1.07883 12.7979C1.28984 13.0089 1.57603 13.1274 1.87445 13.1274H3.37299C3.6712 13.127 3.95706 13.0083 4.16785 12.7973C4.37865 12.5864 4.49718 12.3005 4.49743 12.0023Z"
                fill="currentColor"
              />
              <path
                d="M11.9905 4.50058C12.2887 4.50012 12.5745 4.38141 12.7853 4.17048C12.9961 3.95954 13.1147 3.67361 13.1149 3.3754V1.87521C13.1149 1.57701 12.9965 1.29103 12.7856 1.08017C12.5748 0.869313 12.2888 0.750854 11.9906 0.750854C11.6924 0.750854 11.4064 0.869313 11.1955 1.08017C10.9847 1.29103 10.8662 1.57701 10.8662 1.87521V3.3754C10.8664 3.67359 10.9849 3.95952 11.1957 4.17046C11.4065 4.3814 11.6923 4.50012 11.9905 4.50058Z"
                fill="currentColor"
              />
              <path
                d="M18.8857 6.6972L19.9465 5.63642C20.0512 5.53209 20.1343 5.40813 20.1911 5.27163C20.2479 5.13513 20.2772 4.98877 20.2774 4.84093C20.2775 4.69309 20.2485 4.54667 20.192 4.41006C20.1355 4.27344 20.0526 4.14932 19.948 4.04478C19.8435 3.94024 19.7194 3.85734 19.5828 3.80083C19.4462 3.74432 19.2997 3.71531 19.1519 3.71545C19.0041 3.7156 18.8577 3.7449 18.7212 3.80167C18.5847 3.85845 18.4607 3.94159 18.3564 4.04633L17.2956 5.10714C17.1909 5.21147 17.1077 5.33543 17.0509 5.47194C16.9942 5.60844 16.9649 5.7548 16.9647 5.90264C16.9646 6.05048 16.9936 6.19689 17.0501 6.33351C17.1066 6.47012 17.1895 6.59425 17.294 6.69878C17.3986 6.80332 17.5227 6.88621 17.6593 6.94272C17.7959 6.99923 17.9424 7.02824 18.0902 7.02809C18.238 7.02795 18.3844 6.99865 18.5209 6.94187C18.6574 6.88509 18.7814 6.80195 18.8857 6.6972Z"
                fill="currentColor"
              />
              <path
                d="M18.8855 17.3073C18.7812 17.2026 18.6572 17.1195 18.5207 17.0627C18.3843 17.006 18.2379 16.9767 18.0901 16.9766C17.9423 16.9764 17.7959 17.0055 17.6593 17.062C17.5227 17.1185 17.3986 17.2014 17.2941 17.3059C17.1895 17.4104 17.1067 17.5345 17.0501 17.6711C16.9936 17.8077 16.9646 17.9541 16.9648 18.1019C16.9649 18.2497 16.9942 18.3961 17.0509 18.5326C17.1077 18.6691 17.1908 18.793 17.2955 18.8974L18.3563 19.9582C18.4606 20.0629 18.5846 20.146 18.721 20.2027C18.8575 20.2595 19.0039 20.2887 19.1517 20.2889C19.2995 20.289 19.4459 20.26 19.5825 20.2035C19.7191 20.147 19.8432 20.0641 19.9477 19.9595C20.0523 19.855 20.1351 19.7309 20.1916 19.5943C20.2482 19.4577 20.2772 19.3113 20.277 19.1635C20.2769 19.0157 20.2476 18.8694 20.1909 18.7329C20.1341 18.5964 20.051 18.4724 19.9463 18.3681L18.8855 17.3073Z"
                fill="currentColor"
              />
              <path
                d="M5.09528 17.3072L4.0345 18.368C3.92972 18.4723 3.84655 18.5963 3.78974 18.7328C3.73294 18.8693 3.70362 19.0156 3.70346 19.1635C3.7033 19.3114 3.7323 19.4578 3.78881 19.5944C3.84532 19.7311 3.92822 19.8552 4.03277 19.9598C4.13732 20.0643 4.26147 20.1472 4.3981 20.2037C4.53473 20.2602 4.68117 20.2892 4.82902 20.2891C4.97688 20.2889 5.12325 20.2596 5.25976 20.2028C5.39627 20.146 5.52024 20.0628 5.62456 19.958L6.68536 18.8973C6.79007 18.7929 6.87318 18.6689 6.92993 18.5325C6.98667 18.396 7.01595 18.2496 7.01608 18.1018C7.01621 17.954 6.98719 17.8076 6.93068 17.671C6.87417 17.5344 6.79129 17.4103 6.68676 17.3058C6.58224 17.2012 6.45813 17.1183 6.32153 17.0618C6.18494 17.0053 6.03855 16.9763 5.89073 16.9764C5.74291 16.9766 5.59657 17.0058 5.46007 17.0626C5.32358 17.1193 5.19962 17.2024 5.09528 17.3072Z"
                fill="currentColor"
              />
              <path
                d="M5.09541 6.69715C5.19979 6.8017 5.32374 6.88466 5.4602 6.94128C5.59665 6.9979 5.74292 7.02708 5.89065 7.02714C6.03839 7.0272 6.18469 6.99815 6.32119 6.94164C6.45769 6.88514 6.58171 6.80228 6.68618 6.69782C6.79064 6.59336 6.87349 6.46933 6.93 6.33283C6.9865 6.19633 7.01556 6.05003 7.01549 5.9023C7.01543 5.75457 6.98625 5.60829 6.92963 5.47184C6.87301 5.33539 6.79005 5.21143 6.6855 5.10706L5.6247 4.04626C5.5204 3.94137 5.39643 3.8581 5.25989 3.80121C5.12335 3.74432 4.97692 3.71493 4.82901 3.71472C4.68109 3.71452 4.53458 3.7435 4.39789 3.80001C4.26119 3.85652 4.13699 3.93945 4.03239 4.04404C3.9278 4.14864 3.84487 4.27284 3.78836 4.40954C3.73185 4.54624 3.70287 4.69274 3.70308 4.84066C3.70329 4.98858 3.73268 5.135 3.78957 5.27154C3.84646 5.40808 3.92974 5.53205 4.03462 5.63635L5.09541 6.69715Z"
                fill="currentColor"
              />
            </svg>
          </span>
          <span className="svg-icon theme-dark-show svg-icon-2">
            <svg
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.0647 5.43757C19.3421 5.43757 19.567 5.21271 19.567 4.93534C19.567 4.65796 19.3421 4.43311 19.0647 4.43311C18.7874 4.43311 18.5625 4.65796 18.5625 4.93534C18.5625 5.21271 18.7874 5.43757 19.0647 5.43757Z"
                fill="currentColor"
              />
              <path
                d="M20.0692 9.48884C20.3466 9.48884 20.5714 9.26398 20.5714 8.98661C20.5714 8.70923 20.3466 8.48438 20.0692 8.48438C19.7918 8.48438 19.567 8.70923 19.567 8.98661C19.567 9.26398 19.7918 9.48884 20.0692 9.48884Z"
                fill="currentColor"
              />
              <path
                d="M12.0335 20.5714C15.6943 20.5714 18.9426 18.2053 20.1168 14.7338C20.1884 14.5225 20.1114 14.289 19.9284 14.161C19.746 14.034 19.5003 14.0418 19.3257 14.1821C18.2432 15.0546 16.9371 15.5156 15.5491 15.5156C12.2257 15.5156 9.48884 12.8122 9.48884 9.48886C9.48884 7.41079 10.5773 5.47137 12.3449 4.35752C12.5342 4.23832 12.6 4.00733 12.5377 3.79251C12.4759 3.57768 12.2571 3.42859 12.0335 3.42859C7.32556 3.42859 3.42857 7.29209 3.42857 12C3.42857 16.7079 7.32556 20.5714 12.0335 20.5714Z"
                fill="currentColor"
              />
              <path
                d="M13.0379 7.47998C13.8688 7.47998 14.5446 8.15585 14.5446 8.98668C14.5446 9.26428 14.7693 9.48891 15.0469 9.48891C15.3245 9.48891 15.5491 9.26428 15.5491 8.98668C15.5491 8.15585 16.225 7.47998 17.0558 7.47998C17.3334 7.47998 17.558 7.25535 17.558 6.97775C17.558 6.70015 17.3334 6.47552 17.0558 6.47552C16.225 6.47552 15.5491 5.76616 15.5491 4.93534C15.5491 4.65774 15.3245 4.43311 15.0469 4.43311C14.7693 4.43311 14.5446 4.65774 14.5446 4.93534C14.5446 5.76616 13.8688 6.47552 13.0379 6.47552C12.7603 6.47552 12.5357 6.70015 12.5357 6.97775C12.5357 7.25535 12.7603 7.47998 13.0379 7.47998Z"
                fill="currentColor"
              />
            </svg>
          </span>
        </a>
        <div
          className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-title-gray-700 menu-icon-muted menu-active-bg menu-state-color fw-semibold py-4 fs-base w-175px"
          data-kt-menu="true"
          data-kt-element="theme-mode-menu"
        >
          <div className="menu-item px-3 my-0">
            <a
              href="#"
              className="menu-link px-3 py-2"
              data-kt-element="mode"
              data-kt-value="light"
            >
              <span className="menu-icon" data-kt-element="icon">
                <span className="svg-icon svg-icon-3">
                  <svg
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.9905 5.62598C10.7293 5.62574 9.49646 5.9995 8.44775 6.69997C7.39903 7.40045 6.58159 8.39619 6.09881 9.56126C5.61603 10.7263 5.48958 12.0084 5.73547 13.2453C5.98135 14.4823 6.58852 15.6185 7.48019 16.5104C8.37186 17.4022 9.50798 18.0096 10.7449 18.2557C11.9818 18.5019 13.2639 18.3757 14.429 17.8931C15.5942 17.4106 16.5901 16.5933 17.2908 15.5448C17.9915 14.4962 18.3655 13.2634 18.3655 12.0023C18.3637 10.3119 17.6916 8.69129 16.4964 7.49593C15.3013 6.30056 13.6808 5.62806 11.9905 5.62598Z"
                      fill="currentColor"
                    />
                    <path
                      d="M22.1258 10.8771H20.627C20.3286 10.8771 20.0424 10.9956 19.8314 11.2066C19.6204 11.4176 19.5018 11.7038 19.5018 12.0023C19.5018 12.3007 19.6204 12.5869 19.8314 12.7979C20.0424 13.0089 20.3286 13.1274 20.627 13.1274H22.1258C22.4242 13.1274 22.7104 13.0089 22.9214 12.7979C23.1324 12.5869 23.2509 12.3007 23.2509 12.0023C23.2509 11.7038 23.1324 11.4176 22.9214 11.2066C22.7104 10.9956 22.4242 10.8771 22.1258 10.8771Z"
                      fill="currentColor"
                    />
                    <path
                      d="M11.9905 19.4995C11.6923 19.5 11.4064 19.6187 11.1956 19.8296C10.9848 20.0405 10.8663 20.3265 10.866 20.6247V22.1249C10.866 22.4231 10.9845 22.7091 11.1953 22.9199C11.4062 23.1308 11.6922 23.2492 11.9904 23.2492C12.2886 23.2492 12.5746 23.1308 12.7854 22.9199C12.9963 22.7091 13.1147 22.4231 13.1147 22.1249V20.6247C13.1145 20.3265 12.996 20.0406 12.7853 19.8296C12.5745 19.6187 12.2887 19.5 11.9905 19.4995Z"
                      fill="currentColor"
                    />
                    <path
                      d="M4.49743 12.0023C4.49718 11.704 4.37865 11.4181 4.16785 11.2072C3.95705 10.9962 3.67119 10.8775 3.37298 10.8771H1.87445C1.57603 10.8771 1.28984 10.9956 1.07883 11.2066C0.867812 11.4176 0.749266 11.7038 0.749266 12.0023C0.749266 12.3007 0.867812 12.5869 1.07883 12.7979C1.28984 13.0089 1.57603 13.1274 1.87445 13.1274H3.37299C3.6712 13.127 3.95706 13.0083 4.16785 12.7973C4.37865 12.5864 4.49718 12.3005 4.49743 12.0023Z"
                      fill="currentColor"
                    />
                    <path
                      d="M11.9905 4.50058C12.2887 4.50012 12.5745 4.38141 12.7853 4.17048C12.9961 3.95954 13.1147 3.67361 13.1149 3.3754V1.87521C13.1149 1.57701 12.9965 1.29103 12.7856 1.08017C12.5748 0.869313 12.2888 0.750854 11.9906 0.750854C11.6924 0.750854 11.4064 0.869313 11.1955 1.08017C10.9847 1.29103 10.8662 1.57701 10.8662 1.87521V3.3754C10.8664 3.67359 10.9849 3.95952 11.1957 4.17046C11.4065 4.3814 11.6923 4.50012 11.9905 4.50058Z"
                      fill="currentColor"
                    />
                    <path
                      d="M18.8857 6.6972L19.9465 5.63642C20.0512 5.53209 20.1343 5.40813 20.1911 5.27163C20.2479 5.13513 20.2772 4.98877 20.2774 4.84093C20.2775 4.69309 20.2485 4.54667 20.192 4.41006C20.1355 4.27344 20.0526 4.14932 19.948 4.04478C19.8435 3.94024 19.7194 3.85734 19.5828 3.80083C19.4462 3.74432 19.2997 3.71531 19.1519 3.71545C19.0041 3.7156 18.8577 3.7449 18.7212 3.80167C18.5847 3.85845 18.4607 3.94159 18.3564 4.04633L17.2956 5.10714C17.1909 5.21147 17.1077 5.33543 17.0509 5.47194C16.9942 5.60844 16.9649 5.7548 16.9647 5.90264C16.9646 6.05048 16.9936 6.19689 17.0501 6.33351C17.1066 6.47012 17.1895 6.59425 17.294 6.69878C17.3986 6.80332 17.5227 6.88621 17.6593 6.94272C17.7959 6.99923 17.9424 7.02824 18.0902 7.02809C18.238 7.02795 18.3844 6.99865 18.5209 6.94187C18.6574 6.88509 18.7814 6.80195 18.8857 6.6972Z"
                      fill="currentColor"
                    />
                    <path
                      d="M18.8855 17.3073C18.7812 17.2026 18.6572 17.1195 18.5207 17.0627C18.3843 17.006 18.2379 16.9767 18.0901 16.9766C17.9423 16.9764 17.7959 17.0055 17.6593 17.062C17.5227 17.1185 17.3986 17.2014 17.2941 17.3059C17.1895 17.4104 17.1067 17.5345 17.0501 17.6711C16.9936 17.8077 16.9646 17.9541 16.9648 18.1019C16.9649 18.2497 16.9942 18.3961 17.0509 18.5326C17.1077 18.6691 17.1908 18.793 17.2955 18.8974L18.3563 19.9582C18.4606 20.0629 18.5846 20.146 18.721 20.2027C18.8575 20.2595 19.0039 20.2887 19.1517 20.2889C19.2995 20.289 19.4459 20.26 19.5825 20.2035C19.7191 20.147 19.8432 20.0641 19.9477 19.9595C20.0523 19.855 20.1351 19.7309 20.1916 19.5943C20.2482 19.4577 20.2772 19.3113 20.277 19.1635C20.2769 19.0157 20.2476 18.8694 20.1909 18.7329C20.1341 18.5964 20.051 18.4724 19.9463 18.3681L18.8855 17.3073Z"
                      fill="currentColor"
                    />
                    <path
                      d="M5.09528 17.3072L4.0345 18.368C3.92972 18.4723 3.84655 18.5963 3.78974 18.7328C3.73294 18.8693 3.70362 19.0156 3.70346 19.1635C3.7033 19.3114 3.7323 19.4578 3.78881 19.5944C3.84532 19.7311 3.92822 19.8552 4.03277 19.9598C4.13732 20.0643 4.26147 20.1472 4.3981 20.2037C4.53473 20.2602 4.68117 20.2892 4.82902 20.2891C4.97688 20.2889 5.12325 20.2596 5.25976 20.2028C5.39627 20.146 5.52024 20.0628 5.62456 19.958L6.68536 18.8973C6.79007 18.7929 6.87318 18.6689 6.92993 18.5325C6.98667 18.396 7.01595 18.2496 7.01608 18.1018C7.01621 17.954 6.98719 17.8076 6.93068 17.671C6.87417 17.5344 6.79129 17.4103 6.68676 17.3058C6.58224 17.2012 6.45813 17.1183 6.32153 17.0618C6.18494 17.0053 6.03855 16.9763 5.89073 16.9764C5.74291 16.9766 5.59657 17.0058 5.46007 17.0626C5.32358 17.1193 5.19962 17.2024 5.09528 17.3072Z"
                      fill="currentColor"
                    />
                    <path
                      d="M5.09541 6.69715C5.19979 6.8017 5.32374 6.88466 5.4602 6.94128C5.59665 6.9979 5.74292 7.02708 5.89065 7.02714C6.03839 7.0272 6.18469 6.99815 6.32119 6.94164C6.45769 6.88514 6.58171 6.80228 6.68618 6.69782C6.79064 6.59336 6.87349 6.46933 6.93 6.33283C6.9865 6.19633 7.01556 6.05003 7.01549 5.9023C7.01543 5.75457 6.98625 5.60829 6.92963 5.47184C6.87301 5.33539 6.79005 5.21143 6.6855 5.10706L5.6247 4.04626C5.5204 3.94137 5.39643 3.8581 5.25989 3.80121C5.12335 3.74432 4.97692 3.71493 4.82901 3.71472C4.68109 3.71452 4.53458 3.7435 4.39789 3.80001C4.26119 3.85652 4.13699 3.93945 4.03239 4.04404C3.9278 4.14864 3.84487 4.27284 3.78836 4.40954C3.73185 4.54624 3.70287 4.69274 3.70308 4.84066C3.70329 4.98858 3.73268 5.135 3.78957 5.27154C3.84646 5.40808 3.92974 5.53205 4.03462 5.63635L5.09541 6.69715Z"
                      fill="currentColor"
                    />
                  </svg>
                </span>
              </span>
              <span className="menu-title">Light</span>
            </a>
          </div>
          <div className="menu-item px-3 my-0">
            <a
              href="#"
              className="menu-link px-3 py-2"
              data-kt-element="mode"
              data-kt-value="dark"
            >
              <span className="menu-icon" data-kt-element="icon">
                <span className="svg-icon svg-icon-3">
                  <svg
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.0647 5.43757C19.3421 5.43757 19.567 5.21271 19.567 4.93534C19.567 4.65796 19.3421 4.43311 19.0647 4.43311C18.7874 4.43311 18.5625 4.65796 18.5625 4.93534C18.5625 5.21271 18.7874 5.43757 19.0647 5.43757Z"
                      fill="currentColor"
                    />
                    <path
                      d="M20.0692 9.48884C20.3466 9.48884 20.5714 9.26398 20.5714 8.98661C20.5714 8.70923 20.3466 8.48438 20.0692 8.48438C19.7918 8.48438 19.567 8.70923 19.567 8.98661C19.567 9.26398 19.7918 9.48884 20.0692 9.48884Z"
                      fill="currentColor"
                    />
                    <path
                      d="M12.0335 20.5714C15.6943 20.5714 18.9426 18.2053 20.1168 14.7338C20.1884 14.5225 20.1114 14.289 19.9284 14.161C19.746 14.034 19.5003 14.0418 19.3257 14.1821C18.2432 15.0546 16.9371 15.5156 15.5491 15.5156C12.2257 15.5156 9.48884 12.8122 9.48884 9.48886C9.48884 7.41079 10.5773 5.47137 12.3449 4.35752C12.5342 4.23832 12.6 4.00733 12.5377 3.79251C12.4759 3.57768 12.2571 3.42859 12.0335 3.42859C7.32556 3.42859 3.42857 7.29209 3.42857 12C3.42857 16.7079 7.32556 20.5714 12.0335 20.5714Z"
                      fill="currentColor"
                    />
                    <path
                      d="M13.0379 7.47998C13.8688 7.47998 14.5446 8.15585 14.5446 8.98668C14.5446 9.26428 14.7693 9.48891 15.0469 9.48891C15.3245 9.48891 15.5491 9.26428 15.5491 8.98668C15.5491 8.15585 16.225 7.47998 17.0558 7.47998C17.3334 7.47998 17.558 7.25535 17.558 6.97775C17.558 6.70015 17.3334 6.47552 17.0558 6.47552C16.225 6.47552 15.5491 5.76616 15.5491 4.93534C15.5491 4.65774 15.3245 4.43311 15.0469 4.43311C14.7693 4.43311 14.5446 4.65774 14.5446 4.93534C14.5446 5.76616 13.8688 6.47552 13.0379 6.47552C12.7603 6.47552 12.5357 6.70015 12.5357 6.97775C12.5357 7.25535 12.7603 7.47998 13.0379 7.47998Z"
                      fill="currentColor"
                    />
                  </svg>
                </span>
              </span>
              <span className="menu-title">Dark</span>
            </a>
          </div>
          <div className="menu-item px-3 my-0">
            <a
              href="#"
              className="menu-link px-3 py-2"
              data-kt-element="mode"
              data-kt-value="system"
            >
              <span className="menu-icon" data-kt-element="icon">
                <span className="svg-icon svg-icon-3">
                  <svg
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M1.34375 3.9463V15.2178C1.34375 16.119 2.08105 16.8563 2.98219 16.8563H8.65093V19.4594H6.15702C5.38853 19.4594 4.75981 19.9617 4.75981 20.5757V21.6921H19.2403V20.5757C19.2403 19.9617 18.6116 19.4594 17.8431 19.4594H15.3492V16.8563H21.0179C21.919 16.8563 22.6562 16.119 22.6562 15.2178V3.9463C22.6562 3.04516 21.9189 2.30786 21.0179 2.30786H2.98219C2.08105 2.30786 1.34375 3.04516 1.34375 3.9463ZM12.9034 9.9016C13.241 9.98792 13.5597 10.1216 13.852 10.2949L15.0393 9.4353L15.9893 10.3853L15.1297 11.5727C15.303 11.865 15.4366 12.1837 15.523 12.5212L16.97 12.7528V13.4089H13.9851C13.9766 12.3198 13.0912 11.4394 12 11.4394C10.9089 11.4394 10.0235 12.3198 10.015 13.4089H7.03006V12.7528L8.47712 12.5211C8.56345 12.1836 8.69703 11.8649 8.87037 11.5727L8.0107 10.3853L8.96078 9.4353L10.148 10.2949C10.4404 10.1215 10.759 9.98788 11.0966 9.9016L11.3282 8.45467H12.6718L12.9034 9.9016ZM16.1353 7.93758C15.6779 7.93758 15.3071 7.56681 15.3071 7.1094C15.3071 6.652 15.6779 6.28122 16.1353 6.28122C16.5926 6.28122 16.9634 6.652 16.9634 7.1094C16.9634 7.56681 16.5926 7.93758 16.1353 7.93758ZM2.71385 14.0964V3.90518C2.71385 3.78023 2.81612 3.67796 2.94107 3.67796H21.0589C21.1839 3.67796 21.2861 3.78023 21.2861 3.90518V14.0964C15.0954 14.0964 8.90462 14.0964 2.71385 14.0964Z"
                      fill="currentColor"
                    />
                  </svg>
                </span>
              </span>
              <span className="menu-title">System</span>
            </a>
          </div>
        </div>
      </div>
      <div className="d-flex align-items-center ms-3">
        <div
          className="btn btn-icon btn-primary w-40px h-40px pulse pulse-white"
          id="kt_drawer_chat_toggle"
        >
          <span className="svg-icon svg-icon-2">
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
          <span className="pulse-ring" />
        </div>
      </div>
    </div>
  </div>
</div>

 {/* header */}

        <div className="tab-content container-xxl">
        {/*begin::Tab pane*/}
        <div
          id="kt_project_targets_card_pane"
          className="tab-pane fade active show"
          role="tabpanel"
        >
          {/*begin::Row*/}
          <div className="row g-9">
            {/*begin::Col*/}
            <div className="col-md-3 col-lg-12 col-xl-3">
              {/*begin::Col header*/}
              <div className="mb-9">
                <div className="d-flex flex-stack">
                  <div className="fw-bold fs-4">
                    Yet to start
                    <span className="fs-6 text-gray-400 ms-2">2</span>
                  </div>
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
                    {/*begin::Menu 1*/}
                    <div
                      className="menu menu-sub menu-sub-dropdown w-250px w-md-300px"
                      data-kt-menu="true"
                      id="kt_menu_63a837d361ce8"
                    >
                      {/*begin::Header*/}
                      <div className="px-7 py-5">
                        <div className="fs-5 text-dark fw-bold">Filter Options</div>
                      </div>
                      {/*end::Header*/}
                      {/*begin::Menu separator*/}
                      <div className="separator border-gray-200" />
                      {/*end::Menu separator*/}
                      {/*begin::Form*/}
                      <div className="px-7 py-5">
                        {/*begin::Input group*/}
                        <div className="mb-10">
                          {/*begin::Label*/}
                          <label className="form-label fw-semibold">Status:</label>
                          {/*end::Label*/}
                          {/*begin::Input*/}
                          <div>
                            <select
                              className="form-select form-select-solid select2-hidden-accessible"
                              data-kt-select2="true"
                              data-placeholder="Select option"
                              data-dropdown-parent="#kt_menu_63a837d361ce8"
                              data-allow-clear="true"
                              data-select2-id="select2-data-13-ues5"
                              tabIndex={-1}
                              aria-hidden="true"
                              data-kt-initialized={1}
                            >
                              <option data-select2-id="select2-data-15-bi43" />
                              <option value={1}>Approved</option>
                              <option value={2}>Pending</option>
                              <option value={2}>In Process</option>
                              <option value={2}>Rejected</option>
                            </select>
                            <span
                              className="select2 select2-container select2-container--bootstrap5"
                              dir="ltr"
                              data-select2-id="select2-data-14-2ar0"
                              style={{ width: "100%" }}
                            >
                              <span className="selection">
                                <span
                                  className="select2-selection select2-selection--single form-select form-select-solid"
                                  role="combobox"
                                  aria-haspopup="true"
                                  aria-expanded="false"
                                  tabIndex={0}
                                  aria-disabled="false"
                                  aria-labelledby="select2-2o33-container"
                                  aria-controls="select2-2o33-container"
                                >
                                  <span
                                    className="select2-selection__rendered"
                                    id="select2-2o33-container"
                                    role="textbox"
                                    aria-readonly="true"
                                    title="Select option"
                                  >
                                    <span className="select2-selection__placeholder">
                                      Select option
                                    </span>
                                  </span>
                                  <span
                                    className="select2-selection__arrow"
                                    role="presentation"
                                  >
                                    <b role="presentation" />
                                  </span>
                                </span>
                              </span>
                              <span className="dropdown-wrapper" aria-hidden="true" />
                            </span>
                          </div>
                          {/*end::Input*/}
                        </div>
                        {/*end::Input group*/}
                        {/*begin::Input group*/}
                        <div className="mb-10">
                          {/*begin::Label*/}
                          <label className="form-label fw-semibold">
                            Member Type:
                          </label>
                          {/*end::Label*/}
                          {/*begin::Options*/}
                          <div className="d-flex">
                            {/*begin::Options*/}
                            <label className="form-check form-check-sm form-check-custom form-check-solid me-5">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                defaultValue={1}
                              />
                              <span className="form-check-label">Author</span>
                            </label>
                            {/*end::Options*/}
                            {/*begin::Options*/}
                            <label className="form-check form-check-sm form-check-custom form-check-solid">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                defaultValue={2}
                                defaultChecked="checked"
                              />
                              <span className="form-check-label">Customer</span>
                            </label>
                            {/*end::Options*/}
                          </div>
                          {/*end::Options*/}
                        </div>
                        {/*end::Input group*/}
                        {/*begin::Input group*/}
                        <div className="mb-10">
                          {/*begin::Label*/}
                          <label className="form-label fw-semibold">
                            Notifications:
                          </label>
                          {/*end::Label*/}
                          {/*begin::Switch*/}
                          <div className="form-check form-switch form-switch-sm form-check-custom form-check-solid">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              defaultValue=""
                              name="notifications"
                              defaultChecked="checked"
                            />
                            <label className="form-check-label">Enabled</label>
                          </div>
                          {/*end::Switch*/}
                        </div>
                        {/*end::Input group*/}
                        {/*begin::Actions*/}
                        <div className="d-flex justify-content-end">
                          <button
                            type="reset"
                            className="btn btn-sm btn-light btn-active-light-primary me-2"
                            data-kt-menu-dismiss="true"
                          >
                            Reset
                          </button>
                          <button
                            type="submit"
                            className="btn btn-sm btn-primary"
                            data-kt-menu-dismiss="true"
                          >
                            Apply
                          </button>
                        </div>
                        {/*end::Actions*/}
                      </div>
                      {/*end::Form*/}
                    </div>
                    {/*end::Menu 1*/}
                  </div>
                  {/*end::Menu*/}
                </div>
                <div className="h-3px w-100 bg-warning" />
              </div>
              {/*end::Col header*/}
              {/*begin::Card*/}
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
                      Meeting with customer
                    </a>
                  </div>
                  {/*end::Title*/}
                  {/*begin::Content*/}
                  <div className="fs-6 fw-semibold text-gray-600 mb-5">
                    First, a disclaimer – the entire process writing a blog post often
                    takes a couple of hours if you can type
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
              {/*end::Card*/}
              {/*begin::Card*/}
              <div className="card mb-6 mb-xl-9">
                {/*begin::Card body*/}
                <div className="card-body">
                  {/*begin::Header*/}
                  <div className="d-flex flex-stack mb-3">
                    {/*begin::Badge*/}
                    <div className="badge badge-light">Phase 2.6 QA</div>
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
                      User Module Testing
                    </a>
                  </div>
                  {/*end::Title*/}
                  {/*begin::Content*/}
                  <div className="fs-6 fw-semibold text-gray-600 mb-5">
                    First, a disclaimer – the entire process writing a blog post
                    often.
                  </div>
                  {/*end::Content*/}
                  {/*begin::Footer*/}
                  <div className="d-flex flex-stack flex-wrapr">
                    {/*begin::Users*/}
                    <div className="symbol-group symbol-hover my-1">
                      <div
                        className="symbol symbol-35px symbol-circle"
                        data-bs-toggle="tooltip"
                        data-bs-original-title="Alan Warden"
                        data-kt-initialized={1}
                      >
                        <span className="symbol-label bg-warning text-inverse-warning fw-bold">
                          A
                        </span>
                      </div>
                      <div
                        className="symbol symbol-35px symbol-circle"
                        data-bs-toggle="tooltip"
                        data-bs-original-title="Perry Matthew"
                        data-kt-initialized={1}
                      >
                        <span className="symbol-label bg-success text-inverse-success fw-bold">
                          R
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
                        <span className="ms-1 fs-7 fw-bold text-gray-600">8</span>
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
                        <span className="ms-1 fs-7 fw-bold text-gray-600">4</span>
                      </div>
                      {/*end::Stat*/}
                    </div>
                    {/*end::Stats*/}
                  </div>
                  {/*end::Footer*/}
                </div>
                {/*end::Card body*/}
              </div>
              {/*end::Card*/}
              <a
                href="#"
                className="btn btn-primary er w-100 fs-6 px-8 py-4"
                data-bs-toggle="modal"
                data-bs-target="#kt_modal_new_target"
              >
                Create New Target
              </a>
            </div>
            {/*end::Col*/}
            {/*begin::Col*/}
            <div className="col-md-3 col-lg-12 col-xl-3">
              {/*begin::Col header*/}
              <div className="mb-9">
                <div className="d-flex flex-stack">
                  <div className="fw-bold fs-4">
                    Yet to start
                    <span className="fs-6 text-gray-400 ms-2">2</span>
                  </div>
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
                    {/*begin::Menu 1*/}
                    <div
                      className="menu menu-sub menu-sub-dropdown w-250px w-md-300px"
                      data-kt-menu="true"
                      id="kt_menu_63a837d361ce8"
                    >
                      {/*begin::Header*/}
                      <div className="px-7 py-5">
                        <div className="fs-5 text-dark fw-bold">Filter Options</div>
                      </div>
                      {/*end::Header*/}
                      {/*begin::Menu separator*/}
                      <div className="separator border-gray-200" />
                      {/*end::Menu separator*/}
                      {/*begin::Form*/}
                      <div className="px-7 py-5">
                        {/*begin::Input group*/}
                        <div className="mb-10">
                          {/*begin::Label*/}
                          <label className="form-label fw-semibold">Status:</label>
                          {/*end::Label*/}
                          {/*begin::Input*/}
                          <div>
                            <select
                              className="form-select form-select-solid select2-hidden-accessible"
                              data-kt-select2="true"
                              data-placeholder="Select option"
                              data-dropdown-parent="#kt_menu_63a837d361ce8"
                              data-allow-clear="true"
                              data-select2-id="select2-data-13-ues5"
                              tabIndex={-1}
                              aria-hidden="true"
                              data-kt-initialized={1}
                            >
                              <option data-select2-id="select2-data-15-bi43" />
                              <option value={1}>Approved</option>
                              <option value={2}>Pending</option>
                              <option value={2}>In Process</option>
                              <option value={2}>Rejected</option>
                            </select>
                            <span
                              className="select2 select2-container select2-container--bootstrap5"
                              dir="ltr"
                              data-select2-id="select2-data-14-2ar0"
                              style={{ width: "100%" }}
                            >
                              <span className="selection">
                                <span
                                  className="select2-selection select2-selection--single form-select form-select-solid"
                                  role="combobox"
                                  aria-haspopup="true"
                                  aria-expanded="false"
                                  tabIndex={0}
                                  aria-disabled="false"
                                  aria-labelledby="select2-2o33-container"
                                  aria-controls="select2-2o33-container"
                                >
                                  <span
                                    className="select2-selection__rendered"
                                    id="select2-2o33-container"
                                    role="textbox"
                                    aria-readonly="true"
                                    title="Select option"
                                  >
                                    <span className="select2-selection__placeholder">
                                      Select option
                                    </span>
                                  </span>
                                  <span
                                    className="select2-selection__arrow"
                                    role="presentation"
                                  >
                                    <b role="presentation" />
                                  </span>
                                </span>
                              </span>
                              <span className="dropdown-wrapper" aria-hidden="true" />
                            </span>
                          </div>
                          {/*end::Input*/}
                        </div>
                        {/*end::Input group*/}
                        {/*begin::Input group*/}
                        <div className="mb-10">
                          {/*begin::Label*/}
                          <label className="form-label fw-semibold">
                            Member Type:
                          </label>
                          {/*end::Label*/}
                          {/*begin::Options*/}
                          <div className="d-flex">
                            {/*begin::Options*/}
                            <label className="form-check form-check-sm form-check-custom form-check-solid me-5">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                defaultValue={1}
                              />
                              <span className="form-check-label">Author</span>
                            </label>
                            {/*end::Options*/}
                            {/*begin::Options*/}
                            <label className="form-check form-check-sm form-check-custom form-check-solid">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                defaultValue={2}
                                defaultChecked="checked"
                              />
                              <span className="form-check-label">Customer</span>
                            </label>
                            {/*end::Options*/}
                          </div>
                          {/*end::Options*/}
                        </div>
                        {/*end::Input group*/}
                        {/*begin::Input group*/}
                        <div className="mb-10">
                          {/*begin::Label*/}
                          <label className="form-label fw-semibold">
                            Notifications:
                          </label>
                          {/*end::Label*/}
                          {/*begin::Switch*/}
                          <div className="form-check form-switch form-switch-sm form-check-custom form-check-solid">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              defaultValue=""
                              name="notifications"
                              defaultChecked="checked"
                            />
                            <label className="form-check-label">Enabled</label>
                          </div>
                          {/*end::Switch*/}
                        </div>
                        {/*end::Input group*/}
                        {/*begin::Actions*/}
                        <div className="d-flex justify-content-end">
                          <button
                            type="reset"
                            className="btn btn-sm btn-light btn-active-light-primary me-2"
                            data-kt-menu-dismiss="true"
                          >
                            Reset
                          </button>
                          <button
                            type="submit"
                            className="btn btn-sm btn-primary"
                            data-kt-menu-dismiss="true"
                          >
                            Apply
                          </button>
                        </div>
                        {/*end::Actions*/}
                      </div>
                      {/*end::Form*/}
                    </div>
                    {/*end::Menu 1*/}
                  </div>
                  {/*end::Menu*/}
                </div>
                <div className="h-3px w-100 bg-warning" />
              </div>
              {/*end::Col header*/}
              {/*begin::Card*/}
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
                      Meeting with customer
                    </a>
                  </div>
                  {/*end::Title*/}
                  {/*begin::Content*/}
                  <div className="fs-6 fw-semibold text-gray-600 mb-5">
                    First, a disclaimer – the entire process writing a blog post often
                    takes a couple of hours if you can type
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
              {/*end::Card*/}
              {/*begin::Card*/}
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
                      Meeting with customer
                    </a>
                  </div>
                  {/*end::Title*/}
                  {/*begin::Content*/}
                  <div className="fs-6 fw-semibold text-gray-600 mb-5">
                    First, a disclaimer – the entire process writing a blog post often
                    takes a couple of hours if you can type
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
              {/*end::Card*/}
              
              {/*begin::Card*/}
              <div className="card mb-6 mb-xl-9">
                {/*begin::Card body*/}
                <div className="card-body">
                  {/*begin::Header*/}
                  <div className="d-flex flex-stack mb-3">
                    {/*begin::Badge*/}
                    <div className="badge badge-light">Phase 2.6 QA</div>
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
                      User Module Testing
                    </a>
                  </div>
                  {/*end::Title*/}
                  {/*begin::Content*/}
                  <div className="fs-6 fw-semibold text-gray-600 mb-5">
                    First, a disclaimer – the entire process writing a blog post
                    often.
                  </div>
                  {/*end::Content*/}
                  {/*begin::Footer*/}
                  <div className="d-flex flex-stack flex-wrapr">
                    {/*begin::Users*/}
                    <div className="symbol-group symbol-hover my-1">
                      <div
                        className="symbol symbol-35px symbol-circle"
                        data-bs-toggle="tooltip"
                        data-bs-original-title="Alan Warden"
                        data-kt-initialized={1}
                      >
                        <span className="symbol-label bg-warning text-inverse-warning fw-bold">
                          A
                        </span>
                      </div>
                      <div
                        className="symbol symbol-35px symbol-circle"
                        data-bs-toggle="tooltip"
                        data-bs-original-title="Perry Matthew"
                        data-kt-initialized={1}
                      >
                        <span className="symbol-label bg-success text-inverse-success fw-bold">
                          R
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
                        <span className="ms-1 fs-7 fw-bold text-gray-600">8</span>
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
                        <span className="ms-1 fs-7 fw-bold text-gray-600">4</span>
                      </div>
                      {/*end::Stat*/}
                    </div>
                    {/*end::Stats*/}
                  </div>
                  {/*end::Footer*/}
                </div>
                {/*end::Card body*/}
              </div>
              {/*end::Card*/}
              
              <a
                href="#"
                className="btn btn-primary er w-100 fs-6 px-8 py-4"
                data-bs-toggle="modal"
                data-bs-target="#kt_modal_new_target"
              >
                Create New Target
              </a>
            </div>
            {/*end::Col*/}
            {/*begin::Col*/}
            <div className="col-md-3 col-lg-12 col-xl-3">
              {/*begin::Col header*/}
              <div className="mb-9">
                <div className="d-flex flex-stack">
                  <div className="fw-bold fs-4">
                    Yet to start
                    <span className="fs-6 text-gray-400 ms-2">2</span>
                  </div>
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
                    {/*begin::Menu 1*/}
                    <div
                      className="menu menu-sub menu-sub-dropdown w-250px w-md-300px"
                      data-kt-menu="true"
                      id="kt_menu_63a837d361ce8"
                    >
                      {/*begin::Header*/}
                      <div className="px-7 py-5">
                        <div className="fs-5 text-dark fw-bold">Filter Options</div>
                      </div>
                      {/*end::Header*/}
                      {/*begin::Menu separator*/}
                      <div className="separator border-gray-200" />
                      {/*end::Menu separator*/}
                      {/*begin::Form*/}
                      <div className="px-7 py-5">
                        {/*begin::Input group*/}
                        <div className="mb-10">
                          {/*begin::Label*/}
                          <label className="form-label fw-semibold">Status:</label>
                          {/*end::Label*/}
                          {/*begin::Input*/}
                          <div>
                            <select
                              className="form-select form-select-solid select2-hidden-accessible"
                              data-kt-select2="true"
                              data-placeholder="Select option"
                              data-dropdown-parent="#kt_menu_63a837d361ce8"
                              data-allow-clear="true"
                              data-select2-id="select2-data-13-ues5"
                              tabIndex={-1}
                              aria-hidden="true"
                              data-kt-initialized={1}
                            >
                              <option data-select2-id="select2-data-15-bi43" />
                              <option value={1}>Approved</option>
                              <option value={2}>Pending</option>
                              <option value={2}>In Process</option>
                              <option value={2}>Rejected</option>
                            </select>
                            <span
                              className="select2 select2-container select2-container--bootstrap5"
                              dir="ltr"
                              data-select2-id="select2-data-14-2ar0"
                              style={{ width: "100%" }}
                            >
                              <span className="selection">
                                <span
                                  className="select2-selection select2-selection--single form-select form-select-solid"
                                  role="combobox"
                                  aria-haspopup="true"
                                  aria-expanded="false"
                                  tabIndex={0}
                                  aria-disabled="false"
                                  aria-labelledby="select2-2o33-container"
                                  aria-controls="select2-2o33-container"
                                >
                                  <span
                                    className="select2-selection__rendered"
                                    id="select2-2o33-container"
                                    role="textbox"
                                    aria-readonly="true"
                                    title="Select option"
                                  >
                                    <span className="select2-selection__placeholder">
                                      Select option
                                    </span>
                                  </span>
                                  <span
                                    className="select2-selection__arrow"
                                    role="presentation"
                                  >
                                    <b role="presentation" />
                                  </span>
                                </span>
                              </span>
                              <span className="dropdown-wrapper" aria-hidden="true" />
                            </span>
                          </div>
                          {/*end::Input*/}
                        </div>
                        {/*end::Input group*/}
                        {/*begin::Input group*/}
                        <div className="mb-10">
                          {/*begin::Label*/}
                          <label className="form-label fw-semibold">
                            Member Type:
                          </label>
                          {/*end::Label*/}
                          {/*begin::Options*/}
                          <div className="d-flex">
                            {/*begin::Options*/}
                            <label className="form-check form-check-sm form-check-custom form-check-solid me-5">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                defaultValue={1}
                              />
                              <span className="form-check-label">Author</span>
                            </label>
                            {/*end::Options*/}
                            {/*begin::Options*/}
                            <label className="form-check form-check-sm form-check-custom form-check-solid">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                defaultValue={2}
                                defaultChecked="checked"
                              />
                              <span className="form-check-label">Customer</span>
                            </label>
                            {/*end::Options*/}
                          </div>
                          {/*end::Options*/}
                        </div>
                        {/*end::Input group*/}
                        {/*begin::Input group*/}
                        <div className="mb-10">
                          {/*begin::Label*/}
                          <label className="form-label fw-semibold">
                            Notifications:
                          </label>
                          {/*end::Label*/}
                          {/*begin::Switch*/}
                          <div className="form-check form-switch form-switch-sm form-check-custom form-check-solid">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              defaultValue=""
                              name="notifications"
                              defaultChecked="checked"
                            />
                            <label className="form-check-label">Enabled</label>
                          </div>
                          {/*end::Switch*/}
                        </div>
                        {/*end::Input group*/}
                        {/*begin::Actions*/}
                        <div className="d-flex justify-content-end">
                          <button
                            type="reset"
                            className="btn btn-sm btn-light btn-active-light-primary me-2"
                            data-kt-menu-dismiss="true"
                          >
                            Reset
                          </button>
                          <button
                            type="submit"
                            className="btn btn-sm btn-primary"
                            data-kt-menu-dismiss="true"
                          >
                            Apply
                          </button>
                        </div>
                        {/*end::Actions*/}
                      </div>
                      {/*end::Form*/}
                    </div>
                    {/*end::Menu 1*/}
                  </div>
                  {/*end::Menu*/}
                </div>
                <div className="h-3px w-100 bg-warning" />
              </div>
              {/*end::Col header*/}
              {/*begin::Card*/}
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
                      Meeting with customer
                    </a>
                  </div>
                  {/*end::Title*/}
                  {/*begin::Content*/}
                  <div className="fs-6 fw-semibold text-gray-600 mb-5">
                    First, a disclaimer – the entire process writing a blog post often
                    takes a couple of hours if you can type
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
              {/*end::Card*/}
              {/*begin::Card*/}
              <div className="card mb-6 mb-xl-9">
                {/*begin::Card body*/}
                <div className="card-body">
                  {/*begin::Header*/}
                  <div className="d-flex flex-stack mb-3">
                    {/*begin::Badge*/}
                    <div className="badge badge-light">Phase 2.6 QA</div>
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
                      User Module Testing
                    </a>
                  </div>
                  {/*end::Title*/}
                  {/*begin::Content*/}
                  <div className="fs-6 fw-semibold text-gray-600 mb-5">
                    First, a disclaimer – the entire process writing a blog post
                    often.
                  </div>
                  {/*end::Content*/}
                  {/*begin::Footer*/}
                  <div className="d-flex flex-stack flex-wrapr">
                    {/*begin::Users*/}
                    <div className="symbol-group symbol-hover my-1">
                      <div
                        className="symbol symbol-35px symbol-circle"
                        data-bs-toggle="tooltip"
                        data-bs-original-title="Alan Warden"
                        data-kt-initialized={1}
                      >
                        <span className="symbol-label bg-warning text-inverse-warning fw-bold">
                          A
                        </span>
                      </div>
                      <div
                        className="symbol symbol-35px symbol-circle"
                        data-bs-toggle="tooltip"
                        data-bs-original-title="Perry Matthew"
                        data-kt-initialized={1}
                      >
                        <span className="symbol-label bg-success text-inverse-success fw-bold">
                          R
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
                        <span className="ms-1 fs-7 fw-bold text-gray-600">8</span>
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
                        <span className="ms-1 fs-7 fw-bold text-gray-600">4</span>
                      </div>
                      {/*end::Stat*/}
                    </div>
                    {/*end::Stats*/}
                  </div>
                  {/*end::Footer*/}
                </div>
                {/*end::Card body*/}
              </div>
              {/*end::Card*/}
              <a
                href="#"
                className="btn btn-primary er w-100 fs-6 px-8 py-4"
                data-bs-toggle="modal"
                data-bs-target="#kt_modal_new_target"
              >
                Create New Target
              </a>
            </div>
            {/*end::Col*/}
            {/* begin col */}
            <div className="col-md-3 col-lg-12 col-xl-3">
              {/*begin::Col header*/}
              <div className="mb-9">
                <div className="d-flex flex-stack">
                  <div className="fw-bold fs-4">
                    Yet to start
                    <span className="fs-6 text-gray-400 ms-2">2</span>
                  </div>
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
                    {/*begin::Menu 1*/}
                    <div
                      className="menu menu-sub menu-sub-dropdown w-250px w-md-300px"
                      data-kt-menu="true"
                      id="kt_menu_63a837d361ce8"
                    >
                      {/*begin::Header*/}
                      <div className="px-7 py-5">
                        <div className="fs-5 text-dark fw-bold">Filter Options</div>
                      </div>
                      {/*end::Header*/}
                      {/*begin::Menu separator*/}
                      <div className="separator border-gray-200" />
                      {/*end::Menu separator*/}
                      {/*begin::Form*/}
                      <div className="px-7 py-5">
                        {/*begin::Input group*/}
                        <div className="mb-10">
                          {/*begin::Label*/}
                          <label className="form-label fw-semibold">Status:</label>
                          {/*end::Label*/}
                          {/*begin::Input*/}
                          <div>
                            <select
                              className="form-select form-select-solid select2-hidden-accessible"
                              data-kt-select2="true"
                              data-placeholder="Select option"
                              data-dropdown-parent="#kt_menu_63a837d361ce8"
                              data-allow-clear="true"
                              data-select2-id="select2-data-13-ues5"
                              tabIndex={-1}
                              aria-hidden="true"
                              data-kt-initialized={1}
                            >
                              <option data-select2-id="select2-data-15-bi43" />
                              <option value={1}>Approved</option>
                              <option value={2}>Pending</option>
                              <option value={2}>In Process</option>
                              <option value={2}>Rejected</option>
                            </select>
                            <span
                              className="select2 select2-container select2-container--bootstrap5"
                              dir="ltr"
                              data-select2-id="select2-data-14-2ar0"
                              style={{ width: "100%" }}
                            >
                              <span className="selection">
                                <span
                                  className="select2-selection select2-selection--single form-select form-select-solid"
                                  role="combobox"
                                  aria-haspopup="true"
                                  aria-expanded="false"
                                  tabIndex={0}
                                  aria-disabled="false"
                                  aria-labelledby="select2-2o33-container"
                                  aria-controls="select2-2o33-container"
                                >
                                  <span
                                    className="select2-selection__rendered"
                                    id="select2-2o33-container"
                                    role="textbox"
                                    aria-readonly="true"
                                    title="Select option"
                                  >
                                    <span className="select2-selection__placeholder">
                                      Select option
                                    </span>
                                  </span>
                                  <span
                                    className="select2-selection__arrow"
                                    role="presentation"
                                  >
                                    <b role="presentation" />
                                  </span>
                                </span>
                              </span>
                              <span className="dropdown-wrapper" aria-hidden="true" />
                            </span>
                          </div>
                          {/*end::Input*/}
                        </div>
                        {/*end::Input group*/}
                        {/*begin::Input group*/}
                        <div className="mb-10">
                          {/*begin::Label*/}
                          <label className="form-label fw-semibold">
                            Member Type:
                          </label>
                          {/*end::Label*/}
                          {/*begin::Options*/}
                          <div className="d-flex">
                            {/*begin::Options*/}
                            <label className="form-check form-check-sm form-check-custom form-check-solid me-5">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                defaultValue={1}
                              />
                              <span className="form-check-label">Author</span>
                            </label>
                            {/*end::Options*/}
                            {/*begin::Options*/}
                            <label className="form-check form-check-sm form-check-custom form-check-solid">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                defaultValue={2}
                                defaultChecked="checked"
                              />
                              <span className="form-check-label">Customer</span>
                            </label>
                            {/*end::Options*/}
                          </div>
                          {/*end::Options*/}
                        </div>
                        {/*end::Input group*/}
                        {/*begin::Input group*/}
                        <div className="mb-10">
                          {/*begin::Label*/}
                          <label className="form-label fw-semibold">
                            Notifications:
                          </label>
                          {/*end::Label*/}
                          {/*begin::Switch*/}
                          <div className="form-check form-switch form-switch-sm form-check-custom form-check-solid">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              defaultValue=""
                              name="notifications"
                              defaultChecked="checked"
                            />
                            <label className="form-check-label">Enabled</label>
                          </div>
                          {/*end::Switch*/}
                        </div>
                        {/*end::Input group*/}
                        {/*begin::Actions*/}
                        <div className="d-flex justify-content-end">
                          <button
                            type="reset"
                            className="btn btn-sm btn-light btn-active-light-primary me-2"
                            data-kt-menu-dismiss="true"
                          >
                            Reset
                          </button>
                          <button
                            type="submit"
                            className="btn btn-sm btn-primary"
                            data-kt-menu-dismiss="true"
                          >
                            Apply
                          </button>
                        </div>
                        {/*end::Actions*/}
                      </div>
                      {/*end::Form*/}
                    </div>
                    {/*end::Menu 1*/}
                  </div>
                  {/*end::Menu*/}
                </div>
                <div className="h-3px w-100 bg-warning" />
              </div>
              {/*end::Col header*/}
              {/*begin::Card*/}
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
                      Meeting with customer
                    </a>
                  </div>
                  {/*end::Title*/}
                  {/*begin::Content*/}
                  <div className="fs-6 fw-semibold text-gray-600 mb-5">
                    First, a disclaimer – the entire process writing a blog post often
                    takes a couple of hours if you can type
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
              {/*end::Card*/}
              {/*begin::Card*/}
              <div className="card mb-6 mb-xl-9">
                {/*begin::Card body*/}
                <div className="card-body">
                  {/*begin::Header*/}
                  <div className="d-flex flex-stack mb-3">
                    {/*begin::Badge*/}
                    <div className="badge badge-light">Phase 2.6 QA</div>
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
                      User Module Testing
                    </a>
                  </div>
                  {/*end::Title*/}
                  {/*begin::Content*/}
                  <div className="fs-6 fw-semibold text-gray-600 mb-5">
                    First, a disclaimer – the entire process writing a blog post
                    often.
                  </div>
                  {/*end::Content*/}
                  {/*begin::Footer*/}
                  <div className="d-flex flex-stack flex-wrapr">
                    {/*begin::Users*/}
                    <div className="symbol-group symbol-hover my-1">
                      <div
                        className="symbol symbol-35px symbol-circle"
                        data-bs-toggle="tooltip"
                        data-bs-original-title="Alan Warden"
                        data-kt-initialized={1}
                      >
                        <span className="symbol-label bg-warning text-inverse-warning fw-bold">
                          A
                        </span>
                      </div>
                      <div
                        className="symbol symbol-35px symbol-circle"
                        data-bs-toggle="tooltip"
                        data-bs-original-title="Perry Matthew"
                        data-kt-initialized={1}
                      >
                        <span className="symbol-label bg-success text-inverse-success fw-bold">
                          R
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
                        <span className="ms-1 fs-7 fw-bold text-gray-600">8</span>
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
                        <span className="ms-1 fs-7 fw-bold text-gray-600">4</span>
                      </div>
                      {/*end::Stat*/}
                    </div>
                    {/*end::Stats*/}
                  </div>
                  {/*end::Footer*/}
                </div>
                {/*end::Card body*/}
              </div>
              {/*end::Card*/}
              <a
                href="#"
                className="btn btn-primary er w-100 fs-6 px-8 py-4"
                data-bs-toggle="modal"
                data-bs-target="#kt_modal_new_target"
              >
                Create New Target
              </a>
            </div>
            {/* end col */}
          </div>
          {/*end::Row*/}
        </div>
        {/*end::Tab pane*/}
        {/*begin::Tab pane*/}
        <div
          id="kt_project_targets_table_pane"
          className="tab-pane fade"
          role="tabpanel"
        >
          <div className="card card-flush">
            <div className="card-body pt-3">
              {/*begin::Table*/}
              <div
                id="kt_profile_overview_table_wrapper"
                className="dataTables_wrapper dt-bootstrap4 no-footer"
              >
                <div className="table-responsive">
                  <table
                    id="kt_profile_overview_table"
                    className="table table-row-bordered table-row-dashed gy-4 align-middle fw-bold dataTable no-footer"
                  >
                    {/*begin::Table head*/}
                    <thead className="fs-7 text-gray-400 text-uppercase">
                      <tr>
                        <th
                          className="min-w-250px sorting"
                          tabIndex={0}
                          aria-controls="kt_profile_overview_table"
                          rowSpan={1}
                          colSpan={1}
                          aria-label="Target: activate to sort column ascending"
                          style={{ width: 0 }}
                        >
                          Target
                        </th>
                        <th
                          className="min-w-90px sorting"
                          tabIndex={0}
                          aria-controls="kt_profile_overview_table"
                          rowSpan={1}
                          colSpan={1}
                          aria-label="Section: activate to sort column ascending"
                          style={{ width: 0 }}
                        >
                          Section
                        </th>
                        <th
                          className="min-w-150px sorting"
                          tabIndex={0}
                          aria-controls="kt_profile_overview_table"
                          rowSpan={1}
                          colSpan={1}
                          aria-label="Due Date: activate to sort column ascending"
                          style={{ width: 0 }}
                        >
                          Due Date
                        </th>
                        <th
                          className="min-w-90px sorting"
                          tabIndex={0}
                          aria-controls="kt_profile_overview_table"
                          rowSpan={1}
                          colSpan={1}
                          aria-label="Members: activate to sort column ascending"
                          style={{ width: 0 }}
                        >
                          Members
                        </th>
                        <th
                          className="min-w-90px sorting"
                          tabIndex={0}
                          aria-controls="kt_profile_overview_table"
                          rowSpan={1}
                          colSpan={1}
                          aria-label="Status: activate to sort column ascending"
                          style={{ width: 0 }}
                        >
                          Status
                        </th>
                        <th
                          className="min-w-50px sorting"
                          tabIndex={0}
                          aria-controls="kt_profile_overview_table"
                          rowSpan={1}
                          colSpan={1}
                          aria-label=": activate to sort column ascending"
                          style={{ width: 0 }}
                        />
                      </tr>
                    </thead>
                    {/*end::Table head*/}
                    {/*begin::Table body*/}
                    <tbody className="fs-6">
                      {/*begin::Table row*/}
                 
                      {/*end::Table row*/}
                      <tr className="odd">
                        <td className="fw-bold">
                          <a href="#" className="text-gray-900 text-hover-primary">
                            Meeting with customer
                          </a>
                        </td>
                        <td data-order="Invalid date">
                          <span className="badge badge-light fw-semibold me-auto">
                            UI Design
                          </span>
                        </td>
                        <td>Sep 9, 2020</td>
                        <td>
                          {/*begin::Members*/}
                          <div className="symbol-group symbol-hover fs-8">
                            <div
                              className="symbol symbol-25px symbol-circle"
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
                              className="symbol symbol-25px symbol-circle"
                              data-bs-toggle="tooltip"
                              aria-label="John Mixin"
                              data-bs-original-title="John Mixin"
                              data-kt-initialized={1}
                            >
                              <img
                                alt="Pic"
                                src="/metronic8/demo7/assets/media/avatars/300-14.jpg"
                              />
                            </div>
                            <div
                              className="symbol symbol-25px symbol-circle"
                              data-bs-toggle="tooltip"
                              data-bs-original-title="Susan Redwood"
                              data-kt-initialized={1}
                            >
                              <span className="symbol-label bg-primary text-inverse-primary fw-bold">
                                S
                              </span>
                            </div>
                          </div>
                          {/*end::Members*/}
                        </td>
                        <td>
                          <span className="badge badge-light-primary fw-bold me-auto">
                            In Progress
                          </span>
                        </td>
                        <td className="text-end">
                          <a
                            href="#"
                            className="btn btn-bg-light btn-active-color-primary btn-sm"
                          >
                            View
                          </a>
                        </td>
                      </tr>
                      <tr className="even">
                        <td className="fw-bold">
                          <a href="#" className="text-gray-900 text-hover-primary">
                            User Module Testing
                          </a>
                        </td>
                        <td data-order="Invalid date">
                          <span className="badge badge-light fw-semibold me-auto">
                            Phase 2.6 QA
                          </span>
                        </td>
                        <td>Apr 5, 2020</td>
                        <td>
                          {/*begin::Members*/}
                          <div className="symbol-group symbol-hover fs-8">
                            <div
                              className="symbol symbol-25px symbol-circle"
                              data-bs-toggle="tooltip"
                              data-bs-original-title="Alan Warden"
                              data-kt-initialized={1}
                            >
                              <span className="symbol-label bg-warning text-inverse-warning fw-bold">
                                A
                              </span>
                            </div>
                            <div
                              className="symbol symbol-25px symbol-circle"
                              data-bs-toggle="tooltip"
                              data-bs-original-title="Robin Watterman"
                              data-kt-initialized={1}
                            >
                              <span className="symbol-label bg-success text-inverse-success fw-bold">
                                R
                              </span>
                            </div>
                          </div>
                          {/*end::Members*/}
                        </td>
                        <td>
                          <span className="badge badge-light-success fw-bold me-auto">
                            Completed
                          </span>
                        </td>
                        <td className="text-end">
                          <a
                            href="#"
                            className="btn btn-bg-light btn-active-color-primary btn-sm"
                          >
                            View
                          </a>
                        </td>
                      </tr>
                      <tr className="odd">
                        <td className="fw-bold">
                          <a href="#" className="text-gray-900 text-hover-primary">
                            Sales report page
                          </a>
                        </td>
                        <td data-order="Invalid date">
                          <span className="badge badge-light fw-semibold me-auto">
                            QA
                          </span>
                        </td>
                        <td>Sep 10, 2020</td>
                        <td>
                          {/*begin::Members*/}
                          <div className="symbol-group symbol-hover fs-8">
                            <div
                              className="symbol symbol-25px symbol-circle"
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
                              className="symbol symbol-25px symbol-circle"
                              data-bs-toggle="tooltip"
                              aria-label="Kristen Goodwin"
                              data-bs-original-title="Kristen Goodwin"
                              data-kt-initialized={1}
                            >
                              <img
                                alt="Pic"
                                src="/metronic8/demo7/assets/media/avatars/300-9.jpg"
                              />
                            </div>
                            <div
                              className="symbol symbol-25px symbol-circle"
                              data-bs-toggle="tooltip"
                              data-bs-original-title="Mikaela Collins"
                              data-kt-initialized={1}
                            >
                              <span className="symbol-label bg-info text-inverse-info fw-bold">
                                M
                              </span>
                            </div>
                          </div>
                          {/*end::Members*/}
                        </td>
                        <td>
                          <span className="badge badge-light fw-bold me-auto">
                            Yet to start
                          </span>
                        </td>
                        <td className="text-end">
                          <a
                            href="#"
                            className="btn btn-bg-light btn-active-color-primary btn-sm"
                          >
                            View
                          </a>
                        </td>
                      </tr>
                      <tr className="even">
                        <td className="fw-bold">
                          <a href="#" className="text-gray-900 text-hover-primary">
                            Meeting with customer
                          </a>
                        </td>
                        <td data-order="Invalid date">
                          <span className="badge badge-light fw-semibold me-auto">
                            Prototype
                          </span>
                        </td>
                        <td>Mar 22, 2020</td>
                        <td>
                          {/*begin::Members*/}
                          <div className="symbol-group symbol-hover fs-8">
                            <div
                              className="symbol symbol-25px symbol-circle"
                              data-bs-toggle="tooltip"
                              data-bs-original-title="Robin Watterman"
                              data-kt-initialized={1}
                            >
                              <span className="symbol-label bg-success text-inverse-success fw-bold">
                                R
                              </span>
                            </div>
                            <div
                              className="symbol symbol-25px symbol-circle"
                              data-bs-toggle="tooltip"
                              aria-label="Brian Cox"
                              data-bs-original-title="Brian Cox"
                              data-kt-initialized={1}
                            >
                              <img
                                alt="Pic"
                                src="/metronic8/demo7/assets/media/avatars/300-5.jpg"
                              />
                            </div>
                          </div>
                          {/*end::Members*/}
                        </td>
                        <td>
                          <span className="badge badge-light-success fw-bold me-auto">
                            Completed
                          </span>
                        </td>
                        <td className="text-end">
                          <a
                            href="#"
                            className="btn btn-bg-light btn-active-color-primary btn-sm"
                          >
                            View
                          </a>
                        </td>
                      </tr>
                      <tr className="odd">
                        <td className="fw-bold">
                          <a href="#" className="text-gray-900 text-hover-primary">
                            Design main Dashboard
                          </a>
                        </td>
                        <td data-order="Invalid date">
                          <span className="badge badge-light fw-semibold me-auto">
                            UI Design
                          </span>
                        </td>
                        <td>Sep 4, 2020</td>
                        <td>
                          {/*begin::Members*/}
                          <div className="symbol-group symbol-hover fs-8">
                            <div
                              className="symbol symbol-25px symbol-circle"
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
                              className="symbol symbol-25px symbol-circle"
                              data-bs-toggle="tooltip"
                              aria-label="Emma Smith"
                              data-bs-original-title="Emma Smith"
                              data-kt-initialized={1}
                            >
                              <img
                                alt="Pic"
                                src="/metronic8/demo7/assets/media/avatars/300-6.jpg"
                              />
                            </div>
                            <div
                              className="symbol symbol-25px symbol-circle"
                              data-bs-toggle="tooltip"
                              aria-label="Lucy Matthews"
                              data-bs-original-title="Lucy Matthews"
                              data-kt-initialized={1}
                            >
                              <img
                                alt="Pic"
                                src="/metronic8/demo7/assets/media/avatars/300-21.jpg"
                              />
                            </div>
                          </div>
                          {/*end::Members*/}
                        </td>
                        <td>
                          <span className="badge badge-light-success fw-bold me-auto">
                            Completed
                          </span>
                        </td>
                        <td className="text-end">
                          <a
                            href="#"
                            className="btn btn-bg-light btn-active-color-primary btn-sm"
                          >
                            View
                          </a>
                        </td>
                      </tr>
                      <tr className="even">
                        <td className="fw-bold">
                          <a href="#" className="text-gray-900 text-hover-primary">
                            User Module Testing
                          </a>
                        </td>
                        <td data-order="Invalid date">
                          <span className="badge badge-light fw-semibold me-auto">
                            Development
                          </span>
                        </td>
                        <td>Oct 2, 2020</td>
                        <td>
                          {/*begin::Members*/}
                          <div className="symbol-group symbol-hover fs-8">
                            <div
                              className="symbol symbol-25px symbol-circle"
                              data-bs-toggle="tooltip"
                              aria-label="Francis Mitcham"
                              data-bs-original-title="Francis Mitcham"
                              data-kt-initialized={1}
                            >
                              <img
                                alt="Pic"
                                src="/metronic8/demo7/assets/media/avatars/300-20.jpg"
                              />
                            </div>
                            <div
                              className="symbol symbol-25px symbol-circle"
                              data-bs-toggle="tooltip"
                              aria-label="Deanna Taylor"
                              data-bs-original-title="Deanna Taylor"
                              data-kt-initialized={1}
                            >
                              <img
                                alt="Pic"
                                src="/metronic8/demo7/assets/media/avatars/300-23.jpg"
                              />
                            </div>
                            <div
                              className="symbol symbol-25px symbol-circle"
                              data-bs-toggle="tooltip"
                              data-bs-original-title="Mikaela Collins"
                              data-kt-initialized={1}
                            >
                              <span className="symbol-label bg-info text-inverse-info fw-bold">
                                M
                              </span>
                            </div>
                          </div>
                          {/*end::Members*/}
                        </td>
                        <td>
                          <span className="badge badge-light-primary fw-bold me-auto">
                            In Progress
                          </span>
                        </td>
                        <td className="text-end">
                          <a
                            href="#"
                            className="btn btn-bg-light btn-active-color-primary btn-sm"
                          >
                            View
                          </a>
                        </td>
                      </tr>
                      <tr className="odd">
                        <td className="fw-bold">
                          <a href="#" className="text-gray-900 text-hover-primary">
                            To check User Management
                          </a>
                        </td>
                        <td data-order="Invalid date">
                          <span className="badge badge-light fw-semibold me-auto">
                            Pahse 3.2
                          </span>
                        </td>
                        <td>Aug 28, 2020</td>
                        <td>
                          {/*begin::Members*/}
                          <div className="symbol-group symbol-hover fs-8">
                            <div
                              className="symbol symbol-25px symbol-circle"
                              data-bs-toggle="tooltip"
                              aria-label="Lucy Matthews"
                              data-bs-original-title="Lucy Matthews"
                              data-kt-initialized={1}
                            >
                              <img
                                alt="Pic"
                                src="/metronic8/demo7/assets/media/avatars/300-21.jpg"
                              />
                            </div>
                            <div
                              className="symbol symbol-25px symbol-circle"
                              data-bs-toggle="tooltip"
                              aria-label="Kristen Goodwin"
                              data-bs-original-title="Kristen Goodwin"
                              data-kt-initialized={1}
                            >
                              <img
                                alt="Pic"
                                src="/metronic8/demo7/assets/media/avatars/300-9.jpg"
                              />
                            </div>
                            <div
                              className="symbol symbol-25px symbol-circle"
                              data-bs-toggle="tooltip"
                              aria-label="Michelle Swanston"
                              data-bs-original-title="Michelle Swanston"
                              data-kt-initialized={1}
                            >
                              <img
                                alt="Pic"
                                src="/metronic8/demo7/assets/media/avatars/300-7.jpg"
                              />
                            </div>
                          </div>
                          {/*end::Members*/}
                        </td>
                        <td>
                          <span className="badge badge-light fw-bold me-auto">
                            Yet to start
                          </span>
                        </td>
                        <td className="text-end">
                          <a
                            href="#"
                            className="btn btn-bg-light btn-active-color-primary btn-sm"
                          >
                            View
                          </a>
                        </td>
                      </tr>
                      <tr className="even">
                        <td className="fw-bold">
                          <a href="#" className="text-gray-900 text-hover-primary">
                            Create Roles Module
                          </a>
                        </td>
                        <td data-order="Invalid date">
                          <span className="badge badge-light fw-semibold me-auto">
                            Branding
                          </span>
                        </td>
                        <td>Dec 13, 2020</td>
                        <td>
                          {/*begin::Members*/}
                          <div className="symbol-group symbol-hover fs-8">
                            <div
                              className="symbol symbol-25px symbol-circle"
                              data-bs-toggle="tooltip"
                              aria-label="Michelle Swanston"
                              data-bs-original-title="Michelle Swanston"
                              data-kt-initialized={1}
                            >
                              <img
                                alt="Pic"
                                src="/metronic8/demo7/assets/media/avatars/300-7.jpg"
                              />
                            </div>
                            <div
                              className="symbol symbol-25px symbol-circle"
                              data-bs-toggle="tooltip"
                              data-bs-original-title="Robin Watterman"
                              data-kt-initialized={1}
                            >
                              <span className="symbol-label bg-success text-inverse-success fw-bold">
                                R
                              </span>
                            </div>
                            <div
                              className="symbol symbol-25px symbol-circle"
                              data-bs-toggle="tooltip"
                              data-bs-original-title="Alan Warden"
                              data-kt-initialized={1}
                            >
                              <span className="symbol-label bg-warning text-inverse-warning fw-bold">
                                A
                              </span>
                            </div>
                          </div>
                          {/*end::Members*/}
                        </td>
                        <td>
                          <span className="badge badge-light fw-bold me-auto">
                            Yet to start
                          </span>
                        </td>
                        <td className="text-end">
                          <a
                            href="#"
                            className="btn btn-bg-light btn-active-color-primary btn-sm"
                          >
                            View
                          </a>
                        </td>
                      </tr>
                    </tbody>
                    {/*end::Table body*/}
                  </table>
                </div>
                <div className="row">
                  <div className="col-sm-12 col-md-5 d-flex align-items-center justify-content-center justify-content-md-start" />
                  <div className="col-sm-12 col-md-7 d-flex align-items-center justify-content-center justify-content-md-end" />
                </div>
              </div>
              {/*end::Table*/}
            </div>
          </div>
        </div>
        {/*end::Tab pane*/}
      </div>
      </section>

    )
}

export default Project;