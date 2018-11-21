<?php

namespace App\Http\Controllers;

use App\Http\Requests\ImageRequest;
use Illuminate\Http\Request;

class ImageController extends Controller
{
    public function upload(ImageRequest $request)
    {
       /* if ($request->hasFile('image'))
        {
            $imagename = $request->image->getClientOriginalName();
            $request->image->storeAs('public', $imagename);
            $request->user()->avatar = $imagename;
            $request->user()->save();
        }*/
        $request->user()->avatar = $request->image;
        $request->user()->save();

//        return back();
        return response([null, 200]);
    }

}
