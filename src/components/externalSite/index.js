import React from "react";

function ExternalSite (){
    return(
<>
{/* header start */}
<div
  id="kt_header"
  className="header"
  data-kt-sticky="true"
  data-kt-sticky-name="header"
  data-kt-sticky-offset="{default: '200px', lg: '300px'}"
>
  <div
    className="container d-flex align-items-center justify-content-between"
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
{/* header start */}

  <div className="d-flex flex-column flex-root">
    {/*begin::Header Section*/}
    <div className="mb-0" id="home">
      {/*begin::Wrapper*/}
      <div
        className="bgi-no-repeat bgi-size-contain bgi-position-x-center bgi-position-y-bottom landing-dark-bg"
        style={{
          backgroundImage: "url(assets/media/svg/illustrations/landing.svg)"
        }}
      >
        {/*begin::Header*/}
        <div
          className="landing-header"
          data-kt-sticky="true"
          data-kt-sticky-name="landing-header"
          data-kt-sticky-offset="{default: '200px', lg: '300px'}"
        >
          {/*begin::Container*/}
          <div className="container">
            {/*begin::Wrapper*/}
            <div className="d-flex align-items-center justify-content-between">
              {/*begin::Logo*/}
              <div className="d-flex align-items-center flex-equal">
                {/*begin::Mobile menu toggle*/}
                <button
                  className="btn btn-icon btn-active-color-primary me-3 d-flex d-lg-none"
                  id="kt_landing_menu_toggle"
                >
                  {/*begin::Svg Icon | path: icons/duotune/abstract/abs015.svg*/}
                  <span className="svg-icon svg-icon-2hx">
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
                  {/*end::Svg Icon*/}
                </button>
                {/*end::Mobile menu toggle*/}
                {/*begin::Logo image*/}
                <a href="../../demo7/dist/landing.html">
                  <img
                    alt="Logo"
                    src="assets/media/logos/landing.svg"
                    className="logo-default h-25px h-lg-30px"
                  />
                  <img
                    alt="Logo"
                    src="assets/media/logos/landing-dark.svg"
                    className="logo-sticky h-20px h-lg-25px"
                  />
                </a>
                {/*end::Logo image*/}
              </div>
              {/*end::Logo*/}
              {/*begin::Menu wrapper*/}
              <div className="d-lg-block" id="kt_header_nav_wrapper">
                <div
                  className="d-lg-block p-5 p-lg-0"
                  data-kt-drawer="true"
                  data-kt-drawer-name="landing-menu"
                  data-kt-drawer-activate="{default: true, lg: false}"
                  data-kt-drawer-overlay="true"
                  data-kt-drawer-width="200px"
                  data-kt-drawer-direction="start"
                  data-kt-drawer-toggle="#kt_landing_menu_toggle"
                  data-kt-swapper="true"
                  data-kt-swapper-mode="prepend"
                  data-kt-swapper-parent="{default: '#kt_body', lg: '#kt_header_nav_wrapper'}"
                >
                  {/*begin::Menu*/}
                  <div
                    className="menu menu-column flex-nowrap menu-rounded menu-lg-row menu-title-gray-500 menu-state-title-primary nav nav-flush fs-5 fw-semibold"
                    id="kt_landing_menu"
                  >
                    {/*begin::Menu item*/}
                    <div className="menu-item">
                      {/*begin::Menu link*/}
                      <a
                        className="menu-link nav-link active py-3 px-4 px-xxl-6"
                        href="#kt_body"
                        data-kt-scroll-toggle="true"
                        data-kt-drawer-dismiss="true"
                      >
                        Home
                      </a>
                      {/*end::Menu link*/}
                    </div>
                    {/*end::Menu item*/}
                    {/*begin::Menu item*/}
                    <div className="menu-item">
                      {/*begin::Menu link*/}
                      <a
                        className="menu-link nav-link py-3 px-4 px-xxl-6"
                        href="#how-it-works"
                        data-kt-scroll-toggle="true"
                        data-kt-drawer-dismiss="true"
                      >
                        How it Works
                      </a>
                      {/*end::Menu link*/}
                    </div>
                    {/*end::Menu item*/}
                    {/*begin::Menu item*/}
                    <div className="menu-item">
                      {/*begin::Menu link*/}
                      <a
                        className="menu-link nav-link py-3 px-4 px-xxl-6"
                        href="#achievements"
                        data-kt-scroll-toggle="true"
                        data-kt-drawer-dismiss="true"
                      >
                        Achievements
                      </a>
                      {/*end::Menu link*/}
                    </div>
                    {/*end::Menu item*/}
                    {/*begin::Menu item*/}
                    <div className="menu-item">
                      {/*begin::Menu link*/}
                      <a
                        className="menu-link nav-link py-3 px-4 px-xxl-6"
                        href="#team"
                        data-kt-scroll-toggle="true"
                        data-kt-drawer-dismiss="true"
                      >
                        Team
                      </a>
                      {/*end::Menu link*/}
                    </div>
                    {/*end::Menu item*/}
                    {/*begin::Menu item*/}
                    <div className="menu-item">
                      {/*begin::Menu link*/}
                      <a
                        className="menu-link nav-link py-3 px-4 px-xxl-6"
                        href="#portfolio"
                        data-kt-scroll-toggle="true"
                        data-kt-drawer-dismiss="true"
                      >
                        Portfolio
                      </a>
                      {/*end::Menu link*/}
                    </div>
                    {/*end::Menu item*/}
                    {/*begin::Menu item*/}
                    <div className="menu-item">
                      {/*begin::Menu link*/}
                      <a
                        className="menu-link nav-link py-3 px-4 px-xxl-6"
                        href="#pricing"
                        data-kt-scroll-toggle="true"
                        data-kt-drawer-dismiss="true"
                      >
                        Pricing
                      </a>
                      {/*end::Menu link*/}
                    </div>
                    {/*end::Menu item*/}
                  </div>
                  {/*end::Menu*/}
                </div>
              </div>
              {/*end::Menu wrapper*/}
              {/*begin::Toolbar*/}
              <div className="flex-equal text-end ms-1">
                <a
                  href="../../demo7/dist/authentication/layouts/basic/sign-in.html"
                  className="btn btn-success"
                >
                  Sign In
                </a>
              </div>
              {/*end::Toolbar*/}
            </div>
            {/*end::Wrapper*/}
          </div>
          {/*end::Container*/}
        </div>
        {/*end::Header*/}
        {/*begin::Landing hero*/}
        <div className="d-flex flex-column flex-center w-100 min-h-350px min-h-lg-500px px-9">
          {/*begin::Heading*/}
          <div className="text-center mb-5 mb-lg-10 py-10 py-lg-20">
            {/*begin::Title*/}
            <h1 className="text-white lh-base fw-bold fs-2x fs-lg-3x mb-15">
              Build An Outstanding Solutions
              <br />
              with
              <span
                style={{
                  background:
                    "linear-gradient(to right, #12CE5D 0%, #FFD80C 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent"
                }}
              >
                <span id="kt_landing_hero_text">The Best Theme Ever</span>
              </span>
            </h1>
            {/*end::Title*/}
            {/*begin::Action*/}
            <a href="../../demo7/dist/index.html" className="btn btn-primary">
              Try Metronic
            </a>
            {/*end::Action*/}
          </div>
          {/*end::Heading*/}
          {/*begin::Clients*/}
          <div className="d-flex flex-center flex-wrap position-relative px-5">
            {/*begin::Client*/}
            <div
              className="d-flex flex-center m-3 m-md-6"
              data-bs-toggle="tooltip"
              title="Fujifilm"
            >
              <img
                src="assets/media/svg/brand-logos/fujifilm.svg"
                className="mh-30px mh-lg-40px"
                alt=""
              />
            </div>
            {/*end::Client*/}
            {/*begin::Client*/}
            <div
              className="d-flex flex-center m-3 m-md-6"
              data-bs-toggle="tooltip"
              title="Vodafone"
            >
              <img
                src="assets/media/svg/brand-logos/vodafone.svg"
                className="mh-30px mh-lg-40px"
                alt=""
              />
            </div>
            {/*end::Client*/}
            {/*begin::Client*/}
            <div
              className="d-flex flex-center m-3 m-md-6"
              data-bs-toggle="tooltip"
              title="KPMG International"
            >
              <img
                src="assets/media/svg/brand-logos/kpmg.svg"
                className="mh-30px mh-lg-40px"
                alt=""
              />
            </div>
            {/*end::Client*/}
            {/*begin::Client*/}
            <div
              className="d-flex flex-center m-3 m-md-6"
              data-bs-toggle="tooltip"
              title="Nasa"
            >
              <img
                src="assets/media/svg/brand-logos/nasa.svg"
                className="mh-30px mh-lg-40px"
                alt=""
              />
            </div>
            {/*end::Client*/}
            {/*begin::Client*/}
            <div
              className="d-flex flex-center m-3 m-md-6"
              data-bs-toggle="tooltip"
              title="Aspnetzero"
            >
              <img
                src="assets/media/svg/brand-logos/aspnetzero.svg"
                className="mh-30px mh-lg-40px"
                alt=""
              />
            </div>
            {/*end::Client*/}
            {/*begin::Client*/}
            <div
              className="d-flex flex-center m-3 m-md-6"
              data-bs-toggle="tooltip"
              title="AON - Empower Results"
            >
              <img
                src="assets/media/svg/brand-logos/aon.svg"
                className="mh-30px mh-lg-40px"
                alt=""
              />
            </div>
            {/*end::Client*/}
            {/*begin::Client*/}
            <div
              className="d-flex flex-center m-3 m-md-6"
              data-bs-toggle="tooltip"
              title="Hewlett-Packard"
            >
              <img
                src="assets/media/svg/brand-logos/hp-3.svg"
                className="mh-30px mh-lg-40px"
                alt=""
              />
            </div>
            {/*end::Client*/}
            {/*begin::Client*/}
            <div
              className="d-flex flex-center m-3 m-md-6"
              data-bs-toggle="tooltip"
              title="Truman"
            >
              <img
                src="assets/media/svg/brand-logos/truman.svg"
                className="mh-30px mh-lg-40px"
                alt=""
              />
            </div>
            {/*end::Client*/}
          </div>
          {/*end::Clients*/}
        </div>
        {/*end::Landing hero*/}
      </div>
      {/*end::Wrapper*/}
      {/*begin::Curve bottom*/}
      <div className="landing-curve landing-dark-color mb-10 mb-lg-20">
        <svg
          viewBox="15 12 1470 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 11C3.93573 11.3356 7.85984 11.6689 11.7725 12H1488.16C1492.1 11.6689 1496.04 11.3356 1500 11V12H1488.16C913.668 60.3476 586.282 60.6117 11.7725 12H0V11Z"
            fill="currentColor"
          />
        </svg>
      </div>
      {/*end::Curve bottom*/}
    </div>
    {/*end::Header Section*/}
    {/*begin::How It Works Section*/}
    <div className="mb-n10 mb-lg-n20 z-index-2">
      {/*begin::Container*/}
      <div className="container">
        {/*begin::Heading*/}
        <div className="text-center mb-17">
          {/*begin::Title*/}
          <h3
            className="fs-2hx text-dark mb-5"
            id="how-it-works"
            data-kt-scroll-offset="{default: 100, lg: 150}"
          >
            How it Works
          </h3>
          {/*end::Title*/}
          {/*begin::Text*/}
          <div className="fs-5 text-muted fw-bold">
            Save thousands to millions of bucks by using single tool
            <br />
            for different amazing and great useful admin
          </div>
          {/*end::Text*/}
        </div>
        {/*end::Heading*/}
        {/*begin::Row*/}
        <div className="row w-100 gy-10 mb-md-20">
          {/*begin::Col*/}
          <div className="col-md-4 px-5">
            {/*begin::Story*/}
            <div className="text-center mb-10 mb-md-0">
              {/*begin::Illustration*/}
              <img
                src="assets/media/illustrations/sigma-1/2.png"
                className="mh-125px mb-9"
                alt=""
              />
              {/*end::Illustration*/}
              {/*begin::Heading*/}
              <div className="d-flex flex-center mb-5">
                {/*begin::Badge*/}
                <span className="badge badge-circle badge-light-success fw-bold p-5 me-3 fs-3">
                  1
                </span>
                {/*end::Badge*/}
                {/*begin::Title*/}
                <div className="fs-5 fs-lg-3 fw-bold text-dark">
                  Jane Miller
                </div>
                {/*end::Title*/}
              </div>
              {/*end::Heading*/}
              {/*begin::Description*/}
              <div className="fw-semibold fs-6 fs-lg-4 text-muted">
                Save thousands to millions of bucks
                <br />
                by using single tool for different
                <br />
                amazing and great
              </div>
              {/*end::Description*/}
            </div>
            {/*end::Story*/}
          </div>
          {/*end::Col*/}
          {/*begin::Col*/}
          <div className="col-md-4 px-5">
            {/*begin::Story*/}
            <div className="text-center mb-10 mb-md-0">
              {/*begin::Illustration*/}
              <img
                src="assets/media/illustrations/sigma-1/8.png"
                className="mh-125px mb-9"
                alt=""
              />
              {/*end::Illustration*/}
              {/*begin::Heading*/}
              <div className="d-flex flex-center mb-5">
                {/*begin::Badge*/}
                <span className="badge badge-circle badge-light-success fw-bold p-5 me-3 fs-3">
                  2
                </span>
                {/*end::Badge*/}
                {/*begin::Title*/}
                <div className="fs-5 fs-lg-3 fw-bold text-dark">
                  Setup Your App
                </div>
                {/*end::Title*/}
              </div>
              {/*end::Heading*/}
              {/*begin::Description*/}
              <div className="fw-semibold fs-6 fs-lg-4 text-muted">
                Save thousands to millions of bucks
                <br />
                by using single tool for different
                <br />
                amazing and great
              </div>
              {/*end::Description*/}
            </div>
            {/*end::Story*/}
          </div>
          {/*end::Col*/}
          {/*begin::Col*/}
          <div className="col-md-4 px-5">
            {/*begin::Story*/}
            <div className="text-center mb-10 mb-md-0">
              {/*begin::Illustration*/}
              <img
                src="assets/media/illustrations/sigma-1/12.png"
                className="mh-125px mb-9"
                alt=""
              />
              {/*end::Illustration*/}
              {/*begin::Heading*/}
              <div className="d-flex flex-center mb-5">
                {/*begin::Badge*/}
                <span className="badge badge-circle badge-light-success fw-bold p-5 me-3 fs-3">
                  3
                </span>
                {/*end::Badge*/}
                {/*begin::Title*/}
                <div className="fs-5 fs-lg-3 fw-bold text-dark">
                  Enjoy Nautica App
                </div>
                {/*end::Title*/}
              </div>
              {/*end::Heading*/}
              {/*begin::Description*/}
              <div className="fw-semibold fs-6 fs-lg-4 text-muted">
                Save thousands to millions of bucks
                <br />
                by using single tool for different
                <br />
                amazing and great
              </div>
              {/*end::Description*/}
            </div>
            {/*end::Story*/}
          </div>
          {/*end::Col*/}
        </div>
        {/*end::Row*/}
        {/*begin::Product slider*/}
        <div className="tns tns-default">
          {/*begin::Slider*/}
          <div
            data-tns="true"
            data-tns-loop="true"
            data-tns-swipe-angle="false"
            data-tns-speed={2000}
            data-tns-autoplay="true"
            data-tns-autoplay-timeout={18000}
            data-tns-controls="true"
            data-tns-nav="false"
            data-tns-items={1}
            data-tns-center="false"
            data-tns-dots="false"
            data-tns-prev-button="#kt_team_slider_prev1"
            data-tns-next-button="#kt_team_slider_next1"
          >
            {/*begin::Item*/}
            <div className="text-center px-5 pt-5 pt-lg-10 px-lg-10">
              <img
                src="assets/media/product-demos/demo1.png"
                className="card-rounded shadow mw-100"
                alt=""
              />
            </div>
            {/*end::Item*/}
            {/*begin::Item*/}
            <div className="text-center px-5 pt-5 pt-lg-10 px-lg-10">
              <img
                src="assets/media/product-demos/demo2.png"
                className="card-rounded shadow mw-100"
                alt=""
              />
            </div>
            {/*end::Item*/}
            {/*begin::Item*/}
            <div className="text-center px-5 pt-5 pt-lg-10 px-lg-10">
              <img
                src="assets/media/product-demos/demo4.png"
                className="card-rounded shadow mw-100"
                alt=""
              />
            </div>
            {/*end::Item*/}
            {/*begin::Item*/}
            <div className="text-center px-5 pt-5 pt-lg-10 px-lg-10">
              <img
                src="assets/media/product-demos/demo5.png"
                className="card-rounded shadow mw-100"
                alt=""
              />
            </div>
            {/*end::Item*/}
          </div>
          {/*end::Slider*/}
          {/*begin::Slider button*/}
          <button
            className="btn btn-icon btn-active-color-primary"
            id="kt_team_slider_prev1"
          >
            {/*begin::Svg Icon | path: icons/duotune/arrows/arr074.svg*/}
            <span className="svg-icon svg-icon-3x">
              <svg
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.2657 11.4343L15.45 7.25C15.8642 6.83579 15.8642 6.16421 15.45 5.75C15.0358 5.33579 14.3642 5.33579 13.95 5.75L8.40712 11.2929C8.01659 11.6834 8.01659 12.3166 8.40712 12.7071L13.95 18.25C14.3642 18.6642 15.0358 18.6642 15.45 18.25C15.8642 17.8358 15.8642 17.1642 15.45 16.75L11.2657 12.5657C10.9533 12.2533 10.9533 11.7467 11.2657 11.4343Z"
                  fill="currentColor"
                />
              </svg>
            </span>
            {/*end::Svg Icon*/}
          </button>
          {/*end::Slider button*/}
          {/*begin::Slider button*/}
          <button
            className="btn btn-icon btn-active-color-primary"
            id="kt_team_slider_next1"
          >
            {/*begin::Svg Icon | path: icons/duotune/arrows/arr071.svg*/}
            <span className="svg-icon svg-icon-3x">
              <svg
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.6343 12.5657L8.45001 16.75C8.0358 17.1642 8.0358 17.8358 8.45001 18.25C8.86423 18.6642 9.5358 18.6642 9.95001 18.25L15.4929 12.7071C15.8834 12.3166 15.8834 11.6834 15.4929 11.2929L9.95001 5.75C9.5358 5.33579 8.86423 5.33579 8.45001 5.75C8.0358 6.16421 8.0358 6.83579 8.45001 7.25L12.6343 11.4343C12.9467 11.7467 12.9467 12.2533 12.6343 12.5657Z"
                  fill="currentColor"
                />
              </svg>
            </span>
            {/*end::Svg Icon*/}
          </button>
          {/*end::Slider button*/}
        </div>
        {/*end::Product slider*/}
      </div>
      {/*end::Container*/}
    </div>
    {/*end::How It Works Section*/}
    {/*begin::Statistics Section*/}
    <div className="mt-sm-n10">
      {/*begin::Curve top*/}
      <div className="landing-curve landing-dark-color">
        <svg
          viewBox="15 -1 1470 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 48C4.93573 47.6644 8.85984 47.3311 12.7725 47H1489.16C1493.1 47.3311 1497.04 47.6644 1501 48V47H1489.16C914.668 -1.34764 587.282 -1.61174 12.7725 47H1V48Z"
            fill="currentColor"
          />
        </svg>
      </div>
      {/*end::Curve top*/}
      {/*begin::Wrapper*/}
      <div className="pb-15 pt-18 landing-dark-bg">
        {/*begin::Container*/}
        <div className="container">
          {/*begin::Heading*/}
          <div
            className="text-center mt-15 mb-18"
            id="achievements"
            data-kt-scroll-offset="{default: 100, lg: 150}"
          >
            {/*begin::Title*/}
            <h3 className="fs-2hx text-white fw-bold mb-5">
              We Make Things Better
            </h3>
            {/*end::Title*/}
            {/*begin::Description*/}
            <div className="fs-5 text-gray-700 fw-bold">
              Save thousands to millions of bucks by using single tool
              <br />
              for different amazing and great useful admin
            </div>
            {/*end::Description*/}
          </div>
          {/*end::Heading*/}
          {/*begin::Statistics*/}
          <div className="d-flex flex-center">
            {/*begin::Items*/}
            <div className="d-flex flex-wrap flex-center justify-content-lg-between mb-15 mx-auto w-xl-900px">
              {/*begin::Item*/}
              <div
                className="d-flex flex-column flex-center h-200px w-200px h-lg-250px w-lg-250px m-3 bgi-no-repeat bgi-position-center bgi-size-contain"
                style={{
                  backgroundImage: 'url("assets/media/svg/misc/octagon.svg")'
                }}
              >
                {/*begin::Symbol*/}
                {/*begin::Svg Icon | path: icons/duotune/general/gen025.svg*/}
                <span className="svg-icon svg-icon-2tx svg-icon-white mb-3">
                  <svg
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x={2}
                      y={2}
                      width={9}
                      height={9}
                      rx={2}
                      fill="currentColor"
                    />
                    <rect
                      opacity="0.3"
                      x={13}
                      y={2}
                      width={9}
                      height={9}
                      rx={2}
                      fill="currentColor"
                    />
                    <rect
                      opacity="0.3"
                      x={13}
                      y={13}
                      width={9}
                      height={9}
                      rx={2}
                      fill="currentColor"
                    />
                    <rect
                      opacity="0.3"
                      x={2}
                      y={13}
                      width={9}
                      height={9}
                      rx={2}
                      fill="currentColor"
                    />
                  </svg>
                </span>
                {/*end::Svg Icon*/}
                {/*end::Symbol*/}
                {/*begin::Info*/}
                <div className="mb-0">
                  {/*begin::Value*/}
                  <div className="fs-lg-2hx fs-2x fw-bold text-white d-flex flex-center">
                    <div
                      className="min-w-70px"
                      data-kt-countup="true"
                      data-kt-countup-value={700}
                      data-kt-countup-suffix="+"
                    >
                      0
                    </div>
                  </div>
                  {/*end::Value*/}
                  {/*begin::Label*/}
                  <span className="text-gray-600 fw-semibold fs-5 lh-0">
                    Known Companies
                  </span>
                  {/*end::Label*/}
                </div>
                {/*end::Info*/}
              </div>
              {/*end::Item*/}
              {/*begin::Item*/}
              <div
                className="d-flex flex-column flex-center h-200px w-200px h-lg-250px w-lg-250px m-3 bgi-no-repeat bgi-position-center bgi-size-contain"
                style={{
                  backgroundImage: 'url("assets/media/svg/misc/octagon.svg")'
                }}
              >
                {/*begin::Symbol*/}
                {/*begin::Svg Icon | path: icons/duotune/graphs/gra008.svg*/}
                <span className="svg-icon svg-icon-2tx svg-icon-white mb-3">
                  <svg
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13 10.9128V3.01281C13 2.41281 13.5 1.91281 14.1 2.01281C16.1 2.21281 17.9 3.11284 19.3 4.61284C20.7 6.01284 21.6 7.91285 21.9 9.81285C22 10.4129 21.5 10.9128 20.9 10.9128H13Z"
                      fill="currentColor"
                    />
                    <path
                      opacity="0.3"
                      d="M13 12.9128V20.8129C13 21.4129 13.5 21.9129 14.1 21.8129C16.1 21.6129 17.9 20.7128 19.3 19.2128C20.7 17.8128 21.6 15.9128 21.9 14.0128C22 13.4128 21.5 12.9128 20.9 12.9128H13Z"
                      fill="currentColor"
                    />
                    <path
                      opacity="0.3"
                      d="M11 19.8129C11 20.4129 10.5 20.9129 9.89999 20.8129C5.49999 20.2129 2 16.5128 2 11.9128C2 7.31283 5.39999 3.51281 9.89999 3.01281C10.5 2.91281 11 3.41281 11 4.01281V19.8129Z"
                      fill="currentColor"
                    />
                  </svg>
                </span>
                {/*end::Svg Icon*/}
                {/*end::Symbol*/}
                {/*begin::Info*/}
                <div className="mb-0">
                  {/*begin::Value*/}
                  <div className="fs-lg-2hx fs-2x fw-bold text-white d-flex flex-center">
                    <div
                      className="min-w-70px"
                      data-kt-countup="true"
                      data-kt-countup-value={80}
                      data-kt-countup-suffix="K+"
                    >
                      0
                    </div>
                  </div>
                  {/*end::Value*/}
                  {/*begin::Label*/}
                  <span className="text-gray-600 fw-semibold fs-5 lh-0">
                    Statistic Reports
                  </span>
                  {/*end::Label*/}
                </div>
                {/*end::Info*/}
              </div>
              {/*end::Item*/}
              {/*begin::Item*/}
              <div
                className="d-flex flex-column flex-center h-200px w-200px h-lg-250px w-lg-250px m-3 bgi-no-repeat bgi-position-center bgi-size-contain"
                style={{
                  backgroundImage: 'url("assets/media/svg/misc/octagon.svg")'
                }}
              >
                {/*begin::Symbol*/}
                {/*begin::Svg Icon | path: icons/duotune/ecommerce/ecm002.svg*/}
                <span className="svg-icon svg-icon-2tx svg-icon-white mb-3">
                  <svg
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21 10H13V11C13 11.6 12.6 12 12 12C11.4 12 11 11.6 11 11V10H3C2.4 10 2 10.4 2 11V13H22V11C22 10.4 21.6 10 21 10Z"
                      fill="currentColor"
                    />
                    <path
                      opacity="0.3"
                      d="M12 12C11.4 12 11 11.6 11 11V3C11 2.4 11.4 2 12 2C12.6 2 13 2.4 13 3V11C13 11.6 12.6 12 12 12Z"
                      fill="currentColor"
                    />
                    <path
                      opacity="0.3"
                      d="M18.1 21H5.9C5.4 21 4.9 20.6 4.8 20.1L3 13H21L19.2 20.1C19.1 20.6 18.6 21 18.1 21ZM13 18V15C13 14.4 12.6 14 12 14C11.4 14 11 14.4 11 15V18C11 18.6 11.4 19 12 19C12.6 19 13 18.6 13 18ZM17 18V15C17 14.4 16.6 14 16 14C15.4 14 15 14.4 15 15V18C15 18.6 15.4 19 16 19C16.6 19 17 18.6 17 18ZM9 18V15C9 14.4 8.6 14 8 14C7.4 14 7 14.4 7 15V18C7 18.6 7.4 19 8 19C8.6 19 9 18.6 9 18Z"
                      fill="currentColor"
                    />
                  </svg>
                </span>
                {/*end::Svg Icon*/}
                {/*end::Symbol*/}
                {/*begin::Info*/}
                <div className="mb-0">
                  {/*begin::Value*/}
                  <div className="fs-lg-2hx fs-2x fw-bold text-white d-flex flex-center">
                    <div
                      className="min-w-70px"
                      data-kt-countup="true"
                      data-kt-countup-value={35}
                      data-kt-countup-suffix="M+"
                    >
                      0
                    </div>
                  </div>
                  {/*end::Value*/}
                  {/*begin::Label*/}
                  <span className="text-gray-600 fw-semibold fs-5 lh-0">
                    Secure Payments
                  </span>
                  {/*end::Label*/}
                </div>
                {/*end::Info*/}
              </div>
              {/*end::Item*/}
            </div>
            {/*end::Items*/}
          </div>
          {/*end::Statistics*/}
          {/*begin::Testimonial*/}
          <div className="fs-2 fw-semibold text-muted text-center mb-3">
            <span className="fs-1 lh-1 text-gray-700">“</span>When you care
            about your topic, you’ll write about it in a
            <br />
            <span className="text-gray-700 me-1">more powerful</span>,
            emotionally expressive way
            <span className="fs-1 lh-1 text-gray-700">“</span>
          </div>
          {/*end::Testimonial*/}
          {/*begin::Author*/}
          <div className="fs-2 fw-semibold text-muted text-center">
            <a
              href="../../demo7/dist/account/security.html"
              className="link-primary fs-4 fw-bold"
            >
              Marcus Levy,
            </a>
            <span className="fs-4 fw-bold text-gray-600">KeenThemes CEO</span>
          </div>
          {/*end::Author*/}
        </div>
        {/*end::Container*/}
      </div>
      {/*end::Wrapper*/}
      {/*begin::Curve bottom*/}
      <div className="landing-curve landing-dark-color">
        <svg
          viewBox="15 12 1470 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 11C3.93573 11.3356 7.85984 11.6689 11.7725 12H1488.16C1492.1 11.6689 1496.04 11.3356 1500 11V12H1488.16C913.668 60.3476 586.282 60.6117 11.7725 12H0V11Z"
            fill="currentColor"
          />
        </svg>
      </div>
      {/*end::Curve bottom*/}
    </div>
    {/*end::Statistics Section*/}
    {/*begin::Team Section*/}
    <div className="py-10 py-lg-20">
      {/*begin::Container*/}
      <div className="container">
        {/*begin::Heading*/}
        <div className="text-center mb-12">
          {/*begin::Title*/}
          <h3
            className="fs-2hx text-dark mb-5"
            id="team"
            data-kt-scroll-offset="{default: 100, lg: 150}"
          >
            Our Great Team
          </h3>
          {/*end::Title*/}
          {/*begin::Sub-title*/}
          <div className="fs-5 text-muted fw-bold">
            It’s no doubt that when a development takes longer to complete,
            additional costs to
            <br />
            integrate and test each extra feature creeps up and haunts most of
            us.
          </div>
          {/*end::Sub-title=*/}
        </div>
        {/*end::Heading*/}
        {/*begin::Slider*/}
        <div className="tns tns-default">
          {/*begin::Wrapper*/}
          <div
            data-tns="true"
            data-tns-loop="true"
            data-tns-swipe-angle="false"
            data-tns-speed={2000}
            data-tns-autoplay="true"
            data-tns-autoplay-timeout={18000}
            data-tns-controls="true"
            data-tns-nav="false"
            data-tns-items={1}
            data-tns-center="false"
            data-tns-dots="false"
            data-tns-prev-button="#kt_team_slider_prev"
            data-tns-next-button="#kt_team_slider_next"
            data-tns-responsive="{1200: {items: 3}, 992: {items: 2}}"
          >
            {/*begin::Item*/}
            <div className="text-center">
              {/*begin::Photo*/}
              <div
                className="octagon mx-auto mb-5 d-flex w-200px h-200px bgi-no-repeat bgi-size-contain bgi-position-center"
                style={{
                  backgroundImage: 'url("assets/media/avatars/300-1.jpg")'
                }}
              />
              {/*end::Photo*/}
              {/*begin::Person*/}
              <div className="mb-0">
                {/*begin::Name*/}
                <a
                  href="#"
                  className="text-dark fw-bold text-hover-primary fs-3"
                >
                  Paul Miles
                </a>
                {/*end::Name*/}
                {/*begin::Position*/}
                <div className="text-muted fs-6 fw-semibold mt-1">
                  Development Lead
                </div>
                {/*begin::Position*/}
              </div>
              {/*end::Person*/}
            </div>
            {/*end::Item*/}
            {/*begin::Item*/}
            <div className="text-center">
              {/*begin::Photo*/}
              <div
                className="octagon mx-auto mb-5 d-flex w-200px h-200px bgi-no-repeat bgi-size-contain bgi-position-center"
                style={{
                  backgroundImage: 'url("assets/media/avatars/300-2.jpg")'
                }}
              />
              {/*end::Photo*/}
              {/*begin::Person*/}
              <div className="mb-0">
                {/*begin::Name*/}
                <a
                  href="#"
                  className="text-dark fw-bold text-hover-primary fs-3"
                >
                  Melisa Marcus
                </a>
                {/*end::Name*/}
                {/*begin::Position*/}
                <div className="text-muted fs-6 fw-semibold mt-1">
                  Creative Director
                </div>
                {/*begin::Position*/}
              </div>
              {/*end::Person*/}
            </div>
            {/*end::Item*/}
            {/*begin::Item*/}
            <div className="text-center">
              {/*begin::Photo*/}
              <div
                className="octagon mx-auto mb-5 d-flex w-200px h-200px bgi-no-repeat bgi-size-contain bgi-position-center"
                style={{
                  backgroundImage: 'url("assets/media/avatars/300-5.jpg")'
                }}
              />
              {/*end::Photo*/}
              {/*begin::Person*/}
              <div className="mb-0">
                {/*begin::Name*/}
                <a
                  href="#"
                  className="text-dark fw-bold text-hover-primary fs-3"
                >
                  David Nilson
                </a>
                {/*end::Name*/}
                {/*begin::Position*/}
                <div className="text-muted fs-6 fw-semibold mt-1">
                  Python Expert
                </div>
                {/*begin::Position*/}
              </div>
              {/*end::Person*/}
            </div>
            {/*end::Item*/}
            {/*begin::Item*/}
            <div className="text-center">
              {/*begin::Photo*/}
              <div
                className="octagon mx-auto mb-5 d-flex w-200px h-200px bgi-no-repeat bgi-size-contain bgi-position-center"
                style={{
                  backgroundImage: 'url("assets/media/avatars/300-20.jpg")'
                }}
              />
              {/*end::Photo*/}
              {/*begin::Person*/}
              <div className="mb-0">
                {/*begin::Name*/}
                <a
                  href="#"
                  className="text-dark fw-bold text-hover-primary fs-3"
                >
                  Anne Clarc
                </a>
                {/*end::Name*/}
                {/*begin::Position*/}
                <div className="text-muted fs-6 fw-semibold mt-1">
                  Project Manager
                </div>
                {/*begin::Position*/}
              </div>
              {/*end::Person*/}
            </div>
            {/*end::Item*/}
            {/*begin::Item*/}
            <div className="text-center">
              {/*begin::Photo*/}
              <div
                className="octagon mx-auto mb-5 d-flex w-200px h-200px bgi-no-repeat bgi-size-contain bgi-position-center"
                style={{
                  backgroundImage: 'url("assets/media/avatars/300-23.jpg")'
                }}
              />
              {/*end::Photo*/}
              {/*begin::Person*/}
              <div className="mb-0">
                {/*begin::Name*/}
                <a
                  href="#"
                  className="text-dark fw-bold text-hover-primary fs-3"
                >
                  Ricky Hunt
                </a>
                {/*end::Name*/}
                {/*begin::Position*/}
                <div className="text-muted fs-6 fw-semibold mt-1">
                  Art Director
                </div>
                {/*begin::Position*/}
              </div>
              {/*end::Person*/}
            </div>
            {/*end::Item*/}
            {/*begin::Item*/}
            <div className="text-center">
              {/*begin::Photo*/}
              <div
                className="octagon mx-auto mb-5 d-flex w-200px h-200px bgi-no-repeat bgi-size-contain bgi-position-center"
                style={{
                  backgroundImage: 'url("assets/media/avatars/300-12.jpg")'
                }}
              />
              {/*end::Photo*/}
              {/*begin::Person*/}
              <div className="mb-0">
                {/*begin::Name*/}
                <a
                  href="#"
                  className="text-dark fw-bold text-hover-primary fs-3"
                >
                  Alice Wayde
                </a>
                {/*end::Name*/}
                {/*begin::Position*/}
                <div className="text-muted fs-6 fw-semibold mt-1">
                  Marketing Manager
                </div>
                {/*begin::Position*/}
              </div>
              {/*end::Person*/}
            </div>
            {/*end::Item*/}
            {/*begin::Item*/}
            <div className="text-center">
              {/*begin::Photo*/}
              <div
                className="octagon mx-auto mb-5 d-flex w-200px h-200px bgi-no-repeat bgi-size-contain bgi-position-center"
                style={{
                  backgroundImage: 'url("assets/media/avatars/300-9.jpg")'
                }}
              />
              {/*end::Photo*/}
              {/*begin::Person*/}
              <div className="mb-0">
                {/*begin::Name*/}
                <a
                  href="#"
                  className="text-dark fw-bold text-hover-primary fs-3"
                >
                  Carles Puyol
                </a>
                {/*end::Name*/}
                {/*begin::Position*/}
                <div className="text-muted fs-6 fw-semibold mt-1">
                  QA Managers
                </div>
                {/*begin::Position*/}
              </div>
              {/*end::Person*/}
            </div>
            {/*end::Item*/}
          </div>
          {/*end::Wrapper*/}
          {/*begin::Button*/}
          <button
            className="btn btn-icon btn-active-color-primary"
            id="kt_team_slider_prev"
          >
            {/*begin::Svg Icon | path: icons/duotune/arrows/arr074.svg*/}
            <span className="svg-icon svg-icon-3x">
              <svg
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.2657 11.4343L15.45 7.25C15.8642 6.83579 15.8642 6.16421 15.45 5.75C15.0358 5.33579 14.3642 5.33579 13.95 5.75L8.40712 11.2929C8.01659 11.6834 8.01659 12.3166 8.40712 12.7071L13.95 18.25C14.3642 18.6642 15.0358 18.6642 15.45 18.25C15.8642 17.8358 15.8642 17.1642 15.45 16.75L11.2657 12.5657C10.9533 12.2533 10.9533 11.7467 11.2657 11.4343Z"
                  fill="currentColor"
                />
              </svg>
            </span>
            {/*end::Svg Icon*/}
          </button>
          {/*end::Button*/}
          {/*begin::Button*/}
          <button
            className="btn btn-icon btn-active-color-primary"
            id="kt_team_slider_next"
          >
            {/*begin::Svg Icon | path: icons/duotune/arrows/arr071.svg*/}
            <span className="svg-icon svg-icon-3x">
              <svg
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.6343 12.5657L8.45001 16.75C8.0358 17.1642 8.0358 17.8358 8.45001 18.25C8.86423 18.6642 9.5358 18.6642 9.95001 18.25L15.4929 12.7071C15.8834 12.3166 15.8834 11.6834 15.4929 11.2929L9.95001 5.75C9.5358 5.33579 8.86423 5.33579 8.45001 5.75C8.0358 6.16421 8.0358 6.83579 8.45001 7.25L12.6343 11.4343C12.9467 11.7467 12.9467 12.2533 12.6343 12.5657Z"
                  fill="currentColor"
                />
              </svg>
            </span>
            {/*end::Svg Icon*/}
          </button>
          {/*end::Button*/}
        </div>
        {/*end::Slider*/}
      </div>
      {/*end::Container*/}
    </div>
    {/*end::Team Section*/}
    {/*begin::Projects Section*/}
    <div className="mb-lg-n15 position-relative z-index-2">
      {/*begin::Container*/}
      <div className="container">
        {/*begin::Card*/}
        <div
          className="card"
          style={{ filter: "drop-shadow(0px 0px 40px rgba(68, 81, 96, 0.08))" }}
        >
          {/*begin::Card body*/}
          <div className="card-body p-lg-20">
            {/*begin::Heading*/}
            <div className="text-center mb-5 mb-lg-10">
              {/*begin::Title*/}
              <h3
                className="fs-2hx text-dark mb-5"
                id="portfolio"
                data-kt-scroll-offset="{default: 100, lg: 250}"
              >
                Our Projects
              </h3>
              {/*end::Title*/}
            </div>
            {/*end::Heading*/}
            {/*begin::Tabs wrapper*/}
            <div className="d-flex flex-center mb-5 mb-lg-15">
              {/*begin::Tabs*/}
              <ul className="nav border-transparent flex-center fs-5 fw-bold">
                <li className="nav-item">
                  <a
                    className="nav-link text-gray-500 text-active-primary px-3 px-lg-6 active"
                    href="#"
                    data-bs-toggle="tab"
                    data-bs-target="#kt_landing_projects_latest"
                  >
                    Latest
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link text-gray-500 text-active-primary px-3 px-lg-6"
                    href="#"
                    data-bs-toggle="tab"
                    data-bs-target="#kt_landing_projects_web_design"
                  >
                    Web Design
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link text-gray-500 text-active-primary px-3 px-lg-6"
                    href="#"
                    data-bs-toggle="tab"
                    data-bs-target="#kt_landing_projects_mobile_apps"
                  >
                    Mobile Apps
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link text-gray-500 text-active-primary px-3 px-lg-6"
                    href="#"
                    data-bs-toggle="tab"
                    data-bs-target="#kt_landing_projects_development"
                  >
                    Development
                  </a>
                </li>
              </ul>
              {/*end::Tabs*/}
            </div>
            {/*end::Tabs wrapper*/}
            {/*begin::Tabs content*/}
            <div className="tab-content">
              {/*begin::Tab pane*/}
              <div
                className="tab-pane fade show active"
                id="kt_landing_projects_latest"
              >
                {/*begin::Row*/}
                <div className="row g-10">
                  {/*begin::Col*/}
                  <div className="col-lg-6">
                    {/*begin::Item*/}
                    <a
                      className="d-block card-rounded overlay h-lg-100"
                      data-fslightbox="lightbox-projects"
                      href="assets/media/stock/600x600/img-23.jpg"
                    >
                      {/*begin::Image*/}
                      <div
                        className="overlay-wrapper bgi-no-repeat bgi-position-center bgi-size-cover card-rounded h-lg-100 min-h-250px"
                        style={{
                          backgroundImage:
                            'url("assets/media/stock/600x600/img-23.jpg")'
                        }}
                      />
                      {/*end::Image*/}
                      {/*begin::Action*/}
                      <div className="overlay-layer card-rounded bg-dark bg-opacity-25">
                        <i className="bi bi-eye-fill fs-3x text-white" />
                      </div>
                      {/*end::Action*/}
                    </a>
                    {/*end::Item*/}
                  </div>
                  {/*end::Col*/}
                  {/*begin::Col*/}
                  <div className="col-lg-6">
                    {/*begin::Row*/}
                    <div className="row g-10 mb-10">
                      {/*begin::Col*/}
                      <div className="col-lg-6">
                        {/*begin::Item*/}
                        <a
                          className="d-block card-rounded overlay"
                          data-fslightbox="lightbox-projects"
                          href="assets/media/stock/600x600/img-22.jpg"
                        >
                          {/*begin::Image*/}
                          <div
                            className="overlay-wrapper bgi-no-repeat bgi-position-center bgi-size-cover card-rounded h-250px"
                            style={{
                              backgroundImage:
                                'url("assets/media/stock/600x600/img-22.jpg")'
                            }}
                          />
                          {/*end::Image*/}
                          {/*begin::Action*/}
                          <div className="overlay-layer card-rounded bg-dark bg-opacity-25">
                            <i className="bi bi-eye-fill fs-3x text-white" />
                          </div>
                          {/*end::Action*/}
                        </a>
                        {/*end::Item*/}
                      </div>
                      {/*end::Col*/}
                      {/*begin::Col*/}
                      <div className="col-lg-6">
                        {/*begin::Item*/}
                        <a
                          className="d-block card-rounded overlay"
                          data-fslightbox="lightbox-projects"
                          href="assets/media/stock/600x600/img-21.jpg"
                        >
                          {/*begin::Image*/}
                          <div
                            className="overlay-wrapper bgi-no-repeat bgi-position-center bgi-size-cover card-rounded h-250px"
                            style={{
                              backgroundImage:
                                'url("assets/media/stock/600x600/img-21.jpg")'
                            }}
                          />
                          {/*end::Image*/}
                          {/*begin::Action*/}
                          <div className="overlay-layer card-rounded bg-dark bg-opacity-25">
                            <i className="bi bi-eye-fill fs-3x text-white" />
                          </div>
                          {/*end::Action*/}
                        </a>
                        {/*end::Item*/}
                      </div>
                      {/*end::Col*/}
                    </div>
                    {/*end::Row*/}
                    {/*begin::Item*/}
                    <a
                      className="d-block card-rounded overlay"
                      data-fslightbox="lightbox-projects"
                      href="assets/media/stock/600x400/img-20.jpg"
                    >
                      {/*begin::Image*/}
                      <div
                        className="overlay-wrapper bgi-no-repeat bgi-position-center bgi-size-cover card-rounded h-250px"
                        style={{
                          backgroundImage:
                            'url("assets/media/stock/600x600/img-20.jpg")'
                        }}
                      />
                      {/*end::Image*/}
                      {/*begin::Action*/}
                      <div className="overlay-layer card-rounded bg-dark bg-opacity-25">
                        <i className="bi bi-eye-fill fs-3x text-white" />
                      </div>
                      {/*end::Action*/}
                    </a>
                    {/*end::Item*/}
                  </div>
                  {/*end::Col*/}
                </div>
                {/*end::Row*/}
              </div>
              {/*end::Tab pane*/}
              {/*begin::Tab pane*/}
              <div
                className="tab-pane fade"
                id="kt_landing_projects_web_design"
              >
                {/*begin::Row*/}
                <div className="row g-10">
                  {/*begin::Col*/}
                  <div className="col-lg-6">
                    {/*begin::Item*/}
                    <a
                      className="d-block card-rounded overlay h-lg-100"
                      data-fslightbox="lightbox-projects"
                      href="assets/media/stock/600x600/img-11.jpg"
                    >
                      {/*begin::Image*/}
                      <div
                        className="overlay-wrapper bgi-no-repeat bgi-position-center bgi-size-cover card-rounded h-lg-100 min-h-250px"
                        style={{
                          backgroundImage:
                            'url("assets/media/stock/600x600/img-11.jpg")'
                        }}
                      />
                      {/*end::Image*/}
                      {/*begin::Action*/}
                      <div className="overlay-layer card-rounded bg-dark bg-opacity-25">
                        <i className="bi bi-eye-fill fs-3x text-white" />
                      </div>
                      {/*end::Action*/}
                    </a>
                    {/*end::Item*/}
                  </div>
                  {/*end::Col*/}
                  {/*begin::Col*/}
                  <div className="col-lg-6">
                    {/*begin::Row*/}
                    <div className="row g-10 mb-10">
                      {/*begin::Col*/}
                      <div className="col-lg-6">
                        {/*begin::Item*/}
                        <a
                          className="d-block card-rounded overlay"
                          data-fslightbox="lightbox-projects"
                          href="assets/media/stock/600x600/img-12.jpg"
                        >
                          {/*begin::Image*/}
                          <div
                            className="overlay-wrapper bgi-no-repeat bgi-position-center bgi-size-cover card-rounded h-250px"
                            style={{
                              backgroundImage:
                                'url("assets/media/stock/600x600/img-12.jpg")'
                            }}
                          />
                          {/*end::Image*/}
                          {/*begin::Action*/}
                          <div className="overlay-layer card-rounded bg-dark bg-opacity-25">
                            <i className="bi bi-eye-fill fs-3x text-white" />
                          </div>
                          {/*end::Action*/}
                        </a>
                        {/*end::Item*/}
                      </div>
                      {/*end::Col*/}
                      {/*begin::Col*/}
                      <div className="col-lg-6">
                        {/*begin::Item*/}
                        <a
                          className="d-block card-rounded overlay"
                          data-fslightbox="lightbox-projects"
                          href="assets/media/stock/600x600/img-21.jpg"
                        >
                          {/*begin::Image*/}
                          <div
                            className="overlay-wrapper bgi-no-repeat bgi-position-center bgi-size-cover card-rounded h-250px"
                            style={{
                              backgroundImage:
                                'url("assets/media/stock/600x600/img-21.jpg")'
                            }}
                          />
                          {/*end::Image*/}
                          {/*begin::Action*/}
                          <div className="overlay-layer card-rounded bg-dark bg-opacity-25">
                            <i className="bi bi-eye-fill fs-3x text-white" />
                          </div>
                          {/*end::Action*/}
                        </a>
                        {/*end::Item*/}
                      </div>
                      {/*end::Col*/}
                    </div>
                    {/*end::Row*/}
                    {/*begin::Item*/}
                    <a
                      className="d-block card-rounded overlay"
                      data-fslightbox="lightbox-projects"
                      href="assets/media/stock/600x400/img-20.jpg"
                    >
                      {/*begin::Image*/}
                      <div
                        className="overlay-wrapper bgi-no-repeat bgi-position-center bgi-size-cover card-rounded h-250px"
                        style={{
                          backgroundImage:
                            'url("assets/media/stock/600x600/img-20.jpg")'
                        }}
                      />
                      {/*end::Image*/}
                      {/*begin::Action*/}
                      <div className="overlay-layer card-rounded bg-dark bg-opacity-25">
                        <i className="bi bi-eye-fill fs-3x text-white" />
                      </div>
                      {/*end::Action*/}
                    </a>
                    {/*end::Item*/}
                  </div>
                  {/*end::Col*/}
                </div>
                {/*end::Row*/}
              </div>
              {/*end::Tab pane*/}
              {/*begin::Tab pane*/}
              <div
                className="tab-pane fade"
                id="kt_landing_projects_mobile_apps"
              >
                {/*begin::Row*/}
                <div className="row g-10">
                  {/*begin::Col*/}
                  <div className="col-lg-6">
                    {/*begin::Row*/}
                    <div className="row g-10 mb-10">
                      {/*begin::Col*/}
                      <div className="col-lg-6">
                        {/*begin::Item*/}
                        <a
                          className="d-block card-rounded overlay"
                          data-fslightbox="lightbox-projects"
                          href="assets/media/stock/600x600/img-16.jpg"
                        >
                          {/*begin::Image*/}
                          <div
                            className="overlay-wrapper bgi-no-repeat bgi-position-center bgi-size-cover card-rounded h-250px"
                            style={{
                              backgroundImage:
                                'url("assets/media/stock/600x600/img-16.jpg")'
                            }}
                          />
                          {/*end::Image*/}
                          {/*begin::Action*/}
                          <div className="overlay-layer card-rounded bg-dark bg-opacity-25">
                            <i className="bi bi-eye-fill fs-3x text-white" />
                          </div>
                          {/*end::Action*/}
                        </a>
                        {/*end::Item*/}
                      </div>
                      {/*end::Col*/}
                      {/*begin::Col*/}
                      <div className="col-lg-6">
                        {/*begin::Item*/}
                        <a
                          className="d-block card-rounded overlay"
                          data-fslightbox="lightbox-projects"
                          href="assets/media/stock/600x600/img-12.jpg"
                        >
                          {/*begin::Image*/}
                          <div
                            className="overlay-wrapper bgi-no-repeat bgi-position-center bgi-size-cover card-rounded h-250px"
                            style={{
                              backgroundImage:
                                'url("assets/media/stock/600x600/img-12.jpg")'
                            }}
                          />
                          {/*end::Image*/}
                          {/*begin::Action*/}
                          <div className="overlay-layer card-rounded bg-dark bg-opacity-25">
                            <i className="bi bi-eye-fill fs-3x text-white" />
                          </div>
                          {/*end::Action*/}
                        </a>
                        {/*end::Item*/}
                      </div>
                      {/*end::Col*/}
                    </div>
                    {/*end::Row*/}
                    {/*begin::Item*/}
                    <a
                      className="d-block card-rounded overlay"
                      data-fslightbox="lightbox-projects"
                      href="assets/media/stock/600x400/img-15.jpg"
                    >
                      {/*begin::Image*/}
                      <div
                        className="overlay-wrapper bgi-no-repeat bgi-position-center bgi-size-cover card-rounded h-250px"
                        style={{
                          backgroundImage:
                            'url("assets/media/stock/600x600/img-15.jpg")'
                        }}
                      />
                      {/*end::Image*/}
                      {/*begin::Action*/}
                      <div className="overlay-layer card-rounded bg-dark bg-opacity-25">
                        <i className="bi bi-eye-fill fs-3x text-white" />
                      </div>
                      {/*end::Action*/}
                    </a>
                    {/*end::Item*/}
                  </div>
                  {/*end::Col*/}
                  {/*begin::Col*/}
                  <div className="col-lg-6">
                    {/*begin::Item*/}
                    <a
                      className="d-block card-rounded overlay h-lg-100"
                      data-fslightbox="lightbox-projects"
                      href="assets/media/stock/600x600/img-23.jpg"
                    >
                      {/*begin::Image*/}
                      <div
                        className="overlay-wrapper bgi-no-repeat bgi-position-center bgi-size-cover card-rounded h-lg-100 min-h-250px"
                        style={{
                          backgroundImage:
                            'url("assets/media/stock/600x600/img-23.jpg")'
                        }}
                      />
                      {/*end::Image*/}
                      {/*begin::Action*/}
                      <div className="overlay-layer card-rounded bg-dark bg-opacity-25">
                        <i className="bi bi-eye-fill fs-3x text-white" />
                      </div>
                      {/*end::Action*/}
                    </a>
                    {/*end::Item*/}
                  </div>
                  {/*end::Col*/}
                </div>
                {/*end::Row*/}
              </div>
              {/*end::Tab pane*/}
              {/*begin::Tab pane*/}
              <div
                className="tab-pane fade"
                id="kt_landing_projects_development"
              >
                {/*begin::Row*/}
                <div className="row g-10">
                  {/*begin::Col*/}
                  <div className="col-lg-6">
                    {/*begin::Item*/}
                    <a
                      className="d-block card-rounded overlay h-lg-100"
                      data-fslightbox="lightbox-projects"
                      href="assets/media/stock/600x600/img-15.jpg"
                    >
                      {/*begin::Image*/}
                      <div
                        className="overlay-wrapper bgi-no-repeat bgi-position-center bgi-size-cover card-rounded h-lg-100 min-h-250px"
                        style={{
                          backgroundImage:
                            'url("assets/media/stock/600x600/img-15.jpg")'
                        }}
                      />
                      {/*end::Image*/}
                      {/*begin::Action*/}
                      <div className="overlay-layer card-rounded bg-dark bg-opacity-25">
                        <i className="bi bi-eye-fill fs-3x text-white" />
                      </div>
                      {/*end::Action*/}
                    </a>
                    {/*end::Item*/}
                  </div>
                  {/*end::Col*/}
                  {/*begin::Col*/}
                  <div className="col-lg-6">
                    {/*begin::Row*/}
                    <div className="row g-10 mb-10">
                      {/*begin::Col*/}
                      <div className="col-lg-6">
                        {/*begin::Item*/}
                        <a
                          className="d-block card-rounded overlay"
                          data-fslightbox="lightbox-projects"
                          href="assets/media/stock/600x600/img-22.jpg"
                        >
                          {/*begin::Image*/}
                          <div
                            className="overlay-wrapper bgi-no-repeat bgi-position-center bgi-size-cover card-rounded h-250px"
                            style={{
                              backgroundImage:
                                'url("assets/media/stock/600x600/img-22.jpg")'
                            }}
                          />
                          {/*end::Image*/}
                          {/*begin::Action*/}
                          <div className="overlay-layer card-rounded bg-dark bg-opacity-25">
                            <i className="bi bi-eye-fill fs-3x text-white" />
                          </div>
                          {/*end::Action*/}
                        </a>
                        {/*end::Item*/}
                      </div>
                      {/*end::Col*/}
                      {/*begin::Col*/}
                      <div className="col-lg-6">
                        {/*begin::Item*/}
                        <a
                          className="d-block card-rounded overlay"
                          data-fslightbox="lightbox-projects"
                          href="assets/media/stock/600x600/img-21.jpg"
                        >
                          {/*begin::Image*/}
                          <div
                            className="overlay-wrapper bgi-no-repeat bgi-position-center bgi-size-cover card-rounded h-250px"
                            style={{
                              backgroundImage:
                                'url("assets/media/stock/600x600/img-21.jpg")'
                            }}
                          />
                          {/*end::Image*/}
                          {/*begin::Action*/}
                          <div className="overlay-layer card-rounded bg-dark bg-opacity-25">
                            <i className="bi bi-eye-fill fs-3x text-white" />
                          </div>
                          {/*end::Action*/}
                        </a>
                        {/*end::Item*/}
                      </div>
                      {/*end::Col*/}
                    </div>
                    {/*end::Row*/}
                    {/*begin::Item*/}
                    <a
                      className="d-block card-rounded overlay"
                      data-fslightbox="lightbox-projects"
                      href="assets/media/stock/600x400/img-14.jpg"
                    >
                      {/*begin::Image*/}
                      <div
                        className="overlay-wrapper bgi-no-repeat bgi-position-center bgi-size-cover card-rounded h-250px"
                        style={{
                          backgroundImage:
                            'url("assets/media/stock/600x600/img-14.jpg")'
                        }}
                      />
                      {/*end::Image*/}
                      {/*begin::Action*/}
                      <div className="overlay-layer card-rounded bg-dark bg-opacity-25">
                        <i className="bi bi-eye-fill fs-3x text-white" />
                      </div>
                      {/*end::Action*/}
                    </a>
                    {/*end::Item*/}
                  </div>
                  {/*end::Col*/}
                </div>
                {/*end::Row*/}
              </div>
              {/*end::Tab pane*/}
            </div>
            {/*end::Tabs content*/}
          </div>
          {/*end::Card body*/}
        </div>
        {/*end::Card*/}
      </div>
      {/*end::Container*/}
    </div>
    {/*end::Projects Section*/}
    {/*begin::Pricing Section*/}
    <div className="mt-sm-n20">
      {/*begin::Curve top*/}
      <div className="landing-curve landing-dark-color">
        <svg
          viewBox="15 -1 1470 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 48C4.93573 47.6644 8.85984 47.3311 12.7725 47H1489.16C1493.1 47.3311 1497.04 47.6644 1501 48V47H1489.16C914.668 -1.34764 587.282 -1.61174 12.7725 47H1V48Z"
            fill="currentColor"
          />
        </svg>
      </div>
      {/*end::Curve top*/}
      {/*begin::Wrapper*/}
      <div className="py-20 landing-dark-bg">
        {/*begin::Container*/}
        <div className="container">
          {/*begin::Plans*/}
          <div className="d-flex flex-column container pt-lg-20">
            {/*begin::Heading*/}
            <div className="mb-13 text-center">
              <h1
                className="fs-2hx fw-bold text-white mb-5"
                id="pricing"
                data-kt-scroll-offset="{default: 100, lg: 150}"
              >
                Clear Pricing Makes it Easy
              </h1>
              <div className="text-gray-600 fw-semibold fs-5">
                Save thousands to millions of bucks by using single tool for
                different
                <br />
                amazing and outstanding cool and great useful admin
              </div>
            </div>
            {/*end::Heading*/}
            {/*begin::Pricing*/}
            <div className="text-center" id="kt_pricing">
              {/*begin::Nav group*/}
              <div
                className="nav-group landing-dark-bg d-inline-flex mb-15"
                data-kt-buttons="true"
                style={{ border: "1px dashed #2B4666" }}
              >
                <a
                  href="#"
                  className="btn btn-color-gray-600 btn-active btn-active-success px-6 py-3 me-2 active"
                  data-kt-plan="month"
                >
                  Monthly
                </a>
                <a
                  href="#"
                  className="btn btn-color-gray-600 btn-active btn-active-success px-6 py-3"
                  data-kt-plan="annual"
                >
                  Annual
                </a>
              </div>
              {/*end::Nav group*/}
              {/*begin::Row*/}
              <div className="row g-10">
                {/*begin::Col*/}
                <div className="col-xl-4">
                  <div className="d-flex h-100 align-items-center">
                    {/*begin::Option*/}
                    <div className="w-100 d-flex flex-column flex-center rounded-3 bg-body py-15 px-10">
                      {/*begin::Heading*/}
                      <div className="mb-7 text-center">
                        {/*begin::Title*/}
                        <h1 className="text-dark mb-5 fw-boldest">Startup</h1>
                        {/*end::Title*/}
                        {/*begin::Description*/}
                        <div className="text-gray-400 fw-semibold mb-5">
                          Best Settings for Startups
                        </div>
                        {/*end::Description*/}
                        {/*begin::Price*/}
                        <div className="text-center">
                          <span className="mb-2 text-primary">$</span>
                          <span
                            className="fs-3x fw-bold text-primary"
                            data-kt-plan-price-month={99}
                            data-kt-plan-price-annual={999}
                          >
                            99
                          </span>
                          <span
                            className="fs-7 fw-semibold opacity-50"
                            data-kt-plan-price-month="Mon"
                            data-kt-plan-price-annual="Ann"
                          >
                            / Mon
                          </span>
                        </div>
                        {/*end::Price*/}
                      </div>
                      {/*end::Heading*/}
                      {/*begin::Features*/}
                      <div className="w-100 mb-10">
                        {/*begin::Item*/}
                        <div className="d-flex flex-stack mb-5">
                          <span className="fw-semibold fs-6 text-gray-800 text-start pe-3">
                            Up to 10 Active Users
                          </span>
                          {/*begin::Svg Icon | path: icons/duotune/general/gen043.svg*/}
                          <span className="svg-icon svg-icon-1 svg-icon-success">
                            <svg
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <rect
                                opacity="0.3"
                                x={2}
                                y={2}
                                width={20}
                                height={20}
                                rx={10}
                                fill="currentColor"
                              />
                              <path
                                d="M10.4343 12.4343L8.75 10.75C8.33579 10.3358 7.66421 10.3358 7.25 10.75C6.83579 11.1642 6.83579 11.8358 7.25 12.25L10.2929 15.2929C10.6834 15.6834 11.3166 15.6834 11.7071 15.2929L17.25 9.75C17.6642 9.33579 17.6642 8.66421 17.25 8.25C16.8358 7.83579 16.1642 7.83579 15.75 8.25L11.5657 12.4343C11.2533 12.7467 10.7467 12.7467 10.4343 12.4343Z"
                                fill="currentColor"
                              />
                            </svg>
                          </span>
                          {/*end::Svg Icon*/}
                        </div>
                        {/*end::Item*/}
                        {/*begin::Item*/}
                        <div className="d-flex flex-stack mb-5">
                          <span className="fw-semibold fs-6 text-gray-800 text-start pe-3">
                            Up to 30 Project Integrations
                          </span>
                          {/*begin::Svg Icon | path: icons/duotune/general/gen043.svg*/}
                          <span className="svg-icon svg-icon-1 svg-icon-success">
                            <svg
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <rect
                                opacity="0.3"
                                x={2}
                                y={2}
                                width={20}
                                height={20}
                                rx={10}
                                fill="currentColor"
                              />
                              <path
                                d="M10.4343 12.4343L8.75 10.75C8.33579 10.3358 7.66421 10.3358 7.25 10.75C6.83579 11.1642 6.83579 11.8358 7.25 12.25L10.2929 15.2929C10.6834 15.6834 11.3166 15.6834 11.7071 15.2929L17.25 9.75C17.6642 9.33579 17.6642 8.66421 17.25 8.25C16.8358 7.83579 16.1642 7.83579 15.75 8.25L11.5657 12.4343C11.2533 12.7467 10.7467 12.7467 10.4343 12.4343Z"
                                fill="currentColor"
                              />
                            </svg>
                          </span>
                          {/*end::Svg Icon*/}
                        </div>
                        {/*end::Item*/}
                        {/*begin::Item*/}
                        <div className="d-flex flex-stack mb-5">
                          <span className="fw-semibold fs-6 text-gray-800">
                            Keen Analytics Platform
                          </span>
                          {/*begin::Svg Icon | path: icons/duotune/general/gen040.svg*/}
                          <span className="svg-icon svg-icon-1">
                            <svg
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <rect
                                opacity="0.3"
                                x={2}
                                y={2}
                                width={20}
                                height={20}
                                rx={10}
                                fill="currentColor"
                              />
                              <rect
                                x={7}
                                y="15.3137"
                                width={12}
                                height={2}
                                rx={1}
                                transform="rotate(-45 7 15.3137)"
                                fill="currentColor"
                              />
                              <rect
                                x="8.41422"
                                y={7}
                                width={12}
                                height={2}
                                rx={1}
                                transform="rotate(45 8.41422 7)"
                                fill="currentColor"
                              />
                            </svg>
                          </span>
                          {/*end::Svg Icon*/}
                        </div>
                        {/*end::Item*/}
                        {/*begin::Item*/}
                        <div className="d-flex flex-stack mb-5">
                          <span className="fw-semibold fs-6 text-gray-800">
                            Targets Timelines &amp; Files
                          </span>
                          {/*begin::Svg Icon | path: icons/duotune/general/gen040.svg*/}
                          <span className="svg-icon svg-icon-1">
                            <svg
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <rect
                                opacity="0.3"
                                x={2}
                                y={2}
                                width={20}
                                height={20}
                                rx={10}
                                fill="currentColor"
                              />
                              <rect
                                x={7}
                                y="15.3137"
                                width={12}
                                height={2}
                                rx={1}
                                transform="rotate(-45 7 15.3137)"
                                fill="currentColor"
                              />
                              <rect
                                x="8.41422"
                                y={7}
                                width={12}
                                height={2}
                                rx={1}
                                transform="rotate(45 8.41422 7)"
                                fill="currentColor"
                              />
                            </svg>
                          </span>
                          {/*end::Svg Icon*/}
                        </div>
                        {/*end::Item*/}
                        {/*begin::Item*/}
                        <div className="d-flex flex-stack">
                          <span className="fw-semibold fs-6 text-gray-800">
                            Unlimited Projects
                          </span>
                          {/*begin::Svg Icon | path: icons/duotune/general/gen040.svg*/}
                          <span className="svg-icon svg-icon-1">
                            <svg
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <rect
                                opacity="0.3"
                                x={2}
                                y={2}
                                width={20}
                                height={20}
                                rx={10}
                                fill="currentColor"
                              />
                              <rect
                                x={7}
                                y="15.3137"
                                width={12}
                                height={2}
                                rx={1}
                                transform="rotate(-45 7 15.3137)"
                                fill="currentColor"
                              />
                              <rect
                                x="8.41422"
                                y={7}
                                width={12}
                                height={2}
                                rx={1}
                                transform="rotate(45 8.41422 7)"
                                fill="currentColor"
                              />
                            </svg>
                          </span>
                          {/*end::Svg Icon*/}
                        </div>
                        {/*end::Item*/}
                      </div>
                      {/*end::Features*/}
                      {/*begin::Select*/}
                      <a href="#" className="btn btn-primary">
                        Select
                      </a>
                      {/*end::Select*/}
                    </div>
                    {/*end::Option*/}
                  </div>
                </div>
                {/*end::Col*/}
                {/*begin::Col*/}
                <div className="col-xl-4">
                  <div className="d-flex h-100 align-items-center">
                    {/*begin::Option*/}
                    <div className="w-100 d-flex flex-column flex-center rounded-3 bg-primary py-20 px-10">
                      {/*begin::Heading*/}
                      <div className="mb-7 text-center">
                        {/*begin::Title*/}
                        <h1 className="text-white mb-5 fw-boldest">Business</h1>
                        {/*end::Title*/}
                        {/*begin::Description*/}
                        <div className="text-white opacity-75 fw-semibold mb-5">
                          Best Settings for Business
                        </div>
                        {/*end::Description*/}
                        {/*begin::Price*/}
                        <div className="text-center">
                          <span className="mb-2 text-white">$</span>
                          <span
                            className="fs-3x fw-bold text-white"
                            data-kt-plan-price-month={199}
                            data-kt-plan-price-annual={1999}
                          >
                            199
                          </span>
                          <span
                            className="fs-7 fw-semibold text-white opacity-75"
                            data-kt-plan-price-month="Mon"
                            data-kt-plan-price-annual="Ann"
                          >
                            / Mon
                          </span>
                        </div>
                        {/*end::Price*/}
                      </div>
                      {/*end::Heading*/}
                      {/*begin::Features*/}
                      <div className="w-100 mb-10">
                        {/*begin::Item*/}
                        <div className="d-flex flex-stack mb-5">
                          <span className="fw-semibold fs-6 text-white opacity-75 text-start pe-3">
                            Up to 10 Active Users
                          </span>
                          {/*begin::Svg Icon | path: icons/duotune/general/gen043.svg*/}
                          <span className="svg-icon svg-icon-1 svg-icon-white">
                            <svg
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <rect
                                opacity="0.3"
                                x={2}
                                y={2}
                                width={20}
                                height={20}
                                rx={10}
                                fill="currentColor"
                              />
                              <path
                                d="M10.4343 12.4343L8.75 10.75C8.33579 10.3358 7.66421 10.3358 7.25 10.75C6.83579 11.1642 6.83579 11.8358 7.25 12.25L10.2929 15.2929C10.6834 15.6834 11.3166 15.6834 11.7071 15.2929L17.25 9.75C17.6642 9.33579 17.6642 8.66421 17.25 8.25C16.8358 7.83579 16.1642 7.83579 15.75 8.25L11.5657 12.4343C11.2533 12.7467 10.7467 12.7467 10.4343 12.4343Z"
                                fill="currentColor"
                              />
                            </svg>
                          </span>
                          {/*end::Svg Icon*/}
                        </div>
                        {/*end::Item*/}
                        {/*begin::Item*/}
                        <div className="d-flex flex-stack mb-5">
                          <span className="fw-semibold fs-6 text-white opacity-75 text-start pe-3">
                            Up to 30 Project Integrations
                          </span>
                          {/*begin::Svg Icon | path: icons/duotune/general/gen043.svg*/}
                          <span className="svg-icon svg-icon-1 svg-icon-white">
                            <svg
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <rect
                                opacity="0.3"
                                x={2}
                                y={2}
                                width={20}
                                height={20}
                                rx={10}
                                fill="currentColor"
                              />
                              <path
                                d="M10.4343 12.4343L8.75 10.75C8.33579 10.3358 7.66421 10.3358 7.25 10.75C6.83579 11.1642 6.83579 11.8358 7.25 12.25L10.2929 15.2929C10.6834 15.6834 11.3166 15.6834 11.7071 15.2929L17.25 9.75C17.6642 9.33579 17.6642 8.66421 17.25 8.25C16.8358 7.83579 16.1642 7.83579 15.75 8.25L11.5657 12.4343C11.2533 12.7467 10.7467 12.7467 10.4343 12.4343Z"
                                fill="currentColor"
                              />
                            </svg>
                          </span>
                          {/*end::Svg Icon*/}
                        </div>
                        {/*end::Item*/}
                        {/*begin::Item*/}
                        <div className="d-flex flex-stack mb-5">
                          <span className="fw-semibold fs-6 text-white opacity-75 text-start pe-3">
                            Keen Analytics Platform
                          </span>
                          {/*begin::Svg Icon | path: icons/duotune/general/gen043.svg*/}
                          <span className="svg-icon svg-icon-1 svg-icon-white">
                            <svg
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <rect
                                opacity="0.3"
                                x={2}
                                y={2}
                                width={20}
                                height={20}
                                rx={10}
                                fill="currentColor"
                              />
                              <path
                                d="M10.4343 12.4343L8.75 10.75C8.33579 10.3358 7.66421 10.3358 7.25 10.75C6.83579 11.1642 6.83579 11.8358 7.25 12.25L10.2929 15.2929C10.6834 15.6834 11.3166 15.6834 11.7071 15.2929L17.25 9.75C17.6642 9.33579 17.6642 8.66421 17.25 8.25C16.8358 7.83579 16.1642 7.83579 15.75 8.25L11.5657 12.4343C11.2533 12.7467 10.7467 12.7467 10.4343 12.4343Z"
                                fill="currentColor"
                              />
                            </svg>
                          </span>
                          {/*end::Svg Icon*/}
                        </div>
                        {/*end::Item*/}
                        {/*begin::Item*/}
                        <div className="d-flex flex-stack mb-5">
                          <span className="fw-semibold fs-6 text-white opacity-75 text-start pe-3">
                            Targets Timelines &amp; Files
                          </span>
                          {/*begin::Svg Icon | path: icons/duotune/general/gen043.svg*/}
                          <span className="svg-icon svg-icon-1 svg-icon-white">
                            <svg
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <rect
                                opacity="0.3"
                                x={2}
                                y={2}
                                width={20}
                                height={20}
                                rx={10}
                                fill="currentColor"
                              />
                              <path
                                d="M10.4343 12.4343L8.75 10.75C8.33579 10.3358 7.66421 10.3358 7.25 10.75C6.83579 11.1642 6.83579 11.8358 7.25 12.25L10.2929 15.2929C10.6834 15.6834 11.3166 15.6834 11.7071 15.2929L17.25 9.75C17.6642 9.33579 17.6642 8.66421 17.25 8.25C16.8358 7.83579 16.1642 7.83579 15.75 8.25L11.5657 12.4343C11.2533 12.7467 10.7467 12.7467 10.4343 12.4343Z"
                                fill="currentColor"
                              />
                            </svg>
                          </span>
                          {/*end::Svg Icon*/}
                        </div>
                        {/*end::Item*/}
                        {/*begin::Item*/}
                        <div className="d-flex flex-stack">
                          <span className="fw-semibold fs-6 text-white opacity-75">
                            Unlimited Projects
                          </span>
                          {/*begin::Svg Icon | path: icons/duotune/general/gen040.svg*/}
                          <span className="svg-icon svg-icon-1 svg-icon-white">
                            <svg
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <rect
                                opacity="0.3"
                                x={2}
                                y={2}
                                width={20}
                                height={20}
                                rx={10}
                                fill="currentColor"
                              />
                              <rect
                                x={7}
                                y="15.3137"
                                width={12}
                                height={2}
                                rx={1}
                                transform="rotate(-45 7 15.3137)"
                                fill="currentColor"
                              />
                              <rect
                                x="8.41422"
                                y={7}
                                width={12}
                                height={2}
                                rx={1}
                                transform="rotate(45 8.41422 7)"
                                fill="currentColor"
                              />
                            </svg>
                          </span>
                          {/*end::Svg Icon*/}
                        </div>
                        {/*end::Item*/}
                      </div>
                      {/*end::Features*/}
                      {/*begin::Select*/}
                      <a
                        href="#"
                        className="btn btn-color-primary btn-active-light-primary btn-light"
                      >
                        Select
                      </a>
                      {/*end::Select*/}
                    </div>
                    {/*end::Option*/}
                  </div>
                </div>
                {/*end::Col*/}
                {/*begin::Col*/}
                <div className="col-xl-4">
                  <div className="d-flex h-100 align-items-center">
                    {/*begin::Option*/}
                    <div className="w-100 d-flex flex-column flex-center rounded-3 bg-body py-15 px-10">
                      {/*begin::Heading*/}
                      <div className="mb-7 text-center">
                        {/*begin::Title*/}
                        <h1 className="text-dark mb-5 fw-boldest">
                          Enterprise
                        </h1>
                        {/*end::Title*/}
                        {/*begin::Description*/}
                        <div className="text-gray-400 fw-semibold mb-5">
                          Best Settings for Enterprise
                        </div>
                        {/*end::Description*/}
                        {/*begin::Price*/}
                        <div className="text-center">
                          <span className="mb-2 text-primary">$</span>
                          <span
                            className="fs-3x fw-bold text-primary"
                            data-kt-plan-price-month={999}
                            data-kt-plan-price-annual={9999}
                          >
                            999
                          </span>
                          <span
                            className="fs-7 fw-semibold opacity-50"
                            data-kt-plan-price-month="Mon"
                            data-kt-plan-price-annual="Ann"
                          >
                            / Mon
                          </span>
                        </div>
                        {/*end::Price*/}
                      </div>
                      {/*end::Heading*/}
                      {/*begin::Features*/}
                      <div className="w-100 mb-10">
                        {/*begin::Item*/}
                        <div className="d-flex flex-stack mb-5">
                          <span className="fw-semibold fs-6 text-gray-800 text-start pe-3">
                            Up to 10 Active Users
                          </span>
                          {/*begin::Svg Icon | path: icons/duotune/general/gen043.svg*/}
                          <span className="svg-icon svg-icon-1 svg-icon-success">
                            <svg
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <rect
                                opacity="0.3"
                                x={2}
                                y={2}
                                width={20}
                                height={20}
                                rx={10}
                                fill="currentColor"
                              />
                              <path
                                d="M10.4343 12.4343L8.75 10.75C8.33579 10.3358 7.66421 10.3358 7.25 10.75C6.83579 11.1642 6.83579 11.8358 7.25 12.25L10.2929 15.2929C10.6834 15.6834 11.3166 15.6834 11.7071 15.2929L17.25 9.75C17.6642 9.33579 17.6642 8.66421 17.25 8.25C16.8358 7.83579 16.1642 7.83579 15.75 8.25L11.5657 12.4343C11.2533 12.7467 10.7467 12.7467 10.4343 12.4343Z"
                                fill="currentColor"
                              />
                            </svg>
                          </span>
                          {/*end::Svg Icon*/}
                        </div>
                        {/*end::Item*/}
                        {/*begin::Item*/}
                        <div className="d-flex flex-stack mb-5">
                          <span className="fw-semibold fs-6 text-gray-800 text-start pe-3">
                            Up to 30 Project Integrations
                          </span>
                          {/*begin::Svg Icon | path: icons/duotune/general/gen043.svg*/}
                          <span className="svg-icon svg-icon-1 svg-icon-success">
                            <svg
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <rect
                                opacity="0.3"
                                x={2}
                                y={2}
                                width={20}
                                height={20}
                                rx={10}
                                fill="currentColor"
                              />
                              <path
                                d="M10.4343 12.4343L8.75 10.75C8.33579 10.3358 7.66421 10.3358 7.25 10.75C6.83579 11.1642 6.83579 11.8358 7.25 12.25L10.2929 15.2929C10.6834 15.6834 11.3166 15.6834 11.7071 15.2929L17.25 9.75C17.6642 9.33579 17.6642 8.66421 17.25 8.25C16.8358 7.83579 16.1642 7.83579 15.75 8.25L11.5657 12.4343C11.2533 12.7467 10.7467 12.7467 10.4343 12.4343Z"
                                fill="currentColor"
                              />
                            </svg>
                          </span>
                          {/*end::Svg Icon*/}
                        </div>
                        {/*end::Item*/}
                        {/*begin::Item*/}
                        <div className="d-flex flex-stack mb-5">
                          <span className="fw-semibold fs-6 text-gray-800 text-start pe-3">
                            Keen Analytics Platform
                          </span>
                          {/*begin::Svg Icon | path: icons/duotune/general/gen043.svg*/}
                          <span className="svg-icon svg-icon-1 svg-icon-success">
                            <svg
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <rect
                                opacity="0.3"
                                x={2}
                                y={2}
                                width={20}
                                height={20}
                                rx={10}
                                fill="currentColor"
                              />
                              <path
                                d="M10.4343 12.4343L8.75 10.75C8.33579 10.3358 7.66421 10.3358 7.25 10.75C6.83579 11.1642 6.83579 11.8358 7.25 12.25L10.2929 15.2929C10.6834 15.6834 11.3166 15.6834 11.7071 15.2929L17.25 9.75C17.6642 9.33579 17.6642 8.66421 17.25 8.25C16.8358 7.83579 16.1642 7.83579 15.75 8.25L11.5657 12.4343C11.2533 12.7467 10.7467 12.7467 10.4343 12.4343Z"
                                fill="currentColor"
                              />
                            </svg>
                          </span>
                          {/*end::Svg Icon*/}
                        </div>
                        {/*end::Item*/}
                        {/*begin::Item*/}
                        <div className="d-flex flex-stack mb-5">
                          <span className="fw-semibold fs-6 text-gray-800 text-start pe-3">
                            Targets Timelines &amp; Files
                          </span>
                          {/*begin::Svg Icon | path: icons/duotune/general/gen043.svg*/}
                          <span className="svg-icon svg-icon-1 svg-icon-success">
                            <svg
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <rect
                                opacity="0.3"
                                x={2}
                                y={2}
                                width={20}
                                height={20}
                                rx={10}
                                fill="currentColor"
                              />
                              <path
                                d="M10.4343 12.4343L8.75 10.75C8.33579 10.3358 7.66421 10.3358 7.25 10.75C6.83579 11.1642 6.83579 11.8358 7.25 12.25L10.2929 15.2929C10.6834 15.6834 11.3166 15.6834 11.7071 15.2929L17.25 9.75C17.6642 9.33579 17.6642 8.66421 17.25 8.25C16.8358 7.83579 16.1642 7.83579 15.75 8.25L11.5657 12.4343C11.2533 12.7467 10.7467 12.7467 10.4343 12.4343Z"
                                fill="currentColor"
                              />
                            </svg>
                          </span>
                          {/*end::Svg Icon*/}
                        </div>
                        {/*end::Item*/}
                        {/*begin::Item*/}
                        <div className="d-flex flex-stack">
                          <span className="fw-semibold fs-6 text-gray-800 text-start pe-3">
                            Unlimited Projects
                          </span>
                          {/*begin::Svg Icon | path: icons/duotune/general/gen043.svg*/}
                          <span className="svg-icon svg-icon-1 svg-icon-success">
                            <svg
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <rect
                                opacity="0.3"
                                x={2}
                                y={2}
                                width={20}
                                height={20}
                                rx={10}
                                fill="currentColor"
                              />
                              <path
                                d="M10.4343 12.4343L8.75 10.75C8.33579 10.3358 7.66421 10.3358 7.25 10.75C6.83579 11.1642 6.83579 11.8358 7.25 12.25L10.2929 15.2929C10.6834 15.6834 11.3166 15.6834 11.7071 15.2929L17.25 9.75C17.6642 9.33579 17.6642 8.66421 17.25 8.25C16.8358 7.83579 16.1642 7.83579 15.75 8.25L11.5657 12.4343C11.2533 12.7467 10.7467 12.7467 10.4343 12.4343Z"
                                fill="currentColor"
                              />
                            </svg>
                          </span>
                          {/*end::Svg Icon*/}
                        </div>
                        {/*end::Item*/}
                      </div>
                      {/*end::Features*/}
                      {/*begin::Select*/}
                      <a href="#" className="btn btn-primary">
                        Select
                      </a>
                      {/*end::Select*/}
                    </div>
                    {/*end::Option*/}
                  </div>
                </div>
                {/*end::Col*/}
              </div>
              {/*end::Row*/}
            </div>
            {/*end::Pricing*/}
          </div>
          {/*end::Plans*/}
        </div>
        {/*end::Container*/}
      </div>
      {/*end::Wrapper*/}
      {/*begin::Curve bottom*/}
      <div className="landing-curve landing-dark-color">
        <svg
          viewBox="15 12 1470 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 11C3.93573 11.3356 7.85984 11.6689 11.7725 12H1488.16C1492.1 11.6689 1496.04 11.3356 1500 11V12H1488.16C913.668 60.3476 586.282 60.6117 11.7725 12H0V11Z"
            fill="currentColor"
          />
        </svg>
      </div>
      {/*end::Curve bottom*/}
    </div>
    {/*end::Pricing Section*/}
    {/*begin::Testimonials Section*/}
    <div className="mt-20 mb-n20 position-relative z-index-2">
      {/*begin::Container*/}
      <div className="container">
        {/*begin::Heading*/}
        <div className="text-center mb-17">
          {/*begin::Title*/}
          <h3
            className="fs-2hx text-dark mb-5"
            id="clients"
            data-kt-scroll-offset="{default: 125, lg: 150}"
          >
            What Our Clients Say
          </h3>
          {/*end::Title*/}
          {/*begin::Description*/}
          <div className="fs-5 text-muted fw-bold">
            Save thousands to millions of bucks by using single tool
            <br />
            for different amazing and great useful admin
          </div>
          {/*end::Description*/}
        </div>
        {/*end::Heading*/}
        {/*begin::Row*/}
        <div className="row g-lg-10 mb-10 mb-lg-20">
          {/*begin::Col*/}
          <div className="col-lg-4">
            {/*begin::Testimonial*/}
            <div className="d-flex flex-column justify-content-between h-lg-100 px-10 px-lg-0 pe-lg-10 mb-15 mb-lg-0">
              {/*begin::Wrapper*/}
              <div className="mb-7">
                {/*begin::Rating*/}
                <div className="rating mb-6">
                  <div className="rating-label me-2 checked">
                    <i className="bi bi-star-fill fs-5" />
                  </div>
                  <div className="rating-label me-2 checked">
                    <i className="bi bi-star-fill fs-5" />
                  </div>
                  <div className="rating-label me-2 checked">
                    <i className="bi bi-star-fill fs-5" />
                  </div>
                  <div className="rating-label me-2 checked">
                    <i className="bi bi-star-fill fs-5" />
                  </div>
                  <div className="rating-label me-2 checked">
                    <i className="bi bi-star-fill fs-5" />
                  </div>
                </div>
                {/*end::Rating*/}
                {/*begin::Title*/}
                <div className="fs-2 fw-bold text-dark mb-3">
                  This is by far the cleanest template
                  <br />
                  and the most well structured
                </div>
                {/*end::Title*/}
                {/*begin::Feedback*/}
                <div className="text-gray-500 fw-semibold fs-4">
                  The most well thought out design theme I have ever used. The
                  codes are up to tandard. The css styles are very clean. In
                  fact the cleanest and the most up to standard I have ever
                  seen.
                </div>
                {/*end::Feedback*/}
              </div>
              {/*end::Wrapper*/}
              {/*begin::Author*/}
              <div className="d-flex align-items-center">
                {/*begin::Avatar*/}
                <div className="symbol symbol-circle symbol-50px me-5">
                  <img
                    src="assets/media/avatars/300-1.jpg"
                    className=""
                    alt=""
                  />
                </div>
                {/*end::Avatar*/}
                {/*begin::Name*/}
                <div className="flex-grow-1">
                  <a
                    href="#"
                    className="text-dark fw-bold text-hover-primary fs-6"
                  >
                    Paul Miles
                  </a>
                  <span className="text-muted d-block fw-bold">
                    Development Lead
                  </span>
                </div>
                {/*end::Name*/}
              </div>
              {/*end::Author*/}
            </div>
            {/*end::Testimonial*/}
          </div>
          {/*end::Col*/}
          {/*begin::Col*/}
          <div className="col-lg-4">
            {/*begin::Testimonial*/}
            <div className="d-flex flex-column justify-content-between h-lg-100 px-10 px-lg-0 pe-lg-10 mb-15 mb-lg-0">
              {/*begin::Wrapper*/}
              <div className="mb-7">
                {/*begin::Rating*/}
                <div className="rating mb-6">
                  <div className="rating-label me-2 checked">
                    <i className="bi bi-star-fill fs-5" />
                  </div>
                  <div className="rating-label me-2 checked">
                    <i className="bi bi-star-fill fs-5" />
                  </div>
                  <div className="rating-label me-2 checked">
                    <i className="bi bi-star-fill fs-5" />
                  </div>
                  <div className="rating-label me-2 checked">
                    <i className="bi bi-star-fill fs-5" />
                  </div>
                  <div className="rating-label me-2 checked">
                    <i className="bi bi-star-fill fs-5" />
                  </div>
                </div>
                {/*end::Rating*/}
                {/*begin::Title*/}
                <div className="fs-2 fw-bold text-dark mb-3">
                  This is by far the cleanest template
                  <br />
                  and the most well structured
                </div>
                {/*end::Title*/}
                {/*begin::Feedback*/}
                <div className="text-gray-500 fw-semibold fs-4">
                  The most well thought out design theme I have ever used. The
                  codes are up to tandard. The css styles are very clean. In
                  fact the cleanest and the most up to standard I have ever
                  seen.
                </div>
                {/*end::Feedback*/}
              </div>
              {/*end::Wrapper*/}
              {/*begin::Author*/}
              <div className="d-flex align-items-center">
                {/*begin::Avatar*/}
                <div className="symbol symbol-circle symbol-50px me-5">
                  <img
                    src="assets/media/avatars/300-2.jpg"
                    className=""
                    alt=""
                  />
                </div>
                {/*end::Avatar*/}
                {/*begin::Name*/}
                <div className="flex-grow-1">
                  <a
                    href="#"
                    className="text-dark fw-bold text-hover-primary fs-6"
                  >
                    Janya Clebert
                  </a>
                  <span className="text-muted d-block fw-bold">
                    Development Lead
                  </span>
                </div>
                {/*end::Name*/}
              </div>
              {/*end::Author*/}
            </div>
            {/*end::Testimonial*/}
          </div>
          {/*end::Col*/}
          {/*begin::Col*/}
          <div className="col-lg-4">
            {/*begin::Testimonial*/}
            <div className="d-flex flex-column justify-content-between h-lg-100 px-10 px-lg-0 pe-lg-10 mb-15 mb-lg-0">
              {/*begin::Wrapper*/}
              <div className="mb-7">
                {/*begin::Rating*/}
                <div className="rating mb-6">
                  <div className="rating-label me-2 checked">
                    <i className="bi bi-star-fill fs-5" />
                  </div>
                  <div className="rating-label me-2 checked">
                    <i className="bi bi-star-fill fs-5" />
                  </div>
                  <div className="rating-label me-2 checked">
                    <i className="bi bi-star-fill fs-5" />
                  </div>
                  <div className="rating-label me-2 checked">
                    <i className="bi bi-star-fill fs-5" />
                  </div>
                  <div className="rating-label me-2 checked">
                    <i className="bi bi-star-fill fs-5" />
                  </div>
                </div>
                {/*end::Rating*/}
                {/*begin::Title*/}
                <div className="fs-2 fw-bold text-dark mb-3">
                  This is by far the cleanest template
                  <br />
                  and the most well structured
                </div>
                {/*end::Title*/}
                {/*begin::Feedback*/}
                <div className="text-gray-500 fw-semibold fs-4">
                  The most well thought out design theme I have ever used. The
                  codes are up to tandard. The css styles are very clean. In
                  fact the cleanest and the most up to standard I have ever
                  seen.
                </div>
                {/*end::Feedback*/}
              </div>
              {/*end::Wrapper*/}
              {/*begin::Author*/}
              <div className="d-flex align-items-center">
                {/*begin::Avatar*/}
                <div className="symbol symbol-circle symbol-50px me-5">
                  <img
                    src="assets/media/avatars/300-16.jpg"
                    className=""
                    alt=""
                  />
                </div>
                {/*end::Avatar*/}
                {/*begin::Name*/}
                <div className="flex-grow-1">
                  <a
                    href="#"
                    className="text-dark fw-bold text-hover-primary fs-6"
                  >
                    Steave Brown
                  </a>
                  <span className="text-muted d-block fw-bold">
                    Development Lead
                  </span>
                </div>
                {/*end::Name*/}
              </div>
              {/*end::Author*/}
            </div>
            {/*end::Testimonial*/}
          </div>
          {/*end::Col*/}
        </div>
        {/*end::Row*/}
        {/*begin::Highlight*/}
        <div
          className="d-flex flex-stack flex-wrap flex-md-nowrap card-rounded shadow p-8 p-lg-12 mb-n5 mb-lg-n13"
          style={{
            background: "linear-gradient(90deg, #20AA3E 0%, #03A588 100%)"
          }}
        >
          {/*begin::Content*/}
          <div className="my-2 me-5">
            {/*begin::Title*/}
            <div className="fs-1 fs-lg-2qx fw-bold text-white mb-2">
              Start With Metronic Today,
              <span className="fw-normal">Speed Up Development!</span>
            </div>
            {/*end::Title*/}
            {/*begin::Description*/}
            <div className="fs-6 fs-lg-5 text-white fw-semibold opacity-75">
              Join over 100,000 Professionals Community to Stay Ahead
            </div>
            {/*end::Description*/}
          </div>
          {/*end::Content*/}
          {/*begin::Link*/}
          <a
            href="https://1.envato.market/EA4JP"
            className="btn btn-lg btn-outline border-2 btn-outline-white flex-shrink-0 my-2"
          >
            Purchase on Themeforest
          </a>
          {/*end::Link*/}
        </div>
        {/*end::Highlight*/}
      </div>
      {/*end::Container*/}
    </div>
    {/*end::Testimonials Section*/}
    {/*begin::Footer Section*/}
    <div className="mb-0">
      {/*begin::Curve top*/}
      <div className="landing-curve landing-dark-color">
        <svg
          viewBox="15 -1 1470 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 48C4.93573 47.6644 8.85984 47.3311 12.7725 47H1489.16C1493.1 47.3311 1497.04 47.6644 1501 48V47H1489.16C914.668 -1.34764 587.282 -1.61174 12.7725 47H1V48Z"
            fill="currentColor"
          />
        </svg>
      </div>
      {/*end::Curve top*/}
      {/*begin::Wrapper*/}
      <div className="landing-dark-bg pt-20">
        {/*begin::Container*/}
        <div className="container">
          {/*begin::Row*/}
          <div className="row py-10 py-lg-20">
            {/*begin::Col*/}
            <div className="col-lg-6 pe-lg-16 mb-10 mb-lg-0">
              {/*begin::Block*/}
              <div className="rounded landing-dark-border p-9 mb-10">
                {/*begin::Title*/}
                <h2 className="text-white">Would you need a Custom License?</h2>
                {/*end::Title*/}
                {/*begin::Text*/}
                <span className="fw-normal fs-4 text-gray-700">
                  Email us to
                  <a
                    href="https://keenthemes.com/support"
                    className="text-white opacity-50 text-hover-primary"
                  >
                    support@keenthemes.com
                  </a>
                </span>
                {/*end::Text*/}
              </div>
              {/*end::Block*/}
              {/*begin::Block*/}
              <div className="rounded landing-dark-border p-9">
                {/*begin::Title*/}
                <h2 className="text-white">How About a Custom Project?</h2>
                {/*end::Title*/}
                {/*begin::Text*/}
                <span className="fw-normal fs-4 text-gray-700">
                  Use Our Custom Development Service.
                  <a
                    href="../../demo7/dist/pages/user-profile/overview.html"
                    className="text-white opacity-50 text-hover-primary"
                  >
                    Click to Get a Quote
                  </a>
                </span>
                {/*end::Text*/}
              </div>
              {/*end::Block*/}
            </div>
            {/*end::Col*/}
            {/*begin::Col*/}
            <div className="col-lg-6 ps-lg-16">
              {/*begin::Navs*/}
              <div className="d-flex justify-content-center">
                {/*begin::Links*/}
                <div className="d-flex fw-semibold flex-column me-20">
                  {/*begin::Subtitle*/}
                  <h4 className="fw-bold text-gray-400 mb-6">
                    More for Metronic
                  </h4>
                  {/*end::Subtitle*/}
                  {/*begin::Link*/}
                  <a
                    href="https://keenthemes.com/faqs"
                    className="text-white opacity-50 text-hover-primary fs-5 mb-6"
                  >
                    FAQ
                  </a>
                  {/*end::Link*/}
                  {/*begin::Link*/}
                  <a
                    href="https://preview.keenthemes.com/html/metronic/docs"
                    className="text-white opacity-50 text-hover-primary fs-5 mb-6"
                  >
                    Documentaions
                  </a>
                  {/*end::Link*/}
                  {/*begin::Link*/}
                  <a
                    href="https://www.youtube.com/c/KeenThemesTuts/videos"
                    className="text-white opacity-50 text-hover-primary fs-5 mb-6"
                  >
                    Video Tuts
                  </a>
                  {/*end::Link*/}
                  {/*begin::Link*/}
                  <a
                    href="https://preview.keenthemes.com/html/metronic/docs/getting-started/changelog"
                    className="text-white opacity-50 text-hover-primary fs-5 mb-6"
                  >
                    Changelog
                  </a>
                  {/*end::Link*/}
                  {/*begin::Link*/}
                  <a
                    href="https://devs.keenthemes.com/"
                    className="text-white opacity-50 text-hover-primary fs-5 mb-6"
                  >
                    Support Forum
                  </a>
                  {/*end::Link*/}
                  {/*begin::Link*/}
                  <a
                    href="https://keenthemes.com/blog"
                    className="text-white opacity-50 text-hover-primary fs-5"
                  >
                    Blog
                  </a>
                  {/*end::Link*/}
                </div>
                {/*end::Links*/}
                {/*begin::Links*/}
                <div className="d-flex fw-semibold flex-column ms-lg-20">
                  {/*begin::Subtitle*/}
                  <h4 className="fw-bold text-gray-400 mb-6">Stay Connected</h4>
                  {/*end::Subtitle*/}
                  {/*begin::Link*/}
                  <a
                    href="https://www.facebook.com/keenthemes"
                    className="mb-6"
                  >
                    <img
                      src="assets/media/svg/brand-logos/facebook-4.svg"
                      className="h-20px me-2"
                      alt=""
                    />
                    <span className="text-white opacity-50 text-hover-primary fs-5 mb-6">
                      Facebook
                    </span>
                  </a>
                  {/*end::Link*/}
                  {/*begin::Link*/}
                  <a href="https://github.com/KeenthemesHub" className="mb-6">
                    <img
                      src="assets/media/svg/brand-logos/github.svg"
                      className="h-20px me-2"
                      alt=""
                    />
                    <span className="text-white opacity-50 text-hover-primary fs-5 mb-6">
                      Github
                    </span>
                  </a>
                  {/*end::Link*/}
                  {/*begin::Link*/}
                  <a href="https://twitter.com/keenthemes" className="mb-6">
                    <img
                      src="assets/media/svg/brand-logos/twitter.svg"
                      className="h-20px me-2"
                      alt=""
                    />
                    <span className="text-white opacity-50 text-hover-primary fs-5 mb-6">
                      Twitter
                    </span>
                  </a>
                  {/*end::Link*/}
                  {/*begin::Link*/}
                  <a href="https://dribbble.com/keenthemes" className="mb-6">
                    <img
                      src="assets/media/svg/brand-logos/dribbble-icon-1.svg"
                      className="h-20px me-2"
                      alt=""
                    />
                    <span className="text-white opacity-50 text-hover-primary fs-5 mb-6">
                      Dribbble
                    </span>
                  </a>
                  {/*end::Link*/}
                  {/*begin::Link*/}
                  <a
                    href="https://www.instagram.com/keenthemes"
                    className="mb-6"
                  >
                    <img
                      src="assets/media/svg/brand-logos/instagram-2-1.svg"
                      className="h-20px me-2"
                      alt=""
                    />
                    <span className="text-white opacity-50 text-hover-primary fs-5 mb-6">
                      Instagram
                    </span>
                  </a>
                  {/*end::Link*/}
                </div>
                {/*end::Links*/}
              </div>
              {/*end::Navs*/}
            </div>
            {/*end::Col*/}
          </div>
          {/*end::Row*/}
        </div>
        {/*end::Container*/}
        {/*begin::Separator*/}
        <div className="landing-dark-separator" />
        {/*end::Separator*/}
        {/*begin::Container*/}
        <div className="container">
          {/*begin::Wrapper*/}
          <div className="d-flex flex-column flex-md-row flex-stack py-7 py-lg-10">
            {/*begin::Copyright*/}
            <div className="d-flex align-items-center order-2 order-md-1">
              {/*begin::Logo*/}
              <a href="../../demo7/dist/landing.html">
                <img
                  alt="Logo"
                  src="assets/media/logos/landing.svg"
                  className="h-15px h-md-20px"
                />
              </a>
              {/*end::Logo image*/}
              {/*begin::Logo image*/}
              <span
                className="mx-5 fs-6 fw-semibold text-gray-600 pt-1"
                href="https://keenthemes.com"
              >
                © 2022 Keenthemes Inc.
              </span>
              {/*end::Logo image*/}
            </div>
            {/*end::Copyright*/}
            {/*begin::Menu*/}
            <ul className="menu menu-gray-600 menu-hover-primary fw-semibold fs-6 fs-md-5 order-1 mb-5 mb-md-0">
              <li className="menu-item">
                <a
                  href="https://keenthemes.com"
                  target="_blank"
                  className="menu-link px-2"
                >
                  About
                </a>
              </li>
              <li className="menu-item mx-5">
                <a
                  href="https://devs.keenthemes.com"
                  target="_blank"
                  className="menu-link px-2"
                >
                  Support
                </a>
              </li>
              <li className="menu-item">
                <a href="" target="_blank" className="menu-link px-2">
                  Purchase
                </a>
              </li>
            </ul>
            {/*end::Menu*/}
          </div>
          {/*end::Wrapper*/}
        </div>
        {/*end::Container*/}
      </div>
      {/*end::Wrapper*/}
    </div>
    {/*end::Footer Section*/}
    {/*begin::Scrolltop*/}
    <div id="kt_scrolltop" className="scrolltop" data-kt-scrolltop="true">
      {/*begin::Svg Icon | path: icons/duotune/arrows/arr066.svg*/}
      <span className="svg-icon">
        <svg
          width={24}
          height={24}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            opacity="0.5"
            x={13}
            y={6}
            width={13}
            height={2}
            rx={1}
            transform="rotate(90 13 6)"
            fill="currentColor"
          />
          <path
            d="M12.5657 8.56569L16.75 12.75C17.1642 13.1642 17.8358 13.1642 18.25 12.75C18.6642 12.3358 18.6642 11.6642 18.25 11.25L12.7071 5.70711C12.3166 5.31658 11.6834 5.31658 11.2929 5.70711L5.75 11.25C5.33579 11.6642 5.33579 12.3358 5.75 12.75C6.16421 13.1642 6.83579 13.1642 7.25 12.75L11.4343 8.56569C11.7467 8.25327 12.2533 8.25327 12.5657 8.56569Z"
            fill="currentColor"
          />
        </svg>
      </span>
      {/*end::Svg Icon*/}
    </div>
    {/*end::Scrolltop*/}
  </div>
  {/*end::Root*/}
  {/*end::Main*/}
  {/*begin::Engage drawers*/}
  {/*begin::Demos drawer*/}
  <div
    id="kt_engage_demos"
    className="bg-body"
    data-kt-drawer="true"
    data-kt-drawer-name="explore"
    data-kt-drawer-activate="true"
    data-kt-drawer-overlay="true"
    data-kt-drawer-width="{default:'350px', 'lg': '475px'}"
    data-kt-drawer-direction="end"
    data-kt-drawer-toggle="#kt_engage_demos_toggle"
    data-kt-drawer-close="#kt_engage_demos_close"
  >
    {/*begin::Card*/}
    <div className="card shadow-none rounded-0 w-100">
      {/*begin::Header*/}
      <div className="card-header" id="kt_engage_demos_header">
        <h3 className="card-title fw-bold text-gray-700">Demos</h3>
        <div className="card-toolbar">
          <button
            type="button"
            className="btn btn-sm btn-icon btn-active-color-primary h-40px w-40px me-n6"
            id="kt_engage_demos_close"
          >
            {/*begin::Svg Icon | path: icons/duotune/arrows/arr061.svg*/}
            <span className="svg-icon svg-icon-2">
              <svg
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  opacity="0.5"
                  x={6}
                  y="17.3137"
                  width={16}
                  height={2}
                  rx={1}
                  transform="rotate(-45 6 17.3137)"
                  fill="currentColor"
                />
                <rect
                  x="7.41422"
                  y={6}
                  width={16}
                  height={2}
                  rx={1}
                  transform="rotate(45 7.41422 6)"
                  fill="currentColor"
                />
              </svg>
            </span>
            {/*end::Svg Icon*/}
          </button>
        </div>
      </div>
      {/*end::Header*/}
      {/*begin::Body*/}
      <div className="card-body" id="kt_engage_demos_body">
        {/*begin::Content*/}
        <div
          id="kt_explore_scroll"
          className="scroll-y me-n5 pe-5"
          data-kt-scroll="true"
          data-kt-scroll-height="auto"
          data-kt-scroll-wrappers="#kt_engage_demos_body"
          data-kt-scroll-dependencies="#kt_engage_demos_header"
          data-kt-scroll-offset="5px"
        >
          {/*begin::Wrapper*/}
          <div className="mb-0">
            {/*begin::Heading*/}
            <div className="mb-7">
              <div className="d-flex flex-stack">
                <h3 className="mb-0">Metronic Licenses</h3>
                <a
                  href="https://themeforest.net/licenses/standard"
                  className="fw-semibold"
                  target="_blank"
                >
                  License FAQs
                </a>
              </div>
            </div>
            {/*end::Heading*/}
            {/*begin::License*/}
            <div className="rounded border border-dashed border-gray-300 py-4 px-6 mb-5">
              <div className="d-flex flex-stack">
                <div className="d-flex flex-column">
                  <div className="d-flex align-items-center mb-1">
                    <div className="fs-6 fw-semibold text-gray-800 fw-semibold mb-0 me-1">
                      Regular License
                    </div>
                    <i
                      className="text-gray-400 fas fa-exclamation-circle ms-1 fs-7"
                      data-bs-toggle="popover"
                      data-bs-custom-class="popover-inverse"
                      data-bs-trigger="hover"
                      data-bs-placement="top"
                      data-bs-content="Use, by you or one client in a single end product which end users are not charged for"
                    />
                  </div>
                  <div className="fs-7 text-muted">
                    For single end product used by you or one client
                  </div>
                </div>
                <div className="text-nowrap">
                  <span className="text-muted fs-7 fw-semibold me-n1">$</span>
                  <span className="text-dark fs-1 fw-bold">39</span>
                </div>
              </div>
            </div>
            {/*end::License*/}
            {/*begin::License*/}
            <div className="rounded border border-dashed border-gray-300 py-4 px-6 mb-5">
              <div className="d-flex flex-stack">
                <div className="d-flex flex-column">
                  <div className="d-flex align-items-center mb-1">
                    <div className="fs-6 fw-semibold text-gray-800 fw-semibold mb-0 me-1">
                      Extended License
                    </div>
                    <i
                      className="text-gray-400 fas fa-exclamation-circle ms-1 fs-7"
                      data-bs-toggle="popover"
                      data-bs-custom-class="popover-inverse"
                      data-bs-trigger="hover"
                      data-bs-placement="top"
                      data-bs-content="Use, by you or one client, in a single end product which end users can be charged for."
                    />
                  </div>
                  <div className="fs-7 text-muted">
                    For single SaaS app with paying users
                  </div>
                </div>
                <div className="text-nowrap">
                  <span className="text-muted fs-7 fw-semibold me-n1">$</span>
                  <span className="text-dark fs-1 fw-bold">969</span>
                </div>
              </div>
            </div>
            {/*end::License*/}
            {/*begin::License*/}
            <div className="rounded border border-dashed border-gray-300 py-4 px-6 mb-5">
              <div className="d-flex flex-stack">
                <div className="d-flex flex-column">
                  <div className="d-flex align-items-center mb-1">
                    <div className="fs-6 fw-semibold text-gray-800 fw-semibold mb-0 me-1">
                      Custom License
                    </div>
                  </div>
                  <div className="fs-7 text-muted">
                    Reach us for custom license offers.
                  </div>
                </div>
                <div className="text-nowrap">
                  <a
                    href="https://devs.keenthemes.com"
                    className="btn btn-sm btn-success"
                    target="_blank"
                  >
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
            {/*end::License*/}
            {/*begin::Purchase*/}
            <a
              href="https://1.envato.market/EA4JP"
              className="btn btn-primary fw-bold mb-15 w-100"
            >
              Buy Now
            </a>
            {/*end::Purchase*/}
            {/*begin::Demos*/}
            <div className="mb-0">
              <h3 className="fw-bold text-center mb-6">Metronic Demos</h3>
              {/*begin::Row*/}
              <div className="row g-5">
                {/*begin::Col*/}
                <div className="col-6">
                  {/*begin::Demo*/}
                  <div className="overlay overflow-hidden position-relative border border-4 border-gray-200 rounded">
                    <div className="overlay-wrapper">
                      <img
                        src="assets/media/demos/demo1.png"
                        alt="demo"
                        className="w-100"
                      />
                    </div>
                    <div className="overlay-layer bg-dark bg-opacity-10">
                      <a
                        href="https://preview.keenthemes.com/metronic8/demo1"
                        className="btn btn-sm btn-success shadow"
                      >
                        Demo 1
                      </a>
                    </div>
                  </div>
                  {/*end::Demo*/}
                </div>
                {/*end::Col*/}
                {/*begin::Col*/}
                <div className="col-6">
                  {/*begin::Demo*/}
                  <div className="overlay overflow-hidden position-relative border border-4 border-gray-200 rounded">
                    <div className="overlay-wrapper">
                      <img
                        src="assets/media/demos/demo2.png"
                        alt="demo"
                        className="w-100"
                      />
                    </div>
                    <div className="overlay-layer bg-dark bg-opacity-10">
                      <a
                        href="https://preview.keenthemes.com/metronic8/demo2"
                        className="btn btn-sm btn-success shadow"
                      >
                        Demo 2
                      </a>
                    </div>
                  </div>
                  {/*end::Demo*/}
                </div>
                {/*end::Col*/}
                {/*begin::Col*/}
                <div className="col-6">
                  {/*begin::Demo*/}
                  <div className="overlay overflow-hidden position-relative border border-4 border-gray-200 rounded">
                    <div className="overlay-wrapper">
                      <img
                        src="assets/media/demos/demo3.png"
                        alt="demo"
                        className="w-100"
                      />
                    </div>
                    <div className="overlay-layer bg-dark bg-opacity-10">
                      <a
                        href="https://preview.keenthemes.com/metronic8/demo3"
                        className="btn btn-sm btn-success shadow"
                      >
                        Demo 3
                      </a>
                    </div>
                  </div>
                  {/*end::Demo*/}
                </div>
                {/*end::Col*/}
                {/*begin::Col*/}
                <div className="col-6">
                  {/*begin::Demo*/}
                  <div className="overlay overflow-hidden position-relative border border-4 border-gray-200 rounded">
                    <div className="overlay-wrapper">
                      <img
                        src="assets/media/demos/demo4.png"
                        alt="demo"
                        className="w-100"
                      />
                    </div>
                    <div className="overlay-layer bg-dark bg-opacity-10">
                      <a
                        href="https://preview.keenthemes.com/metronic8/demo4"
                        className="btn btn-sm btn-success shadow"
                      >
                        Demo 4
                      </a>
                    </div>
                  </div>
                  {/*end::Demo*/}
                </div>
                {/*end::Col*/}
                {/*begin::Col*/}
                <div className="col-6">
                  {/*begin::Demo*/}
                  <div className="overlay overflow-hidden position-relative border border-4 border-gray-200 rounded">
                    <div className="overlay-wrapper">
                      <img
                        src="assets/media/demos/demo5.png"
                        alt="demo"
                        className="w-100"
                      />
                    </div>
                    <div className="overlay-layer bg-dark bg-opacity-10">
                      <a
                        href="https://preview.keenthemes.com/metronic8/demo5"
                        className="btn btn-sm btn-success shadow"
                      >
                        Demo 5
                      </a>
                    </div>
                  </div>
                  {/*end::Demo*/}
                </div>
                {/*end::Col*/}
                {/*begin::Col*/}
                <div className="col-6">
                  {/*begin::Demo*/}
                  <div className="overlay overflow-hidden position-relative border border-4 border-gray-200 rounded">
                    <div className="overlay-wrapper">
                      <img
                        src="assets/media/demos/demo6.png"
                        alt="demo"
                        className="w-100"
                      />
                    </div>
                    <div className="overlay-layer bg-dark bg-opacity-10">
                      <a
                        href="https://preview.keenthemes.com/metronic8/demo6"
                        className="btn btn-sm btn-success shadow"
                      >
                        Demo 6
                      </a>
                    </div>
                  </div>
                  {/*end::Demo*/}
                </div>
                {/*end::Col*/}
                {/*begin::Col*/}
                <div className="col-6">
                  {/*begin::Demo*/}
                  <div className="overlay overflow-hidden position-relative border border-4 border-success rounded">
                    <div className="overlay-wrapper">
                      <img
                        src="assets/media/demos/demo7.png"
                        alt="demo"
                        className="w-100"
                      />
                    </div>
                    <div className="overlay-layer bg-dark bg-opacity-10">
                      <a
                        href="https://preview.keenthemes.com/metronic8/demo7"
                        className="btn btn-sm btn-success shadow"
                      >
                        Demo 7
                      </a>
                    </div>
                  </div>
                  {/*end::Demo*/}
                </div>
                {/*end::Col*/}
                {/*begin::Col*/}
                <div className="col-6">
                  {/*begin::Demo*/}
                  <div className="overlay overflow-hidden position-relative border border-4 border-gray-200 rounded">
                    <div className="overlay-wrapper">
                      <img
                        src="assets/media/demos/demo8.png"
                        alt="demo"
                        className="w-100"
                      />
                    </div>
                    <div className="overlay-layer bg-dark bg-opacity-10">
                      <a
                        href="https://preview.keenthemes.com/metronic8/demo8"
                        className="btn btn-sm btn-success shadow"
                      >
                        Demo 8
                      </a>
                    </div>
                  </div>
                  {/*end::Demo*/}
                </div>
                {/*end::Col*/}
                {/*begin::Col*/}
                <div className="col-6">
                  {/*begin::Demo*/}
                  <div className="overlay overflow-hidden position-relative border border-4 border-gray-200 rounded">
                    <div className="overlay-wrapper">
                      <img
                        src="assets/media/demos/demo9.png"
                        alt="demo"
                        className="w-100"
                      />
                    </div>
                    <div className="overlay-layer bg-dark bg-opacity-10">
                      <a
                        href="https://preview.keenthemes.com/metronic8/demo9"
                        className="btn btn-sm btn-success shadow"
                      >
                        Demo 9
                      </a>
                    </div>
                  </div>
                  {/*end::Demo*/}
                </div>
                {/*end::Col*/}
                {/*begin::Col*/}
                <div className="col-6">
                  {/*begin::Demo*/}
                  <div className="overlay overflow-hidden position-relative border border-4 border-gray-200 rounded">
                    <div className="overlay-wrapper">
                      <img
                        src="assets/media/demos/demo10.png"
                        alt="demo"
                        className="w-100"
                      />
                    </div>
                    <div className="overlay-layer bg-dark bg-opacity-10">
                      <a
                        href="https://preview.keenthemes.com/metronic8/demo10"
                        className="btn btn-sm btn-success shadow"
                      >
                        Demo 10
                      </a>
                    </div>
                  </div>
                  {/*end::Demo*/}
                </div>
                {/*end::Col*/}
                {/*begin::Col*/}
                <div className="col-6">
                  {/*begin::Demo*/}
                  <div className="overlay overflow-hidden position-relative border border-4 border-gray-200 rounded">
                    <div className="overlay-wrapper">
                      <img
                        src="assets/media/demos/demo11.png"
                        alt="demo"
                        className="w-100"
                      />
                    </div>
                    <div className="overlay-layer bg-dark bg-opacity-10">
                      <a
                        href="https://preview.keenthemes.com/metronic8/demo11"
                        className="btn btn-sm btn-success shadow"
                      >
                        Demo 11
                      </a>
                    </div>
                  </div>
                  {/*end::Demo*/}
                </div>
                {/*end::Col*/}
                {/*begin::Col*/}
                <div className="col-6">
                  {/*begin::Demo*/}
                  <div className="overlay overflow-hidden position-relative border border-4 border-gray-200 rounded">
                    <div className="overlay-wrapper">
                      <img
                        src="assets/media/demos/demo12.png"
                        alt="demo"
                        className="w-100"
                      />
                    </div>
                    <div className="overlay-layer bg-dark bg-opacity-10">
                      <a
                        href="https://preview.keenthemes.com/metronic8/demo12"
                        className="btn btn-sm btn-success shadow"
                      >
                        Demo 12
                      </a>
                    </div>
                  </div>
                  {/*end::Demo*/}
                </div>
                {/*end::Col*/}
                {/*begin::Col*/}
                <div className="col-6">
                  {/*begin::Demo*/}
                  <div className="overlay overflow-hidden position-relative border border-4 border-gray-200 rounded">
                    <div className="overlay-wrapper">
                      <img
                        src="assets/media/demos/demo13.png"
                        alt="demo"
                        className="w-100"
                      />
                    </div>
                    <div className="overlay-layer bg-dark bg-opacity-10">
                      <a
                        href="https://preview.keenthemes.com/metronic8/demo13"
                        className="btn btn-sm btn-success shadow"
                      >
                        Demo 13
                      </a>
                    </div>
                  </div>
                  {/*end::Demo*/}
                </div>
                {/*end::Col*/}
                {/*begin::Col*/}
                <div className="col-6">
                  {/*begin::Demo*/}
                  <div className="overlay overflow-hidden position-relative border border-4 border-gray-200 rounded">
                    <div className="overlay-wrapper">
                      <img
                        src="assets/media/demos/demo14.png"
                        alt="demo"
                        className="w-100"
                      />
                    </div>
                    <div className="overlay-layer bg-dark bg-opacity-10">
                      <a
                        href="https://preview.keenthemes.com/metronic8/demo14"
                        className="btn btn-sm btn-success shadow"
                      >
                        Demo 14
                      </a>
                    </div>
                  </div>
                  {/*end::Demo*/}
                </div>
                {/*end::Col*/}
                {/*begin::Col*/}
                <div className="col-6">
                  {/*begin::Demo*/}
                  <div className="overlay overflow-hidden position-relative border border-4 border-gray-200 rounded">
                    <div className="overlay-wrapper">
                      <img
                        src="assets/media/demos/demo15.png"
                        alt="demo"
                        className="w-100"
                      />
                    </div>
                    <div className="overlay-layer bg-dark bg-opacity-10">
                      <a
                        href="https://preview.keenthemes.com/metronic8/demo15"
                        className="btn btn-sm btn-success shadow"
                      >
                        Demo 15
                      </a>
                    </div>
                  </div>
                  {/*end::Demo*/}
                </div>
                {/*end::Col*/}
                {/*begin::Col*/}
                <div className="col-6">
                  {/*begin::Demo*/}
                  <div className="overlay overflow-hidden position-relative border border-4 border-gray-200 rounded">
                    <div className="overlay-wrapper">
                      <img
                        src="assets/media/demos/demo16.png"
                        alt="demo"
                        className="w-100"
                      />
                    </div>
                    <div className="overlay-layer bg-dark bg-opacity-10">
                      <a
                        href="https://preview.keenthemes.com/metronic8/demo16"
                        className="btn btn-sm btn-success shadow"
                      >
                        Demo 16
                      </a>
                    </div>
                  </div>
                  {/*end::Demo*/}
                </div>
                {/*end::Col*/}
                {/*begin::Col*/}
                <div className="col-6">
                  {/*begin::Demo*/}
                  <div className="overlay overflow-hidden position-relative border border-4 border-gray-200 rounded">
                    <div className="overlay-wrapper">
                      <img
                        src="assets/media/demos/demo17.png"
                        alt="demo"
                        className="w-100"
                      />
                    </div>
                    <div className="overlay-layer bg-dark bg-opacity-10">
                      <a
                        href="https://preview.keenthemes.com/metronic8/demo17"
                        className="btn btn-sm btn-success shadow"
                      >
                        Demo 17
                      </a>
                    </div>
                  </div>
                  {/*end::Demo*/}
                </div>
                {/*end::Col*/}
                {/*begin::Col*/}
                <div className="col-6">
                  {/*begin::Demo*/}
                  <div className="overlay overflow-hidden position-relative border border-4 border-gray-200 rounded">
                    <div className="overlay-wrapper">
                      <img
                        src="assets/media/demos/demo18.png"
                        alt="demo"
                        className="w-100"
                      />
                    </div>
                    <div className="overlay-layer bg-dark bg-opacity-10">
                      <a
                        href="https://preview.keenthemes.com/metronic8/demo18"
                        className="btn btn-sm btn-success shadow"
                      >
                        Demo 18
                      </a>
                    </div>
                  </div>
                  {/*end::Demo*/}
                </div>
                {/*end::Col*/}
                {/*begin::Col*/}
                <div className="col-6">
                  {/*begin::Demo*/}
                  <div className="overlay overflow-hidden position-relative border border-4 border-gray-200 rounded">
                    <div className="overlay-wrapper">
                      <img
                        src="assets/media/demos/demo19.png"
                        alt="demo"
                        className="w-100"
                      />
                    </div>
                    <div className="overlay-layer bg-dark bg-opacity-10">
                      <a
                        href="https://preview.keenthemes.com/metronic8/demo19"
                        className="btn btn-sm btn-success shadow"
                      >
                        Demo 19
                      </a>
                    </div>
                  </div>
                  {/*end::Demo*/}
                </div>
                {/*end::Col*/}
                {/*begin::Col*/}
                <div className="col-6">
                  {/*begin::Demo*/}
                  <div className="overlay overflow-hidden position-relative border border-4 border-gray-200 rounded">
                    <div className="overlay-wrapper">
                      <img
                        src="assets/media/demos/demo20.png"
                        alt="demo"
                        className="w-100"
                      />
                    </div>
                    <div className="overlay-layer bg-dark bg-opacity-10">
                      <a
                        href="https://preview.keenthemes.com/metronic8/demo20"
                        className="btn btn-sm btn-success shadow"
                      >
                        Demo 20
                      </a>
                    </div>
                  </div>
                  {/*end::Demo*/}
                </div>
                {/*end::Col*/}
                {/*begin::Col*/}
                <div className="col-6">
                  {/*begin::Demo*/}
                  <div className="overlay overflow-hidden position-relative border border-4 border-gray-200 rounded">
                    <div className="overlay-wrapper">
                      <img
                        src="assets/media/demos/demo21.png"
                        alt="demo"
                        className="w-100"
                      />
                    </div>
                    <div className="overlay-layer bg-dark bg-opacity-10">
                      <a
                        href="https://preview.keenthemes.com/metronic8/demo21"
                        className="btn btn-sm btn-success shadow"
                      >
                        Demo 21
                      </a>
                    </div>
                  </div>
                  {/*end::Demo*/}
                </div>
                {/*end::Col*/}
                {/*begin::Col*/}
                <div className="col-6">
                  {/*begin::Demo*/}
                  <div className="overlay overflow-hidden position-relative border border-4 border-gray-200 rounded">
                    <div className="overlay-wrapper">
                      <img
                        src="assets/media/demos/demo22.png"
                        alt="demo"
                        className="w-100"
                      />
                    </div>
                    <div className="overlay-layer bg-dark bg-opacity-10">
                      <a
                        href="https://preview.keenthemes.com/metronic8/demo22"
                        className="btn btn-sm btn-success shadow"
                      >
                        Demo 22
                      </a>
                    </div>
                  </div>
                  {/*end::Demo*/}
                </div>
                {/*end::Col*/}
                {/*begin::Col*/}
                <div className="col-6">
                  {/*begin::Demo*/}
                  <div className="overlay overflow-hidden position-relative border border-4 border-gray-200 rounded">
                    <div className="overlay-wrapper">
                      <img
                        src="assets/media/demos/demo23.png"
                        alt="demo"
                        className="w-100 opacity-25"
                      />
                    </div>
                    <div className="overlay-layer bg-dark bg-opacity-10">
                      <div className="badge badge-white px-6 py-4 fw-semibold fs-base shadow">
                        Coming soon
                      </div>
                    </div>
                  </div>
                  {/*end::Demo*/}
                </div>
                {/*end::Col*/}
                {/*begin::Col*/}
                <div className="col-6">
                  {/*begin::Demo*/}
                  <div className="overlay overflow-hidden position-relative border border-4 border-gray-200 rounded">
                    <div className="overlay-wrapper">
                      <img
                        src="assets/media/demos/demo24.png"
                        alt="demo"
                        className="w-100 opacity-25"
                      />
                    </div>
                    <div className="overlay-layer bg-dark bg-opacity-10">
                      <div className="badge badge-white px-6 py-4 fw-semibold fs-base shadow">
                        Coming soon
                      </div>
                    </div>
                  </div>
                  {/*end::Demo*/}
                </div>
                {/*end::Col*/}
              </div>
              {/*end::Row*/}
            </div>
            {/*end::Demos*/}
          </div>
          {/*end::Wrapper*/}
        </div>
        {/*end::Content*/}
      </div>
      {/*end::Body*/}
    </div>
    {/*end::Card*/}
  </div>
  {/*end::Demos drawer*/}
  {/*begin::Help drawer*/}
  <div
    id="kt_help"
    className="bg-body"
    data-kt-drawer="true"
    data-kt-drawer-name="help"
    data-kt-drawer-activate="true"
    data-kt-drawer-overlay="true"
    data-kt-drawer-width="{default:'350px', 'md': '525px'}"
    data-kt-drawer-direction="end"
    data-kt-drawer-toggle="#kt_help_toggle"
    data-kt-drawer-close="#kt_help_close"
  >
    {/*begin::Card*/}
    <div className="card shadow-none rounded-0 w-100">
      {/*begin::Header*/}
      <div className="card-header" id="kt_help_header">
        <h5 className="card-title fw-semibold text-gray-600">
          Learn &amp; Get Inspired
        </h5>
        <div className="card-toolbar">
          <button
            type="button"
            className="btn btn-sm btn-icon explore-btn-dismiss me-n5"
            id="kt_help_close"
          >
            {/*begin::Svg Icon | path: icons/duotune/arrows/arr061.svg*/}
            <span className="svg-icon svg-icon-2">
              <svg
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  opacity="0.5"
                  x={6}
                  y="17.3137"
                  width={16}
                  height={2}
                  rx={1}
                  transform="rotate(-45 6 17.3137)"
                  fill="currentColor"
                />
                <rect
                  x="7.41422"
                  y={6}
                  width={16}
                  height={2}
                  rx={1}
                  transform="rotate(45 7.41422 6)"
                  fill="currentColor"
                />
              </svg>
            </span>
            {/*end::Svg Icon*/}
          </button>
        </div>
      </div>
      {/*end::Header*/}
      {/*begin::Body*/}
      <div className="card-body" id="kt_help_body">
        {/*begin::Content*/}
        <div
          id="kt_help_scroll"
          className="hover-scroll-overlay-y"
          data-kt-scroll="true"
          data-kt-scroll-height="auto"
          data-kt-scroll-wrappers="#kt_help_body"
          data-kt-scroll-dependencies="#kt_help_header"
          data-kt-scroll-offset="5px"
        >
          {/*begin::Support*/}
          <div className="rounded border border-dashed border-gray-300 p-6 p-lg-8 mb-10">
            {/*begin::Heading*/}
            <h2 className="fw-bold mb-5">
              Support at
              <a href="https://devs.keenthemes.com" className="">
                devs.keenthemes.com
              </a>
            </h2>
            {/*end::Heading*/}
            {/*begin::Description*/}
            <div className="fs-5 fw-semibold mb-5">
              <span className="text-gray-500">
                Join our developers community to find answer to your question
                and help others.
              </span>
              <a
                className="explore-link d-none"
                href="https://keenthemes.com/licensing"
              >
                FAQs
              </a>
            </div>
            {/*end::Description*/}
            {/*begin::Link*/}
            <a
              href="https://devs.keenthemes.com"
              className="btn btn-lg explore-btn-primary w-100"
            >
              Get Support
            </a>
            {/*end::Link*/}
          </div>
          {/*end::Support*/}
          {/*begin::Link*/}
          <div className="d-flex align-items-center mb-7">
            {/*begin::Icon*/}
            <div className="d-flex flex-center w-50px h-50px w-lg-75px h-lg-75px flex-shrink-0 rounded bg-light-warning">
              {/*begin::Svg Icon | path: icons/duotune/abstract/abs027.svg*/}
              <span className="svg-icon svg-icon-warning svg-icon-2x svg-icon-lg-3x">
                <svg
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    opacity="0.3"
                    d="M21.25 18.525L13.05 21.825C12.35 22.125 11.65 22.125 10.95 21.825L2.75 18.525C1.75 18.125 1.75 16.725 2.75 16.325L4.04999 15.825L10.25 18.325C10.85 18.525 11.45 18.625 12.05 18.625C12.65 18.625 13.25 18.525 13.85 18.325L20.05 15.825L21.35 16.325C22.35 16.725 22.35 18.125 21.25 18.525ZM13.05 16.425L21.25 13.125C22.25 12.725 22.25 11.325 21.25 10.925L13.05 7.62502C12.35 7.32502 11.65 7.32502 10.95 7.62502L2.75 10.925C1.75 11.325 1.75 12.725 2.75 13.125L10.95 16.425C11.65 16.725 12.45 16.725 13.05 16.425Z"
                    fill="currentColor"
                  />
                  <path
                    d="M11.05 11.025L2.84998 7.725C1.84998 7.325 1.84998 5.925 2.84998 5.525L11.05 2.225C11.75 1.925 12.45 1.925 13.15 2.225L21.35 5.525C22.35 5.925 22.35 7.325 21.35 7.725L13.05 11.025C12.45 11.325 11.65 11.325 11.05 11.025Z"
                    fill="currentColor"
                  />
                </svg>
              </span>
              {/*end::Svg Icon*/}
            </div>
            {/*end::Icon*/}
            {/*begin::Info*/}
            <div className="d-flex flex-stack flex-grow-1 ms-4 ms-lg-6">
              {/*begin::Wrapper*/}
              <div className="d-flex flex-column me-2 me-lg-5">
                {/*begin::Title*/}
                <a
                  href="https://preview.keenthemes.com/html/metronic/docs"
                  className="text-dark text-hover-primary fw-bold fs-6 fs-lg-4 mb-1"
                >
                  Documentation &amp; Videos
                </a>
                {/*end::Title*/}
                {/*begin::Description*/}
                <div className="text-muted fw-semibold fs-7 fs-lg-6">
                  From guides and video tutorials, to live demos and code
                  examples to get started.
                </div>
                {/*end::Description*/}
              </div>
              {/*end::Wrapper*/}
              {/*begin::Svg Icon | path: icons/duotune/arrows/arr064.svg*/}
              <span className="svg-icon svg-icon-gray-400 svg-icon-2">
                <svg
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    opacity="0.5"
                    x={18}
                    y={13}
                    width={13}
                    height={2}
                    rx={1}
                    transform="rotate(-180 18 13)"
                    fill="currentColor"
                  />
                  <path
                    d="M15.4343 12.5657L11.25 16.75C10.8358 17.1642 10.8358 17.8358 11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25L18.2929 12.7071C18.6834 12.3166 18.6834 11.6834 18.2929 11.2929L12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75C10.8358 6.16421 10.8358 6.83579 11.25 7.25L15.4343 11.4343C15.7467 11.7467 15.7467 12.2533 15.4343 12.5657Z"
                    fill="currentColor"
                  />
                </svg>
              </span>
              {/*end::Svg Icon*/}
            </div>
            {/*end::Info*/}
          </div>
          {/*end::Link*/}
          {/*begin::Link*/}
          <div className="d-flex align-items-center mb-7">
            {/*begin::Icon*/}
            <div className="d-flex flex-center w-50px h-50px w-lg-75px h-lg-75px flex-shrink-0 rounded bg-light-primary">
              {/*begin::Svg Icon | path: icons/duotune/ecommerce/ecm007.svg*/}
              <span className="svg-icon svg-icon-primary svg-icon-2x svg-icon-lg-3x">
                <svg
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21 9V11C21 11.6 20.6 12 20 12H14V8H20C20.6 8 21 8.4 21 9ZM10 8H4C3.4 8 3 8.4 3 9V11C3 11.6 3.4 12 4 12H10V8Z"
                    fill="currentColor"
                  />
                  <path
                    d="M15 2C13.3 2 12 3.3 12 5V8H15C16.7 8 18 6.7 18 5C18 3.3 16.7 2 15 2Z"
                    fill="currentColor"
                  />
                  <path
                    opacity="0.3"
                    d="M9 2C10.7 2 12 3.3 12 5V8H9C7.3 8 6 6.7 6 5C6 3.3 7.3 2 9 2ZM4 12V21C4 21.6 4.4 22 5 22H10V12H4ZM20 12V21C20 21.6 19.6 22 19 22H14V12H20Z"
                    fill="currentColor"
                  />
                </svg>
              </span>
              {/*end::Svg Icon*/}
            </div>
            {/*end::Icon*/}
            {/*begin::Info*/}
            <div className="d-flex flex-stack flex-grow-1 ms-4 ms-lg-6">
              {/*begin::Wrapper*/}
              <div className="d-flex flex-column me-2 me-lg-5">
                {/*begin::Title*/}
                <a
                  href="https://preview.keenthemes.com/html/metronic/docs//base/utilities"
                  className="text-dark text-hover-primary fw-bold fs-6 fs-lg-4 mb-1"
                >
                  Plugins &amp; Components
                </a>
                {/*end::Title*/}
                {/*begin::Description*/}
                <div className="text-muted fw-semibold fs-7 fs-lg-6">
                  Check out our 300+ in-house components and customized
                  3rd-party plugins.
                </div>
                {/*end::Description*/}
              </div>
              {/*end::Wrapper*/}
              {/*begin::Svg Icon | path: icons/duotune/arrows/arr064.svg*/}
              <span className="svg-icon svg-icon-gray-400 svg-icon-2">
                <svg
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    opacity="0.5"
                    x={18}
                    y={13}
                    width={13}
                    height={2}
                    rx={1}
                    transform="rotate(-180 18 13)"
                    fill="currentColor"
                  />
                  <path
                    d="M15.4343 12.5657L11.25 16.75C10.8358 17.1642 10.8358 17.8358 11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25L18.2929 12.7071C18.6834 12.3166 18.6834 11.6834 18.2929 11.2929L12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75C10.8358 6.16421 10.8358 6.83579 11.25 7.25L15.4343 11.4343C15.7467 11.7467 15.7467 12.2533 15.4343 12.5657Z"
                    fill="currentColor"
                  />
                </svg>
              </span>
              {/*end::Svg Icon*/}
            </div>
            {/*end::Info*/}
          </div>
          {/*end::Link*/}
          {/*begin::Link*/}
          <div className="d-flex align-items-center mb-7">
            {/*begin::Icon*/}
            <div className="d-flex flex-center w-50px h-50px w-lg-75px h-lg-75px flex-shrink-0 rounded bg-light-info">
              {/*begin::Svg Icon | path: icons/duotune/art/art006.svg*/}
              <span className="svg-icon svg-icon-info svg-icon-2x svg-icon-lg-3x">
                <svg
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    opacity="0.3"
                    d="M22 19V17C22 16.4 21.6 16 21 16H8V3C8 2.4 7.6 2 7 2H5C4.4 2 4 2.4 4 3V19C4 19.6 4.4 20 5 20H21C21.6 20 22 19.6 22 19Z"
                    fill="currentColor"
                  />
                  <path
                    d="M20 5V21C20 21.6 19.6 22 19 22H17C16.4 22 16 21.6 16 21V8H8V4H19C19.6 4 20 4.4 20 5ZM3 8H4V4H3C2.4 4 2 4.4 2 5V7C2 7.6 2.4 8 3 8Z"
                    fill="currentColor"
                  />
                </svg>
              </span>
              {/*end::Svg Icon*/}
            </div>
            {/*end::Icon*/}
            {/*begin::Info*/}
            <div className="d-flex flex-stack flex-grow-1 ms-4 ms-lg-6">
              {/*begin::Wrapper*/}
              <div className="d-flex flex-column me-2 me-lg-5">
                {/*begin::Title*/}
                <a
                  href="https://preview.keenthemes.com/metronic8/demo7/layout-builder.html"
                  className="text-dark text-hover-primary fw-bold fs-6 fs-lg-4 mb-1"
                >
                  Layout Builder
                </a>
                {/*end::Title*/}
                {/*begin::Description*/}
                <div className="text-muted fw-semibold fs-7 fs-lg-6">
                  Build your layout, preview it and export the HTML for server
                  side integration.
                </div>
                {/*end::Description*/}
              </div>
              {/*end::Wrapper*/}
              {/*begin::Svg Icon | path: icons/duotune/arrows/arr064.svg*/}
              <span className="svg-icon svg-icon-gray-400 svg-icon-2">
                <svg
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    opacity="0.5"
                    x={18}
                    y={13}
                    width={13}
                    height={2}
                    rx={1}
                    transform="rotate(-180 18 13)"
                    fill="currentColor"
                  />
                  <path
                    d="M15.4343 12.5657L11.25 16.75C10.8358 17.1642 10.8358 17.8358 11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25L18.2929 12.7071C18.6834 12.3166 18.6834 11.6834 18.2929 11.2929L12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75C10.8358 6.16421 10.8358 6.83579 11.25 7.25L15.4343 11.4343C15.7467 11.7467 15.7467 12.2533 15.4343 12.5657Z"
                    fill="currentColor"
                  />
                </svg>
              </span>
              {/*end::Svg Icon*/}
            </div>
            {/*end::Info*/}
          </div>
          {/*end::Link*/}
          {/*begin::Link*/}
          <div className="d-flex align-items-center mb-7">
            {/*begin::Icon*/}
            <div className="d-flex flex-center w-50px h-50px w-lg-75px h-lg-75px flex-shrink-0 rounded bg-light-success">
              {/*begin::Svg Icon | path: icons/duotune/files/fil021.svg*/}
              <span className="svg-icon svg-icon-success svg-icon-2x svg-icon-lg-3x">
                <svg
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    opacity="0.3"
                    d="M19 15C20.7 15 22 13.7 22 12C22 10.3 20.7 9 19 9C18.9 9 18.9 9 18.8 9C18.9 8.7 19 8.3 19 8C19 6.3 17.7 5 16 5C15.4 5 14.8 5.2 14.3 5.5C13.4 4 11.8 3 10 3C7.2 3 5 5.2 5 8C5 8.3 5 8.7 5.1 9H5C3.3 9 2 10.3 2 12C2 13.7 3.3 15 5 15H19Z"
                    fill="currentColor"
                  />
                  <path
                    d="M13 17.4V12C13 11.4 12.6 11 12 11C11.4 11 11 11.4 11 12V17.4H13Z"
                    fill="currentColor"
                  />
                  <path
                    opacity="0.3"
                    d="M8 17.4H16L12.7 20.7C12.3 21.1 11.7 21.1 11.3 20.7L8 17.4Z"
                    fill="currentColor"
                  />
                </svg>
              </span>
              {/*end::Svg Icon*/}
            </div>
            {/*end::Icon*/}
            {/*begin::Info*/}
            <div className="d-flex flex-stack flex-grow-1 ms-4 ms-lg-6">
              {/*begin::Wrapper*/}
              <div className="d-flex flex-column me-2 me-lg-5">
                {/*begin::Title*/}
                <a
                  href="https://devs.keenthemes.com/metronic"
                  className="text-dark text-hover-primary fw-bold fs-6 fs-lg-4 mb-1"
                >
                  Metronic Downloads
                </a>
                {/*end::Title*/}
                {/*begin::Description*/}
                <div className="text-muted fw-semibold fs-7 fs-lg-6">
                  Download your prefered framework and demo with one click.
                </div>
                {/*end::Description*/}
              </div>
              {/*end::Wrapper*/}
              {/*begin::Svg Icon | path: icons/duotune/arrows/arr064.svg*/}
              <span className="svg-icon svg-icon-gray-400 svg-icon-2">
                <svg
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    opacity="0.5"
                    x={18}
                    y={13}
                    width={13}
                    height={2}
                    rx={1}
                    transform="rotate(-180 18 13)"
                    fill="currentColor"
                  />
                  <path
                    d="M15.4343 12.5657L11.25 16.75C10.8358 17.1642 10.8358 17.8358 11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25L18.2929 12.7071C18.6834 12.3166 18.6834 11.6834 18.2929 11.2929L12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75C10.8358 6.16421 10.8358 6.83579 11.25 7.25L15.4343 11.4343C15.7467 11.7467 15.7467 12.2533 15.4343 12.5657Z"
                    fill="currentColor"
                  />
                </svg>
              </span>
              {/*end::Svg Icon*/}
            </div>
            {/*end::Info*/}
          </div>
          {/*end::Link*/}
          {/*begin::Link*/}
          <div className="d-flex align-items-center mb-7">
            {/*begin::Icon*/}
            <div className="d-flex flex-center w-50px h-50px w-lg-75px h-lg-75px flex-shrink-0 rounded bg-light-danger">
              {/*begin::Svg Icon | path: icons/duotune/electronics/elc009.svg*/}
              <span className="svg-icon svg-icon-danger svg-icon-2x svg-icon-lg-3x">
                <svg
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13 9V8C13 7.4 13.4 7 14 7H15C16.7 7 18 5.7 18 4V3C18 2.4 17.6 2 17 2C16.4 2 16 2.4 16 3V4C16 4.6 15.6 5 15 5H14C12.3 5 11 6.3 11 8V9H13Z"
                    fill="currentColor"
                  />
                  <path
                    opacity="0.3"
                    d="M21 22H3C2.4 22 2 21.6 2 21V10C2 9.4 2.4 9 3 9H21C21.6 9 22 9.4 22 10V21C22 21.6 21.6 22 21 22ZM5 12C4.4 12 4 12.4 4 13C4 13.6 4.4 14 5 14C5.6 14 6 13.6 6 13C6 12.4 5.6 12 5 12ZM8 12C7.4 12 7 12.4 7 13C7 13.6 7.4 14 8 14C8.6 14 9 13.6 9 13C9 12.4 8.6 12 8 12ZM11 12C10.4 12 10 12.4 10 13C10 13.6 10.4 14 11 14C11.6 14 12 13.6 12 13C12 12.4 11.6 12 11 12ZM14 12C13.4 12 13 12.4 13 13C13 13.6 13.4 14 14 14C14.6 14 15 13.6 15 13C15 12.4 14.6 12 14 12ZM9 15C8.4 15 8 15.4 8 16C8 16.6 8.4 17 9 17C9.6 17 10 16.6 10 16C10 15.4 9.6 15 9 15ZM12 15C11.4 15 11 15.4 11 16C11 16.6 11.4 17 12 17C12.6 17 13 16.6 13 16C13 15.4 12.6 15 12 15ZM15 15C14.4 15 14 15.4 14 16C14 16.6 14.4 17 15 17C15.6 17 16 16.6 16 16C16 15.4 15.6 15 15 15ZM19 18C18.4 18 18 18.4 18 19C18 19.6 18.4 20 19 20C19.6 20 20 19.6 20 19C20 18.4 19.6 18 19 18ZM7 19C7 18.4 6.6 18 6 18H5C4.4 18 4 18.4 4 19C4 19.6 4.4 20 5 20H6C6.6 20 7 19.6 7 19ZM7 16C7 15.4 6.6 15 6 15H5C4.4 15 4 15.4 4 16C4 16.6 4.4 17 5 17H6C6.6 17 7 16.6 7 16ZM17 14H19C19.6 14 20 13.6 20 13C20 12.4 19.6 12 19 12H17C16.4 12 16 12.4 16 13C16 13.6 16.4 14 17 14ZM18 17H19C19.6 17 20 16.6 20 16C20 15.4 19.6 15 19 15H18C17.4 15 17 15.4 17 16C17 16.6 17.4 17 18 17ZM17 19C17 18.4 16.6 18 16 18H9C8.4 18 8 18.4 8 19C8 19.6 8.4 20 9 20H16C16.6 20 17 19.6 17 19Z"
                    fill="currentColor"
                  />
                </svg>
              </span>
              {/*end::Svg Icon*/}
            </div>
            {/*end::Icon*/}
            {/*begin::Info*/}
            <div className="d-flex flex-stack flex-grow-1 ms-4 ms-lg-6">
              {/*begin::Wrapper*/}
              <div className="d-flex flex-column me-2 me-lg-5">
                {/*begin::Title*/}
                <a
                  href="https://preview.keenthemes.com/html/metronic/docs/getting-started/changelog"
                  className="text-dark text-hover-primary fw-bold fs-6 fs-lg-4 mb-1"
                >
                  What's New ?
                </a>
                {/*end::Title*/}
                {/*begin::Description*/}
                <div className="text-muted fw-semibold fs-7 fs-lg-6">
                  Latest features and improvements added with our users feedback
                  in mind.
                </div>
                {/*end::Description*/}
              </div>
              {/*end::Wrapper*/}
              {/*begin::Svg Icon | path: icons/duotune/arrows/arr064.svg*/}
              <span className="svg-icon svg-icon-gray-400 svg-icon-2">
                <svg
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    opacity="0.5"
                    x={18}
                    y={13}
                    width={13}
                    height={2}
                    rx={1}
                    transform="rotate(-180 18 13)"
                    fill="currentColor"
                  />
                  <path
                    d="M15.4343 12.5657L11.25 16.75C10.8358 17.1642 10.8358 17.8358 11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25L18.2929 12.7071C18.6834 12.3166 18.6834 11.6834 18.2929 11.2929L12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75C10.8358 6.16421 10.8358 6.83579 11.25 7.25L15.4343 11.4343C15.7467 11.7467 15.7467 12.2533 15.4343 12.5657Z"
                    fill="currentColor"
                  />
                </svg>
              </span>
              {/*end::Svg Icon*/}
            </div>
            {/*end::Info*/}
          </div>
          {/*end::Link*/}
        </div>
        {/*end::Content*/}
      </div>
      {/*end::Body*/}
    </div>
    {/*end::Card*/}
  </div>
  {/*end::Help drawer*/}
  {/*end::Engage drawers*/}
  {/*begin::Engage toolbar*/}
  <div className="engage-toolbar d-flex position-fixed px-5 fw-bold zindex-2 top-50 end-0 transform-90 mt-5 mt-lg-20 gap-2">
    {/*begin::Demos drawer toggle*/}
    <button
      id="kt_engage_demos_toggle"
      className="engage-demos-toggle btn btn-flex h-35px bg-body btn-color-gray-700 btn-active-color-gray-900 shadow-sm fs-6 px-4 rounded-top-0"
      title="Check out 22 more demos"
      data-bs-toggle="tooltip"
      data-bs-placement="left"
      data-bs-dismiss="click"
      data-bs-trigger="hover"
    >
      <span id="kt_engage_demos_label">Demos</span>
    </button>
    {/*end::Demos drawer toggle*/}
    {/*begin::Help drawer toggle*/}
    <button
      id="kt_help_toggle"
      className="engage-help-toggle btn btn-flex h-35px bg-body btn-color-gray-700 btn-active-color-gray-900 shadow-sm px-5 rounded-top-0"
      title="Learn & Get Inspired"
      data-bs-toggle="tooltip"
      data-bs-placement="left"
      data-bs-dismiss="click"
      data-bs-trigger="hover"
    >
      Help
    </button>
    {/*end::Help drawer toggle*/}
  </div>
  {/*end::Engage toolbar*/}
  {/*begin::Scrolltop*/}
  <div id="kt_scrolltop" className="scrolltop" data-kt-scrolltop="true">
    {/*begin::Svg Icon | path: icons/duotune/arrows/arr066.svg*/}
    <span className="svg-icon">
      <svg
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          opacity="0.5"
          x={13}
          y={6}
          width={13}
          height={2}
          rx={1}
          transform="rotate(90 13 6)"
          fill="currentColor"
        />
        <path
          d="M12.5657 8.56569L16.75 12.75C17.1642 13.1642 17.8358 13.1642 18.25 12.75C18.6642 12.3358 18.6642 11.6642 18.25 11.25L12.7071 5.70711C12.3166 5.31658 11.6834 5.31658 11.2929 5.70711L5.75 11.25C5.33579 11.6642 5.33579 12.3358 5.75 12.75C6.16421 13.1642 6.83579 13.1642 7.25 12.75L11.4343 8.56569C11.7467 8.25327 12.2533 8.25327 12.5657 8.56569Z"
          fill="currentColor"
        />
      </svg>
    </span>
    {/*end::Svg Icon*/}
  </div>
</>

    )
}

export default ExternalSite;