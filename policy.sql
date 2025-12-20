CREATE policy "Reps can only add their own deals"
ON public.sales_deals
FOR insert
TO authenticated
WITH CHECK (
  --id on JWT is the id of the inserted row
  auth.uid() = user_id
  AND EXISTS (
    SELECT 1 FROM user_profiles
    WHERE user_profiles.id = auth.uid()
    AND user_profiles.account_type = 'rep'
  )
  --does row exist in user_profiles with id from JWT & rep account
);


CREATE policy "Admins can add to anyone's deals"
ON public.sales_deals
FOR insert
TO authenticated
WITH CHECK (
 
  EXISTS (
    SELECT 1 FROM user_profiles
    WHERE user_profiles.id = auth.uid()
    AND user_profiles.account_type = 'admin'
  )
  --does row exist in user_profiles with id from JWT & admin account
);