<template>
    <v-simple-table dense class="grey lighten-3">
        <template v-slot:top>
            <v-dialog
                v-model="dialog"
                max-width="500px"
            >
                <v-card>
                    <v-card-title>
                        <span class="text-h5">{{editedItem.name}}</span>
                    </v-card-title>
					<div v-if="editedIndex > -1">
						<v-img 
								v-bind:src="require('../assets/itempic/' + editedItem.name + '.jpg')" height=200pt>
						</v-img>
					</div>
                    <v-form
                        ref="form"
                        v-model="valid"
                        lazy-validation>
                        <v-card-text>
                            <v-text-field
                                label="請輸入數量"
                                v-model="editedItem.quantity"
                                :rules="[rules.required, rules.quantity, rules.length]"
                                required>
                            </v-text-field>
                            <v-spacer></v-spacer>
                            <v-text-field
                                label="備註"
                                v-model="editedItem.remark"
                                required>
                            </v-text-field>
                        </v-card-text>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn
                                color="blue darken-1"
                                text
                                @click="close"
                            >
                                取消
                            </v-btn>
                            <v-btn
                                color="blue darken-1"
                                text
                                :disabled ="!valid"
                                @click="save"
                            >
                                儲存
                            </v-btn>
                        </v-card-actions>
                    </v-form>
                </v-card>
            </v-dialog>
        </template>
        <template v-slot:default>
             <tbody>
                    <v-row no-gutters>
                        <v-col
                            v-for="item in layer3"
                            :key="item.name"
                            cols=4
                        >
                        <div class="item" :style="getItemStyle(item)">
                            <div v-if="item.quantity==item.exact_quantity">{{ item.name }}</div>
                            <div v-if="item.quantity==item.exact_quantity">{{ item.quantity }} / {{ item.exact_quantity }}</div>
                            <div v-if="item.quantity!=item.exact_quantity">{{ item.name }}</div>
                            <div v-if="item.quantity!=item.exact_quantity">{{ item.quantity }} / {{ item.exact_quantity }}</div>
                            
                            <div class="red-text">{{ item.remark }}</div>
                                <v-btn
                                class="ma-0 pa-0"
                                text
                                @click="editItem(item)"
                                x-small
                                >
                                <v-icon x-small>
                                mdi-pencil
                                </v-icon>
                                </v-btn>
                        </div>    
                        </v-col>
                    </v-row>
                </tbody>
        </template> 
    </v-simple-table>
</template>

<script>
    import axios from 'axios';
    export default {
        data(){
            return{
                dialog: false,
                layer3: [],
                editedIndex: -1,
                editedItem: {
                    name: '',
                    quantity: 0,
                    exact_quantity: 0,
                    remark: '',
                    edit: 0,
                },
                defaultItem: {
                    name: '',
                    quantity: 0,
                    exact_quantity: 0,
                    remark: '',
                    edit: 0,
                },
                exact: [],
                valid: true,
                rules: {
                    required: value => !!value || '數量不能為空',
                    quantity: value => /(?=.*\d)/.test(value) || '數量只能是一個0~99的數字',
                    length: value => value && value.length <= 2 || '數量只能是一個0~99的數字'
                }
            }
        },

        async mounted() {
            let record_id = this.$route.query.rNo;
            let pNo = this.$route.query.pNo;

            await axios.get('/getExactNum', {params:{pNo : pNo, layer : 3}})
            .then((resp) => {
                let data_num = resp.data.length;

                for(var i=0; i<data_num; i++){

                    var temp_ex={
                    itemName: resp.data[i].itemName, 
                    quantity: resp.data[i].quantity}

                    this.exact.push(temp_ex)
                }
            }).catch((error) => {
                alert('Database Error ' +error)
            })

            await axios.get('/getMedNum', {params:{pNo : pNo, layer : 3, rNo : record_id}})
            .then((resp) => {
                let data_num = resp.data.length;
                
                for(var i=0; i<data_num; i++){
                    for(var j=0; j<data_num; j++){
                        if(resp.data[i].itemName == this.exact[j].itemName){
                            if(resp.data[i].remark == 'null')
                                resp.data[i].remark = null
                            var index = this.layer3.findIndex(function(item, index, array){
                                return item.name === resp.data[i].name
                            })
                            var temp={
                                name: resp.data[i].itemName, 
                                quantity: resp.data[i].quantity,
                                exact_quantity: this.exact[j].quantity,
                                remark: resp.data[i].remark}
                            if(index!=-1)
                                this.layer3.splice(index,1)
                            this.layer3.push(temp)

                            this.$emit("layer_insert",resp.data[i].itemName, resp.data[i].quantity, 3, resp.data[i].remark)

                            break
                        }
                    }
                }
            
            }).catch((error) => {
                alert('Database Error ' +error)
            })
        },

        watch: {
            dialog() {
                this.$refs.form.resetValidation()
            }
        },

        methods: {
            editItem (item) {
                this.editedIndex = this.layer3.indexOf(item)
                this.editedItem = Object.assign({}, item)
                this.dialog = true
            },
            close () {
                this.dialog = false
                this.$nextTick(() => {
                    this.editedItem = Object.assign({}, this.defaultItem)
                    this.editedIndex = -1
                })
            },

            save () {
                if (this.editedIndex > -1) {
                    var temp = this.editedItem.quantity - this.editedItem.exact_quantity
                    Object.assign(this.layer3[this.editedIndex], this.editedItem)
                    this.$emit("layer_change", this.editedItem.name, temp, this.editedItem.quantity, this.editedItem.remark, 3)
                } else {
                    this.layer3.push(this.editedItem)
                }
                this.close()
            },
            getItemStyle(item) {
                if (item.quantity == item.exact_quantity) {

                    return { backgroundColor: '#CEFFCE',
                             fontSize: '14px'};
                } else {
                return { backgroundColor: '#FFD2D2',
                         fontSize: '14px'};
                }
            }
        }
    }
</script>