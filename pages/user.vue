<template>
    <section>
        <div class="aside">
            <img src="~assets/images/Logo-main.svg" alt="">
            <p>Trusted way of banking for 3,000+ SMEs and startups in Singapore</p>
            <div class="links">
                <div>
                    <img src="~assets/images/home.svg" alt="">
                    <p>Home</p>
                </div>
                <div>
                    <img src="~assets/images/pay.svg" alt="">
                    <p class="active">Cards</p>
                </div>
                <div>
                    <img src="~assets/images/Payments.svg" alt="">
                    <p>Payments</p>
                </div>
                <div>
                    <img src="~assets/images/Credit.svg" alt="">
                    <p>Credit</p>
                </div>
                <div>
                    <img src="~assets/images/Account.svg" alt="">
                    <p>Profile</p>
                </div>
            </div>
        </div>
        <div class="main">
            <div class="aspire-top-container">
                <div class="aspire-top-bar">
                    <img class="logo" src="~assets/images/Logo.svg" alt="">
                    <p>Account balance</p>
                    <div>
                        <div class="aspire-ss">
                            ss
                        </div>
                        <h2>3000</h2>
                        <div class="add-new-card">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><defs><style>.a{fill:rgba(255,255,255,0);}.b{fill:#23cefd;stroke:#0c365a;stroke-width:0.5px;}</style></defs><g transform="translate(-27.3 -0.445)"><rect class="a" width="16" height="16" transform="translate(27.3 0.445)"/><path class="b" d="M7,0a7,7,0,1,0,7,7A7.008,7.008,0,0,0,7,0Zm3.063,7.583H7.583v2.479a.583.583,0,1,1-1.167,0V7.583H3.938a.583.583,0,1,1,0-1.167H6.417V3.938a.583.583,0,1,1,1.167,0V6.417h2.479a.583.583,0,1,1,0,1.167Zm0,0" transform="translate(28.3 1.445)"/></g></svg>
                            <p>New card</p>
                        </div>
                    </div>
                    
                </div>
                
                
            </div>
            <div class="cards-header-selector">
                    <p class="active">My debit cards</p>
                    <p>All company cards</p>
                </div>
            <div class="desktop-container">
                
                <Cards/>
                <div class="account-options">
                    <div>
                        <img src="~assets/images/Freeze-card.svg" alt="">
                        <p>Freeze Card</p>
                    </div>
                    <div>
                        <img src="~assets/images/Set-spend-limit.svg" alt="">
                        <p>Set spend limit</p>
                    </div>
                    <div>
                        <img src="~assets/images/GPay.svg" alt="">
                        <p>Add to GPay</p>
                    </div>
                    <div>
                        <img src="~assets/images/Replace-card.svg" alt="">
                        <p>Replace card</p>
                    </div>
                    <div>
                        <img src="~assets/images/Deactivate-card.svg" alt="">
                        <p>Cancel card</p>
                    </div>
                </div>
                <div class="cards-details-container">
                    
                    <div class="card-details-header">
                        <div>
                            <img src="~assets/images/Group-11889.svg" alt="">
                            <p>Card details</p>
                        </div>
                        <img src="~assets/images/down-arrow.svg" alt="">
                    </div>
                    <div class="cards-details-options">
                        <div>
                            <img src="~assets/images/home.svg" alt="">
                            <p>Home</p>
                        </div>
                        <div>
                            <img src="~assets/images/pay.svg" alt="">
                            <p>Cards</p>
                        </div>
                        <div>
                            <img src="~assets/images/Payments.svg" alt="">
                            <p>Payments</p>
                        </div>
                        <div>
                            <img src="~assets/images/Credit.svg" alt="">
                            <p>Credit</p>
                        </div>
                        <div>
                            <img src="~assets/images/Account.svg" alt="">
                            <p>Profile</p>
                        </div>
                    </div>
                    <div class="cards-current-section">
                        <div>
                            <img src="~assets/images/Group-118892.svg" alt="">
                            <p>Recent transactions</p>
                        </div>
                        <img src="~assets/images/up-arrow.svg" alt="">
                    </div>
                    <div class="selected-section-details recent-transactions-details">
                        <div class="section-details-list">
                            <img src="~assets/images/file-storage.svg" alt="">
                            <div>
                                <p>Hamleys</p>
                                <span>20 May 2020</span>
                                <div class="refund-container">
                                    <div>
                                        <img src="~assets/images/business-and-finance.svg" alt="">
                                    </div>
                                    <p>Refund on debit card</p>
                                </div>
                            </div>
                            <div class="ammount-container">
                                <p>+S$ 150</p>
                                <img src="~assets/images/next.svg" alt="">
                            </div>
                        </div>
                        <div class="section-details-list">
                            <img src="~assets/images/file-storage.svg" alt="">
                            <div>
                                <p>Hamleys</p>
                                <span>20 May 2020</span>
                                <div class="refund-container">
                                    <div>
                                        <img src="~assets/images/business-and-finance.svg" alt="">
                                    </div>
                                    <p>Refund on debit card</p>
                                </div>
                            </div>
                            <div class="ammount-container">
                                <p>+S$ 150</p>
                                <img src="~assets/images/next.svg" alt="">
                            </div>
                        </div>
                        <div class="section-details-list">
                            <img src="~assets/images/file-storage.svg" alt="">
                            <div>
                                <p>Hamleys</p>
                                <span>20 May 2020</span>
                                <div class="refund-container">
                                    <div>
                                        <img src="~assets/images/business-and-finance.svg" alt="">
                                    </div>
                                    <p>Refund on debit card</p>
                                </div>
                            </div>
                            <div class="ammount-container">
                                <p>+S$ 150</p>
                                <img src="~assets/images/next.svg" alt="">
                            </div>
                        </div>
                    </div>
                    <div class="view-all-transactions">
                        <p>View all card transactions</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import Cards from '../components/cards.vue'
export default {
    components:{
        Cards
    }
}
</script>
<style lang="scss" scoped>
section{
    background: rgba(12, 54, 90, 1);
    @mixin set-text($color,$size,$weight){
        color: $color;
        font-size: $size;
        font-weight: $weight;
        font-family: sans-serif;
    }
    .aspire-top-container{
        // background: rgba(12, 54, 90, 1);
    }
    .aspire-top-bar{
        display: grid;
        padding: 1.5rem;
        position: relative;
        grid-row-gap: 1rem;
        p{
            @include set-text(rgba(255, 255, 255, 1),0.875rem ,normal );
        }
        .logo{
            position: absolute;
            right: 24px;
            top: 12px;
        }
        &>div{
            display: grid;
            grid-template-columns: max-content max-content 1fr;
            grid-column-gap: 0.625rem;
            .aspire-ss{
                background: rgba(1, 209, 103, 1);
                width: 2.5rem;
                height: 1.375rem;
                border-radius: 0.25rem;
                display: grid;
                place-items: center;
                @include set-text(rgba(255, 255, 255, 1),0.75rem ,normal );
            }
            h2{
                @include set-text(rgba(255, 255, 255, 1),1.5rem ,bold );
            }
            .add-new-card{
                display: grid;
                grid-template-columns: max-content max-content;
                align-items: center;
                justify-self: end;
                grid-column-gap: 6px;
                p{
                    @include set-text(rgba(35, 206, 253, 1),0.75rem ,normal );
                    
                }
            }
        }
    }
    .cards-header-selector{
        display: grid;
        grid-template-columns: max-content max-content;
        grid-column-gap: 2rem;
        padding: 0px 1.5rem;
        margin-bottom: 1.5rem;
        p{
            @include set-text(rgba(255, 255, 255, 0.5),0.75rem ,normal );
            padding-bottom: 0.375rem;
        }
        .active{
            color: rgba(255, 255, 255, 1);
            border-bottom: 2px solid rgba(35, 206, 253, 1);
        }
    }
    .account-options{
        padding: 20px 24px;
        display: grid;
        grid-template-columns: repeat( auto-fit, minmax(60px, 60px) );
        // grid-column-gap: 1.875rem;
        background: #EDF3FF;
        border-top-left-radius: 16px;
        border-top-right-radius: 16px;
        div{
            text-align: center;
            p{
                color: #0C365A;
                font-size: 0.8125rem;
                margin-top: 0.375rem;
            }
        }
    }
    .cards-details-container{
        background: white;
        padding-top: 24px;
        .card-details-header{
            margin: 0px 24px;
            background: #FAFCFF;
            display: grid;
            grid-template-columns: max-content max-content;
            justify-content: space-between;
            align-items: center;
            padding: 1.5rem;
            box-shadow: 0px 0px 8px 2px #0000000a;
            border-top-left-radius: 16px;
            border-top-right-radius: 16px;
            div{
                display: grid;
                grid-template-columns: max-content max-content;
                align-items: center;
                grid-column-gap: 0.75rem;
            }
        }
        .cards-details-options{
            padding: 8px 30px;
            box-shadow: 0px -3px 6px 1px #00000014;
            display: grid;
            // justify-content: space-between;
            grid-template-columns: repeat( auto-fit, minmax(60px, 60px) );
            div{
                
                display: grid;
                /* flex-direction: column; */
                justify-items: center;
                align-content: space-around;
                p{
                    font-size: 13px;
                    color: #0C365A;
                }
            }
        }
        .cards-current-section{
            margin: 0px 24px;
            background: #FAFCFF;
            display: grid;
            grid-template-columns: max-content max-content;
            justify-content: space-between;
            align-items: center;
            padding: 1.5rem;
            box-shadow: 0px 0px 8px 2px #0000000a;
            border-bottom-left-radius: 16px;
            border-bottom-right-radius: 16px;
            div{
                display: grid;
                grid-template-columns: max-content max-content;
                align-items: center;
                grid-column-gap: 0.75rem;
            }
        }
        .recent-transactions-details{
            border: 1px solid #F0F0F0;
            border-top: none;
            margin: 0px 1.5rem;
            border-bottom-left-radius: 16px;
            border-bottom-right-radius: 16px;
            margin-top: -8px;
            padding-top: 1rem;
            position: relative;
            background: white;
            z-index: 2;
            .section-details-list{
                margin: 0rem 24px;
                padding: 1rem 0px;
                border-bottom: 1px solid #F5F5F5;
                display: grid;
                grid-template-columns: max-content max-content max-content;
                grid-column-gap: 0.75rem;
                p{
                    color: #222222;
                    font-size: 0.75rem;
                    margin-bottom: 4px;
                }
                span{
                    color: #AAAAAA;
                    font-size: 13px;
                    
                }
                .refund-container{
                    margin-top: 0.75rem;
                    grid-column-gap: 0.5rem;
                    display: grid;
                    grid-template-columns: max-content max-content;
                    div{
                        height: 20px;
                        background: #325BAF;
                        width: 24px;
                        border-radius: 1rem;
                        display: grid;
                        place-content: center;
                    }
                }
                .ammount-container{
                    display: grid;
                    grid-template-columns: max-content max-content;
                    grid-column-gap: 8px;
                    align-items: center;
                    align-self: baseline;
                    p{
                        margin: 0px;
                        color: #01D167;
                        font-size: 0.75rem;
                        font-weight: 500;
                    }
                }
                &:last-child{
                    border: none;
                }
            }
            
        }
        .view-all-transactions{
            margin: -8px 1.5rem 86px;
            padding: 24px 0px 16px;
            text-align: center;
            color: #01D167;
            font-size: 13px;
            font-weight: 500;
            border: 1px solid #DDFFEC;
            background: #EDFFF5;
        }
    }
    @media only screen and (min-width: 768px)  {
        display: grid;
        grid-template-columns: 25% 75%;
        height: 100vh;
        width: 100vw;
        overflow: hidden;
        background: none;
        .aside{
            background: rgba(12, 54, 90, 1);
            height: 100vh;
            padding: 48px;
            img{
                margin-bottom: 20px;
            }
            p{
                font-size: 15px;
                color: rgba(255, 255, 255, 0.3);
                margin-bottom: 80px;
            }
            .links{
                display: grid;
                grid-row-gap: 60px;
                div{
                    display: grid;
                    grid-template-columns: max-content max-content;
                    grid-column-gap: 1rem;
                }
                p{
                    margin: 0px;
                    color: rgba(255, 255, 255, 1);
                }
                .active{
                    color: rgba(1, 209, 103, 1);
                }
            }
        }
        .main{
            background: white;
            padding: 36px;
            overflow: auto;
            .aspire-top-container{
                background: none;
                .aspire-top-bar{
                    .logo{
                        display: none;
                    }
                    p{
                        color: #222222;
                    }
                    &>div{
                        h2{
                            color: #222222;
                        }
                        .add-new-card{
                            height: 35px;
                            background: rgba(50, 91, 175, 1);
                            padding: 8px 12px ;
                            border-radius: 4px;
                            svg{
                                path{
                                    fill: white;
                                    stroke: rgba(50, 91, 175, 1);
                                }
                                
                            }
                            p{
                                color: white ;
                            }   
                        }
                    }
                }
            }
            .cards-header-selector{
                p{
                    color: rgba(34, 34, 34, 0.3);
                    font-size: 14px;
                }
                .active{
                    color: rgba(34, 34, 34, 1);
                    border-color: rgba(35, 206, 253, 1);
                    font-weight: 700;
                }
            }
            .desktop-container{
                display: grid;
                grid-template-columns: 1fr 1fr;
                grid-template-rows: max-content;
                grid-column-gap: 2.875rem;
                box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.08);
                border-radius: 0.5rem;
                padding: 60px 40px;
                .account-options{
                    grid-column: 1/2;
                    grid-row: 2/3;
                    height: max-content;
                    border-radius: 16px;
                    grid-template-columns: repeat(auto-fill, minmax(80px, 1fr));
                }
                .cards-details-container{
                    grid-column: 2/3;
                    grid-row: 1/3;
                    .card-details-header{
                        margin-bottom: 24px;
                        border-radius: 16px;
                    }
                    .cards-details-options{
                        display: none;
                    }
                    .cards-current-section{
                        border: 1px solid rgba(245, 245, 245, 1);
                        border-radius: 16px;
                        position: relative;
                        z-index: 2;
                    }
                    .recent-transactions-details{
                        margin-top: -18px;
                        position: unset;
                        padding-top: 2rem;
                    }
                }
                .view-all-transactions{
                    margin-bottom: 0px;
                }
                
            }
        }
    }
}
</style>