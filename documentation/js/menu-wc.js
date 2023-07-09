'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">e-commerce documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-AppModule-ca5b57aed90d44bd6da4818cfd9602f09c0f14f6290c38375226584ce659bb9b29339ad927678f7063e8f1ab0797cb39bd713d28ec95c4e49799261d2e0cbf68"' : 'data-bs-target="#xs-components-links-module-AppModule-ca5b57aed90d44bd6da4818cfd9602f09c0f14f6290c38375226584ce659bb9b29339ad927678f7063e8f1ab0797cb39bd713d28ec95c4e49799261d2e0cbf68"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-ca5b57aed90d44bd6da4818cfd9602f09c0f14f6290c38375226584ce659bb9b29339ad927678f7063e8f1ab0797cb39bd713d28ec95c4e49799261d2e0cbf68"' :
                                            'id="xs-components-links-module-AppModule-ca5b57aed90d44bd6da4818cfd9602f09c0f14f6290c38375226584ce659bb9b29339ad927678f7063e8f1ab0797cb39bd713d28ec95c4e49799261d2e0cbf68"' }>
                                            <li class="link">
                                                <a href="components/AllordersComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AllordersComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/BrandsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BrandsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CatigoryComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CatigoryComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CheckOutComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CheckOutComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FeaturedProductComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FeaturedProductComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HeaderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HeaderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HomeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HomeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LoaderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoaderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LogInComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LogInComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NavbarComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NavbarComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NotfoundComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NotfoundComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProductCardComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProductCardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProductDetailsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProductDetailsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProductsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProductsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProfileComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProfileComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RegisterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RegisterComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#pipes-links-module-AppModule-ca5b57aed90d44bd6da4818cfd9602f09c0f14f6290c38375226584ce659bb9b29339ad927678f7063e8f1ab0797cb39bd713d28ec95c4e49799261d2e0cbf68"' : 'data-bs-target="#xs-pipes-links-module-AppModule-ca5b57aed90d44bd6da4818cfd9602f09c0f14f6290c38375226584ce659bb9b29339ad927678f7063e8f1ab0797cb39bd713d28ec95c4e49799261d2e0cbf68"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-AppModule-ca5b57aed90d44bd6da4818cfd9602f09c0f14f6290c38375226584ce659bb9b29339ad927678f7063e8f1ab0797cb39bd713d28ec95c4e49799261d2e0cbf68"' :
                                            'id="xs-pipes-links-module-AppModule-ca5b57aed90d44bd6da4818cfd9602f09c0f14f6290c38375226584ce659bb9b29339ad927678f7063e8f1ab0797cb39bd713d28ec95c4e49799261d2e0cbf68"' }>
                                            <li class="link">
                                                <a href="pipes/SearchPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SearchPipe</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/CartModule.html" data-type="entity-link" >CartModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-CartModule-9af47928094df1ee91644b95457c2ad6ec4d59138050da92942600309a3a697a5d7b8586c089616c4781650effff29b2307ce36f39cccee30ccc5d505716143c"' : 'data-bs-target="#xs-components-links-module-CartModule-9af47928094df1ee91644b95457c2ad6ec4d59138050da92942600309a3a697a5d7b8586c089616c4781650effff29b2307ce36f39cccee30ccc5d505716143c"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-CartModule-9af47928094df1ee91644b95457c2ad6ec4d59138050da92942600309a3a697a5d7b8586c089616c4781650effff29b2307ce36f39cccee30ccc5d505716143c"' :
                                            'id="xs-components-links-module-CartModule-9af47928094df1ee91644b95457c2ad6ec4d59138050da92942600309a3a697a5d7b8586c089616c4781650effff29b2307ce36f39cccee30ccc5d505716143c"' }>
                                            <li class="link">
                                                <a href="components/CartComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CartComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#pipes-links-module-CartModule-9af47928094df1ee91644b95457c2ad6ec4d59138050da92942600309a3a697a5d7b8586c089616c4781650effff29b2307ce36f39cccee30ccc5d505716143c"' : 'data-bs-target="#xs-pipes-links-module-CartModule-9af47928094df1ee91644b95457c2ad6ec4d59138050da92942600309a3a697a5d7b8586c089616c4781650effff29b2307ce36f39cccee30ccc5d505716143c"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-CartModule-9af47928094df1ee91644b95457c2ad6ec4d59138050da92942600309a3a697a5d7b8586c089616c4781650effff29b2307ce36f39cccee30ccc5d505716143c"' :
                                            'id="xs-pipes-links-module-CartModule-9af47928094df1ee91644b95457c2ad6ec4d59138050da92942600309a3a697a5d7b8586c089616c4781650effff29b2307ce36f39cccee30ccc5d505716143c"' }>
                                            <li class="link">
                                                <a href="pipes/FilterCartPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FilterCartPipe</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/CartRoutingModule.html" data-type="entity-link" >CartRoutingModule</a>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link" >AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CartService.html" data-type="entity-link" >CartService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LoaderService.html" data-type="entity-link" >LoaderService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ProductService.html" data-type="entity-link" >ProductService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interceptors-links"' :
                            'data-bs-target="#xs-interceptors-links"' }>
                            <span class="icon ion-ios-swap"></span>
                            <span>Interceptors</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="interceptors-links"' : 'id="xs-interceptors-links"' }>
                            <li class="link">
                                <a href="interceptors/HttpInterceptor.html" data-type="entity-link" >HttpInterceptor</a>
                            </li>
                            <li class="link">
                                <a href="interceptors/HttpInterceptorInterceptor.html" data-type="entity-link" >HttpInterceptorInterceptor</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interfaces-links"' :
                            'data-bs-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/Brand.html" data-type="entity-link" >Brand</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Brand-1.html" data-type="entity-link" >Brand</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Brands.html" data-type="entity-link" >Brands</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Cart.html" data-type="entity-link" >Cart</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Categories.html" data-type="entity-link" >Categories</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Category.html" data-type="entity-link" >Category</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Category-1.html" data-type="entity-link" >Category</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Data.html" data-type="entity-link" >Data</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Product.html" data-type="entity-link" >Product</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Product-1.html" data-type="entity-link" >Product</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Products.html" data-type="entity-link" >Products</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Subcategory.html" data-type="entity-link" >Subcategory</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});