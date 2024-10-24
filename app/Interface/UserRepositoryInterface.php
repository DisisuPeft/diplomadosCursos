<?php

namespace App\Interface;

interface UserRepositoryInterface
{
    public function register($req, $from);

    public function update($req, $id);

    public function activity($data);
}
