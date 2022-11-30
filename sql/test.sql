SELECT "item"."id" AS "item_id", "item"."name" AS "item_name", "item"."barcode" AS "item_barcode", "item"."importPrice" AS "item_importPrice", "item"."price" AS "item_price", "item"."realPrice" AS "item_realPrice", "item"."weight" AS "item_weight", "item"."avatar" AS "item_avatar", "item"."quantity" AS "item_quantity", "item"."description" AS "item_description", "item"."status" AS "item_status", "item"."created_at" AS "item_created_at", "item"."modified_at" AS "item_modified_at", "item"."categoryId" AS "item_categoryId", "item_flashsale"."id" AS "item_flashsale_id", "item_flashsale"."discount" AS "item_flashsale_discount", "item_flashsale"."quantity" AS "item_flashsale_quantity", "item_flashsale"."flashsaleId" AS "item_flashsale_flashsaleId", "item_flashsale"."itemId" AS "item_flashsale_itemId", "flashsale"."id" AS "flashsale_id", "flashsale"."name" AS "flashsale_name", "flashsale"."description" AS "flashsale_description", "flashsale"."startSale" AS "flashsale_startSale", "flashsale"."endSale" AS "flashsale_endSale", "flashsale"."flashSaleBanner" AS "flashsale_flashSaleBanner", "flashsale"."created_at" AS "flashsale_created_at", "flashsale"."updated_at" AS "flashsale_updated_at" FROM "item" "item" LEFT JOIN "item_flashsale" "item_flashsale" ON "item_flashsale"."itemId"="item"."id"  LEFT JOIN "flashsale" "flashsale" ON "flashsale"."id"="item_flashsale"."flashsaleId"