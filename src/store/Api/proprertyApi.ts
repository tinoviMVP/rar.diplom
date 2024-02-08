// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseUrl, xHost, xKey } from '../../utils/baseUrl';

export interface IGetForSaleResponse {
  home_search: {
    count: 50;
    results: [
      {
        branding: [
          {
            name: 'Coldwell Banker Quality Properties';
            photo: null;
            type: 'Office';
          },
        ];
        coming_soon_date: null;
        community: null;
        description: {
          baths: 1;
          baths_1qtr: null;
          baths_3qtr: null;
          baths_full: 1;
          baths_half: null;
          beds: 1;
          garage: null;
          lot_sqft: 57734;
          name: null;
          sold_date: null;
          sold_price: null;
          sqft: number;
          stories: null;
          sub_type: 'condo';
          type: 'condos';
          year_built: 1971;
        };
        flags: {
          is_coming_soon: null;
          is_contingent: null;
          is_foreclosure: null;
          is_new_construction: null;
          is_new_listing: true;
          is_pending: null;
          is_plan: null;
          is_price_reduced: null;
          is_subdivision: null;
        };
        last_update_date: '2022-06-01T17:20:07Z';
        lead_attributes: {
          lead_type: 'co_broke';
          opcity_lead_attributes: {
            cashback_enabled: true;
            flip_the_market_enabled: true;
          };
          ready_connect_mortgage: {
            show_contact_a_lender: false;
            show_veterans_united: false;
          };
          show_contact_an_agent: true;
        };
        list_date: '2022-06-01T23:56:53Z';
        list_price: 750000;
        listing_id: '2943787898';
        location: {
          address: {
            city: 'Santa Monica';
            coordinate: {
              lat: 34.0269;
              lon: -118.514026;
            };
            line: '201 Ocean Ave Unit 1508B';
            postal_code: '90402';
            state: 'California';
            state_code: 'CA';
          };
          county: {
            fips_code: '06037';
            name: 'Los Angeles';
          };
          street_view_url: 'https://maps.googleapis.com/maps/api/streetview?channel=rdc-streetview&client=gme-movesalesinc&location=201%20Ocean%20Ave%20Unit%201508B%2C%20Santa%20Monica%2C%20CA%2090402&size=640x480&source=outdoor&signature=tW5jrWbgo7H6pUGSQZB1pHfhRUo=';
        };
        matterport: false;
        open_houses: null;
        other_listings: {
          rdc: [
            {
              listing_id: '2943787898';
              listing_key: null;
              primary: true;
              status: 'for_sale';
            },
            {
              listing_id: '2922277945';
              listing_key: null;
              primary: null;
              status: 'sold';
            },
            {
              listing_id: '503745608';
              listing_key: null;
              primary: null;
              status: 'off_market';
            },
            {
              listing_id: '557710900';
              listing_key: null;
              primary: null;
              status: 'off_market';
            },
          ];
        };
        permalink: '201-Ocean-Ave-Unit-1508B_Santa-Monica_CA_90402_M14739-96565';
        photos: [
          {
            href: 'https://ap.rdcpix.com/cfe1fd3491131ebaf124805205d26e7al-m2223278038s.jpg';
          },
          {
            href: 'https://ap.rdcpix.com/cfe1fd3491131ebaf124805205d26e7al-m1448892356s.jpg';
          },
        ];
        price_reduced_amount: null;
        primary_photo: {
          href: 'https://ap.rdcpix.com/cfe1fd3491131ebaf124805205d26e7al-m2223278038s.jpg';
        };
        products: {
          brand_name: 'basic_opt_in';
          products: ['core.agent', 'co_broke'];
        };
        property_id: '1473996565';
        source: {
          agents: [
            {
              office_name: null;
            },
          ];
          id: 'WECA';
          plan_id: null;
          spec_id: null;
          type: 'mls';
        };
        status: 'for_sale';
        tags: [
          'central_heat',
          'community_elevator',
          'community_gym',
          'community_security_features',
          'laundry_room',
          'recreation_facilities',
          'view',
          'community_swimming_pool',
          'garage_1_or_more',
          'waterfront',
          'ocean_view',
        ];
        tax_record: {
          public_record_id: 'C8E434E64A2F215C6D98996BD2D8C6E0';
        };
        virtual_tours: null;
      },
    ];
  };
}

export const PropertyApi = createApi({
  reducerPath: 'PropertyApi',
  baseQuery: fetchBaseQuery({
    baseUrl,
    prepareHeaders: (headers) => {
      headers.set('X-RapidAPI-Key', xKey);
      headers.set('X-RapidAPI-Host', xHost);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getForSale: builder.query<IGetForSaleResponse, any>({
      query: (location) => ({
        url: '/forsale',
        params: {
          location,
        },
      }),
    }),
    getForDetails: builder.query<any, any>({
      query: (property_id) => ({
        url: '/property',
        params: {
          property_id,
        },
      }),
    }),
  }),
});

export const { useGetForSaleQuery, useGetForDetailsQuery } = PropertyApi;
