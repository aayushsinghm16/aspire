<template>
    <section class="" v-if="user.type == 'admin'">
        <h2>Welcome Admin {{user.username}}</h2>
        <div>
            <h4>All loans</h4>
            <div class="all-loans">
                <div v-for="(item, index) in loans" :key="index">
                    <p>Amount : {{item.amount}}</p>
                    <p>Term : {{item.term}}</p>
                    <p>Email : {{item.userEmail}}</p>
                    <button v-if="!item.approved">Approve</button>
                    <h4 v-else>Approved</h4>
                </div>
            </div>
        </div>
    </section>
    <section v-else>
        <p>This is an admin route your not suppose to be here</p>
    </section>
</template>
<script>
import { mapMutations, mapState, mapActions } from 'vuex';
export default {
    mounted() {
        this.getAllLoans();
    },
    computed: {
        ...mapState({
            user: state => state.user,
            loans:state => state.loans
        })
    },
    methods: {
        ...mapActions({
            getAllLoans:'getAllLoans'
        })
    },
}
</script>
<style lang="scss" scoped>
section{
    display: grid;
    width: 50%;
    margin: auto;
    h2{
        margin: 36px 0px;
    }
    .all-loans{
        display: grid;
        grid-row-gap: 1rem;
        margin-top: 1rem;
        div{
            display: grid;
            grid-template-columns: max-content max-content;
            justify-content: space-between;
            align-items: center;
            button{
                grid-column: 2/3;
                grid-row: 1/3;
                color: white;
                background: #0089ff;
                padding: 5px 10px;
                border: none;
                border-radius: 2px;
                cursor: pointer;
                &:hover{
                box-shadow: 0px 0px 5px 0px #0b0b0b6b;
                }
            }
            .disable{
                background: #c4c4c4;
                cursor: no-drop;
                &:hover{
                box-shadow: none;
                }
            }
            h4{
                grid-column: 2/3;
                grid-row: 1/3;
            }
        }
    }
}
</style>