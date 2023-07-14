<template>
  <div d-flex flex-column mb-6>
    <v-row no-gutters>
      <v-col>
        <v-card
          class="pa-0"
          outlined
          tile
          v-if="med1_change==0 && med1_actual==0"
          style="background-color: #F0F0F0;">
          <v-card-text class="py-2 text-center">
            <h5>{{ med1_change }}/{{ med1_actual }}</h5>
            <v-spacer></v-spacer>
            <h5>({{ isEqual1() }})</h5>
          </v-card-text>
          <div class="py-0 text-center">
            <v-btn
              class="mt-n6 pa-0"
              text
              @click="dialog1 = true, new_num[0]=parseInt(med1_change)"
              x-small
            >
              <v-icon x-small>
                mdi-pencil
              </v-icon>
              Succi
            </v-btn>
          </div>
        </v-card>
        <v-card
          class="pa-0"
          outlined
          tile
          v-else-if="isEqual1()==0"
          style="background-color: #CEFFCE;">
          <v-card-text class="py-2 text-center">
            <h5>{{ med1_change }}/{{ med1_actual }}</h5>
            <v-spacer></v-spacer>
            <h5>({{ isEqual1() }})</h5>
          </v-card-text>
          <div class="py-0 text-center">
            <v-btn
              class="mt-n6 pa-0"
              text
              @click="dialog1 = true, new_num[0]=parseInt(med1_change)"
              x-small
            >
              <v-icon x-small>
                mdi-pencil
              </v-icon>
              Succi
            </v-btn>
          </div>
        </v-card>
        <v-card
          class="pa-0"
          outlined
          tile
          v-else-if="isEqual1()!=0"
          style="background-color: #FFD2D2;">
          <v-card-text class="py-2 text-center">
            <h5>{{ med1_change }}/{{ med1_actual }}</h5>
            <v-spacer></v-spacer>
            <h5 v-if="isEqual1() >0">
              (+{{ isEqual1() }})
            </h5>
            <h5 v-else>
              ({{ isEqual1() }})
            </h5>
          </v-card-text>
          <div class="py-0 text-center">
            <v-btn
              class="mt-n6 pa-0"
              text
              @click="dialog1 = true, new_num[0]=parseInt(med1_change)"
              x-small
            >
              <v-icon x-small>
                mdi-pencil
              </v-icon>
              Succi
            </v-btn>
          </div>
        </v-card>
      </v-col>
      <v-col>
        <v-card
          class="pa-0"
          outlined
          tile
          v-if="med2_change==0 && med2_actual==0"
          style="background-color: #F0F0F0;">
          <v-card-text class="py-2 text-center">
            <h5>{{ med2_change }}/{{ med2_actual }}</h5>
            <v-spacer></v-spacer>
            <h5> 
              ({{ isEqual2() }})
            </h5>
          </v-card-text>
          <div class="py-0 text-center">
            <v-btn
              class="mt-n6 pa-0"
              text
              @click="dialog2 = true, new_num[1]=parseInt(med2_change)"
              x-small
            >
              <v-icon x-small>
                mdi-pencil
              </v-icon>
              Nalox
            </v-btn>
          </div>
        </v-card>
        <v-card
          class="pa-0"
          outlined
          tile
          v-else-if="isEqual2()==0"
          style="background-color: #CEFFCE;">
          <v-card-text class="py-2 text-center">
            <h5>{{ med2_change }}/{{ med2_actual }}</h5>
            <v-spacer></v-spacer>
            <h5> 
              ({{ isEqual2() }})
            </h5>
          </v-card-text>
          <div class="py-0 text-center">
            <v-btn
              class="mt-n6 pa-0"
              text
              @click="dialog2 = true, new_num[1]=parseInt(med2_change)"
              x-small
            >
              <v-icon x-small>
                mdi-pencil
              </v-icon>
              Nalox
            </v-btn>
          </div>
        </v-card>
        <v-card
          class="pa-0"
          outlined
          tile
          v-else-if="isEqual2()!=0"
          style="background-color: #FFD2D2;">
          <v-card-text class="py-2 text-center">
            <h5>{{ med2_change }}/{{ med2_actual }}</h5>
            <v-spacer></v-spacer>
            <h5 v-if="isEqual2() >0">
              (+{{ isEqual2() }})
            </h5>
            <h5 v-else>
              ({{ isEqual2() }})
            </h5>
          </v-card-text>
          <div class="py-0 text-center">
            <v-btn
              class="mt-n6 pa-0"
              text
              @click="dialog2 = true, new_num[1]=parseInt(med2_change)"
              x-small
            >
              <v-icon x-small>
                mdi-pencil
              </v-icon>
              Nalox
            </v-btn>
          </div>
        </v-card>
      </v-col>
      <v-col>
        <v-card
          class="pa-0"
          outlined
          tile
          v-if="med3_change==0 && med3_actual==0"
          style="background-color: #F0F0F0;">
          <v-card-text class="py-2 text-center">
            <h5>{{ med3_change }}/{{ med3_actual }}</h5>
            <v-spacer></v-spacer>
            <h5> 
              ({{ isEqual3() }})
            </h5>
          </v-card-text>
          <div class="py-0 text-center">
            <v-btn
              class="mt-n6 pa-0"
              text
              @click="dialog3 = true, new_num[2]=parseInt(med3_change)"
              x-small
            >
              <v-icon x-small>
                mdi-pencil
              </v-icon>
              Lasix
            </v-btn>
          </div>
        </v-card>
        <v-card
          class="pa-0"
          outlined
          tile
          v-else-if="isEqual3()==0"
          style="background-color: #CEFFCE;">
          <v-card-text class="py-2 text-center">
            <h5>{{ med3_change }}/{{ med3_actual }}</h5>
            <v-spacer></v-spacer>
            <h5> 
              ({{ isEqual3() }})
            </h5>
          </v-card-text>
          <div class="py-0 text-center">
            <v-btn
              class="mt-n6 pa-0"
              text
              @click="dialog3 = true, new_num[2]=parseInt(med3_change)"
              x-small
            >
              <v-icon x-small>
                mdi-pencil
              </v-icon>
              Lasix
            </v-btn>
          </div>
        </v-card>
        <v-card
          class="pa-0"
          outlined
          tile
          v-else-if="isEqual3()!=0"
          style="background-color: #FFD2D2;">
          <v-card-text class="py-2 text-center">
            <h5>{{ med3_change }}/{{ med3_actual }}</h5>
            <v-spacer></v-spacer>
            <h5 v-if="isEqual3()>0">
              (+{{ isEqual3() }})
            </h5>
            <h5 v-else>
              ({{ isEqual3() }})
            </h5>
          </v-card-text>
          <div class="py-0 text-center">
            <v-btn
              class="mt-n6 pa-0"
              text
              @click="dialog3 = true, new_num[2]=parseInt(med3_change)"
              x-small
            >
              <v-icon x-small>
                mdi-pencil
              </v-icon>
              Lasix
            </v-btn>
          </div>
        </v-card>
      </v-col>
      <v-col>
        <v-card
          class="pa-0"
          outlined
          tile
          v-if="med4_change==0 && med4_actual==0"
          style="background-color: #F0F0F0;">
          <v-card-text class="py-2 text-center">
            <h5>{{ med4_change }}/{{ med4_actual }}</h5>
            <v-spacer></v-spacer>
            <h5> 
              ({{ isEqual4() }})
            </h5>
          </v-card-text>
          <div class="py-0 text-center">
            <v-btn
              class="mt-n6 pa-0"
              text
              @click="dialog4 = true, new_num[3]=parseInt(med4_change)"
              x-small
            >
              <v-icon x-small>
                mdi-pencil
              </v-icon>
              Solu-c
            </v-btn>
          </div>
        </v-card>
        <v-card
          class="pa-0"
          outlined
          tile
          v-else-if="isEqual4()==0"
          style="background-color: #CEFFCE;">
          <v-card-text class="py-2 text-center">
            <h5>{{ med4_change }}/{{ med4_actual }}</h5>
            <v-spacer></v-spacer>
            <h5> 
              ({{ isEqual4() }})
            </h5>
          </v-card-text>
          <div class="py-0 text-center">
            <v-btn
              class="mt-n6 pa-0"
              text
              @click="dialog4 = true, new_num[3]=parseInt(med4_change)"
              x-small
            >
              <v-icon x-small>
                mdi-pencil
              </v-icon>
              Solu-c
            </v-btn>
          </div>
        </v-card>
        <v-card
          class="pa-0"
          outlined
          tile
          v-else-if="isEqual4()!=0"
          style="background-color: #FFD2D2;">
          <v-card-text class="py-2 text-center">
            <h5>{{ med4_change }}/{{ med4_actual }}</h5>
            <v-spacer></v-spacer>
            <h5 v-if="isEqual4()>0">
              (+{{ isEqual4() }})
            </h5>
            <h5 v-else>
              ({{ isEqual4() }})
            </h5>
          </v-card-text>
          <div class="py-0 text-center">
            <v-btn
              class="mt-n6 pa-0"
              text
              @click="dialog4 = true, new_num3=parseInt(med4_change)"
              x-small
            >
              <v-icon x-small>
                mdi-pencil
              </v-icon>
              Solu-c
            </v-btn>
          </div>
        </v-card>
      </v-col>
      <v-col>
        <v-card
          class="pa-0"
          outlined
          tile
          v-if="med5_change==0 && med5_actual==0"
          style="background-color: #F0F0F0;">
          <v-card-text class="py-2 text-center">
            <h5>{{ med5_change }}/{{ med5_actual }}</h5>
            <v-spacer></v-spacer>
            <h5> 
              ({{ isEqual5() }})
            </h5>
          </v-card-text>
          <div class="py-0 text-center">
            <v-btn
              class="mt-n6 pa-0"
              text
              @click="dialog5 = true, new_num[4]=parseInt(med5_change)"
              x-small
            >
              <v-icon x-small>
                mdi-pencil
              </v-icon>
              NTG
            </v-btn>
          </div>
        </v-card>
        <v-card
          class="pa-0"
          outlined
          tile
          v-else-if="isEqual5()==0"
          style="background-color: #CEFFCE;">
          <v-card-text class="py-2 text-center">
            <h5>{{ med5_change }}/{{ med5_actual }}</h5>
            <v-spacer></v-spacer>
            <h5> 
              ({{ isEqual5() }})
            </h5>
          </v-card-text>
          <div class="py-0 text-center">
            <v-btn
              class="mt-n6 pa-0"
              text
              @click="dialog5 = true, new_num[4]=parseInt(med5_change)"
              x-small
            >
              <v-icon x-small>
                mdi-pencil
              </v-icon>
              NTG
            </v-btn>
          </div>
        </v-card>
        <v-card
          class="pa-0"
          outlined
          tile
          v-else-if="isEqual5()!=0"
          style="background-color: #FFD2D2;">
          <v-card-text class="py-2 text-center">
            <h5>{{ med5_change }}/{{ med5_actual }}</h5>
            <v-spacer></v-spacer>
            <h5 v-if="isEqual5()>0">
              (+{{ isEqual5() }})
            </h5>
            <h5 v-else>
              ({{ isEqual5() }})
            </h5>
          </v-card-text>
          <div class="py-0 text-center">
            <v-btn
              class="mt-n6 pa-0"
              text
              @click="dialog5 = true, new_num[4]=parseInt(med5_change)"
              x-small
            >
              <v-icon x-small>
                mdi-pencil
              </v-icon>
              NTG
            </v-btn>
          </div>
        </v-card>
      </v-col>
    </v-row>
    
    <v-row no-gutters>
      <v-col>
        <v-card
          class="pa-0"
          outlined
          tile
          v-if="med6_change==0 && med6_actual==0"
          style="background-color: #F0F0F0;">
          <v-card-text class="py-2 text-center">
            <h5>{{ med6_change }}/{{ med6_actual }}</h5>
            <v-spacer></v-spacer>
            <h5> 
              ({{ isEqual6() }})
            </h5>
          </v-card-text>
          <div class="py-0 text-center">
            <v-btn
              class="mt-n6 pa-0"
              text
              @click="dialog6 = true, new_num[5]=parseInt(med6_change)"
              x-small
            >
              <v-icon x-small>
                mdi-pencil
              </v-icon>
              Dobut
            </v-btn>
          </div>
        </v-card>
        <v-card
          class="pa-0"
          outlined
          tile
          v-else-if="isEqual6()==0"
          style="background-color: #CEFFCE;">
          <v-card-text class="py-2 text-center">
            <h5>{{ med6_change }}/{{ med6_actual }}</h5>
            <v-spacer></v-spacer>
            <h5> 
              ({{ isEqual6() }})
            </h5>
          </v-card-text>
          <div class="py-0 text-center">
            <v-btn
              class="mt-n6 pa-0"
              text
              @click="dialog6 = true, new_num[5]=parseInt(med6_change)"
              x-small
            >
              <v-icon x-small>
                mdi-pencil
              </v-icon>
              Dobut
            </v-btn>
          </div>
        </v-card>
        <v-card
          class="pa-0"
          outlined
          tile
          v-else-if="isEqual6()!=0"
          style="background-color: #FFD2D2;">
          <v-card-text class="py-2 text-center">
            <h5>{{ med6_change }}/{{ med6_actual }}</h5>
            <v-spacer></v-spacer>
            <h5 v-if="isEqual6()>0">
              (+{{ isEqual6() }})
            </h5>
            <h5 v-else>
              ({{ isEqual6() }})
            </h5>
          </v-card-text>
          <div class="py-0 text-center">
            <v-btn
              class="mt-n6 pa-0"
              text
              @click="dialog6 = true, new_num[5]=parseInt(med6_change)"
              x-small
            >
              <v-icon x-small>
                mdi-pencil
              </v-icon>
              Dobut
            </v-btn>
          </div>
        </v-card>
      </v-col>
      <v-col>
        <v-card
          class="pa-0"
          outlined
          tile
          v-if="med7_change==0 && med7_actual==0"
          style="background-color: #F0F0F0;">
          <v-card-text class="py-2 text-center">
            <h5>{{ med7_change }}/{{ med7_actual }}</h5>
            <v-spacer></v-spacer>
            <h5> 
              ({{ isEqual7() }})
            </h5>
          </v-card-text>
          <div class="py-0 text-center">
            <v-btn
              class="mt-n6 pa-0"
              text
              @click="dialog7 = true, new_num[6]=parseInt(med7_change)"
              x-small
            >
              <v-icon x-small>
                mdi-pencil
              </v-icon>
              Isopt
            </v-btn>
          </div>
        </v-card>
        <v-card
          class="pa-0"
          outlined
          tile
          v-else-if="isEqual7()==0"
          style="background-color: #CEFFCE;">
          <v-card-text class="py-2 text-center">
            <h5>{{ med7_change }}/{{ med7_actual }}</h5>
            <v-spacer></v-spacer>
            <h5> 
              ({{ isEqual7() }})
            </h5>
          </v-card-text>
          <div class="py-0 text-center">
            <v-btn
              class="mt-n6 pa-0"
              text
              @click="dialog7 = true, new_num[6]=parseInt(med7_change)"
              x-small
            >
              <v-icon x-small>
                mdi-pencil
              </v-icon>
              Isopt
            </v-btn>
          </div>
        </v-card>
        <v-card
          class="pa-0"
          outlined
          tile
          v-else-if="isEqual7() !=0"
          style="background-color: #FFD2D2;">
          <v-card-text class="py-2 text-center">
            <h5>{{ med7_change }}/{{ med7_actual }}</h5>
            <v-spacer></v-spacer>
            <h5 v-if="isEqual7()>0">
              (+{{ isEqual7() }})
            </h5>
            <h5 v-else>
              ({{ isEqual7() }})
            </h5>
          </v-card-text>
          <div class="py-0 text-center">
            <v-btn
              class="mt-n6 pa-0"
              text
              @click="dialog7 = true, new_num[6]=parseInt(med7_change)"
              x-small
            >
              <v-icon x-small>
                mdi-pencil
              </v-icon>
              Isopt
            </v-btn>
          </div>
        </v-card>
      </v-col>
      <v-col>
        <v-card
          class="pa-0"
          outlined
          tile
          v-if="med8_change==0 && med8_actual==0"
          style="background-color: #F0F0F0;">
          <v-card-text class="py-2 text-center">
            <h5>{{ med8_change }}/{{ med8_actual }}</h5>
            <v-spacer></v-spacer>
            <h5> 
              ({{ isEqual8() }})
            </h5>
          </v-card-text>
          <div class="py-0 text-center">
            <v-btn
              class="mt-n6 pa-0"
              text
              @click="dialog8 = true, new_num[7]=parseInt(med8_change)"
              x-small
            >
              <v-icon x-small>
                mdi-pencil
              </v-icon>
              Levop
            </v-btn>
          </div>
        </v-card>
        <v-card
          class="pa-0"
          outlined
          tile
          v-else-if="isEqual8()==0"
          style="background-color: #CEFFCE;">
          <v-card-text class="py-2 text-center">
            <h5>{{ med8_change }}/{{ med8_actual }}</h5>
            <v-spacer></v-spacer>
            <h5> 
              ({{ isEqual8() }})
            </h5>
          </v-card-text>
          <div class="py-0 text-center">
            <v-btn
              class="mt-n6 pa-0"
              text
              @click="dialog8 = true, new_num[7]=parseInt(med8_change)"
              x-small
            >
              <v-icon x-small>
                mdi-pencil
              </v-icon>
              Levop
            </v-btn>
          </div>
        </v-card>
        <v-card
          class="pa-0"
          outlined
          tile
          v-else-if="isEqual8() !=0"
          style="background-color: #FFD2D2;">
          <v-card-text class="py-2 text-center">
            <h5>{{ med8_change }}/{{ med8_actual }}</h5>
            <v-spacer></v-spacer>
            <h5 v-if="isEqual8()>0">
              (+{{ isEqual8() }})
            </h5>
            <h5 v-else>
              ({{ isEqual8() }})
            </h5>
          </v-card-text>
          <div class="py-0 text-center">
            <v-btn
              class="mt-n6 pa-0"
              text
              @click="dialog8 = true, new_num[7]=parseInt(med8_change)"
              x-small
            >
              <v-icon x-small>
                mdi-pencil
              </v-icon>
              Levop
            </v-btn>
          </div>
        </v-card>
      </v-col>
      <v-col>
        <v-card
          class="pa-0"
          outlined
          tile
          v-if="med9_change==0 && med9_actual==0"
          style="background-color: #F0F0F0;">
          <v-card-text class="py-2 text-center">
            <h5>{{ med9_change }}/{{ med9_actual }}</h5>
            <v-spacer></v-spacer>
            <h5> 
              ({{ isEqual9() }})
            </h5>
          </v-card-text>
          <div class="py-0 text-center">
            <v-btn
              class="mt-n6 pa-0"
              text
              @click="dialog9 = true, new_num[8]=parseInt(med9_change)"
              x-small
            >
              <v-icon x-small>
                mdi-pencil
              </v-icon>
              Digox
            </v-btn>
          </div>
        </v-card>
        <v-card
          class="pa-0"
          outlined
          tile
          v-else-if="isEqual9()==0"
          style="background-color: #CEFFCE;">
          <v-card-text class="py-2 text-center">
            <h5>{{ med9_change }}/{{ med9_actual }}</h5>
            <v-spacer></v-spacer>
            <h5> 
              ({{ isEqual9() }})
            </h5>
          </v-card-text>
          <div class="py-0 text-center">
            <v-btn
              class="mt-n6 pa-0"
              text
              @click="dialog9 = true, new_num[8]=parseInt(med9_change)"
              x-small
            >
              <v-icon x-small>
                mdi-pencil
              </v-icon>
              Digox
            </v-btn>
          </div>
        </v-card>
        <v-card
          class="pa-0"
          outlined
          tile
          v-else-if="isEqual9() !=0"
          style="background-color: #FFD2D2;">
          <v-card-text class="py-2 text-center">
            <h5>{{ med9_change }}/{{ med9_actual }}</h5>
            <v-spacer></v-spacer>
            <h5 v-if="isEqual9()>0">
              (+{{ isEqual9() }})
            </h5>
            <h5 v-else>
              ({{ isEqual9() }})
            </h5>
          </v-card-text>
          <div class="py-0 text-center">
            <v-btn
              class="mt-n6 pa-0"
              text
              @click="dialog9 = true, new_num[8]=parseInt(med9_change)"
              x-small
            >
              <v-icon x-small>
                mdi-pencil
              </v-icon>
              Digox
            </v-btn>
          </div>
        </v-card>
      </v-col>
      <v-col>
        <v-card
          class="pa-0"
          outlined
          tile
          v-if="med10_change==0 && med10_actual==0"
          style="background-color: #F0F0F0;">
          <v-card-text class="py-2 text-center">
            <h5>{{ med10_change }}/{{ med10_actual }}</h5>
            <v-spacer></v-spacer>
            <h5> 
              ({{ isEqual10() }})
            </h5>
          </v-card-text>
          <div class="py-0 text-center">
            <v-btn
              class="mt-n6 pa-0"
              text
              @click="dialog10 = true, new_num[9]=parseInt(med10_change)"
              x-small
            >
              <v-icon x-small>
                mdi-pencil
              </v-icon>
              Dilan
            </v-btn>
          </div>
        </v-card>
        <v-card
          class="pa-0"
          outlined
          tile
          v-else-if="isEqual10()==0"
          style="background-color: #CEFFCE;">
          <v-card-text class="py-2 text-center">
            <h5>{{ med10_change }}/{{ med10_actual }}</h5>
            <v-spacer></v-spacer>
            <h5> 
              ({{ isEqual10() }})
            </h5>
          </v-card-text>
          <div class="py-0 text-center">
            <v-btn
              class="mt-n6 pa-0"
              text
              @click="dialog10 = true, new_num[9]=parseInt(med10_change)"
              x-small
            >
              <v-icon x-small>
                mdi-pencil
              </v-icon>
              Dilan
            </v-btn>
          </div>
        </v-card>
        <v-card
          class="pa-0"
          outlined
          tile
          v-else-if="isEqual10() !=0"
          style="background-color: #FFD2D2;">
          <v-card-text class="py-2 text-center">
            <h5>{{ med10_change }}/{{ med10_actual }}</h5>
            <v-spacer></v-spacer>
            <h5 v-if="isEqual10()>0">
              (+{{ isEqual10() }})
            </h5>
            <h5 v-else>
              ({{ isEqual10() }})
            </h5>
          </v-card-text>
          <div class="py-0 text-center">
            <v-btn
              class="mt-n6 pa-0"
              text
              @click="dialog10 = true, new_num[9]=parseInt(med10_change)"
              x-small
            >
              <v-icon x-small>
                mdi-pencil
              </v-icon>
              Dilan
            </v-btn>
          </div>
        </v-card>
      </v-col>
    </v-row>
    
    <v-row no-gutters>
      <v-col>
        <v-card
          class="pa-0"
          outlined
          tile
          v-if="med11_change==0 && med11_actual==0"
          style="background-color: #F0F0F0;">
          <v-card-text class="py-2 text-center">
            <h5>{{ med11_change }}/{{ med11_actual }}</h5>
            <v-spacer></v-spacer>
            <h5> 
              ({{ isEqual11() }})
            </h5>
          </v-card-text>
          <div class="py-0 text-center">
            <v-btn
              class="mt-n6 pa-0"
              text
              @click="dialog11 = true, new_num[10]=parseInt(med11_change)"
              x-small
            >
              <v-icon x-small>
                mdi-pencil
              </v-icon>
              Sod.bi
            </v-btn>
          </div>
        </v-card>
        <v-card
          class="pa-0"
          outlined
          tile
          v-else-if="isEqual11()==0"
          style="background-color: #CEFFCE;">
          <v-card-text class="py-2 text-center">
            <h5>{{ med11_change }}/{{ med11_actual }}</h5>
            <v-spacer></v-spacer>
            <h5> 
              ({{ isEqual11() }})
            </h5>
          </v-card-text>
          <div class="py-0 text-center">
            <v-btn
              class="mt-n6 pa-0"
              text
              @click="dialog11 = true, new_num[10]=parseInt(med11_change)"
              x-small
            >
              <v-icon x-small>
                mdi-pencil
              </v-icon>
              Sod.bi
            </v-btn>
          </div>
        </v-card>
        <v-card
          class="pa-0"
          outlined
          tile
          v-else-if="isEqual11() !=0"
          style="background-color: #FFD2D2;">
          <v-card-text class="py-2 text-center">
            <h5>{{ med11_change }}/{{ med11_actual }}</h5>
            <v-spacer></v-spacer>
            <h5 v-if="isEqual11()>0">
              (+{{ isEqual11() }})
            </h5>
            <h5 v-else>
              ({{ isEqual11() }})
            </h5>
          </v-card-text>
          <div class="py-0 text-center">
            <v-btn
              class="mt-n6 pa-0"
              text
              @click="dialog11 = true, new_num[10]=parseInt(med11_change)"
              x-small
            >
              <v-icon x-small>
                mdi-pencil
              </v-icon>
              Sod.bi
            </v-btn>
          </div>
        </v-card>
      </v-col>
      <v-col>
        <v-card
          class="pa-0"
          outlined
          tile
          v-if="med12_change==0 && med12_actual==0"
          style="background-color: #F0F0F0;">
          <v-card-text class="py-2 text-center">
            <h5>{{ med12_change }}/{{ med12_actual }}</h5>
            <v-spacer></v-spacer>
            <h5> 
              ({{ isEqual12() }})
            </h5>
          </v-card-text>
          <div class="py-0 text-center">
            <v-btn
              class="mt-n6 pa-0"
              text
              @click="dialog12 = true, new_num[11]=parseInt(med12_change)"
              x-small
            >
              <v-icon x-small>
                mdi-pencil
              </v-icon>
              Corda
            </v-btn>
          </div>
        </v-card>
        <v-card
          class="pa-0"
          outlined
          tile
          v-else-if="isEqual12()==0"
          style="background-color: #CEFFCE;">
          <v-card-text class="py-2 text-center">
            <h5>{{ med12_change }}/{{ med12_actual }}</h5>
            <v-spacer></v-spacer>
            <h5> 
              ({{ isEqual12() }})
            </h5>
          </v-card-text>
          <div class="py-0 text-center">
            <v-btn
              class="mt-n6 pa-0"
              text
              @click="dialog12 = true, new_num[11]=parseInt(med12_change)"
              x-small
            >
              <v-icon x-small>
                mdi-pencil
              </v-icon>
              Corda
            </v-btn>
          </div>
        </v-card>
        <v-card
          class="pa-0"
          outlined
          tile
          v-else-if="isEqual12() !=0"
          style="background-color: #FFD2D2;">
          <v-card-text class="py-2 text-center">
            <h5>{{ med12_change }}/{{ med12_actual }}</h5>
            <v-spacer></v-spacer>
            <h5 v-if="isEqual12()>0">
              (+{{ isEqual12() }})
            </h5>
            <h5 v-else>
              ({{ isEqual12() }})
            </h5>
          </v-card-text>
          <div class="py-0 text-center">
            <v-btn
              class="mt-n6 pa-0"
              text
              @click="dialog12 = true, new_num[11]=parseInt(med12_change)"
              x-small
            >
              <v-icon x-small>
                mdi-pencil
              </v-icon>
              Corda
            </v-btn>
          </div>
        </v-card>
      </v-col>
      <v-col>
        <v-card
          class="pa-0"
          outlined
          tile
          v-if="med13_change==0 && med13_actual==0"
          style="background-color: #F0F0F0;">
          <v-card-text class="py-2 text-center">
            <h5>{{ med13_change }}/{{ med13_actual }}</h5>
            <v-spacer></v-spacer>
            <h5> 
              ({{ isEqual13() }})
            </h5>
          </v-card-text>
          <div class="py-0 text-center">
            <v-btn
              class="mt-n6 pa-0"
              text
              @click="dialog13 = true, new_num[12]=parseInt(med13_change)"
              x-small
            >
              <v-icon x-small>
                mdi-pencil
              </v-icon>
              Mag Su
            </v-btn>
          </div>
        </v-card>
        <v-card
          class="pa-0"
          outlined
          tile
          v-else-if="isEqual13()==0"
          style="background-color: #CEFFCE;">
          <v-card-text class="py-2 text-center">
            <h5>{{ med13_change }}/{{ med13_actual }}</h5>
            <v-spacer></v-spacer>
            <h5> 
              ({{ isEqual13() }})
            </h5>
          </v-card-text>
          <div class="py-0 text-center">
            <v-btn
              class="mt-n6 pa-0"
              text
              @click="dialog13 = true, new_num[12]=parseInt(med13_change)"
              x-small
            >
              <v-icon x-small>
                mdi-pencil
              </v-icon>
              Mag Su
            </v-btn>
          </div>
        </v-card>
        <v-card
          class="pa-0"
          outlined
          tile
          v-else-if="isEqual13() !=0"
          style="background-color: #FFD2D2;">
          <v-card-text class="py-2 text-center">
            <h5>{{ med13_change }}/{{ med13_actual }}</h5>
            <v-spacer></v-spacer>
            <h5 v-if="isEqual13()>0">
              (+{{ isEqual13() }})
            </h5>
            <h5 v-else>
              ({{ isEqual13() }})
            </h5>
          </v-card-text>
          <div class="py-0 text-center">
            <v-btn
              class="mt-n6 pa-0"
              text
              @click="dialog13 = true, new_num[12]=parseInt(med13_change)"
              x-small
            >
              <v-icon x-small>
                mdi-pencil
              </v-icon>
              Mag Su
            </v-btn>
          </div>
        </v-card>
      </v-col>
      <v-col>
        <v-card
          class="pa-0"
          outlined
          tile
          v-if="med14_change==0 && med14_actual==0"
          style="background-color: #F0F0F0;">
          <v-card-text class="py-2 text-center">
            <h5>{{ med14_change }}/{{ med14_actual }}</h5>
            <v-spacer></v-spacer>
            <h5> 
              ({{ isEqual14() }})
            </h5>
          </v-card-text>
          <div class="py-0 text-center">
            <v-btn
              class="mt-n6 pa-0"
              text
              @click="dialog14 = true, new_num[13]=parseInt(med14_change)"
              x-small
            >
              <v-icon x-small>
                mdi-pencil
              </v-icon>
              Dopam
            </v-btn>
          </div>
        </v-card>
        <v-card
          class="pa-0"
          outlined
          tile
          v-else-if="isEqual14()==0"
          style="background-color: #CEFFCE;">
          <v-card-text class="py-2 text-center">
            <h5>{{ med14_change }}/{{ med14_actual }}</h5>
            <v-spacer></v-spacer>
            <h5> 
              ({{ isEqual14() }})
            </h5>
          </v-card-text>
          <div class="py-0 text-center">
            <v-btn
              class="mt-n6 pa-0"
              text
              @click="dialog14 = true, new_num[13]=parseInt(med14_change)"
              x-small
            >
              <v-icon x-small>
                mdi-pencil
              </v-icon>
              Dopam
            </v-btn>
          </div>
        </v-card>
        <v-card
          class="pa-0"
          outlined
          tile
          v-else-if="isEqual14() !=0"
          style="background-color: #FFD2D2;">
          <v-card-text class="py-2 text-center">
            <h5>{{ med14_change }}/{{ med14_actual }}</h5>
            <v-spacer></v-spacer>
            <h5 v-if="isEqual14()>0">
              (+{{ isEqual14() }})
            </h5>
            <h5 v-else>
              ({{ isEqual14() }})
            </h5>
          </v-card-text>
          <div class="py-0 text-center">
            <v-btn
              class="mt-n6 pa-0"
              text
              @click="dialog14 = true, new_num[13]=parseInt(med14_change)"
              x-small
            >
              <v-icon x-small>
                mdi-pencil
              </v-icon>
              Dopam
            </v-btn>
          </div>
        </v-card>
      </v-col>
      <v-col>
        <v-card
          class="pa-0"
          outlined
          tile
          v-if="med15_change==0 && med15_actual==0"
          style="background-color: #F0F0F0;">
          <v-card-text class="py-2 text-center">
            <h5>{{ med15_change }}/{{ med15_actual }}</h5>
            <v-spacer></v-spacer>
            <h5> 
              ({{ isEqual15() }})
            </h5>
          </v-card-text>
          <div class="py-0 text-center">
            <v-btn
              class="mt-n6 pa-0"
              text
              @click="dialog15 = true, new_num[14]=parseInt(med15_change)"
              x-small
            >
              <v-icon x-small>
                mdi-pencil
              </v-icon>
              Cal Gu
            </v-btn>
          </div>
        </v-card>
        <v-card
          class="pa-0"
          outlined
          tile
          v-else-if="isEqual15()==0"
          style="background-color: #CEFFCE;">
          <v-card-text class="py-2 text-center">
            <h5>{{ med15_change }}/{{ med15_actual }}</h5>
            <v-spacer></v-spacer>
            <h5> 
              ({{ isEqual15() }})
            </h5>
          </v-card-text>
          <div class="py-0 text-center">
            <v-btn
              class="mt-n6 pa-0"
              text
              @click="dialog15 = true, new_num[14]=parseInt(med15_change)"
              x-small
            >
              <v-icon x-small>
                mdi-pencil
              </v-icon>
              Cal Gu
            </v-btn>
          </div>
        </v-card>
        <v-card
          class="pa-0"
          outlined
          tile
          v-else-if="isEqual15() !=0"
          style="background-color: #FFD2D2;">
          <v-card-text class="py-2 text-center">
            <h5>{{ med15_change }}/{{ med15_actual }}</h5>
            <v-spacer></v-spacer>
            <h5 v-if="isEqual15()>0">
              (+{{ isEqual15() }})
            </h5>
            <h5 v-else>
              ({{ isEqual15() }})
            </h5>
          </v-card-text>
          <div class="py-0 text-center">
            <v-btn
              class="mt-n6 pa-0"
              text
              @click="dialog15 = true, new_num[14]=parseInt(med15_change)"
              x-small
            >
              <v-icon x-small>
                mdi-pencil
              </v-icon>
              Cal Gu
            </v-btn>
          </div>
        </v-card>
      </v-col>
    </v-row>
    
    <v-row no-gutters>
      <v-col>
        <v-card
          class="pa-0"
          outlined
          tile
          v-if="med16_change==0 && med16_actual==0"
          style="background-color: #F0F0F0;">
          <v-card-text class="py-2 text-center">
            <h5>{{ med16_change }}/{{ med16_actual }}</h5>
            <v-spacer></v-spacer>
            <h5> 
              ({{ isEqual16() }})
            </h5>
          </v-card-text>
          <div class="py-0 text-center">
            <v-btn
              class="mt-n6 pa-0"
              text
              @click="dialog16 = true, new_num[15]=parseInt(med16_change)"
              x-small
            >
              <v-icon x-small>
                mdi-pencil
              </v-icon>
              Bosmi
            </v-btn>
          </div>
        </v-card>
        <v-card
          class="pa-0"
          outlined
          tile
          v-else-if="isEqual16()==0"
          style="background-color: #CEFFCE;">
          <v-card-text class="py-2 text-center">
            <h5>{{ med16_change }}/{{ med16_actual }}</h5>
            <v-spacer></v-spacer>
            <h5> 
              ({{ isEqual16() }})
            </h5>
          </v-card-text>
          <div class="py-0 text-center">
            <v-btn
              class="mt-n6 pa-0"
              text
              @click="dialog16 = true, new_num[15]=parseInt(med16_change)"
              x-small
            >
              <v-icon x-small>
                mdi-pencil
              </v-icon>
              Bosmi
            </v-btn>
          </div>
        </v-card>
        <v-card
          class="pa-0"
          outlined
          tile
          v-else-if="isEqual16() !=0"
          style="background-color: #FFD2D2;">
          <v-card-text class="py-2 text-center">
            <h5>{{ med16_change }}/{{ med16_actual }}</h5>
            <v-spacer></v-spacer>
            <h5 v-if="isEqual16()>0">
              (+{{ isEqual16() }})
            </h5>
            <h5 v-else>
              ({{ isEqual16() }})
            </h5>
          </v-card-text>
          <div class="py-0 text-center">
            <v-btn
              class="mt-n6 pa-0"
              text
              @click="dialog16 = true, new_num[15]=parseInt(med16_change)"
              x-small
            >
              <v-icon x-small>
                mdi-pencil
              </v-icon>
              Bosmi
            </v-btn>
          </div>
        </v-card>
      </v-col>
      <v-col>
        <v-card
          class="pa-0"
          outlined
          tile
          v-if="med17_change==0 && med17_actual==0"
          style="background-color: #F0F0F0;">
          <v-card-text class="py-2 text-center">
            <h5>{{ med17_change }}/{{ med17_actual }}</h5>
            <v-spacer></v-spacer>
            <h5> 
              ({{ isEqual17() }})
            </h5>
          </v-card-text>
          <div class="py-0 text-center">
            <v-btn
              class="mt-n6 pa-0"
              text
              @click="dialog17 = true, new_num[16]=parseInt(med17_change)"
              x-small
            >
              <v-icon x-small>
                mdi-pencil
              </v-icon>
              Adeno
            </v-btn>
          </div>
        </v-card>
        <v-card
          class="pa-0"
          outlined
          tile
          v-else-if="isEqual17()==0"
          style="background-color: #CEFFCE;">
          <v-card-text class="py-2 text-center">
            <h5>{{ med17_change }}/{{ med17_actual }}</h5>
            <v-spacer></v-spacer>
            <h5> 
              ({{ isEqual17() }})
            </h5>
          </v-card-text>
          <div class="py-0 text-center">
            <v-btn
              class="mt-n6 pa-0"
              text
              @click="dialog17 = true, new_num[16]=parseInt(med17_change)"
              x-small
            >
              <v-icon x-small>
                mdi-pencil
              </v-icon>
              Adeno
            </v-btn>
          </div>
        </v-card>
        <v-card
          class="pa-0"
          outlined
          tile
          v-else-if="isEqual17() !=0"
          style="background-color: #FFD2D2;">
          <v-card-text class="py-2 text-center">
            <h5>{{ med17_change }}/{{ med17_actual }}</h5>
            <v-spacer></v-spacer>
            <h5 v-if="isEqual17()>0">
              (+{{ isEqual17() }})
            </h5>
            <h5 v-else>
              ({{ isEqual17() }})
            </h5>
          </v-card-text>
          <div class="py-0 text-center">
            <v-btn
              class="mt-n6 pa-0"
              text
              @click="dialog17 = true, new_num[16]=parseInt(med17_change)"
              x-small
            >
              <v-icon x-small>
                mdi-pencil
              </v-icon>
              Adeno
            </v-btn>
          </div>
        </v-card>
      </v-col>
      <v-col>
        <v-card
          class="pa-0"
          outlined
          tile
          v-if="med18_change==0 && med18_actual==0"
          style="background-color: #F0F0F0;">
          <v-card-text class="py-2 text-center">
            <h5>{{ med18_change }}/{{ med18_actual }}</h5>
            <v-spacer></v-spacer>
            <h5> 
              ({{ isEqual18() }})
            </h5>
          </v-card-text>
          <div class="py-0 text-center">
            <v-btn
              class="mt-n6 pa-0"
              text
              @click="dialog18 = true, new_num[17]=parseInt(med18_change)"
              x-small
            >
              <v-icon x-small>
                mdi-pencil
              </v-icon>
              Atrop
            </v-btn>
          </div>
        </v-card>
        <v-card
          class="pa-0"
          outlined
          tile
          v-else-if="isEqual18()==0"
          style="background-color: #CEFFCE;">
          <v-card-text class="py-2 text-center">
            <h5>{{ med18_change }}/{{ med18_actual }}</h5>
            <v-spacer></v-spacer>
            <h5> 
              ({{ isEqual18() }})
            </h5>
          </v-card-text>
          <div class="py-0 text-center">
            <v-btn
              class="mt-n6 pa-0"
              text
              @click="dialog18 = true, new_num[17]=parseInt(med18_change)"
              x-small
            >
              <v-icon x-small>
                mdi-pencil
              </v-icon>
              Atrop
            </v-btn>
          </div>
        </v-card>
        <v-card
          class="pa-0"
          outlined
          tile
          v-else-if="isEqual18() !=0"
          style="background-color: #FFD2D2;">
          <v-card-text class="py-2 text-center">
            <h5>{{ med18_change }}/{{ med18_actual }}</h5>
            <v-spacer></v-spacer>
            <h5 v-if="isEqual18()>0">
              (+{{ isEqual18() }})
            </h5>
            <h5 v-else>
              ({{ isEqual18() }})
            </h5>
          </v-card-text>
          <div class="py-0 text-center">
            <v-btn
              class="mt-n6 pa-0"
              text
              @click="dialog18 = true, new_num[17]=parseInt(med18_change)"
              x-small
            >
              <v-icon x-small>
                mdi-pencil
              </v-icon>
              Atrop
            </v-btn>
          </div>
        </v-card>
      </v-col>
      <v-col>
        <v-card
          class="pa-0"
          outlined
          tile
          v-if="med19_change==0 && med19_actual==0"
          style="background-color: #F0F0F0;">
          <v-card-text class="py-2 text-center">
            <h5>{{ med19_change }}/{{ med19_actual }}</h5>
            <v-spacer></v-spacer>
            <h5> 
              ({{ isEqual19() }})
            </h5>
          </v-card-text>
          <div class="py-0 text-center">
            <v-btn
              class="mt-n6 pa-0"
              text
              @click="dialog19 = true, new_num[18]=parseInt(med19_change)"
              x-small
            >
              <v-icon x-small>
                mdi-pencil
              </v-icon>
              Lidoc
            </v-btn>
          </div>
        </v-card>
        <v-card
          class="pa-0"
          outlined
          tile
          v-else-if="isEqual19()==0"
          style="background-color: #CEFFCE;">
          <v-card-text class="py-2 text-center">
            <h5>{{ med19_change }}/{{ med19_actual }}</h5>
            <v-spacer></v-spacer>
            <h5> 
              ({{ isEqual19() }})
            </h5>
          </v-card-text>
          <div class="py-0 text-center">
            <v-btn
              class="mt-n6 pa-0"
              text
              @click="dialog19 = true, new_num[18]=parseInt(med19_change)"
              x-small
            >
              <v-icon x-small>
                mdi-pencil
              </v-icon>
              Lidoc
            </v-btn>
          </div>
        </v-card>
        <v-card
          class="pa-0"
          outlined
          tile
          v-else-if="isEqual19() !=0"
          style="background-color: #FFD2D2;">
          <v-card-text class="py-2 text-center">
            <h5>{{ med19_change }}/{{ med19_actual }}</h5>
            <v-spacer></v-spacer>
            <h5 v-if="isEqual19()>0">
              (+{{ isEqual19() }})
            </h5>
            <h5 v-else>
              ({{ isEqual19() }})
            </h5>
          </v-card-text>
          <div class="py-0 text-center">
            <v-btn
              class="mt-n6 pa-0"
              text
              @click="dialog19 = true, new_num[18]=parseInt(med19_change)"
              x-small
            >
              <v-icon x-small>
                mdi-pencil
              </v-icon>
              Lidoc
            </v-btn>
          </div>
        </v-card>
      </v-col>
      <v-col>
        <v-card
          class="pa-0"
          outlined
          tile
          v-if="med20_change==0 && med20_actual==0"
          style="background-color: #F0F0F0;">
          <v-card-text class="py-2 text-center">
            <h5>{{ med20_change }}/{{ med20_actual }}</h5>
            <v-spacer></v-spacer>
            <h5> 
              ({{ isEqual20() }})
            </h5>
          </v-card-text>
          <div class="py-0 text-center">
            <v-btn
              class="mt-n6 pa-0"
              text
              @click="dialog20 = true, new_num[19]=parseInt(med20_change)"
              x-small
            >
              <v-icon x-small>
                mdi-pencil
              </v-icon>
              Valiu
            </v-btn>
          </div>
        </v-card>
        <v-card
          class="pa-0"
          outlined
          tile
          v-else-if="isEqual20()==0"
          style="background-color: #CEFFCE;">
          <v-card-text class="py-2 text-center">
            <h5>{{ med20_change }}/{{ med20_actual }}</h5>
            <v-spacer></v-spacer>
            <h5> 
              ({{ isEqual20() }})
            </h5>
          </v-card-text>
          <div class="py-0 text-center">
            <v-btn
              class="mt-n6 pa-0"
              text
              @click="dialog20 = true, new_num[19]=parseInt(med20_change)"
              x-small
            >
              <v-icon x-small>
                mdi-pencil
              </v-icon>
              Valiu
            </v-btn>
          </div>
        </v-card>
        <v-card
          class="pa-0"
          outlined
          tile
          v-else-if="isEqual20() !=0"
          style="background-color: #FFD2D2;">
          <v-card-text class="py-2 text-center">
            <h5>{{ med20_change }}/{{ med20_actual }}</h5>
            <v-spacer></v-spacer>
            <h5 v-if="isEqual20()>0">
              (+{{ isEqual20() }})
            </h5>
            <h5 v-else>
              ({{ isEqual20() }})
            </h5>
          </v-card-text>
          <div class="py-0 text-center">
            <v-btn
              class="mt-n6 pa-0"
              text
              @click="dialog20 = true, new_num[19]=parseInt(med20_change)"
              x-small
            >
              <v-icon x-small>
                mdi-pencil
              </v-icon>
              Valiu
            </v-btn>
          </div>
        </v-card>
      </v-col>


      <v-dialog
        v-model="dialog1"
        max-width="500px">
        <v-card>
          <v-card-title>
            Succinylcholine
          </v-card-title>
          <v-img v-bind:src="require('../assets/itempic/Succinylcholine.jpg')" height=200pt></v-img>
          <v-form
            ref="form"
            v-model="valid"
            lazy-validation
          >
            <v-card-text>
              <v-text-field
                label="請輸入數量"
                v-model="new_num[0]"
                required
                :rules="[rules.required, rules.quantity, rules.length]"
                >
              </v-text-field>
              <v-text-field
                label="備註"
                v-model="remark"
                required>
              </v-text-field>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                text
                color="blue darken-1"
                @click="dialog1 = false"
              >
              取消
              </v-btn>
              <v-btn
                text
                :disabled ="!valid"
                color="blue darken-1"
                @click="save1"
              >
              儲存
              </v-btn>
            </v-card-actions>
          </v-form>
        </v-card>
      </v-dialog>

      <v-dialog
        v-model="dialog2"
        max-width="500px">
        <v-card>
          <v-card-title>
            Naloxone
          </v-card-title>
          <v-img v-bind:src="require('../assets/itempic/Naloxone.jpg')" height=200pt></v-img>
          <v-form
            ref="form"
            v-model="valid"
            lazy-validation
          >
            <v-card-text>
              <v-text-field
                label="請輸入數量"
                v-model="new_num[1]"
                required
                :rules="[rules.required, rules.quantity, rules.length]"
                >
              </v-text-field>
              <v-text-field
                label="備註"
                v-model="remark"
                required>
              </v-text-field>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                text
                color="blue darken-1"
                @click="dialog2 = false"
              >
              取消
              </v-btn>
              <v-btn
                text
                :disabled ="!valid"
                color="blue darken-1"
                @click="save2"
              >
              儲存
              </v-btn>
            </v-card-actions>
          </v-form>
        </v-card>
      </v-dialog>

      <v-dialog
        v-model="dialog3"
        max-width="500px">
        <v-card>
          <v-card-title>
            Lasix
          </v-card-title>
          <v-img v-bind:src="require('../assets/itempic/Lasix.jpg')" height=200pt></v-img>
          <v-form
            ref="form"
            v-model="valid"
            lazy-validation
          >
          <v-card-text>
            <v-text-field
              label="請輸入數量"
              v-model="new_num[2]"
              required
              :rules="[rules.required, rules.quantity, rules.length]"
              >
            </v-text-field>
            <v-text-field
              label="備註"
              v-model="remark"
              required>
            </v-text-field>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              text
              color="blue darken-1"
              @click="dialog3 = false"
            >
            取消
            </v-btn>
            <v-btn
              text
              :disabled ="!valid"
              color="blue darken-1"
              @click="save3"
            >
            儲存
            </v-btn>
          </v-card-actions>
          </v-form>
        </v-card>
      </v-dialog>

      <v-dialog
        v-model="dialog4"
        max-width="500px">
        <v-card>
          <v-card-title>
            Solu-cortef
          </v-card-title>
          <v-img v-bind:src="require('../assets/itempic/Solu-cortef.jpg')" height=200pt></v-img>
          <v-form
            ref="form"
            v-model="valid"
            lazy-validation
          >
          <v-card-text>
            <v-text-field
              label="請輸入數量"
              v-model="new_num[3]"
              :rules="[rules.required, rules.quantity, rules.length]"
              required>
            </v-text-field>
            <v-text-field
              label="備註"
              v-model="remark"
              required>
            </v-text-field>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              text
              color="blue darken-1"
              @click="dialog4 = false"
            >
            取消
            </v-btn>
            <v-btn
              text
              :disabled ="!valid"
              color="blue darken-1"
              @click="save4"
            >
            儲存
            </v-btn>
          </v-card-actions>
          </v-form>
        </v-card>
      </v-dialog>

      <v-dialog
        v-model="dialog5"
        max-width="500px">
        <v-card>
          <v-card-title>
            NTG
          </v-card-title>
          <v-img v-bind:src="require('../assets/itempic/NTG.jpg')" height=200pt></v-img>
          <v-form
            ref="form"
            v-model="valid"
            lazy-validation
          >
          <v-card-text>
            <v-text-field
              label="請輸入數量"
              v-model="new_num[4]"
              :rules="[rules.required, rules.quantity, rules.length]"
              required>
            </v-text-field>
            <v-text-field
              label="備註"
              v-model="remark"
              required>
            </v-text-field>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              text
              color="blue darken-1"
              @click="dialog5 = false"
            >
            取消
            </v-btn>
            <v-btn
              text
              :disabled ="!valid"
              color="blue darken-1"
              @click="save5"
            >
            儲存
            </v-btn>
          </v-card-actions>
          </v-form>
        </v-card>
      </v-dialog>

      <v-dialog
        v-model="dialog6"
        max-width="500px">
        <v-card>
          <v-card-title>
            Dobutrex
          </v-card-title>
          <v-img v-bind:src="require('../assets/itempic/Dobutrex.jpg')" height=200pt></v-img>
          <v-form
            ref="form"
            v-model="valid"
            lazy-validation
          >
          <v-card-text>
            <v-text-field
              label="請輸入數量"
              v-model="new_num[5]"
              :rules="[rules.required, rules.quantity, rules.length]"
              required>
            </v-text-field>
            <v-text-field
              label="備註"
              v-model="remark"
              required>
            </v-text-field>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              text
              color="blue darken-1"
              @click="dialog6 = false"
            >
            取消
            </v-btn>
            <v-btn
              text
              :disabled ="!valid"
              color="blue darken-1"
              @click="save6"
            >
            儲存
            </v-btn>
          </v-card-actions>
          </v-form>
        </v-card>
      </v-dialog>

      <v-dialog
        v-model="dialog7"
        max-width="500px">
        <v-card>
          <v-card-title>
            Isoptin
          </v-card-title>
          <v-img v-bind:src="require('../assets/itempic/Isoptin.jpg')" height=200pt></v-img>
          <v-form
            ref="form"
            v-model="valid"
            lazy-validation
          >
          <v-card-text>
            <v-text-field
              label="請輸入數量"
              v-model="new_num[6]"
              :rules="[rules.required, rules.quantity, rules.length]"
              required>
            </v-text-field>
            <v-text-field
              label="備註"
              v-model="remark"
              required>
            </v-text-field>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              text
              color="blue darken-1"
              @click="dialog7 = false"
            >
            取消
            </v-btn>
            <v-btn
              text
              :disabled ="!valid"
              color="blue darken-1"
              @click="save7"
            >
            儲存
            </v-btn>
          </v-card-actions>
          </v-form>
        </v-card>
      </v-dialog>

      <v-dialog
        v-model="dialog8"
        max-width="500px">
        <v-card>
          <v-card-title>
            Levophed
          </v-card-title>
          <v-img v-bind:src="require('../assets/itempic/Levophed.jpg')" height=200pt></v-img>
          <v-form
            ref="form"
            v-model="valid"
            lazy-validation
          >
          <v-card-text>
            <v-text-field
              label="請輸入數量"
              v-model="new_num[7]"
              :rules="[rules.required, rules.quantity, rules.length]"
              required>
            </v-text-field>
            <v-text-field
              label="備註"
              v-model="remark"
              required>
            </v-text-field>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              text
              color="blue darken-1"
              @click="dialog8 = false"
            >
            取消
            </v-btn>
            <v-btn
              text
              :disabled ="!valid"
              color="blue darken-1"
              @click="save8"
            >
            儲存
            </v-btn>
          </v-card-actions>
          </v-form>
        </v-card>
      </v-dialog>

      <v-dialog
        v-model="dialog9"
        max-width="500px">
        <v-card>
          <v-card-title>
            Digoxin
          </v-card-title>
          <v-img v-bind:src="require('../assets/itempic/Digoxin.jpg')" height=200pt></v-img>
          <v-form
            ref="form"
            v-model="valid"
            lazy-validation
          >
          <v-card-text>
            <v-text-field
              label="請輸入數量"
              v-model="new_num[8]"
              :rules="[rules.required, rules.quantity, rules.length]"
              required>
            </v-text-field>
            <v-text-field
              label="備註"
              v-model="remark"
              required>
            </v-text-field>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              text
              color="blue darken-1"
              @click="dialog9 = false"
            >
            取消
            </v-btn>
            <v-btn
              text
              :disabled ="!valid"
              color="blue darken-1"
              @click="save9"
            >
            儲存
            </v-btn>
          </v-card-actions>
          </v-form>
        </v-card>
      </v-dialog>

      <v-dialog
        v-model="dialog10"
        max-width="500px">
        <v-card>
          <v-card-title>
            Dilantin
          </v-card-title>
          <v-img v-bind:src="require('../assets/itempic/Dilantin.jpg')" height=200pt></v-img>
          <v-form
            ref="form"
            v-model="valid"
            lazy-validation
          >
          <v-card-text>
            <v-text-field
              label="請輸入數量"
              v-model="new_num[9]"
              :rules="[rules.required, rules.quantity, rules.length]"
              required>
            </v-text-field>
            <v-text-field
              label="備註"
              v-model="remark"
              required>
            </v-text-field>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              text
              color="blue darken-1"
              @click="dialog10 = false"
            >
            取消
            </v-btn>
            <v-btn
              text
              :disabled ="!valid"
              color="blue darken-1"
              @click="save10"
            >
            儲存
            </v-btn>
          </v-card-actions>
          </v-form>
        </v-card>
      </v-dialog>

      <v-dialog
        v-model="dialog11"
        max-width="500px">
        <v-card>
          <v-card-title>
            Sod.bicarbonate
          </v-card-title>
          <v-img v-bind:src="require('../assets/itempic/Sodbicarbonate.jpg')" height=200pt></v-img>
          <v-form
            ref="form"
            v-model="valid"
            lazy-validation
          >
          <v-card-text>
            <v-text-field
              label="請輸入數量"
              v-model="new_num[10]"
              :rules="[rules.required, rules.quantity, rules.length]"
              required>
            </v-text-field>
            <v-text-field
              label="備註"
              v-model="remark"
              required>
            </v-text-field>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              text
              color="blue darken-1"
              @click="dialog11 = false"
            >
            取消
            </v-btn>
            <v-btn
              text
              :disabled ="!valid"
              color="blue darken-1"
              @click="save11"
            >
            儲存
            </v-btn>
          </v-card-actions>
          </v-form>
        </v-card>
      </v-dialog>

      <v-dialog
        v-model="dialog12"
        max-width="500px">
        <v-card>
          <v-card-title>
            Cordarone
          </v-card-title>
          <v-img v-bind:src="require('../assets/itempic/Cordarone.jpg')" height=200pt></v-img>
          <v-form
            ref="form"
            v-model="valid"
            lazy-validation
          >
          <v-card-text>
            <v-text-field
              label="請輸入數量"
              v-model="new_num[11]"
              :rules="[rules.required, rules.quantity, rules.length]"
              required>
            </v-text-field>
            <v-text-field
              label="備註"
              v-model="remark"
              required>
            </v-text-field>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              text
              color="blue darken-1"
              @click="dialog12 = false"
            >
            取消
            </v-btn>
            <v-btn
              text
              color="blue darken-1"
              :disabled ="!valid"
              @click="save12"
            >
            儲存
            </v-btn>
          </v-card-actions>
          </v-form>
        </v-card>
      </v-dialog>

      <v-dialog
        v-model="dialog13"
        max-width="500px">
        <v-card>
          <v-card-title>
            Mag sulfate
          </v-card-title>
          <v-img v-bind:src="require('../assets/itempic/Mag sulfate.jpg')" height=200pt></v-img>
          <v-form
            ref="form"
            v-model="valid"
            lazy-validation
          >
          <v-card-text>
            <v-text-field
              label="請輸入數量"
              v-model="new_num[12]"
              :rules="[rules.required, rules.quantity, rules.length]"
              required>
            </v-text-field>
            <v-text-field
              label="備註"
              v-model="remark"
              required>
            </v-text-field>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              text
              color="blue darken-1"
              @click="dialog13 = false"
            >
            取消
            </v-btn>
            <v-btn
              text
              color="blue darken-1"
              :disabled ="!valid"
              @click="save13"
            >
            儲存
            </v-btn>
          </v-card-actions>
          </v-form>
        </v-card>
      </v-dialog>

      <v-dialog
        v-model="dialog14"
        max-width="500px">
        <v-card>
          <v-card-title>
            Dopamine
          </v-card-title>
          <v-img v-bind:src="require('../assets/itempic/Dopamine.jpg')" height=200pt></v-img>
          <v-form
            ref="form"
            v-model="valid"
            lazy-validation
          >
          <v-card-text>
            <v-text-field
              label="請輸入數量"
              v-model="new_num[13]"
              :rules="[rules.required, rules.quantity, rules.length]"
              required>
            </v-text-field>
            <v-text-field
              label="備註"
              v-model="remark"
              required>
            </v-text-field>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              text
              color="blue darken-1"
              @click="dialog14 = false"
            >
            取消
            </v-btn>
            <v-btn
              text
              :disabled ="!valid"
              color="blue darken-1"
              @click="save14"
            >
            儲存
            </v-btn>
          </v-card-actions>
          </v-form>
        </v-card>
      </v-dialog>

      <v-dialog
        v-model="dialog15"
        max-width="500px">
        <v-card>
          <v-card-title>
            Cal Gluconate
          </v-card-title>
          <v-img v-bind:src="require('../assets/itempic/Cal Gluconate.jpg')" height=200pt></v-img>
          <v-form
            ref="form"
            v-model="valid"
            lazy-validation
          >
          <v-card-text>
            <v-text-field
              label="請輸入數量"
              v-model="new_num[14]"
              :rules="[rules.required, rules.quantity, rules.length]"
              required>
            </v-text-field>
            <v-text-field
              label="備註"
              v-model="remark"
              required>
            </v-text-field>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              text
              color="blue darken-1"
              @click="dialog15 = false"
            >
            取消
            </v-btn>
            <v-btn
              text
              :disabled ="!valid"
              color="blue darken-1"
              @click="save15"
            >
            儲存
            </v-btn>
          </v-card-actions>
          </v-form>
        </v-card>
      </v-dialog>

      <v-dialog
        v-model="dialog16"
        max-width="500px">
        <v-card>
          <v-card-title>
            Bosmin
          </v-card-title>
          <v-img v-bind:src="require('../assets/itempic/Bosmin.jpg')" height=200pt></v-img>
          <v-form
            ref="form"
            v-model="valid"
            lazy-validation
          >
          <v-card-text>
            <v-text-field
              label="請輸入數量"
              v-model="new_num[15]"
              :rules="[rules.required, rules.quantity, rules.length]"
              required>
            </v-text-field>
            <v-text-field
              label="備註"
              v-model="remark"
              required>
            </v-text-field>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              text
              color="blue darken-1"
              @click="dialog16 = false"
            >
            取消
            </v-btn>
            <v-btn
              text
              :disabled ="!valid"
              color="blue darken-1"
              @click="save16"
            >
            儲存
            </v-btn>
          </v-card-actions>
          </v-form>
        </v-card>
      </v-dialog>

      <v-dialog
        v-model="dialog17"
        max-width="500px">
        <v-card>
          <v-card-title>
            Adenocor
          </v-card-title>
          <v-img v-bind:src="require('../assets/itempic/Adenocor.jpg')" height=200pt></v-img>
          <v-form
            ref="form"
            v-model="valid"
            lazy-validation
          >
          <v-card-text>
            <v-text-field
              label="請輸入數量"
              v-model="new_num[16]"
              :rules="[rules.required, rules.quantity, rules.length]"
              required>
            </v-text-field>
            <v-text-field
              label="備註"
              v-model="remark"
              required>
            </v-text-field>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              text
              color="blue darken-1"
              @click="dialog17 = false"
            >
            取消
            </v-btn>
            <v-btn
              text
              :disabled ="!valid"
              color="blue darken-1"
              @click="save17"
            >
            儲存
            </v-btn>
          </v-card-actions>
          </v-form>
        </v-card>
      </v-dialog>

      <v-dialog
        v-model="dialog18"
        max-width="500px">
        <v-card>
          <v-card-title>
            Atropine
          </v-card-title>
          <v-img v-bind:src="require('../assets/itempic/Atropine.jpg')" height=200pt></v-img>
          <v-form
            ref="form"
            v-model="valid"
            lazy-validation
          >
          <v-card-text>
            <v-text-field
              label="請輸入數量"
              v-model="new_num[17]"
              :rules="[rules.required, rules.quantity, rules.length]"
              required>
            </v-text-field>
            <v-text-field
              label="備註"
              v-model="remark"
              required>
            </v-text-field>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              text
              color="blue darken-1"
              @click="dialog18 = false"
            >
            取消
            </v-btn>
            <v-btn
              text
              :disabled ="!valid"
              color="blue darken-1"
              @click="save18"
            >
            儲存
            </v-btn>
          </v-card-actions>
          </v-form>
        </v-card>
      </v-dialog>

      <v-dialog
        v-model="dialog19"
        max-width="500px">
        <v-card>
          <v-card-title>
            Lidocaine
          </v-card-title>
          <v-img v-bind:src="require('../assets/itempic/Lidocaine.jpg')" height=200pt></v-img>
          <v-form
            ref="form"
            v-model="valid"
            lazy-validation
          >
          <v-card-text>
            <v-text-field
              label="請輸入數量"
              v-model="new_num[18]"
              :rules="[rules.required, rules.quantity, rules.length]"
              required>
            </v-text-field>
            <v-text-field
              label="備註"
              v-model="remark"
              required>
            </v-text-field>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              text
              color="blue darken-1"
              @click="dialog19 = false"
            >
            取消
            </v-btn>
            <v-btn
              text
              :disabled ="!valid"
              color="blue darken-1"
              @click="save19"
            >
            儲存
            </v-btn>
          </v-card-actions>
          </v-form>
        </v-card>
      </v-dialog>

      <v-dialog
        v-model="dialog20"
        max-width="500px">
        <v-card>
          <v-card-title>
            Valium
          </v-card-title>
          <v-img v-bind:src="require('../assets/itempic/Valium.jpg')" height=200pt></v-img>
          <v-form
            ref="form"
            v-model="valid"
            lazy-validation
          >
          <v-card-text>
            <v-text-field
              label="請輸入數量"
              v-model="new_num[19]"
              :rules="[rules.required, rules.quantity, rules.length]"
              required>
            </v-text-field>
            <v-text-field
              label="備註"
              v-model="remark"
              required>
            </v-text-field>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              text
              color="blue darken-1"
              @click="dialog20 = false"
            >
            取消
            </v-btn>
            <v-btn
              text
              :disabled ="!valid"
              color="blue darken-1"
              @click="save20"
            >
            儲存
            </v-btn>
          </v-card-actions>
          </v-form>
        </v-card>
      </v-dialog>
    </v-row>
  </div>
