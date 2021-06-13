<template>
    <div>
        <div class="cards-list">
            <div class="card-container">
                <div class="show-card-number">
                    <img src="~assets/images/remove_red_eye-24px.svg" alt="">
                    <p> Show card number</p>
                </div>
                <div class="main-card">
                    <img src="~assets/images/Logo-on-card.svg" alt="">
                    <p class="name">
                        Mark Henry
                    </p>
                    <div class="card-number-display">
                        <div>
                            <span class="dots"></span>
                            <span class="dots"></span>
                            <span class="dots"></span>
                            <span class="dots"></span>
                        </div>
                        <div>
                            <span class="dots"></span>
                            <span class="dots"></span>
                            <span class="dots"></span>
                            <span class="dots"></span>
                        </div>
                        <div>
                            <span class="dots"></span>
                            <span class="dots"></span>
                            <span class="dots"></span>
                            <span class="dots"></span>
                        </div>
                        <div>
                            <span>2</span>
                            <span>0</span>
                            <span>2</span>
                            <span>0</span>
                        </div>
                    </div>
                    <div class="validity">
                        <p>Thru: 12/20</p>
                        <p>CVV: * * *</p>
                    </div>
                    <img class="visa-tag" src="~assets/images/Visa-Logo.svg" alt="">
                </div>
            </div>
        </div>
        <div class="cards-swip-container">
            <div class="active">

            </div>
            <div>

            </div>
            <div>

            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
.cards-list{
    margin: 0px 1.5rem;
    .card-container{
        position: relative;
        z-index: 4;
        width: calc(100vw - 48px);
        .show-card-number{
            display: grid;
            grid-template-columns: max-content max-content;
            grid-column-gap: 0.375rem;
            align-items: center;
            background: white;
            position: absolute;
            z-index: -1;
            right: 0px;
            top: -28px;
            border-top-left-radius: 8px;
            border-top-right-radius: 8px;
            padding: 6px 10px 12px;
            p{
                color: rgba(1, 209, 103, 1);
                font-size: 0.75rem;
            }
        }
        .main-card{
            border-radius: 8px;
            background: rgba(1, 209, 103, 1);
            padding: 24px;
            
            &>img{
                display: inherit;
                margin-left: auto;
                margin-bottom: 1.5rem;
            }
            .name{
                font-size: 22px;
                color: white;
                font-weight: 500;
                margin-bottom: 24px;
            }
            .card-number-display{
                display: grid;
                grid-template-columns: max-content max-content max-content max-content;
                grid-column-gap: 1.5rem;
                align-items: center;
                margin-bottom: 0.75rem;
                div{
                    grid-template-columns: max-content max-content max-content max-content;
                    grid-column-gap: 6px;
                    display: grid;
                    .dots{
                        background: white;
                        height: 0.5rem;
                        width: 0.5rem;
                        border-radius: 50%;
                        display: grid;
                    }
                    span{
                        color: white;
                        font-size: 0.875rem;
                    }
                }
            }
            .validity{
                display: grid;
                grid-template-columns: max-content max-content;
                grid-column-gap: 1.875rem;
                margin-bottom: 0.25rem;
                p{
                    color: white;
                    font-size: 13px;
                    font-weight: 500;
                }
            }
            .visa-tag{
                display: inherit;
                text-align: right;
                margin-bottom: 0px;
            }
        }
    }
}
.cards-swip-container{
    display: grid;
    grid-template-columns: repeat( auto-fit, minmax(8px, max-content) );   
    grid-column-gap: 0.5rem;
    padding: 1rem 1.5rem;
    justify-content: center;
    div{
        height: 8px;
        width: 8px;
        background: rgba(1, 209, 103, 0.10);
        border-radius: 50%;
    }
    .active{
        width: 1rem;
        background: rgba(1, 209, 103, 1);
        border-radius: 1.5rem;
    }
}
@media only screen and (min-width: 768px){
    .cards-list{
        margin: 0px;
        .card-container{
            width: calc( 100% );
        }
    }
}
</style>