</template>

<script>
  import axios from 'axios';
  
  export default{
    data(){
      return{
        med1_change: this.$route.query.num.split(",")[0],
        med2_change: this.$route.query.num.split(",")[1],
        med3_change: this.$route.query.num.split(",")[2],
        med4_change: this.$route.query.num.split(",")[3],
        med5_change: this.$route.query.num.split(",")[4],
        med6_change: this.$route.query.num.split(",")[5],
        med7_change: this.$route.query.num.split(",")[6],
        med8_change: this.$route.query.num.split(",")[7],
        med9_change: this.$route.query.num.split(",")[8],
        med10_change: this.$route.query.num.split(",")[9],
        med11_change: this.$route.query.num.split(",")[10],
        med12_change: this.$route.query.num.split(",")[11],
        med13_change: this.$route.query.num.split(",")[12],
        med14_change: this.$route.query.num.split(",")[13],
        med15_change: this.$route.query.num.split(",")[14],
        med16_change: this.$route.query.num.split(",")[15],
        med17_change: this.$route.query.num.split(",")[16],
        med18_change: this.$route.query.num.split(",")[17],
        med19_change: this.$route.query.num.split(",")[18],
        med20_change: this.$route.query.num.split(",")[19],

        med1_actual: null,
        med2_actual: null,
        med3_actual: null,
        med4_actual: null,
        med5_actual: null,
        med6_actual: null,
        med7_actual: null,
        med8_actual: null,
        med9_actual: null,
        med10_actual: null,
        med11_actual: null,
        med12_actual: null,
        med13_actual: null,
        med14_actual: null,
        med15_actual: null,
        med16_actual: null,
        med17_actual: null,
        med18_actual: null,
        med19_actual: null,
        med20_actual: null,
        
        dialog1: false,
        dialog2: false,
        dialog3: false,
        dialog4: false,
        dialog5: false,
        dialog6: false,
        dialog7: false,
        dialog8: false,
        dialog9: false,
        dialog10: false,
        dialog11: false,
        dialog12: false,
        dialog13: false,
        dialog14: false,
        dialog15: false,
        dialog16: false,
        dialog17: false,
        dialog18: false,
        dialog19: false,
        dialog20: false,
        new_num: [],
        remark: null,
        contacts: [],
        loading: false,
        valid: true,
        rules: {
          required: value => !!value || '數量不能為空',
          quantity: value => /(?=.*\d)/.test(value) || '數量只能是一個0~99的數字',
          length: value => value && value.length <= 2 || '數量只能是一個0~99的數字'
        }
        
      }
    },

    async mounted() {
      this.loading = true;
      let record_id = this.$route.query.rNo;
      let pNo = this.$route.query.pNo;

      if(this.$route.query.detect==0){
        await axios.get('/getMedNum', {params:{pNo : pNo, layer : 1, rNo : record_id}})
        .then((resp) => {
        
        for(var i=0; i<20; i++){
          if(resp.data[i].itemName == 'Succinylcholine'){
            this.med1_change = resp.data[i].quantity;
            continue;
          }
          if(resp.data[i].itemName == 'Naloxone'){
            this.med2_change = resp.data[i].quantity;
            continue;
          }
          if(resp.data[i].itemName == 'Lasix'){
            this.med3_change = resp.data[i].quantity;
            continue;
          }
          if(resp.data[i].itemName == 'Solu-cortef'){
            this.med4_change = resp.data[i].quantity;
            continue;
          }
          if(resp.data[i].itemName == 'NTG'){
            this.med5_change = resp.data[i].quantity;
            continue;
          }
          if(resp.data[i].itemName == 'Dobutrex'){
            this.med6_change = resp.data[i].quantity;
            continue;
          }
          if(resp.data[i].itemName == 'Isoptin'){
            this.med7_change = resp.data[i].quantity;
            continue;
          }
          if(resp.data[i].itemName == 'Levophed'){
            this.med8_change = resp.data[i].quantity;
            continue;
          }
          if(resp.data[i].itemName == 'Digoxin'){
            this.med9_change = resp.data[i].quantity;
            continue;
          }
          if(resp.data[i].itemName == 'Dilantin'){
            this.med10_change = resp.data[i].quantity;
            continue;
          }
          if(resp.data[i].itemName == 'Sod.bicarbonate'){
            this.med11_change = resp.data[i].quantity;
            continue;
          }
          if(resp.data[i].itemName == 'Cordarone'){
            this.med12_change = resp.data[i].quantity;
            continue;
          }
          if(resp.data[i].itemName == 'Mag sulfate'){
            this.med13_change = resp.data[i].quantity;
            continue;
          }
          if(resp.data[i].itemName == 'Dopamine'){
            this.med14_change = resp.data[i].quantity;
            continue;
          }
          if(resp.data[i].itemName == 'Cal Gluconate'){
            this.med15_change = resp.data[i].quantity;
            continue;
          }
          if(resp.data[i].itemName == 'Bosmin'){
            this.med16_change = resp.data[i].quantity;
            continue;
          }
          if(resp.data[i].itemName == 'Adenocor'){
            this.med17_change = resp.data[i].quantity;
            continue;
          }
          if(resp.data[i].itemName == 'Atropine'){
            this.med18_change = resp.data[i].quantity;
            continue;
          }
          if(resp.data[i].itemName == 'Lidocaine'){
            this.med19_change = resp.data[i].quantity;
            continue;
          }
          if(resp.data[i].itemName == 'Valium'){
            this.med20_change = resp.data[i].quantity;
            continue;
          }
        }

        this.loading = false;

      }).catch((error) => {
        alert('Database Error ' +error)
      })
      }
      
      await axios.get('/getExactNum', {params:{pNo : pNo, layer : 1}})
      .then((resp) => {
        
        for(var i=0; i<20; i++){
          if(resp.data[i].itemName == 'Succinylcholine'){
            this.med1_actual = resp.data[i].quantity;
            var temp = this.med1_change-this.med1_actual;
            this.$emit("layer_insert",resp.data[i].itemName, this.med1_actual, 1, this.remark)
            if(temp != 0)
              this.$emit("layer_change",resp.data[i].itemName, temp, this.med1_change, this.remark, 1)
            continue;
          }
          if(resp.data[i].itemName == 'Naloxone'){
            this.med2_actual = resp.data[i].quantity;
            temp = this.med2_change-this.med2_actual;
            this.$emit("layer_insert",resp.data[i].itemName, this.med2_actual, 1, this.remark)
            if(temp != 0)
              this.$emit("layer_change",resp.data[i].itemName, temp, this.med2_change, this.remark, 1)
            continue;
          }
          if(resp.data[i].itemName == 'Lasix'){
            this.med3_actual = resp.data[i].quantity;
            temp = this.med3_change-this.med3_actual;
            this.$emit("layer_insert",resp.data[i].itemName, this.med3_actual, 1, this.remark)
            if(temp != 0)
              this.$emit("layer_change",resp.data[i].itemName, temp, this.med3_change, this.remark, 1)
            continue;
          }
          if(resp.data[i].itemName == 'Solu-cortef'){
            this.med4_actual = resp.data[i].quantity;
            temp = this.med4_change-this.med4_actual;
            this.$emit("layer_insert",resp.data[i].itemName, this.med4_actual, 1, this.remark)
            if(temp != 0)
              this.$emit("layer_change",resp.data[i].itemName, temp, this.med4_change, this.remark, 1)
            continue;
          }
          if(resp.data[i].itemName == 'NTG'){
            this.med5_actual = resp.data[i].quantity;
            temp = this.med5_change-this.med5_actual;
            this.$emit("layer_insert",resp.data[i].itemName, this.med5_actual, 1, this.remark)
            if(temp != 0)
              this.$emit("layer_change",resp.data[i].itemName, temp, this.med5_change, this.remark, 1)
            continue;
          }
          if(resp.data[i].itemName == 'Dobutrex'){
            this.med6_actual = resp.data[i].quantity;
            temp = this.med6_change-this.med6_actual;
            this.$emit("layer_insert",resp.data[i].itemName, this.med6_actual, 1, this.remark)
            if(temp != 0)
              this.$emit("layer_change",resp.data[i].itemName, temp, this.med6_change, this.remark, 1)
            continue;
          }
          if(resp.data[i].itemName == 'Isoptin'){
            this.med7_actual = resp.data[i].quantity;
            temp = this.med7_change-this.med7_actual;
            this.$emit("layer_insert",resp.data[i].itemName, this.med7_actual, 1, this.remark)
            if(temp != 0)
              this.$emit("layer_change",resp.data[i].itemName, temp, this.med7_change, this.remark, 1)
            continue;
          }
          if(resp.data[i].itemName == 'Levophed'){
            this.med8_actual = resp.data[i].quantity;
            temp = this.med8_change-this.med8_actual;
            this.$emit("layer_insert",resp.data[i].itemName, this.med8_actual, 1, this.remark)
            if(temp != 0)
              this.$emit("layer_change",resp.data[i].itemName, temp, this.med8_change, this.remark, 1)
            continue;
          }
          if(resp.data[i].itemName == 'Digoxin'){
            this.med9_actual = resp.data[i].quantity;
            temp = this.med9_change-this.med9_actual;
            this.$emit("layer_insert",resp.data[i].itemName, this.med9_actual, 1, this.remark)
            if(temp != 0)
              this.$emit("layer_change",resp.data[i].itemName, temp, this.med9_change, this.remark, 1)
            continue;
          }
          if(resp.data[i].itemName == 'Dilantin'){
            this.med10_actual = resp.data[i].quantity;
            temp = this.med10_change-this.med10_actual;
            this.$emit("layer_insert",resp.data[i].itemName, this.med10_actual, 1, this.remark)
            if(temp != 0)
              this.$emit("layer_change",resp.data[i].itemName, temp, this.med10_change, this.remark, 1)
            continue;
          }
          if(resp.data[i].itemName == 'Sod.bicarbonate'){
            this.med11_actual = resp.data[i].quantity;
            temp = this.med11_change-this.med11_actual;
            this.$emit("layer_insert",resp.data[i].itemName, this.med11_actual, 1, this.remark)
            if(temp != 0)
              this.$emit("layer_change",resp.data[i].itemName, temp, this.med11_change, this.remark, 1)
            continue;
          }
          if(resp.data[i].itemName == 'Cordarone'){
            this.med12_actual = resp.data[i].quantity;
            temp = this.med12_change-this.med12_actual;
            this.$emit("layer_insert",resp.data[i].itemName, this.med12_actual, 1, this.remark)
            if(temp != 0)
              this.$emit("layer_change",resp.data[i].itemName, temp, this.med12_change, this.remark, 1)
            continue;
          }
          if(resp.data[i].itemName == 'Mag sulfate'){
            this.med13_actual = resp.data[i].quantity;
            temp = this.med13_change-this.med13_actual;
            this.$emit("layer_insert",resp.data[i].itemName, this.med13_actual, 1, this.remark)
            if(temp != 0)
              this.$emit("layer_change",resp.data[i].itemName, temp, this.med13_change, this.remark, 1)
            continue;
          }
          if(resp.data[i].itemName == 'Dopamine'){
            this.med14_actual = resp.data[i].quantity;
            temp = this.med14_change-this.med14_actual;
            this.$emit("layer_insert",resp.data[i].itemName, this.med14_actual, 1, this.remark)
            if(temp != 0)
              this.$emit("layer_change",resp.data[i].itemName, temp, this.med14_change, this.remark, 1)
            continue;
          }
          if(resp.data[i].itemName == 'Cal Gluconate'){
            this.med15_actual = resp.data[i].quantity;
            temp = this.med15_change-this.med15_actual;
            this.$emit("layer_insert",resp.data[i].itemName, this.med15_actual, 1, this.remark)
            if(temp != 0)
              this.$emit("layer_change",resp.data[i].itemName, temp, this.med15_change, this.remark, 1)
            continue;
          }
          if(resp.data[i].itemName == 'Bosmin'){
            this.med16_actual = resp.data[i].quantity;
            temp = this.med16_change-this.med16_actual;
            this.$emit("layer_insert",resp.data[i].itemName, this.med16_actual, 1, this.remark)
            if(temp != 0)
              this.$emit("layer_change",resp.data[i].itemName, temp, this.med16_change, this.remark, 1)
            continue;
          }
          if(resp.data[i].itemName == 'Adenocor'){
            this.med17_actual = resp.data[i].quantity;
            temp = this.med17_change-this.med17_actual;
            this.$emit("layer_insert",resp.data[i].itemName, this.med17_actual, 1, this.remark)
            if(temp != 0)
              this.$emit("layer_change",resp.data[i].itemName, temp, this.med17_change, this.remark, 1)
            continue;
          }
          if(resp.data[i].itemName == 'Atropine'){
            this.med18_actual = resp.data[i].quantity;
            temp = this.med18_change-this.med18_actual;
            this.$emit("layer_insert",resp.data[i].itemName, this.med18_actual, 1, this.remark)
            if(temp != 0)
              this.$emit("layer_change",resp.data[i].itemName, temp, this.med18_change, this.remark, 1)
            continue;
          }
          if(resp.data[i].itemName == 'Lidocaine'){
            this.med19_actual = resp.data[i].quantity;
            temp = this.med19_change-this.med19_actual;
            this.$emit("layer_insert",resp.data[i].itemName, this.med19_actual, 1, this.remark)
            if(temp != 0)
              this.$emit("layer_change",resp.data[i].itemName, temp, this.med19_change, this.remark, 1)
            continue;
          }
          if(resp.data[i].itemName == 'Valium'){
            this.med20_actual = resp.data[i].quantity;
            temp = this.med20_change-this.med20_actual;
            this.$emit("layer_insert",resp.data[i].itemName, this.med20_actual, 1, this.remark)
            if(temp != 0)
              this.$emit("layer_change",resp.data[i].itemName, temp, this.med20_change, this.remark, 1)
            continue;
          }
        }

        this.loading = false;

      }).catch((error) => {
        alert('Database Error ' +error)
      })

    },

    watch: {
      dialog1() {
        this.$refs.form.resetValidation()
      },
      dialog2() {
        this.$refs.form.resetValidation()
      },
      dialog3() {
        this.$refs.form.resetValidation()
      },
      dialog4() {
        this.$refs.form.resetValidation()
      },
      dialog5() {
        this.$refs.form.resetValidation()
      },
      dialog6() {
        this.$refs.form.resetValidation()
      },
      dialog7() {
        this.$refs.form.resetValidation()
      },
      dialog8() {
        this.$refs.form.resetValidation()
      },
      dialog9() {
        this.$refs.form.resetValidation()
      },
      dialog10() {
        this.$refs.form.resetValidation()
      },
      dialog11() {
        this.$refs.form.resetValidation()
      },
      dialog12() {
        this.$refs.form.resetValidation()
      },
      dialog13() {
        this.$refs.form.resetValidation()
      },
      dialog14() {
        this.$refs.form.resetValidation()
      },
      dialog15() {
        this.$refs.form.resetValidation()
      },
      dialog16() {
        this.$refs.form.resetValidation()
      },
      dialog17() {
        this.$refs.form.resetValidation()
      },
      dialog18() {
        this.$refs.form.resetValidation()
      },
      dialog19() {
        this.$refs.form.resetValidation()
      },
      dialog20() {
        this.$refs.form.resetValidation()
      }
    },

    methods: {
      
      isEqual1() {
        var temp = parseInt(this.med1_change) - parseInt(this.med1_actual);
        return temp;
      },
      isEqual2() {
        var temp = parseInt(this.med2_change) - parseInt(this.med2_actual);
        return temp;
      },
      isEqual3() {
        var temp = parseInt(this.med3_change) - parseInt(this.med3_actual);
        return temp;
      },
      isEqual4() {
        var temp = parseInt(this.med4_change) - parseInt(this.med4_actual);
        return temp;
      },
      isEqual5() {
        var temp = parseInt(this.med5_change) - parseInt(this.med5_actual);
        return temp;
      },
      isEqual6() {
        var temp = parseInt(this.med6_change) - parseInt(this.med6_actual);
        return temp;
      },
      isEqual7() {
        var temp = parseInt(this.med7_change) - parseInt(this.med7_actual);
        return temp;
      },
      isEqual8() {
        var temp = parseInt(this.med8_change) - parseInt(this.med8_actual);
        return temp;
      },
      isEqual9() {
        var temp = parseInt(this.med9_change) - parseInt(this.med9_actual);
        return temp;
      },
      isEqual10() {
        var temp = parseInt(this.med10_change) - parseInt(this.med10_actual);
        return temp;
      },
      isEqual11() {
        var temp = parseInt(this.med11_change) - parseInt(this.med11_actual);
        return temp;
      },
      isEqual12() {
        var temp = parseInt(this.med12_change) - parseInt(this.med12_actual);
        return temp;
      },
      isEqual13() {
        var temp = parseInt(this.med13_change) - parseInt(this.med13_actual);
        return temp;
      },
      isEqual14() {
        var temp = parseInt(this.med14_change) - parseInt(this.med14_actual);
        return temp;
      },
      isEqual15() {
        var temp = parseInt(this.med15_change) - parseInt(this.med15_actual);
        return temp;
      },
      isEqual16() {
        var temp = parseInt(this.med16_change) - parseInt(this.med16_actual);
        return temp;
      },
      isEqual17() {
        var temp = parseInt(this.med17_change) - parseInt(this.med17_actual);
        return temp;
      },
      isEqual18() {
        var temp = parseInt(this.med18_change) - parseInt(this.med18_actual);
        return temp;
      },
      isEqual19() {
        var temp = parseInt(this.med19_change) - parseInt(this.med19_actual);
        return temp;
      },
      isEqual20() {
        var temp = parseInt(this.med20_change) - parseInt(this.med20_actual);
        return temp;
      },
      save1(){
        this.med1_change = this.new_num[0];
        this.$emit("layer_change", 'Succinylcholine', this.isEqual1(), this.med1_change, this.remark, 1);
        this.new_num[0] = null;
        this.remark = null;
        this.dialog1 = false;
      },
      save2(){
        this.med2_change = this.new_num[1];
        this.$emit("layer_change", 'Naloxone', this.isEqual2(), this.med2_change, this.remark, 1);
        //alert(this.med2_change)
        this.new_num[1] = null;
        this.remark = null;
        this.dialog2 = false;
      },
      save3(){
        this.med3_change = this.new_num[2];
        this.$emit("layer_change", 'Lasix', this.isEqual3(), this.med3_change, this.remark, 1);
        this.new_num[2] = null;
        this.remark = null;
        this.dialog3 = false;
      },
      save4(){
        this.med4_change = this.new_num[3];
        this.$emit("layer_change", 'Solu-cortef', this.isEqual4(), this.med4_change, this.remark, 1);
        this.new_num[3] = null;
        this.remark = null;
        this.dialog4 = false;
      },
      save5(){
        this.med5_change = this.new_num[4];
        this.$emit("layer_change", 'NTG', this.isEqual5(), this.med5_change, this.remark, 1);
        this.new_num[4] = null;
        this.remark = null;
        this.dialog5 = false;
      },
      save6(){
        this.med6_change = this.new_num[5];
        this.$emit("layer_change", 'Dobutrex', this.isEqual6(), this.med6_change, this.remark, 1);
        this.new_num[5] = null;
        this.remark = null;
        this.dialog6 = false;
      },
      save7(){
        this.med7_change = this.new_num[6];
        this.$emit("layer_change", 'Isoptin', this.isEqual7(), this.med7_change, this.remark, 1);
        this.new_num[6] = null;
        this.remark = null;
        this.dialog7 = false;
      },
      save8(){
        this.med8_change = this.new_num[7];
        this.$emit("layer_change", 'Levophed', this.isEqual8(), this.med8_change, this.remark, 1);
        this.new_num[7] = null;
        this.remark = null;
        this.dialog8 = false;
      },
      save9(){
        this.med9_change = this.new_num[8];
        this.$emit("layer_change", 'Digoxin', this.isEqual9(), this.med9_change, this.remark, 1);
        this.new_num[8] = null;
        this.remark = null;
        this.dialog9 = false;
      },
      save10(){
        this.med10_change = this.new_num[9];
        this.$emit("layer_change", 'Dilantin', this.isEqual10(), this.med10_change, this.remark, 1);
        this.new_num[9] = null;
        this.remark = null;
        this.dialog10 = false;
      },
      save11(){
        this.med11_change = this.new_num[10];
        this.$emit("layer_change", 'Sod.bicarbonate', this.isEqual11(), this.med11_change, this.remark, 1);
        this.new_num[10] = null;
        this.remark = null;
        this.dialog11 = false;
      },
      save12(){
        this.med12_change = this.new_num[11];
        this.$emit("layer_change", 'Cordarone', this.isEqual12(), this.med12_change, this.remark, 1);
        this.new_num[11] = null;
        this.remark = null;
        this.dialog12 = false;
      },
      save13(){
        this.med13_change = this.new_num[12];
        this.$emit("layer_change", 'Mag sulfate', this.isEqual13(), this.med13_change, this.remark, 1);
        this.new_num[12] = null;
        this.remark = null;
        this.dialog13 = false;
      },
      save14(){
        this.med14_change = this.new_num[13];
        this.$emit("layer_change", 'Dopamine', this.isEqual14(), this.med14_change, this.remark, 1);
        this.new_num[13] = null;
        this.remark = null;
        this.dialog14 = false;
      },
      save15(){
        this.med15_change = this.new_num[14];
        this.$emit("layer_change", 'Cal Gluconate', this.isEqual15(), this.med15_change, this.remark, 1);
        this.new_num[14] = null;
        this.remark = null;
        this.dialog15 = false;
      },
      save16(){
        this.med16_change = this.new_num[15];
        this.$emit("layer_change", 'Bosmin', this.isEqual16(), this.med16_change, this.remark, 1);
        this.new_num[15] = null;
        this.remark = null;
        this.dialog16 = false;
      },
      save17(){
        this.med17_change = this.new_num[16];
        this.$emit("layer_change", 'Adenocor', this.isEqual17(), this.med17_change, this.remark, 1);
        this.new_num[16] = null;
        this.remark = null;
        this.dialog17 = false;
      },
      save18(){
        this.med18_change = this.new_num[17];
        this.$emit("layer_change", 'Atropine', this.isEqual18(), this.med18_change, this.remark, 1);
        this.new_num[17] = null;
        this.remark = null;
        this.dialog18 = false;
      },
      save19(){
        this.med19_change = this.new_num[18];
        this.$emit("layer_change", 'Lidocaine', this.isEqual19(), this.med19_change, this.remark, 1);
        this.new_num[18] = null;
        this.remark = null;
        this.dialog19 = false;
      },
      save20(){
        this.med20_change = this.new_num[19];
        this.$emit("layer_change", 'Valium', this.isEqual20(), this.med20_change, this.remark, 1);
        this.new_num[19] = null;
        this.remark = null;
        this.dialog20 = false;
      },
    }
  }
</script>